<script lang="ts">
	import { goto } from '$app/navigation';
	import { Avatar, Button, Card } from 'flowbite-svelte';
	export let imgUrl: string;
	export let episodes: {}[];
	export let description: string;
	export let slug: string;
	export let title: string;
	export let enableEdit: boolean = false;
	export let onClick = () => {};
</script>

<div>
	<Card class="cursor-pointer" on:click={onClick}>
		<div class="flex flex-row justify-between items-center space-x-2">
			<Avatar size="lg" class="mb-2" src={imgUrl} />
			<div class="flex flex-col">
				<h5 class="text-xl font-medium text-gray-950 dark:text-white">{title}</h5>
				<span class="flex flex-row space-x-2 mb-2 text-gray-950 dark:text-gray-50">
					{`${episodes.length} episodes`}
				</span>
			</div>
		</div>
		<div class="flex flex-col grow">
			<span class="line-clamp-3 mb-2 text-gray-700 dark:text-gray-200">{description}</span>
		</div>
		<div class="flex flex-row">
			{#if enableEdit}
				<Button on:click={() => goto(`/admin/podcast/edit/${slug}`)}>Edit</Button>
			{/if}
		</div>
	</Card>
</div>
