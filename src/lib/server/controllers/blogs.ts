import prisma from '$lib/prisma';
import { BlogPostDisplaySchema, BlogPostSchema } from '$lib/schemas';
import { z } from 'zod';

export const getBlogEntries = async () => {
	const entries = await prisma.blogPost.findMany();
	return z.array(BlogPostSchema).parse(entries);
};
