// @ts-nocheck
import { getBlogPosts } from '$lib/server/actions/blogs';
import type { PageServerLoad } from './$types';

export const load = async () => ({ posts: await getBlogPosts() });
;null as any as PageServerLoad;