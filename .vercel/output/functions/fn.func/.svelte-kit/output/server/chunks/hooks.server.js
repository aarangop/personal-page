import { e as error, r as redirect } from "./index.js";
import { p as prisma } from "./prisma.js";
import { U as UserRoles } from "./schemas.js";
import { minimatch } from "minimatch";
import { l as logger } from "./index3.js";
import { h as handle$1 } from "./auth.js";
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options?.preload;
          return i < length - 1 ? apply_handle(i + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }
      });
    }
  };
}
const adminRoutes = ["/admin", "/admin/**/*", "/api/admin/**/*"];
const privateRoutes = ["/private", "/private/**/*", "/api/private/**/*"];
const getUser = async (event) => {
  const session = await event.locals.auth();
  const userId = session?.user?.id;
  if (!userId)
    return null;
  return await prisma.user.findUnique({
    where: {
      id: userId
    }
  });
};
const userIsAuthorized = async (event, authorizedRole = UserRoles.USER) => {
  const user = await getUser(event);
  if (!user)
    return false;
  return user.role == authorizedRole;
};
const protectPrivateRoutesHandle = async ({ event, resolve }) => {
  const routeIsAdminOnly = adminRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
  const routeIsPrivate = privateRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
  if (routeIsAdminOnly && !await userIsAuthorized(event, UserRoles.ADMIN)) {
    logger.warn("User tried to access admin-protected resource.");
    throw error(401, { message: "Unauthorized" });
  }
  if (routeIsPrivate && !await userIsAuthorized(event, UserRoles.USER)) {
    logger.warn("Unauthenticated user tried to access a protected resource.");
    throw redirect(303, "/login");
  }
  return resolve(event);
};
const handle = sequence(handle$1, protectPrivateRoutesHandle);
export {
  handle
};
