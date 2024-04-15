<script lang="ts">
	import type { BlogPostSchema } from '$lib/schemas';
	import type { BlogPost } from '@prisma/client';
	import { Button, Card } from 'flowbite-svelte';
	import type { z } from 'zod';

	export let blogPost: z.infer<typeof BlogPostSchema>;
</script>

<Card padding="none">
	<div class="flex flex-row">
		<div>
			<img class="rounded-l-md" src={blogPost.imageUrl} alt={blogPost.title} />
		</div>
		<div class="flex flex-col">
			<h5 class="font-serif text-2xl text-gray-950">{blogPost.title}</h5>
			<span>{blogPost.subtitle}</span>
			<Button>Edit</Button>
		</div>
	</div>
</Card>
