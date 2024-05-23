<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="flex flex-row space-x-4 h-32">
	{#if !data.session}
		<SignIn provider="github" signInPage="signin" />
	{/if}
	<a
		class="card p-4 w-64 text-xl text-center align-middle cursor-pointer my-auto"
		href="/admin/podcast"
	>
		Podcast
	</a>

	<a class="card p-4 w-64 my-auto text-xl text-center cursor-pointer" href="/admin/blog">Blog</a>
</section>
