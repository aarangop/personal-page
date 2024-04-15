<script lang="ts">
	import BlogForm from '$lib/components/BlogForm.svelte';
</script>

<section class=" content-center w-full p-4 flex justify-center">
	<div class="card min-w-64 lg:w-1/3 md:w-1/2 p-4">
		<h3 class="h3 mb-2">New Blog Post</h3>
		<BlogForm saveFormAction="saveBlogPost" class=""></BlogForm>
	</div>
</section>
