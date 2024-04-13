import { createContext } from '$lib/trpc/context';
import { createCaller } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => ({
	blogPosts: await createCaller(await createContext(event)).blogs.getBlogPosts()
});
