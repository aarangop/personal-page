<script lang="ts">
	import { testFeed, toSlug } from '$lib/client/utils/utils';
	import { podcastFeedSchema, type PodcastFeedSchema } from '$lib/schemas';
	import Icon from '@iconify/svelte';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms';
	import { twMerge } from 'tailwind-merge';
	import { zod } from 'sveltekit-superforms/adapters';
	import ErrorMessage from '../form/ErrorMessage.svelte';

	export let submitFormAction: String;
	export let deleteAction = '';
	export let data: SuperValidated<Infer<PodcastFeedSchema>>;

	const { form, errors, enhance, constraints, message, validate } = superForm(data, {
		onChange(event) {
			if (!event.target) return;
			if (event.path === 'slug') {
				validate('slug');
			}
		},
		validators: zod(podcastFeedSchema)
	});

	let feedOk = false;
	let feedChecked = false;
	let title: string = '';
	let manualSlug = false;

	const setManualSlug = () => {
		console.log('manual slug');
		manualSlug = true;
	};

	const testRssFeed = async () => {
		try {
			await testFeed($form.rssFeed);
			feedOk = true;
		} catch (e) {
			feedOk = false;
		} finally {
			feedChecked = true;
		}
	};
	$: {
		if (!manualSlug) {
			$form.slug = toSlug(title);
		}
	}
</script>

<SuperDebug data={$form}></SuperDebug>
{#if $message}<h3>{$message}</h3>{/if}
<form
	method="POST"
	class="flex p-4 flex-col grow rounded-lg"
	action={`?/${submitFormAction}`}
	use:enhance
>
	<div class="flex flex-col space-y-2 grow mb-4">
		<div>
			<label class="mb-2 label" for="title">Title</label>
			<input
				class="input mb-2"
				type="text"
				name="title"
				placeholder="My Awesome Podcast"
				required
				bind:value={title}
			/>
			<label class="mb-2 label" for="slug">Slug</label>
			<input
				name="slug"
				id="slug"
				pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
				placeholder="my-awesome-podcast"
				class={twMerge('input mb-2 label', $errors.slug ? 'input-error' : '')}
				bind:value={$form.slug}
				on:input={setManualSlug}
				{...$constraints.slug}
			/>
			{#if $errors.slug}
				<ErrorMessage message={$errors.slug} />
			{/if}
		</div>
		<div>
			<label class="label mb-2" for="rssFeed">RSS Feed URL</label>
			<input
				class={`input mb-2 ${!feedChecked ? '' : feedOk ? 'input-success' : 'input-error'}`}
				type="url"
				id="rssFeed"
				name="rssFeed"
				on:change={testRssFeed}
				bind:value={$form.rssFeed}
				{...$constraints.rssFeed}
				placeholder="https://my.awesome.podcast/rss"
			/>
			{#if !feedOk && feedChecked}
				<ErrorMessage message={['Invalid Feed']} />
			{:else if feedOk && feedChecked}
				<span role="alert" class="mt-2 text-success-600 dark:text-success-200">Feed okay!</span>
			{/if}
		</div>
		<button
			class="btn variant-filled mb-2"
			disabled={!$form.rssFeed}
			on:click|preventDefault={testRssFeed}>Test feed</button
		>
		<div>
			<label class="label mb-2" for="spotify_link">Spotify</label>
			<input class="input" type="url" id="spotify_link" name="spotify_link" />
		</div>
	</div>
	<div class="flex flex-row justify-between space-x-2">
		<button
			type="submit"
			class="btn variant-filled"
			disabled={!feedChecked || !feedOk}
			formaction={`?/${submitFormAction}`}>Save</button
		>
		{#if deleteAction.length}
			<button class="btn variant-filled-error" type="submit" formaction={`?/${deleteAction}`}>
				<Icon class="w-4 h-4 me-2" icon="flowbite:trash-bin-outline"></Icon>
				Delete</button
			>
		{/if}
	</div>
</form>
