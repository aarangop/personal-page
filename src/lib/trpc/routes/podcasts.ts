import { PodcastFeedDataSchema } from '$lib/schemas';
import { z } from 'zod';
import prisma from '$lib/prisma';
import { XMLParser } from 'fast-xml-parser';
import { t } from '..';

export const podcasts = t.router({
	podcastFeeds: t.procedure.output(z.array(PodcastFeedDataSchema)).query(async () => {
		const response = await prisma.podcastFeeds.findMany({});
		const fetchFeedDataPromises = response.map(async (feedMetaData) => {
			return await fetch(feedMetaData.rssFeed)
				.then((res) => res.text())
				.then((str) => {
					const parser = new XMLParser({
						ignoreAttributes: false
					});
					let feed = parser.parse(str);
					let name = feed.rss.channel.title;
					if (!name) {
						name = 'Unknown';
					}
					let imgUrl = feed.rss.channel.image?.url;
					if (!imgUrl) {
						imgUrl = 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif';
					}
					let numberOfEpisodes = feed.rss.channel.item.length;
					let description = feed.rss.channel.description;
					return PodcastFeedDataSchema.parse({
						...feedMetaData,
						title: name,
						imgUrl,
						description,
						numberOfEpisodes
					});
				});
		});
		return await Promise.all(fetchFeedDataPromises);
	})
});
