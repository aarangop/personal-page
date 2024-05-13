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
	() => import('./nodes/15'),
	() => import('./nodes/16')
];

export const server_loads = [0];

export const dictionary = {
		"/": [3],
		"/admin": [4],
		"/admin/blog": [~5],
		"/admin/blog/new": [7],
		"/admin/blog/[slug]": [~6],
		"/admin/podcast": [~8],
		"/admin/podcast/edit/[slug]": [~9],
		"/admin/podcast/new": [10],
		"/blog": [~11,[2]],
		"/blog/[slug]": [~12,[2]],
		"/login": [~13],
		"/podcast": [~14],
		"/podcast/[slug]": [15],
		"/signout": [16]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';