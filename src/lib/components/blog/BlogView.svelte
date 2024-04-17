<script lang="ts">
	import type { BlogPostDisplaySchema } from '$lib/schemas';
	import { readDuration } from '$lib/utils';
	import { marked } from 'marked';
	import type { z } from 'zod';

	export let post: z.infer<typeof BlogPostDisplaySchema>;
</script>

<div>
	<div class="flex flex-row mb-6">
		<div class="flex flex-col flex-1">
			<h2 class="h2 mb-2">{post.title}</h2>
			<h3 class="h3 text-gray-500 dark:text-gray-400 mb-2 flex-1">{post.subtitle}</h3>
			<span class="text-gray-400 dark:text-gray-400"
				>{`${readDuration(post.markdown)} min read`}</span
			>
		</div>
		<img
			src={post.imageUrl}
			alt={post.title}
			class="sm:w-12 sm:h-12 lg:w-36 lg:h-36 object-cover rounded-lg drop-shadow-lg"
		/>
	</div>
	<div class="font-serif text-gray-900 dark:text-gray-100">
		{@html marked.parse(post.markdown)}
	</div>
</div>
