import type { Actions } from './$types';

export const actions = {
	saveBlogPost: async ({ fetch, request }) =>
		await fetch('/api/blog', {
			method: 'POST',
			body: await request.formData()
		}).then()
} satisfies Actions;
