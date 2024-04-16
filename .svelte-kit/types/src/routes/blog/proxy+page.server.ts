// @ts-nocheck
import type { PageServerLoad } from './$types';
import { BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => ({
	posts: await fetch('/api/blogs')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		})
});
