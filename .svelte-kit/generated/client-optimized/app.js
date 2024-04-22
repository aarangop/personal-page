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
	() => import('./nodes/14')
];

export const server_loads = [0];

export const dictionary = {
		"/": [2],
		"/admin": [3],
		"/admin/blog": [~4],
		"/admin/blog/new": [6],
		"/admin/blog/[slug]": [~5],
		"/admin/podcast": [~7],
		"/admin/podcast/edit/[slug]": [~8],
		"/admin/podcast/new": [9],
		"/blog": [~10],
		"/blog/[slug]": [~11],
		"/podcast": [~12],
		"/podcast/[slug]": [13],
		"/signin": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';