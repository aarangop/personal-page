<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	export let data: PageData;

	const readDuration = (text: string) => (text.length / 350).toFixed(0);
</script>

<section class="self-center py-4 flex flex-col">
	<div class="flex flex-row mb-6">
		<div class="flex flex-col flex-1">
			<h2 class="h2 mb-2">{data.blogPost.title}</h2>
			<h3 class="h3 text-gray-500 dark:text-gray-400 mb-2 flex-1">{data.blogPost.subtitle}</h3>
			<span class="text-gray-400 dark:text-gray-400"
				>{`${readDuration(data.blogPost.markdown)} min read`}</span
			>
		</div>
		<img
			src={data.blogPost.imageUrl}
			alt={data.blogPost.title}
			class="sm:w-12 sm:h-12 lg:w-36 lg:h-36 object-cover rounded-lg drop-shadow-lg"
		/>
	</div>
	<div class="font-serif text-gray-900 dark:text-gray-100">
		{@html marked.parse(data.blogPost.markdown)}
	</div>
</section>
