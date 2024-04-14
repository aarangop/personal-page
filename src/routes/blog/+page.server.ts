import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	blogPosts: await prisma.blogPost.findMany()
});
