<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let alt: string = 'avatar';
	export let src: string;
</script>

<img {src} {alt} class={twMerge('h-12 w-12', $$props.class, 'rounded-full')} />
