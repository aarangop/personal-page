import { json, redirect, type RequestEvent } from '@sveltejs/kit';
import type { Actions } from './$types';
import {
	createPodcastFeed,
	createPodcastFeedFromFormData,
	getPodcastFeedDataFromFormData
} from '$lib/server/actions/podcast';

export const actions = {
	createFeed: async (event: RequestEvent) => {
		const feed = await createPodcastFeedFromFormData(await event.request.formData()).catch(
			(error) => {
				throw error(...error);
			}
		);
		throw redirect(303, `/podcast/${feed.slug}`);
	},
	updateFeed: async ({ request, fetch }) =>
		await fetch('/api/podcasts', { method: 'PUT', body: await request.formData() })
			.then((response) => response.json())
			.then((data) => {
				throw redirect(303, `/podcast/${data.slug}`);
			})
} satisfies Actions;
