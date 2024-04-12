<script>
	import Header from '$lib/components/Header.svelte';
	import { Footer } from 'flowbite-svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex flex-col p-1 w-full flex-1 m-0">
		<slot />
	</main>
	<Footer class="flex flex-row justify-center items-center p-2"></Footer>
</div>
