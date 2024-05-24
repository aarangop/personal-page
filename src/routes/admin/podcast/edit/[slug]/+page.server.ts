import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { podcastFeedSchema } from '$lib/schemas';

export const load: PageServerLoad = async ({ params }) => {
	const feedData = await prisma.podcastFeed.findUnique({ where: { slug: params.slug } });
	const form = await superValidate(feedData, zod(podcastFeedSchema));
	return { form };
};

export const actions = {
	saveFeed: async ({ fetch, request }) => {},
	deleteFeed: async ({ request }) => {}
} satisfies Actions;
