import prisma from '$lib/prisma';
import {
	PodcastFeedDataSchema,
	podcastFeedSchema,
	PodcastLinkSchema,
	type PodcastFeedSchema
} from '$lib/schemas';
import { Prisma } from '@prisma/client';
import { error } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';
import { z } from 'zod';
import logger from '../logging';

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

export const createPodcastFeed = async (podcastFeedData: PodcastFeedSchema) => {
	try {
		const result = await prisma.podcastFeed.create({
			data: {
				title: podcastFeedData.title,
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

export const updatePodcastFeed = async (data: PodcastFeedSchema) => {
	const id = data.id;
	if (!id) {
		throw error(400, 'Podcast feed ID is required');
	}
	const log = logger.child({ name: 'api/podcasts PUT' });

	const spotifyUrl = data.links?.find((link) => link.platform === 'Spotify')?.url;

	let updateQuery: any = {
		slug: data.slug,
		rssFeed: data.rssFeed
	};
	if (spotifyUrl) {
		updateQuery = {
			...updateQuery,
			links: {
				deleteMany: {},
				create: { platform: 'Spotify', url: spotifyUrl.toString() }
			}
		};
	}
	const result = await prisma.podcastFeed.update({
		where: {
			id: id!.toString()
		},
		data: updateQuery
	});
	log.info('Podcast feed updated', result);
	return result;
};
