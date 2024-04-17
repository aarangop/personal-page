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
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin/blog": [~3],
		"/admin/blog/new": [4],
		"/admin/podcast": [~5],
		"/admin/podcast/edit/[slug]": [~6],
		"/admin/podcast/new": [7],
		"/blog": [~8],
		"/blog/[slug]": [~9],
		"/podcast": [~10],
		"/podcast/[slug]": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';