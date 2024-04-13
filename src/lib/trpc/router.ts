import { t } from '.';
import { blogs } from './routes/blogs';
import { podcasts } from './routes/podcasts';

export const router = t.router({
	blogs,
	podcasts
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
