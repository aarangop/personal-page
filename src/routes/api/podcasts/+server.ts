import prisma from '$lib/prisma';
import { PodcastLinkSchema } from '$lib/schemas';
import logger from '$lib/server/logging';
import { error, json } from '@sveltejs/kit';
import { z } from 'zod';

export const PUT = async ({ request }) => {
	const log = logger.child({ name: 'api/podcasts PUT' });
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

	const spotifyUrl = data.get('spotify_link');
	let updateQuery: any = {
		slug: slug!.toString(),
		rssFeed: feed!.toString()
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
	try {
		const result = await prisma.podcastFeed.update({
			where: {
				id: id!.toString()
			},
			data: updateQuery
		});
		log.info('Podcast feed updated', result);
		return json(result);
	} catch (e) {
		log.error(e);
		return json(e);
	}
};
