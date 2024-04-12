<script lang="ts">
	import PodcastFeedForm from '$lib/components/PodcastFeedForm.svelte';
	import { Card } from 'flowbite-svelte';

	export let data;
	let podcastId = data.id;
</script>

<section class="flex flex-col grow lg:px-24 px-12 py-4 items-center">
	<Card class="min-w-128 grow flex justify-center">
		<h1 class="font-serif text-2xl mb-4 text-gray-950 dark:text-white">Edit Podcast Feed</h1>
		<PodcastFeedForm {...data} bind:podcastId deleteAction="deleteFeed" submitFormAction="saveFeed"
		></PodcastFeedForm>
	</Card>
</section>
