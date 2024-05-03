import { AUTH_GITHUB_ID, AUTH_SECRET } from '$env/static/private';
import prisma from '$lib/prisma';
import logger from '$lib/server/logging';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { SvelteKitAuth } from '@auth/sveltekit';
import type { Provider } from '@auth/sveltekit/providers';
import Credentials from '@auth/sveltekit/providers/credentials';
import GitHub from '@auth/sveltekit/providers/github';

const providers: Provider[] = [GitHub];

if (process.env.NODE_ENV == 'development') {
	providers.push(
		Credentials({
			id: 'credentials',
			name: 'Username and Password',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			authorize: async (credentials) => {
				if (
					credentials.password === process.env.TEST_PASSWORD &&
					credentials.username === process.env.TEST_USERNAME
				) {
					const user = await prisma.user.upsert({
						where: { email: 'test@user.com' },
						update: {},
						create: {
							email: 'test@user.com',
							name: 'Test User',
							role: 'admin',
							image: 'https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif'
						}
					});
					return user;
				}
				return null;
			}
		})
	);
}

export const providerMap = providers.map((provider) => {
	if (typeof provider === 'function') {
		const providerData = provider();
		return { id: providerData.id, name: providerData.name };
	} else {
		return { id: provider.id, name: provider.name };
	}
});

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	session: { strategy: process.env.NODE_ENV === 'development' ? 'jwt' : 'database' },
	pages: {
		signIn: '/login'
	},
	providers: providers,
	debug: process.env.NODE_ENV == 'development',
	callbacks: {
		session({ session, token, user }) {
			if (token.id) {
				session.user.id = token.id as string;
			}
			return session;
		},
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
			}
			return token;
		}
	}
});
