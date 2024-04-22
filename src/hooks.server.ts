import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { protectPrivateRoutesHandle } from '$lib/server/auth';
import { handle as authHandle } from './auth';

export const handle: Handle = sequence(authHandle, protectPrivateRoutesHandle);
