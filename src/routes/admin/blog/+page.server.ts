import { getBlogPosts } from '$lib/server/actions/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	blogPosts: await getBlogPosts()
});
