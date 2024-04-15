// @ts-nocheck
import type { PageServerLoad } from './$types';
import { BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => ({
	posts: await fetch('/api/blogs').then(async (response) => {
		const data = await response.json();
		return z.array(BlogPostSchema).parse(data);
	})
});