// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => ({
	blogPosts: await fetch('/api/blogs')
		.then((response) => response.json())
		.then((data) => data)
});
