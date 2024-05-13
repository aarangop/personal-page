// @ts-nocheck
import logger from '$lib/server/logging';
import type { LayoutServerLoad } from './$types';

export const load = async (event: Parameters<LayoutServerLoad>[0]) => {
	const session = await event.locals.auth();
	return { session };
};
