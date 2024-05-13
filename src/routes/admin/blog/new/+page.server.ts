import { createNewBlogPost } from '$lib/server/actions/blog';
import type { Actions } from './$types';

export const actions = {
	default: async (event) => await createNewBlogPost(event, '/admin/blog/:slug')
} satisfies Actions;
