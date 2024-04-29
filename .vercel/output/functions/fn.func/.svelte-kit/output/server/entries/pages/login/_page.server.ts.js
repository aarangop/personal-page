import { s as signIn, p as providerMap } from "../../../chunks/auth.js";
const actions = {
  default: () => {
    return signIn;
  }
};
const load = async () => ({
  providers: providerMap
});
export {
  actions,
  load
};
