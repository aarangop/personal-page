import { podcastFeedSchema } from '$lib/schemas';
import { createPodcastFeed } from '$lib/server/actions/podcast';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import type { Actions } from './$types';

export const load = async () => {
	const form = await superValidate(zod(podcastFeedSchema));
	return { form };
};

export const actions = {
	createFeed: async ({ request }) => {
		console.log('Creating feed');
		// Validate form with super-form
		const form = await superValidate(request, zod(podcastFeedSchema));
		if (!form.valid) {
			console.log(form.errors);
			return fail(400, { form });
		}
		// Create podcast feed from form data
		const feed = await createPodcastFeed(form.data);
		// Redirect to feed page
		throw redirect(303, `/podcast/${feed.slug}`);
	},
	updateFeed: async ({ request, fetch }) =>
		await fetch('/api/podcasts', { method: 'PUT', body: await request.formData() })
			.then((response) => response.json())
			.then((data) => {
				throw redirect(303, `/podcast/${data.slug}`);
			})
} satisfies Actions;
