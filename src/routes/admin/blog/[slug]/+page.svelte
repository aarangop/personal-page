<script lang="ts">
	import BlogView from '$lib/components/blog/BlogView.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="self-center py-4 flex flex-col">
	<BlogView post={data.post}></BlogView>
</section>
