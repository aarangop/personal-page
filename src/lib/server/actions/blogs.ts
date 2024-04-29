import prisma from '$lib/prisma';
import { BlogPostDisplaySchema, BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const getBlogEntries = async () => {
	const entries = await prisma.blogPost.findMany();
	return z.array(BlogPostSchema).parse(entries);
};

export const createBlogEntry = async (data: z.infer<typeof BlogPostSchema>) => {
	const entry = await prisma.blogPost.create({ data });
	return BlogPostSchema.parse(entry);
};
