import prisma from '$lib/prisma';
import { UserRoles } from '$lib/schemas';
import { error, redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { minimatch } from 'minimatch';
import logger from './logging';

const adminRoutes = ['/admin', '/admin/**/*', '/api/admin/**/*'];
const privateRoutes = ['/private', '/private/**/*', '/api/private/**/*'];

const userIsAuthorized = async (event: RequestEvent, authorizedRole = UserRoles.USER) => {
	const session = await event.locals.auth();
	if (!session) return false;

	const user = await prisma.user.findUnique({
		where: {
			id: session.user?.id
		},
		select: { role: true }
	});

	if (!user) return false;

	return user.role == authorizedRole;
};

export const protectPrivateRoutesHandle: Handle = async ({ event, resolve }) => {
	const routeIsAdminOnly = adminRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
	const routeIsPrivate = privateRoutes.some((pattern) => minimatch(event.url.pathname, pattern));

	if (routeIsAdminOnly && !(await userIsAuthorized(event, UserRoles.ADMIN))) {
		logger.info('This route is admin only');
		throw error(401, { message: 'Unauthorized' });
	}

	if (routeIsPrivate && !(await userIsAuthorized(event, UserRoles.USER))) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
