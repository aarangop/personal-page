import { getBlogPosts } from '$lib/server/actions/blogs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => ({
	blogPosts: await getBlogPosts()
});
