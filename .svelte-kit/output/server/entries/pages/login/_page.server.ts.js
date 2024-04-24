import { s as signIn, p as providerMap } from "../../../chunks/auth.js";
const actions = { default: signIn };
const load = async () => ({
  providers: providerMap
});
export {
  actions,
  load
};
