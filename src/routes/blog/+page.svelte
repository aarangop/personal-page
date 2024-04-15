<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { Card } from 'flowbite-svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';

	export let data: PageData;
</script>

<section class="flex flex-col px-24">
	<h2 class="text-gray-950 font-serif text-2xl">My Blog</h2>
	<div class="flex flex-wrap gap-2 space-y-2"></div>
	{#each data.posts as blog}
		<BlogCard blogPost={blog}></BlogCard>
	{/each}
</section>
