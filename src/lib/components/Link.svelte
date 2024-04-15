<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let href = '/';
</script>

<a {href} class={twMerge($$props.class, 'hover:font-semibold focus:text-sm transition-all')}>
	<slot />
</a>
