import type { PageServerLoad } from './$types';
import { BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const load: PageServerLoad = async ({ fetch }) => ({
	posts: await fetch('/api/blogs')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		})
});
