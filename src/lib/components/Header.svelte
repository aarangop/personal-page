<script>
	import { DarkMode, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
</script>

<Navbar class="p-2 bg-armadillo-50 dark:bg-primary-800">
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/podcast">Podcast</NavLi>
	</NavUl>
	<DarkMode />
</Navbar>
