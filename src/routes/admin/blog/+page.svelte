<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	export let data: PageData;

	const onClick = () => {
		goto('/admin/blog/new');
	};
</script>

<section class="flex flex-col">
	<div class="flex flex-row justify-between mb-2 items-center">
		<h2 class="h2 text-2xl mb-2">Blogs Admin Page</h2>
		<button class="btn variant-filled" on:click={onClick}>Add Blog Entry</button>
	</div>
	<div class="flex flex-col space-y-4">
		{#each data.blogPosts as blogPost}
			<BlogCard {blogPost}></BlogCard>
		{/each}
	</div>
</section>
