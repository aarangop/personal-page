import prisma from '$lib/prisma';
import { UserRoles } from '$lib/schemas';
import type { User } from '@prisma/client';
import { error, redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { minimatch } from 'minimatch';
import logger from './logging';

const adminRoutes = ['/admin', '/admin/**/*', '/api/admin/**/*'];
const privateRoutes = ['/private', '/private/**/*', '/api/private/**/*'];

const getUser = async (event: RequestEvent): Promise<User | null> => {
	const session = await event.locals.auth();
	const userId = session?.user?.id;

	if (!userId) return null;

	return await prisma.user.findUnique({
		where: {
			id: userId
		}
	});
};

const userIsAuthorized = async (event: RequestEvent, authorizedRole = UserRoles.USER) => {
	const user = await getUser(event);
	if (!user) return false;
	return user.role == authorizedRole;
};

export const protectPrivateRoutesHandle: Handle = async ({ event, resolve }) => {
	const routeIsAdminOnly = adminRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
	const routeIsPrivate = privateRoutes.some((pattern) => minimatch(event.url.pathname, pattern));

	if (routeIsAdminOnly && !(await userIsAuthorized(event, UserRoles.ADMIN))) {
		logger.warn('User tried to access admin-protected resource.');
		throw error(401, { message: 'Unauthorized' });
	}

	if (routeIsPrivate && !(await userIsAuthorized(event, UserRoles.USER))) {
		logger.warn('Unauthenticated user tried to access a protected resource.');
		throw redirect(303, '/login');
	}

	return resolve(event);
};
