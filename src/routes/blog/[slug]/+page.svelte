<script lang="ts">
	import type { PageData } from './$types';
	import BlogView from '$lib/components/blog/BlogView.svelte';
	export let data: PageData;
</script>

<section class="self-center py-4 flex flex-col">
	<BlogView post={data.blogPost}></BlogView>
</section>
