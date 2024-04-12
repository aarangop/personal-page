import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';

export const actions = {
	saveNewFeed: async ({ request }) => {
		const data = await request.formData();
		const podcastName = data.get('podcast_slug');
		const podcastFeed = data.get('rss_feed');
		if (!podcastName) {
			return fail(400, { podcastName, missing: true });
		}
		if (!podcastFeed) {
			return fail(400, { podcastFeed, missing: true });
		}
		await prisma.podcastFeeds.create({
			data: {
				slug: data.get('podcast_slug')!.toString(),
				rssFeed: data.get('rss_feed')!.toString()
			}
		});
		throw redirect(303, '/admin/podcast');
	}
} satisfies Actions;
