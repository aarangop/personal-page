// @ts-nocheck
import { getBlogPosts } from '$lib/server/actions/blogs';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => ({
	blogPosts: await getBlogPosts()
});
