import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CtpD6WZ1.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.Del8H9hW.js","_app/immutable/chunks/BlogCard.Dj7YGIva.js","_app/immutable/chunks/Icon.DvKXArkQ.js"];
export const stylesheets = [];
export const fonts = [];
