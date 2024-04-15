<script>
	import { DarkMode, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import Link from './Link.svelte';
</script>

<AppBar
	slotDefault="place-self-center flex flex-row space-x-6 w-full justify-end "
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<Link href="/">
			<h3 class="font-mono">@andresap</h3>
		</Link>
	</svelte:fragment>
	<svelte:fragment slot="default">
		<Link href="/" class="min-w-20">Home</Link>
		<Link href="/podcast" class="min-w-20">Podcast</Link>
		<Link href="/blog" class="min-w-20">Blog</Link>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<Icon icon="bi:github" />
		<Icon icon="bi:linkedin" />
		<LightSwitch></LightSwitch>
	</svelte:fragment>
</AppBar>
