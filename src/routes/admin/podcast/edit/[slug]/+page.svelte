<script lang="ts">
	import ReaderLayout from '$lib/components/ReaderLayout.svelte';
	import PodcastFeedForm from '$lib/components/podcast/PodcastFeedForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<ReaderLayout>
	<section class="flex flex-col items-center w-full">
		<h2 class="h2 mb-2">New Podcast Feed</h2>
		<div class="card flex justify-center w-full">
			<PodcastFeedForm data={data.form} deleteAction="deleteFeed" submitFormAction="saveFeed"
			></PodcastFeedForm>
		</div>
	</section>
</ReaderLayout>
