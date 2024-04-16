<script lang="ts">
	import type { BlogPostSchema } from '$lib/schemas';
	import Icon from '@iconify/svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { z } from 'zod';

	export let blogPost: z.infer<typeof BlogPostSchema>;
	export let onEdit: (() => {}) | null = null;
	export let onDelete: (() => {}) | null = null;
</script>

<div class="card flex flex-row overflow-clip items-center backdrop-blur-sm">
	<Avatar src={blogPost.imageUrl} class="w-36" rounded="rounded-r-none" />
	<div class="flex flex-col h-full w-full p-4">
		<h4 class="h4 text-left mb-2">{blogPost.title}</h4>
		<span class="text-left text-gray-600 dark:text-gray-300 line-clamp-1 mb-1 font-serif">{blogPost.subtitle}</span>
		<span class="text-left text-gray-500 dark:text-gray-400 text-sm">{new Date(blogPost.dateCreated).toDateString()}</span>
	</div>
	<div class="p-2 flex flex-row space-x-2">
		<div class="btn-group variant-soft">
			<a href={`/blog/${blogPost.slug}`}>
				<span><Icon icon="ph:arrow-up-right" /></span>
			</a>
			{#if onEdit}
				<a href={`/admin/blog/edit/${blogPost.slug}`}>
					<span><Icon icon="ant-design:edit-filled" /></span>
				</a>
			{/if}
		</div>
		{#if onDelete}
			<button class="btn-icon variant-filled-error">
				<Icon icon="ph:trash" />
			</button>
		{/if}
	</div>
</div>
