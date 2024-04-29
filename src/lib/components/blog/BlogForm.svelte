<script lang="ts">
	import Icon from '@iconify/svelte';
	export let deleteFormAction: string | null = null;
	export let onDelete: ((event: Event) => Promise<void>) | null = null;
</script>

<section class={$$props.class}>
	<form method="post" class="flex flex-col" enctype="multipart/form-data">
		<label for="title" class="label mb-1">Title</label>
		<input
			type="text"
			class="input mb-2"
			placeholder="Post Title"
			required
			maxlength="50"
			minlength="1"
			id="title"
			name="title"
		/>
		<label for="subtitle" class="label mb-1">Subtitle</label>
		<input
			maxlength="50"
			minlength="1"
			class="input mb-2"
			name="subtitle"
			id="subtitle"
			placeholder="Subtitle"
		/>
		<label for="image" class="label mb-2">Image</label>
		<input type="file" id="image" name="image" class="input mb-4" accept="image/*" required />
		<label for="file" class="label mb-2">File</label>
		<input type="file" id="file" name="file" accept=".md" class="input mb-4" />
		<div class="flex flex-row w-full justify-start">
			<button class="btn variant-filled" type="submit">
				<span>
					<Icon icon="ph:floppy-disk" />
				</span>
				<span>Save</span>
			</button>
			{#if onDelete}
				<button class="btn variant-filled-error" type="submit" formaction={`?/${deleteFormAction}`}
					>Delete</button
				>
			{/if}
		</div>
	</form>
</section>
