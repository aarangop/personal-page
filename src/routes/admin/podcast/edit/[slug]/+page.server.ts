import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const feedData = await prisma.podcastFeeds.findUnique({ where: { slug: params.slug } });
	return {
		...feedData,
		podcastId: feedData?.id
	};
};

export const actions = {
	saveFeed: async ({ request }) => {
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
		const result = await prisma.podcastFeeds.update({
			where: { id: id!.toString() },
			data: {
				slug: slug!.toString(),
				rssFeed: feed!.toString()
			}
		});
		redirect(303, `/admin/podcast`);
	},
	deleteFeed: async ({ request }) => {
		const data = await request.formData();
		console.log('Deleting feed');
		const id = data.get('podcast_id');
		if (!id) {
			throw Error('Invalid podcast id');
		}
		const result = await prisma.podcastFeeds.delete({
			where: { id: id!.toString() }
		});
		redirect(303, '/admin/podcast');
		return result;
	}
} satisfies Actions;
