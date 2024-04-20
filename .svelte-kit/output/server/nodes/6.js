import * as server from '../entries/pages/admin/blog/new/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.D_WnHXDo.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js","_app/immutable/chunks/Icon.DvKXArkQ.js"];
export const stylesheets = [];
export const fonts = [];
