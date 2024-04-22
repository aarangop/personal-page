<script>
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
</script>

<h2 class="h2 mb-2">Log In</h2>
{#if $page.data.session}
	{#if $page.data.session.user?.name}
		<p>Logged in as: {$page.data.session.user.id}</p>
		<SignOut>
			<div slot="submitButton" class="btn variant-filled">Sign Out</div>
		</SignOut>
	{/if}
{/if}
{#if !$page.data.session}
	<SignIn>
		<div slot="submitButton" class="btn variant-filled">Sing In</div>
	</SignIn>
{/if}
