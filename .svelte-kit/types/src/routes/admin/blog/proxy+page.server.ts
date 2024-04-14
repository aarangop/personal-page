// @ts-nocheck
import { createContext } from '$lib/server/trpc/context';
import { createCaller } from '$lib/server/trpc/router';
import type { PageServerLoad } from './$types';

export const load = async (event: Parameters<PageServerLoad>[0]) => ({
	blogPosts: await createCaller(await createContext(event)).blogs.getBlogPosts()
});
