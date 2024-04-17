<script lang="ts">
	import { testFeed } from '$lib/utils';
	import Icon from '@iconify/svelte';
	export let slug = '';
	export let submitFormAction: String;
	export let feedUrl = '';
	export let podcastId = '';
	export let deleteAction = '';

	let feedOk = false;
	let feedChecked = false;
	let rssFeedError: any | null;

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
</script>

<form method="POST" class="flex p-4 flex-col grow rounded-lg">
	<div class="flex flex-col space-y-2 grow mb-4">
		<div>
			<label class="mb-2 label" for="podcast_slug">Slug</label>
			<input
				class="lowercase input"
				pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
				type="text"
				name="podcast_slug"
				placeholder="My Awesome Podcast"
				required
				bind:value={slug}
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
			{#if feedOk}
				<span class="mt-2 text-success-600 dark:text-success-200">Feed okay!</span>
			{:else if rssFeedError}
				<span class="mt-2 text-error-600 dark:text-error-200">{rssFeedError}</span>
			{/if}
			<div class="hidden">
				<input name="podcast_id" bind:value={podcastId} />
			</div>
		</div>
		<button class="btn variant-filled" disabled={!feedUrl} on:click={testRssFeed}>Test feed</button>
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
