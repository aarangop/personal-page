<script lang="ts">
	import type { PageData } from './$types';
	import PodcastCard from '$lib/components/PodcastCard.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const onPodcastClick = (slug: string) => {
		goto(`/podcast/${slug}`);
	};
</script>

<section class="flex flex-col p-8">
	<h2 class="font-serif mb-4 dark:text-white text-2xl">My Podcasts</h2>
	<div class="flex flex-col space-y-2 grow">
		<div class="grid lg:grid-cols-3 gap-2">
			{#each data.podcastFeeds as feed}
				<PodcastCard enableEdit={false} onClick={() => onPodcastClick(feed.slug)} feedData={feed}
					>{feed.slug}</PodcastCard
				>
			{/each}
		</div>
	</div>
</section>
