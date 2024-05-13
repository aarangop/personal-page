import { r as redirect } from "../../../chunks/index.js";
import { a as signOut } from "../../../chunks/auth.js";
import { l as logger } from "../../../chunks/index3.js";
const actions = {
  default: async (event) => {
    await signOut(event);
    logger.info("User signed out.");
    redirect(303, "/");
  }
};
export {
  actions
};
