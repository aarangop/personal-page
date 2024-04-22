<script lang="ts">
	import { AppBar, Avatar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';
	import Link from './Link.svelte';
	import { page } from '$app/stores';
	import { SignOut } from '@auth/sveltekit/components';

	const avatarPopup: PopupSettings = {
		event: 'click',
		target: 'avatarPopup',
		placement: 'bottom'
	};
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
