import prisma from '$lib/prisma';
import { PodcastFeedDataSchema } from '$lib/schemas';
import { Prisma } from '@prisma/client';
import { XMLParser } from 'fast-xml-parser';
import { z } from 'zod';

export const getPodcastFeeds = async (query: Prisma.PodcastFeedWhereInput = {}) => {
	const feeds = await prisma.podcastFeed.findMany({ where: query });
	return feeds;
};

export const getPodcastFeedsWithMetaData = async (query: Prisma.PodcastFeedWhereInput = {}) => {
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
