import { z } from 'zod';
import { BlogPostSchema } from '$lib/schemas';
import { t } from '..';

export const blogs = t.router({
	getBlogPosts: t.procedure.output(z.array(BlogPostSchema)).query(async () => {
		return [];
	}),
	saveBlogPost: t.procedure.input(BlogPostSchema).mutation(async ({ input }) => {
		console.log(input);
	})
});
