<script lang="ts">
	import { page } from '$app/stores';
	import { SignIn, SignOut } from '@auth/sveltekit/components';
	import type { PageData } from './$types';
</script>

<div>
	{#if $page.data.session?.user}
		<p>Logged In as {$page.data.session?.user.name}</p>
		<SignOut>
			<div slot="submitButton" class="btn variant-filled">
				<span>Log Out</span>
			</div>
		</SignOut>
	{:else}
		<SignIn>
			<div slot="submitButton" class="btn variant-filled">
				<span>Log In</span>
			</div>
		</SignIn>
	{/if}
</div>
