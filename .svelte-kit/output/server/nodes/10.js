import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.vDv1EERt.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/BlogCard.Dj7YGIva.js","_app/immutable/chunks/Icon.DvKXArkQ.js"];
export const stylesheets = [];
export const fonts = [];
