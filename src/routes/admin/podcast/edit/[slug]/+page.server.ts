import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { podcastFeedSchema } from '$lib/schemas';
import { updatePodcastFeed } from '$lib/server/actions/podcast';

export const load: PageServerLoad = async ({ params }) => {
	const feedData = await prisma.podcastFeed.findUnique({ where: { slug: params.slug } });
	const form = await superValidate(feedData, zod(podcastFeedSchema));
	return { form };
};

export const actions = {
	saveFeed: async ({ fetch, request }) => {
		const form = await superValidate(request, zod(podcastFeedSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		const feed = await updatePodcastFeed(form.data);
		return redirect(303, `/admin/podcast`);
	},
	deleteFeed: async ({ request }) => {}
} satisfies Actions;
