<script lang="ts">
</script>

<article class="blog-content font-serif h-full">
	<slot />
</article>

<style>
	.blog-content :global(header) {
		position: sticky;
		top: 0;
	}
	.blog-content :global(h1) {
		font-size: x-large;
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}
	.blog-content :global(h2) {
		font-size: large;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}
	.blog-content :global(h3) {
		font-size: medium;
		margin-bottom: 0.5rem;
		margin-top: 0.5rem;
	}
	.blog-content :global(p) {
		margin-bottom: 0.5rem;
	}
</style>
