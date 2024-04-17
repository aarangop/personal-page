// @ts-nocheck
import type { z } from 'zod';
import type { PageServerLoad } from './$types';
import type { BlogPostDisplaySchema } from '$lib/schemas';

export const load = async ({ params, fetch }: Parameters<PageServerLoad>[0]) => ({
	blogPost: await fetch(`/api/blogs/${params.slug}`)
		.then((response) => response.json())
		.then((blogPost) => blogPost as z.infer<typeof BlogPostDisplaySchema>)
});
