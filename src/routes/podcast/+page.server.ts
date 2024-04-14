import { fetchPodcastFeeds } from '$lib/api';
import { trpc } from '$lib/server/trpc/client';
import { createContext } from '$lib/server/trpc/context';
import { createCaller } from '$lib/server/trpc/router';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => ({
	podcastFeeds: await createCaller(await createContext(event)).podcasts.podcastFeeds()
});
