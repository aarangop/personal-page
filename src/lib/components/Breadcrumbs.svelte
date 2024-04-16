<script lang="ts">
	import { page } from '$app/stores';

	let breadCrumbs: { href: string; text: string }[] = [];
	$: {
		const url = $page.url;
		const homeCrumb = {
			href: '/',
			text: 'Home'
		};
		const crumbs = url.pathname
			.slice(1)
			.split('/')
			.map((crumb, i, array) => ({
				href: `${i == 0 ? '' : '/' + array[i - 1]}/${crumb}`,
				text: crumb.replace(/-/g, ' ').replace(/\b[a-z]/g, function () {
					return arguments[0].toUpperCase();
				})
			}));
		console.log(url.pathname);
		// if (url.pathname.split('/').length == 2) {
		// 	breadCrumbs = [homeCrumb];
		// } else {
		breadCrumbs = [homeCrumb, ...crumbs];
		// }
	}
</script>

<ol
	class="breadcrumb bg-gray-800/50 flex-0 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/70"
>
	{#each breadCrumbs as breadCrumb, i}
		{#if i == breadCrumbs.length - 1}
			<li class="crumb">{breadCrumb.text}</li>
		{:else}
			<li class="crumb"><a href={breadCrumb.href} class="anchor">{breadCrumb.text}</a></li>
			<li class="crumb-separator" aria-hidden>&rsaquo;</li>
		{/if}

		<!-- <li class="crumb"><a class="anchor" href={breadCrumb.href}>{breadCrumb.text}</a></li>
		<li class="crumb-separator" aria-hidden>&rsaquo;</li> -->
	{/each}
</ol>
