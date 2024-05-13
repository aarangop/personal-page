<script lang="ts">
	import type { PageData } from './$types';
	import PodcastCard from '$lib/components/podcast/PodcastCard.svelte';
	import { goto } from '$app/navigation';
	import ReaderLayout from '$lib/components/ReaderLayout.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Podcasts</title>
</svelte:head>

<ReaderLayout>
	<section class="flex flex-col">
		<h2 class="h2 mb-4 dark:text-white text-2xl">My Podcasts</h2>
		<div class="flex flex-col space-y-2 grow">
			<div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">
				{#if data.podcastFeeds.length > 0}
					{#each data.podcastFeeds as feed}
						<PodcastCard enableEdit={false} feedData={feed}>{feed.slug}</PodcastCard>
					{/each}
				{/if}
			</div>
		</div>
	</section>
</ReaderLayout>
