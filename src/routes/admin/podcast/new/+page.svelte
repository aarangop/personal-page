<script lang="ts">
	import PodcastFeedForm from '$lib/components/PodcastFeedForm.svelte';
</script>

<section class="flex flex-col py-4 items-center">
	<h1 class="font-serif flex-1 text-2xl mb-4">New Podcast Feed</h1>
	<div class="card flex justify-center w-full">
		<PodcastFeedForm submitFormAction="saveFeed"></PodcastFeedForm>
	</div>
</section>
