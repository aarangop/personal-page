<script lang="ts">
	import PodcastFeedForm from '$lib/components/PodcastFeedForm.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<section class="flex flex-col grow lg:px-24 px-12 py-4 items-center">
	<Card class="min-w-128 grow flex justify-center">
		<h1 class="font-serif text-2xl mb-4 text-gray-950 dark:text-white">New Podcast Feed</h1>
		<PodcastFeedForm submitFormAction="saveNewFeed"></PodcastFeedForm>
	</Card>
</section>
