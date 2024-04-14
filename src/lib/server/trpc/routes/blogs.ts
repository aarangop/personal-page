import { z } from 'zod';
import { BlogPostSchema } from '$lib/schemas';
import { t } from '..';

export const blogs = t.router({
	getBlogPosts: t.procedure.output(z.array(BlogPostSchema)).query(async () => {
		return [];
	}),
	saveBlogPost: t.procedure
		.input(
			z.object({
				title: z.string(),
				subtitle: z.string(),
				image: z.instanceof(File),
				file: z.instanceof(File)
			})
		)
		.mutation(async (opts) => {
			console.log(opts);
		})
});
