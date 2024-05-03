import type { z } from 'zod';
import type { PageServerLoad } from './$types';
import { getBlogPosts, getBlogPostBySlug } from '$lib/server/actions/blogs';

export const load: PageServerLoad = async ({ params }) => ({
	post: await getBlogPostBySlug(params.slug as string)
});
