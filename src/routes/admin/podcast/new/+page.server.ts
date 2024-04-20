import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	createFeed: async ({ request, fetch }) =>
		await fetch('/api/podcasts', { method: 'POST', body: await request.formData() })
			.then((response) => response.json())
			.then((data) => {
				throw redirect(303, `/podcast/${data.slug}`);
			}),
	updateFeed: async ({ request, fetch }) =>
		await fetch('/api/podcasts', { method: 'PUT', body: await request.formData() })
			.then((response) => response.json())
			.then((data) => {
				throw redirect(303, `/podcast/${data.slug}`);
			})
} satisfies Actions;
