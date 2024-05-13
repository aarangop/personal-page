// @ts-nocheck
import { redirect } from '@sveltejs/kit';
import { signOut } from '../../auth';
import type { Actions } from './$types';
import logger from '$lib/server/logging';
export const actions = {
	default: async (event: import('./$types').RequestEvent) => {
		await signOut(event);
		logger.info('User signed out.');
		redirect(303, '/');
	}
};
;null as any as Actions;