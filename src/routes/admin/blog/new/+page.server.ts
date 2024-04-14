import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	saveBlogPost: async ({ fetch, request }) =>
		await fetch('/api/blog', {
			method: 'POST',
			body: await request.formData()
		}).then(async (data) => {
			const res = await data.json();
			throw redirect(303, `/admin/blog/${res.slug}`);
		})
} satisfies Actions;
