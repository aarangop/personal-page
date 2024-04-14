export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/admin/blog": [~4],
		"/admin/blog/new": [~5],
		"/admin/podcast": [~6],
		"/admin/podcast/edit/[slug]": [~7],
		"/admin/podcast/new": [~8],
		"/blog": [~9],
		"/default-svelte": [10,[2]],
		"/default-svelte/about": [11,[2]],
		"/default-svelte/sverdle": [~12,[2]],
		"/default-svelte/sverdle/how-to-play": [13,[2]],
		"/podcast": [~14],
		"/podcast/[slug]": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';