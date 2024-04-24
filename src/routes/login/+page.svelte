<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;
	let githubProvider = data.providers.filter((provider) => provider.id === 'github');
	let credentialsProvider = data.providers.filter((provider) => provider.id === 'credentials');
	let username = '';
	let password = '';
</script>

<h2 class="h2 mb-4">Log In</h2>
{#if data.session}
	<div class="flex flex-col space-y-2">
		<div>You're currently logged in as {data.session.user?.name}</div>
		<button class="btn variant-filled" on:click={() => signOut()}>Log Out</button>
	</div>
{:else}
	<div class="flex flex-col space-y-2">
		<button class="btn variant-filled" on:click={() => signIn('github', { callbackUrl: '/' })}>
			<span> Sign In with GitHub </span>
			<span>
				<Icon icon="bi:github" />
			</span></button
		>
		{#if credentialsProvider}
			<div class="flex flex-row justify-between items-center space-x-2">
				<hr class="flex-1" />
				<span>or</span>
				<hr class="flex-1" />
			</div>
			<form class="card flex flex-col p-4">
				<label class="label" for="username">Username</label>
				<input class="input mb-2" type="text" name="username" bind:value={username} />
				<label class="label" for="password">Password</label>
				<input class="input mb-2" type="password" name="password" bind:value={password} />
				<button
					class="btn variant-filled"
					on:click={() => signIn('credentials', { username, password, callbackUrl: '/' })}
					>Log In</button
				>
			</form>
		{/if}
	</div>
{/if}
