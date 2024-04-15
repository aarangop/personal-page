<script lang="ts">
	import { PodcastFeedDataSchema } from '$lib/schemas';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { z } from 'zod';

	export let feedData: z.infer<typeof PodcastFeedDataSchema>;
	export let enableEdit: boolean = false;

	export let onClick = () => {};
	export let onEdit = () => {};
</script>

<button class="card p-4 flex flex-col" on:click={onClick}>
	<div class="flex flex-row justify-between items-center space-x-2 mb-2 h-24">
		<Avatar
			class="min-w-20 max-w-20"
			shadow="dropw-shadow-md"
			rounded="rounded-md"
			src={feedData.imgUrl}
		/>
		<div class="flex flex-col p-2 w-full h-full justify-between">
			<h5 class="h5 text-lg font-medium line-clamp-1">
				{feedData.title}
			</h5>
			<span class="mb-2 text-right dark:text-gray-400 text-gray-500">
				{`${feedData.numberOfEpisodes} episodes`}
			</span>
		</div>
	</div>
	<div class="flex flex-col grow">
		<span class="line-clamp-3 text-left mb-2 text-gray-700 dark:text-gray-200"
			>{feedData.description}</span
		>
	</div>
	<div class="flex flex-row">
		{#if enableEdit}
			<button type="button" on:click={onEdit}>Edit</button>
		{/if}
	</div>
</button>
