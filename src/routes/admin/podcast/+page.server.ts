import { getPodcastFeedsWithMetaData } from '$lib/server/actions/podcast';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	podcastFeeds: await getPodcastFeedsWithMetaData()
});
