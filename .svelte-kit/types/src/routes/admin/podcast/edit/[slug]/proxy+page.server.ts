// @ts-nocheck
import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	const feedData = await prisma.podcastFeeds.findUnique({ where: { slug: params.slug } });
	return {
		...feedData,
		podcastId: feedData?.id
	};
};

export const actions = {
	saveFeed: async ({ fetch, request }) =>
		await fetch('/api/podcast', {
			method: 'POST',
			body: await request.formData()
		}).then(async (data) => {
			const res = await data.json();
			redirect(303, `/admin/podcast/${res.slug}`);
		}),
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
