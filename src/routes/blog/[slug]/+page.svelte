<script lang="ts">
	import type { PageData } from './$types';
	import BlogView from '$lib/components/blog/BlogView.svelte';
	export let data: PageData;
</script>

<BlogView post={data.blogPost}></BlogView>
