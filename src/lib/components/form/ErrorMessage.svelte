<script lang="ts">
	export let message: string[] = [];
</script>

<div class="flex flex-col flex-1 px-2 py-1 rounded-full bg-error-200/30 dark:bg-error-700/30">
	{#each message as msg}
		<span class="flex-1 text-error-500">
			{msg}
		</span>
	{/each}
</div>
