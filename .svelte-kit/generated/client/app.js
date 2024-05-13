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
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [0];

export const dictionary = {
		"/": [4],
		"/admin": [5],
		"/admin/blog": [~6],
		"/admin/blog/new": [~8],
		"/admin/blog/[slug]": [~7],
		"/admin/podcast": [~9],
		"/admin/podcast/edit/[slug]": [~10],
		"/admin/podcast/new": [~11],
		"/blog": [~12,[2]],
		"/blog/[slug]": [~13,[2]],
		"/login": [~14,[3]],
		"/podcast": [~15],
		"/podcast/[slug]": [16],
		"/signout": [~17]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';