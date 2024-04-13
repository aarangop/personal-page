import prisma from '$lib/prisma';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	saveBlogPost: async ({ request }) => {
		throw redirect(303, '/admin/blog');
	}
} satisfies Actions;
