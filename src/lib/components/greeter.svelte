<script lang="ts">
	export let name: string;

	let showGreeting = false;

	const handleClick = () => (showGreeting = true);
</script>

<button on:click={handleClick}>Greet</button>

{#if showGreeting}
	<p>Hello {name}</p>
{/if}
