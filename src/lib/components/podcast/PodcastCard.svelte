<script lang="ts">
	import { PodcastFeedDataSchema } from '$lib/schemas';
	import Icon from '@iconify/svelte';
	import { z } from 'zod';

	export let feedData: z.infer<typeof PodcastFeedDataSchema>;
	export let enableEdit: boolean = false;
</script>

<div class="card p-4 flex flex-col backdrop-blur-sm" data-testid="podcast-feed-card">
	<div class="flex flex-row justify-between items-center space-x-2 mb-2 h-24">
		<div class="flex flex-col p-2 w-full h-full justify-between">
			<h5 class="h5 text-lg font-medium line-clamp-1">
				{feedData.title}
			</h5>
			<span class="dark:text-gray-400 text-gray-500">
				{`${feedData.numberOfEpisodes} episodes`}
			</span>
		</div>
		<img
			class="min-w-20 max-w-20 drop-shadow-sm rounded-lg object-cover"
			src={feedData.imgUrl}
			alt="podcast feed"
		/>
	</div>
	<div class="flex flex-col grow mb-4">
		<span class="line-clamp-3 text-left text-gray-700 dark:text-gray-200"
			>{feedData.description}</span
		>
	</div>
	<div class="justify-end flex">
		<div class="btn-group variant-soft">
			<a href={`/podcast/${feedData.slug}`}>
				<Icon icon="ph:arrow-up-right" />
			</a>
			{#if feedData.links}
				<a class="btn variant-filled" href={feedData.links[0].url}>
					<span><Icon icon="ant-design:spotify-filled" /></span>
					<span>Listen on Spotify</span>
				</a>
			{/if}
			{#if enableEdit}
				<a data-testid="edit-button" href={`/admin/podcast/edit/${feedData.slug}`}>Edit</a>
			{/if}
		</div>
	</div>
</div>
