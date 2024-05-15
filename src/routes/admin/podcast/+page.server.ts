<<<<<<< HEAD
import { getPodcastFeedMetaData } from '$lib/server/actions/podcast';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	podcastFeeds: await getPodcastFeedMetaData()
=======
import { getPodcastFeedsWithMetaData } from '$lib/server/actions/podcast';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => ({
	podcastFeeds: await getPodcastFeedsWithMetaData()
>>>>>>> ec34272 (Refactor podcast and admin/podcast to actions. Amended.)
});
