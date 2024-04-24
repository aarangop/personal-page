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
const userIsAuthorized = async (event, authorizedRole = UserRoles.USER) => {
  const session = await event.locals.auth();
  if (!session)
    return false;
  const user = await prisma.user.findUnique({
    where: {
      id: session.user?.id
    },
    select: { role: true }
  });
  if (!user)
    return false;
  return user.role == authorizedRole;
};
const protectPrivateRoutesHandle = async ({ event, resolve }) => {
  const routeIsAdminOnly = adminRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
  const routeIsPrivate = privateRoutes.some((pattern) => minimatch(event.url.pathname, pattern));
  if (routeIsAdminOnly && !await userIsAuthorized(event, UserRoles.ADMIN)) {
    logger.info("This route is admin only");
    throw error(401, { message: "Unauthorized" });
  }
  if (routeIsPrivate && !await userIsAuthorized(event, UserRoles.USER)) {
    throw redirect(303, "/login");
  }
  return resolve(event);
};
const handle = sequence(handle$1, protectPrivateRoutesHandle);
export {
  handle
};
