// @ts-nocheck
import { fetchPodcastFeeds } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load = async () => {
	const res = await fetchPodcastFeeds();
	const feeds = await res.json();
	return feeds;
};
;null as any as PageServerLoad;