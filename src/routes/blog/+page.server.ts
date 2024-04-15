import type { PageServerLoad } from './$types';
import { BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const load: PageServerLoad = async ({ fetch }) => ({
	posts: await fetch('/api/blogs').then(async (response) => {
		const data = await response.json();
		return z.array(BlogPostSchema).parse(data);
	})
});
