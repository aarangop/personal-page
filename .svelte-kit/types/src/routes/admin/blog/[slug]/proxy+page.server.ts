// @ts-nocheck
import type { z } from 'zod';
import type { PageServerLoad } from './$types';
import { getBlogPosts, getBlogPostBySlug } from '$lib/server/actions/blogs';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => ({
	post: await getBlogPostBySlug(params.slug as string)
});
