import prisma from '$lib/prisma';
import { PodcastFeedDataSchema } from '$lib/schemas';
import { json } from '@sveltejs/kit';
import { XMLParser } from 'fast-xml-parser';

export async function GET() {
	const response = await prisma.podcastFeed.findMany({});
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
	const podcasts = await Promise.all(fetchFeedDataPromises);
	return json(podcasts);
}

export async function POST({ request }) {
	const data = await request.formData();
	const id = data.get('podcast_id');
	if (!id) {
		throw Error('Invalid podcast id!');
	}
	const slug = data.get('podcast_slug');
	if (!slug) {
		throw Error('Invalid slug');
	}
	const feed = data.get('rss_feed');
	if (!feed) {
		throw Error('Invalid feed');
	}
	const result = await prisma.podcastFeed.update({
		where: { id: id!.toString() },
		data: {
			slug: slug!.toString(),
			rssFeed: feed!.toString()
		}
	});
	return json(result);
}
