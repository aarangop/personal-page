<script lang="ts">
	import { page } from '$app/stores';
	import { SignOut } from '@auth/sveltekit/components';
	import Icon from '@iconify/svelte';
	import { AppBar, Avatar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import Link from './Link.svelte';

	const avatarPopup: PopupSettings = {
		event: 'click',
		target: 'avatarPopup',
		placement: 'bottom'
	};
</script>

<div class="sticky top-0 z-10">
	<AppBar
		slotDefault="place-self-center flex flex-row space-x-6 w-full justify-end"
		slotTrail="place-content-end"
		background="backdrop-blur-md bg-gray-100/50 dark:bg-gray-800/50 drop-shadow-sm"
	>
		<svelte:fragment slot="lead">
			<Link href="/">
				<h3 class="font-mono">@andresap</h3>
			</Link>
		</svelte:fragment>
		<svelte:fragment slot="default">
			<Link href="/" class="min-w-20">Home</Link>
			<!-- <Link href="/podcast" class="min-w-20">Podcast</Link> -->
			<Link href="/blog" class="min-w-20">Blog</Link>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			<a href="https://github.com/aarangop/personal-page" target="_blank">
				<Icon icon="bi:github" />
			</a>
			<a
				href="https://www.linkedin.com/in/andr%C3%A9s-arango-p%C3%A9rez-789493228/"
				target="_blank"
			>
				<Icon icon="bi:linkedin" />
			</a>
			<LightSwitch></LightSwitch>
			{#if $page.data.session?.user}
				<div use:popup={avatarPopup}>
					<Avatar width="w-10" src={$page.data.session?.user.image?.toString()}></Avatar>
					<div data-popup="avatarPopup" class="card p-4 shadow-xl">
						<div class="arrow" />
						<SignOut>
							<div class="btn variant-filled" slot="submitButton"><span>Log Out</span></div>
						</SignOut>
					</div>
				</div>
			{/if}
		</svelte:fragment>
	</AppBar>
</div>
