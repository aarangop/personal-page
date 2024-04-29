import { redirect } from '@sveltejs/kit';
import { signOut } from '../../auth';
import type { Actions } from './$types';
import logger from '$lib/server/logging';
export const actions: Actions = {
	default: async (event) => {
		await signOut(event);
		logger.info('User signed out.');
		redirect(303, '/');
	}
};
