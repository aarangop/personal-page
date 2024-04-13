<script lang="ts">
	import { Button, Input, Label, Textarea } from 'flowbite-svelte';
	export let allowDelete = false;
	export let saveFormAction: string = 'save';
	export let deleteFormAction: string = 'delete';
</script>

<section>
	<form class="flex flex-col">
		<Label for="title" class="mb-2">Title</Label>
		<Input type="text" class="mb-4" placeholder="Post Title" required id="title" name="title" />
		<Label for="subtitle" class="mb-2">Subtitle</Label>
		<Textarea
			name="subtitle"
			id="subtitle"
			class="mb-4"
			placeholder="What's it about?..."
			rows="4"
		/>
		<Label for="image-url" class="mb-2">Image Url</Label>
		<Input
			type="url"
			id="image-url"
			name="image-url"
			placeholder="https://my.awesome.image.url"
			class="mb-4"
		/>
		<Label for="file-url" class="mb-2">File</Label>
		<Input type="file" id="file-url" name="file-url" class="mb-4" />
		<div class="flex flex-row w-full justify-between">
			<Button type="submit" formaction={`?/${saveFormAction}`}>Save</Button>
			{#if allowDelete}
				<Button type="submit" formaction={`?/${deleteFormAction}`}>Delete</Button>
			{/if}
		</div>
	</form>
</section>
