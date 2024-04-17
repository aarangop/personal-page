// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => ({
	podcastFeeds: await fetch('/api/podcasts')
		.then((res) => res.json())
		.then((data) => data)
});
