import { XMLParser } from 'fast-xml-parser';
import prisma from './prisma';
import { json } from '@sveltejs/kit';

export const fetchPodcastFeeds = async () => {
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
				let episodes = feed.rss.channel.item;
				let description = feed.rss.channel.description;
				return {
					title: name,
					imgUrl,
					episodes,
					description,
					slug: feedMetaData.slug
				};
			});
	});
	const feedData = await Promise.all(fetchFeedDataPromises);
	return json({ podcastFeeds: feedData });
};
