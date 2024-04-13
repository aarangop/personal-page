// @ts-nocheck
import { createContext } from '$lib/trpc/context';
import { createCaller } from '$lib/trpc/router';
import type { PageServerLoad } from './$types';

export const load = async (event: Parameters<PageServerLoad>[0]) => ({
	podcastFeeds: await createCaller(await createContext(event)).podcasts.podcastFeeds()
});
