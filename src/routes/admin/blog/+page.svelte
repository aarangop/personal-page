<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import BlogCard from '$lib/components/BlogCard.svelte';
	export let data: PageData;

	const onClick = () => {
		goto('/admin/blog/new');
	};
</script>

<section class="px-16 py-4 flex flex-col space-y-4 grow">
	<h2 class="h2 text-2xl grow-0">Blogs Admin Page</h2>
	<div class="flex flex-col space-y-2 grow">
		<div class="flex flex-col grow">
			{#each data.blogPosts as blogPost}
				<BlogCard {blogPost}></BlogCard>
			{/each}
		</div>
		<div>
			<button class="btn variant-filled" on:click={onClick}>Add Blog Entry</button>
		</div>
	</div>
</section>
