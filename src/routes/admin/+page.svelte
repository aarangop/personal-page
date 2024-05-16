<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="flex flex-col">
	{#if !data.session}
		<SignIn provider="github" signInPage="signin" />
	{/if}
	<a class="card p-4" href="/admin/podcast"> Podcast </a>

	<a class="card p-4" href="/admin/blog">Blog</a>
</section>
