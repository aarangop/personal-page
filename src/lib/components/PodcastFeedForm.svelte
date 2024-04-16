<script lang="ts">
	import { XMLParser } from 'fast-xml-parser';
	import { Button, Helper, Input, Label } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
	export let slug = '';
	export let submitFormAction: String;
	export let rssFeed = '';
	export let podcastId = '';
	export let deleteAction = '';

	let feedOk = false;
	let feedChecked = false;
	let rssFeedError: any | null;

	const validateUrl = (url: String) => {
		return url.startsWith('http://') || url.startsWith('https://');
	};
	const testFeed = async () => {
		feedOk = false;
		rssFeedError = null;
		if (!validateUrl(rssFeed)) {
			rssFeedError = 'Invalid url.';
			return;
		}
		await fetch(rssFeed)
			.then((response) => response.text())
			.then((str) => {
				const parser = new XMLParser({
					ignoreAttributes: false
				});
				const feed = parser.parse(str);
				const imgUrl = feed.rss.channel.image.url;
				const title = feed.rss.channel.title;
				const description = feed.rss.channel.description;
				const episodes = feed.rss.channel.items;
				feedOk = imgUrl && title && description && episodes;
				feedOk = true;
			})
			.catch((e) => {
				feedOk = false;
				rssFeedError = e;
			});
		feedChecked = true;
	};
</script>

<form method="POST" class="flex p-4 flex-col grow rounded-lg">
	<div class="flex flex-col space-y-2 grow">
		<div>
			<Label class="mb-2" for="podcast_slug">Slug</Label>
			<Input
				class="lowercase"
				pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
				type="text"
				name="podcast_slug"
				placeholder="My Awesome Podcast"
				required
				bind:value={slug}
			/>
		</div>
		<div>
			<Label class="mb-2" for="rss_feed">RSS Feed URL</Label>
			<Input
				color={!feedChecked ? 'base' : feedOk ? 'green' : 'red'}
				type="url"
				name="rss_feed"
				on:change={testFeed}
				bind:value={rssFeed}
				placeholder="https://my.awesome.podcast/rss"
			/>
			{#if feedOk}
				<Helper class="mt-2" color="green">Feed okay!</Helper>
			{:else if rssFeedError}
				<Helper class="mt-2" color="red">{rssFeedError}</Helper>
			{/if}
			<div class="hidden">
				<input name="podcast_id" bind:value={podcastId} />
			</div>
		</div>
		<Button class="mb-4" disabled={!rssFeed} di color="alternative" on:click={testFeed}
			>Test feed</Button
		>
	</div>
	<div class="flex flex-row justify-between space-x-2">
		<Button type="submit" disabled={!feedChecked || !feedOk} formaction={`?/${submitFormAction}`}
			>Save</Button
		>
		{#if deleteAction.length}
			<Button color="red" type="submit" formaction={`?/${deleteAction}`}>
				<Icon class="w-4 h-4 me-2" icon="flowbite:trash-bin-outline"></Icon>
				Delete</Button
			>
		{/if}
	</div>
</form>
