import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => ({
	podcastFeeds: await fetch('/api/podcasts')
		.then((res) => res.json())
		.then((data) => data)
});
