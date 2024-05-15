import prisma from '$lib/prisma';
import { PodcastFeedDataSchema, podcastFeedSchema, PodcastLinkSchema } from '$lib/schemas';
import { Prisma } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';
import { z } from 'zod';
import logger from '../logging';
import { error, json, type RequestEvent } from '@sveltejs/kit';

/**
 * Returns a list of podcast feeds from the database.
 * @param query
 * @returns List of podcast feeds matched by the query.
 */
export const getPodcastFeeds = async (query: Prisma.PodcastFeedWhereInput = {}) => {
	const feeds = await prisma.podcastFeed.findMany({ where: query });
	return feeds;
};
/**
 * Returns podcast feed metadata fetched from the RSS feed associated to each podcast feed object from the database
 * @param query
 * @returns
 */
export const getPodcastFeedMetaData = async (query: Prisma.PodcastFeedWhereInput = {}) => {
	const feeds = await getPodcastFeeds(query);

	const promises = feeds.map(async (feed) => {
		const rss = await fetch(feed.rssFeed);
		const rssText = await rss.text();
		const parser = new XMLParser({
			ignoreAttributes: false
		});
		let feedData = parser.parse(rssText);
		let title = feedData.rss.channel.title;
		if (!title) {
			title = 'Unknown';
		}
		let imgUrl = feedData.rss.channel.image?.url;
		let numberOfEpisodes = feedData.rss.channel.item.length;
		let description = feedData.rss.channel.description;
		return PodcastFeedDataSchema.parse({
			...feed,
			title,
			imgUrl,
			description,
			numberOfEpisodes
		});
	});
	const feedData = await Promise.all(promises);
	return z.array(PodcastFeedDataSchema).parse(feedData);
};

export const validatePodcastFeedFormData = async (data: FormData) => {
	const slug = data.get('podcast_slug');
	if (!slug) {
		throw error(400, { message: 'Invalid slug' });
	}
	const feed = data.get('rss_feed');
	if (!feed) {
		throw error(400, { message: 'Invalid feed' });
	}
};

export const getPodcastFeedDataFromFormData = (data: FormData) => {
	validatePodcastFeedFormData(data);
	const spotifyUrl = data.get('spotify_link');
	let links: z.infer<typeof PodcastLinkSchema>[] = [];
	if (spotifyUrl) {
		links = z.array(PodcastLinkSchema).parse([
			{
				platform: 'Spotify',
				url: spotifyUrl
			}
		]);
	}
	return {
		slug: data.get('podcast_slug')!.toString(),
		rssFeed: data.get('rss_feed')!.toString(),
		links
	};
};

export const createPodcastFeedFromFormData = async (data: FormData) => {
	const podcastFeedData = getPodcastFeedDataFromFormData(data);
	return await createPodcastFeed(podcastFeedData);
};
export const createPodcastFeed = async (podcastFeedData: z.infer<typeof podcastFeedSchema>) => {
	try {
		const result = await prisma.podcastFeed.create({
			data: {
				slug: podcastFeedData.slug,
				rssFeed: podcastFeedData.rssFeed,
				links: {
					create: podcastFeedData.links
				}
			}
		});
		return result;
	} catch (e) {
		throw Error('Failed to create podcast feed');
	}
};
