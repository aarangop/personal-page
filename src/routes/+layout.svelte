<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { onNavigate } from '$app/navigation';

	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import './styles.css';
</script>

<section class="flex flex-col min-h-screen">
	<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
		<svelte:fragment slot="header">
			<Header></Header>
		</svelte:fragment>
	</AppShell>
	<main class="flex flex-col py-4 justify-center px-8">
		<div class="self-center flex-0 sticky top-0 mb-2">
			<Breadcrumbs />
		</div>
		<div class="lg:px-48">
			<slot />
		</div>
	</main>
</section>
