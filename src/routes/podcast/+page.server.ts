import { fetchPodcastFeeds } from '$lib/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const res = await fetchPodcastFeeds();
	const feeds = await res.json();
	return feeds;
};
