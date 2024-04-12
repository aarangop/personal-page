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
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [3],
		"/admin/podcast": [~4],
		"/admin/podcast/edit/[slug]": [~5],
		"/admin/podcast/new-feed": [~6],
		"/default-svelte": [7,[2]],
		"/default-svelte/about": [8,[2]],
		"/default-svelte/sverdle": [~9,[2]],
		"/default-svelte/sverdle/how-to-play": [10,[2]],
		"/podcast": [~11],
		"/podcast/[slug]": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';