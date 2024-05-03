<script lang="ts">
	import { testFeed, toSlug } from '$lib/client/utils/utils';
	import Icon from '@iconify/svelte';
	export let slug = '';
	export let submitFormAction: String;
	export let feedUrl = '';
	export let podcastId = '';
	export let deleteAction = '';

	let feedOk = false;
	let feedChecked = false;
	let title: string = '';

	const testRssFeed = async () => {
		try {
			await testFeed(feedUrl);
			feedOk = true;
		} catch (e) {
			feedOk = false;
		} finally {
			feedChecked = true;
		}
	};
	$: slug = toSlug(title);
</script>

<form method="POST" class="flex p-4 flex-col grow rounded-lg" action={`?/${submitFormAction}`}>
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
				bind:value={slug}
				id="podcast_slug"
				name="podcast_slug"
				pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
				placeholder="my-awesome-podcast"
				class="input mb-2 text-gray-400 label"
				readonly
			/>
		</div>
		<div>
			<label class="label mb-2" for="rss_feed">RSS Feed URL</label>
			<input
				class={`input ${!feedChecked ? '' : feedOk ? 'input-success' : 'input-error'}`}
				type="url"
				name="rss_feed"
				on:change={testRssFeed}
				bind:value={feedUrl}
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
