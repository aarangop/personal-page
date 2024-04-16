<script lang="ts">
	import { page } from '$app/stores';
	import { fade, blur, fly } from 'svelte/transition';

	const getCrumbDisplayText = (crumb: string) => {
		return crumb.replace(/-/g, ' ').replace(/\b[a-z]/g, (substr) => substr[0].toUpperCase());
	};
	let breadCrumbs: { href: string; text: string }[] = [];
	$: {
		const url = $page.url.pathname;

		const homeCrumb = {
			href: '/',
			text: 'Home'
		};
		const crumbs = url
			.slice(1)
			.split('/')
			.map((crumb, i, allCrumbs) => ({
				href: '/' + (i == 0 ? crumb : [...allCrumbs.slice(0, 1), crumb].join('/')),
				text: `${getCrumbDisplayText(crumb)}`
			}));
		breadCrumbs = [homeCrumb, ...crumbs];
	}
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
