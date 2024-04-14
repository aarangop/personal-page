// @ts-nocheck
import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = async () => ({
	blogPosts: await prisma.blogPost.findMany()
});
;null as any as PageServerLoad;