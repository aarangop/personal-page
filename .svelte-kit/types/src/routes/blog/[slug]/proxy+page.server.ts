// @ts-nocheck
import { getBlogPostBySlug } from '$lib/server/actions/blog';
import type { PageServerLoad } from './$types';

export const load = async ({ params, fetch }: Parameters<PageServerLoad>[0]) => ({
	blogPost: await getBlogPostBySlug(params.slug)
});
