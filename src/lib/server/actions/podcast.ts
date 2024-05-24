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

export const updatePodcastFeed = async (id: string, data: PodcastFeedSchema) => {};
