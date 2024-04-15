<script lang="ts">
	import type { BlogPostSchema } from '$lib/schemas';
	import Icon from '@iconify/svelte';
	import type { BlogPost } from '@prisma/client';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Button, Card } from 'flowbite-svelte';
	import type { z } from 'zod';

	export let blogPost: z.infer<typeof BlogPostSchema>;
	export let onEdit: (() => {}) | null = null;
	export let onDelete: (() => {}) | null = null;
</script>

<button class="card flex flex-row overflow-clip items-center">
	<Avatar src={blogPost.imageUrl} class="w-36" rounded="rounded-r-none" />
	<div class="flex flex-col h-full w-full p-4">
		<h4 class="h4 text-left mb-2">{blogPost.title}</h4>
		<span class="text-left text-gray-600 dark:text-gray-300 line-clamp-1">{blogPost.subtitle}</span>
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
</button>
