<script lang="ts">
	import { testFeed, toSlug } from '$lib/client/utils/utils';
	import { type PodcastFeedSchema } from '$lib/schemas';
	import Icon from '@iconify/svelte';
	import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms/client';
	import SuperDebug from 'sveltekit-superforms';
	import { twMerge } from 'tailwind-merge';

	export let submitFormAction: String;
	export let feedUrl = '';
	export let podcastId = '';
	export let deleteAction = '';
	export let data: SuperValidated<Infer<PodcastFeedSchema>>;

	const { form, errors, enhance, constraints, message } = superForm(data);

	let feedOk = false;
	let feedChecked = false;
	let title: string = '';

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
	$: $form.slug = toSlug(title);
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
			<label class="mb-2 label" for="podcast_title">Title</label>
			<input
				class="input mb-2"
				type="text"
				name="podcast_title"
				id="podcast_title"
				placeholder="My Awesome Podcast"
				required
				bind:value={title}
			/>
			<label class="mb-2 label" for="podcast_slug">Slug</label>
			<input
				name="slug"
				pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
				placeholder="my-awesome-podcast"
				class={twMerge('input mb-2 label', $errors.slug ? 'input-error' : '')}
				bind:value={$form.slug}
				{...$constraints.slug}
				readonly
			/>
			{#if $errors.slug}
				<p
					class="flex-1 text-error-500 px-2 py-1 rounded-full bg-error-200/30 dark:bg-error-700/30"
				>
					{$errors.slug}
				</p>
			{/if}
		</div>
		<div>
			<label class="label mb-2" for="rss_feed">RSS Feed URL</label>
			<input
				class={`input ${!feedChecked ? '' : feedOk ? 'input-success' : 'input-error'}`}
				type="url"
				name="rssFeed"
				on:change={testRssFeed}
				bind:value={$form.rssFeed}
				{...$constraints.rssFeed}
				placeholder="https://my.awesome.podcast/rss"
			/>
			{#if !feedOk && feedChecked}
				<span role="alert" class="mt-2 text-error-600 dark:text-error-200">Invalid feed</span>
			{:else if feedOk && feedChecked}
				<span role="alert" class="mt-2 text-success-600 dark:text-success-200">Feed okay!</span>
			{/if}
			<div class="hidden">
				<input name="podcast_id" bind:value={podcastId} />
			</div>
		</div>
		<button
			class="btn variant-filled mb-2"
			disabled={!feedUrl}
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
