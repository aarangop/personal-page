<script lang="ts">
	import { goto } from '$app/navigation';
	import { Avatar, Button, Card } from 'flowbite-svelte';
	import { PodcastFeedDataSchema } from '$lib/schemas';
	import { z } from 'zod';
	export let feedData: z.infer<typeof PodcastFeedDataSchema>;
	export let enableEdit: boolean = false;
	export let onClick = () => {};
</script>

<div>
	<Card class="cursor-pointer" on:click={onClick}>
		<div class="flex flex-row justify-between items-center space-x-2">
			<Avatar size="lg" class="mb-2" src={feedData.imgUrl} />
			<div class="flex flex-col">
				<h5 class="text-xl font-medium text-gray-950 dark:text-white">{feedData.title}</h5>
				<span class="flex flex-row space-x-2 mb-2 text-gray-950 dark:text-gray-50">
					{`${feedData.numberOfEpisodes} episodes`}
				</span>
			</div>
		</div>
		<div class="flex flex-col grow">
			<span class="line-clamp-3 mb-2 text-gray-700 dark:text-gray-200">{feedData.description}</span>
		</div>
		<div class="flex flex-row">
			{#if enableEdit}
				<Button on:click={() => goto(`/admin/podcast/edit/${feedData.slug}`)}>Edit</Button>
			{/if}
		</div>
	</Card>
</div>
