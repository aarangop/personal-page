<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex flex-col">
	<h2 class="h2 text-2xl mb-2">My Blog</h2>
	<div class="flex flex-col">
		{#each data.posts as blog}
			<BlogCard blogPost={blog}></BlogCard>
		{/each}
	</div>
</section>
