<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import { BlogPostSchema } from '$lib/schemas';
	import type { z } from 'zod';

	export let posts: z.infer<typeof BlogPostSchema>[] = [];
</script>

<div class="flex flex-row">
	{#each posts as blogPost}
		<BlogCard {blogPost}></BlogCard>
	{/each}
</div>
