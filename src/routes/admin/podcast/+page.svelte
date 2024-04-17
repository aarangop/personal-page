<script lang="ts">
	import { goto } from '$app/navigation';
	import PodcastCard from '$lib/components/PodcastCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const onClick = () => {
		goto('/admin/podcast/new');
	};
</script>

<section class="px-16 py-4 flex flex-col space-y-4 grow">
	<h1 class="font-serif text-2xl grow-0">Podcasts admin page</h1>
	<div class="flex flex-col space-y-2 grow">
		<div class="flex flex-col grow">
			{#if data.podcastFeeds.length == 0}
				<div class="">No podcast feeds!</div>
			{:else}
				<div class="grid lg:grid-cols-3 gap-2">
					{#each data.podcastFeeds as feed}
						<PodcastCard enableEdit={true} feedData={feed} />
					{/each}
				</div>
			{/if}
		</div>
		<div>
			<button class="btn variant-filled" on:click={onClick}>Add Podcast Feed</button>
		</div>
	</div>
</section>
