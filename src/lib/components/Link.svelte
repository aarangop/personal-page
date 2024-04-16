<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let href = '/';
</script>

<a {href} class={twMerge($$props.class, 'hover:font-semibold transition-all')}>
	<slot />
</a>
