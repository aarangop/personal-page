// @ts-nocheck
import { getBlogPosts } from '$lib/server/actions/blog';
import type { PageServerLoad } from './$types';

export const load = async () => ({
	blogPosts: await getBlogPosts()
});
;null as any as PageServerLoad;