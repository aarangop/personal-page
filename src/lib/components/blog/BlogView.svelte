<script lang="ts">
	import type { BlogPostDisplaySchema } from '$lib/schemas';
	import type { z } from 'zod';
	import BlogContent from './BlogContent.svelte';
	import { getReadingTime } from '$lib/client/utils/blog';

	export let post: z.infer<typeof BlogPostDisplaySchema>;
</script>

<div class="flex flex-col h-full">
	<div class="flex flex-row mb-6">
		<div class="flex flex-col flex-1">
			<h2 class="h2 mb-2">{post.title}</h2>
			<h3 class="h3 text-gray-500 dark:text-gray-400 mb-2 flex-1">{post.subtitle}</h3>
			<span class="text-gray-400 dark:text-gray-400"
				>{`${getReadingTime(post.content)} min read`}</span
			>
		</div>
		<img
			src={post.imageUrl}
			alt={post.title}
			class="sm:w-12 sm:h-12 lg:w-36 lg:h-36 object-cover rounded-lg drop-shadow-lg"
		/>
	</div>
	<div
		class="bg-surface-100/20 dark:bg-surface-900/20 px-4 rounded-lg drop-shadow-lg backdrop-blur-lg py-2 flex-1 mb-2"
	>
		<BlogContent>
			{@html post.content}
		</BlogContent>
	</div>
	<div class="flex flex-row mb-64 space-x-2">
		<button class="btn variant-filled-primary">Share</button>
		<button
			class="btn variant-soft"
			on:click={() => {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}}>Back to top</button
		>
	</div>
</div>
