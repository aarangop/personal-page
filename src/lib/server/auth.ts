import { error, redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import logger from './logging';
import prisma from '$lib/prisma';
import { UserRoles } from '$lib/schemas';

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
	logger.info(`Checking privileges for route ${event.route.id}`);

	const routeIsAdminOnly = event.url.pathname.startsWith('/admin');
	const routeIsPrivate = event.url.pathname.startsWith('/private');

	if (routeIsAdminOnly && !(await userIsAuthorized(event, UserRoles.ADMIN))) {
		throw error(401, { message: 'Unauthorized' });
	}

	if (routeIsPrivate && !(await userIsAuthorized(event, UserRoles.USER))) {
		throw redirect(303, '/login');
	}

	return resolve(event);
};
