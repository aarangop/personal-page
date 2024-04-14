<script lang="ts">
	import BlogForm from '$lib/components/BlogForm.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<section class="flex grow px-48 justify-center">
	<Card class="min-w-64">
		<h2 class="font-serif text-gray-950 text-2xl mb-4">New Blog Post</h2>
		<BlogForm saveFormAction="saveBlogPost"></BlogForm>
	</Card>
</section>
