import { signIn, providerMap } from '../../auth';
import type { Actions } from './$types';
export const actions: Actions = { default: signIn };

export const load = async () => ({
	providers: providerMap
});
