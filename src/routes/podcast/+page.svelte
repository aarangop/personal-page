<script lang="ts">
	import type { PageData } from './$types';
	import PodcastCard from '$lib/components/PodcastCard.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const onPodcastClick = (slug: string) => {
		goto(`/podcast/${slug}`);
	};
</script>

<svelte:head>
	<title>Podcasts</title>
</svelte:head>

<section class="flex flex-col">
	<h2 class="h2 mb-4 dark:text-white text-2xl">My Podcasts</h2>
	<div class="flex flex-col space-y-2 grow">
		<div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
			{#if data.podcastFeeds.length > 0}
				{#each data.podcastFeeds as feed}
					<PodcastCard enableEdit={false} onClick={() => onPodcastClick(feed.slug)} feedData={feed}
						>{feed.slug}</PodcastCard
					>
				{/each}
			{/if}
		</div>
	</div>
</section>
