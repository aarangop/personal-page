<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageData;
</script>

<section class="flex flex-col p-8">
	<h2 class="h2 text-2xl mb-2">My Blog</h2>
	<div class="grid grid-cols-1 space-y-4">
		{#each data.posts as blog}
			<BlogCard blogPost={blog}></BlogCard>
		{/each}
	</div>
</section>
