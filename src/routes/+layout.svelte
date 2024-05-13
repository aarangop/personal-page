<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { AppShell } from '@skeletonlabs/skeleton';

	import Breadcrumbs from '$lib/components/breadcrumbs/Breadcrumbs.svelte';
	import './styles.css';
	import { page } from '$app/stores';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
	$: url = $page.url.pathname;
</script>

<main class="flex flex-col h-full w-full overflow-auto absolute top-0">
	<Header />
	<div class="self-center mb-2 mt-2">
		<Breadcrumbs {url} />
	</div>
	<div class="flex-1 flex justify-center p-2 lg:px-8">
		<slot />
	</div>
</main>
