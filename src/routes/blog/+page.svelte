<script lang="ts">
	import { Card } from 'flowbite-svelte';

	let data: import('./$types').PageData;
</script>

<section class="flex flex-col px-48">
	<h2 class="text-gray-950 font-serif text-2xl">My Blog</h2>
	{#each data.blogPosts as blogPost}
		<Card>
			<h1>{blogPost.title}</h1>
		</Card>
	{/each}
</section>
