<script lang="ts">
	import { getBreadCrumbs, type BreadCrumb } from '$lib/client/utils/breadcrumbs';
	import { fade } from 'svelte/transition';
	export let url: string;

	let breadCrumbs: BreadCrumb[] = [];

	$: breadCrumbs = getBreadCrumbs(url, { href: '/', text: 'Home' });
</script>

<ol
	transition:fade
	class="breadcrumb bg-gray-100/30 dark:bg-gray-800/30 flex-0 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-300/70 dark:border-gray-400/30"
>
	{#each breadCrumbs as crumb, i}
		{#if i < breadCrumbs.length - 1}
			<li class="crumb"><a href={crumb.href} class="anchor">{crumb.text}</a></li>
			<li class="crumb-separator" aria-hidden>/</li>
		{:else}
			<li class="crumb">{crumb.text}</li>
		{/if}
	{/each}
</ol>
