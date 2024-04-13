<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	const onClick = () => {
		goto('/admin/podcast/new-feed');
	};
</script>

<section class="px-16 py-4 flex flex-col space-y-4 grow">
	<h1 class="font-serif text-2xl grow-0">Podcasts admin page</h1>
	<div class="flex flex-col space-y-2 grow">
		<div class="flex flex-col grow">
			<!-- {#if data.blogPosts.length == 0}
				<div class="">No podcast feeds!</div>
			{:else}
				<div class="grid lg:grid-cols-3 gap-2">
					{#each data.podcastFeeds as feed}
						<PodcastCard enableEdit={true} feedData={feed} />
					{/each}
				</div>
			{/if} -->
		</div>
		<div>
			<Button on:click={onClick}>Add Podcast Feed</Button>
		</div>
	</div>
</section>
