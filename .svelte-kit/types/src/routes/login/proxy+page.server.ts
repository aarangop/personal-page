// @ts-nocheck
import { signIn, providerMap } from '../../auth';
import type { Actions } from './$types';
export const actions = { default: signIn };

export const load = async () => ({
	providers: providerMap
});
;null as any as Actions;