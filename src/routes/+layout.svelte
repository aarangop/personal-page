<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';

	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import './styles.css';
	import { page } from '$app/stores';
	import { slugRegex } from '$lib/utils';

	const getPageTitle = (crumb: string) => {};
	const getBreadCrumbs = () => {
		const url = $page.url;
		const homeCrumb = {
			href: '/',
			text: 'Home'
		};
		const breadCrumbs = url.pathname
			.slice(1)
			.split('/')
			.map((crumb, i, array) => ({
				href: `${i == 0 ? '' : '/' + array[i - 1]}/${crumb}`,
				text: crumb.replace(/-/g, ' ').replace(/\b[a-z]/g, function () {
					return arguments[0].toUpperCase();
				})
			}));
		return [homeCrumb, ...breadCrumbs];
	};
</script>

<section class="flex flex-col min-h-screen">
	<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
		<svelte:fragment slot="header">
			<Header></Header>
		</svelte:fragment>
	</AppShell>
	<main class="flex flex-col px-8 py-4 w-full flex-1 m-0">
		<div class="self-center flex-0 sticky top-0">
			<Breadcrumbs breadCrumbs={getBreadCrumbs()}></Breadcrumbs>
		</div>
		<slot />
	</main>
</section>
