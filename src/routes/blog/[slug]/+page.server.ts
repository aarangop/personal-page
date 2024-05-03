import { getBlogPostBySlug } from '$lib/server/actions/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => ({
	blogPost: await getBlogPostBySlug(params.slug)
});
