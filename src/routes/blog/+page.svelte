<script lang="ts">
	import ReaderLayout from '$lib/components/ReaderLayout.svelte';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex flex-col flex-1">
	<h2 class="h2 text-2xl mb-2">My Blog</h2>
	<div class="flex flex-col space-y-2">
		{#each data.posts as post}
			<BlogCard blogPost={post}></BlogCard>
		{/each}
	</div>
</section>
