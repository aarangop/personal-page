<script>
	import Header from '$lib/components/Header.svelte';
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';

	import './styles.css';
</script>

<section class="flex flex-col min-h-screen">
	<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
		<svelte:fragment slot="header">
			<Header></Header>
		</svelte:fragment>
	</AppShell>
	<main class="flex flex-col p-1 w-full flex-1 m-0">
		<slot />
	</main>
</section>
