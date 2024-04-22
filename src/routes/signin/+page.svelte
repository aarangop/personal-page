<script lang="ts">
	import { SignIn } from '@auth/sveltekit/components';
	import { providerMap } from '../../auth';
</script>

<div>
	<div>
		<h2>
			<img src="/img/logo.png" alt="Company Logo" />
			<span>Company</span>
		</h2>
		<div>
			{#each providerMap as provider}
				<SignIn provider={provider.id} signInPage="signin" className="w-full">
					<div slot="submitButton">
						<span>
							Signin with {provider.name}
						</span>
					</div>
				</SignIn>
			{/each}
		</div>
	</div>
</div>
