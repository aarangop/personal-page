import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CzadkqKU.js","_app/immutable/chunks/scheduler.RyT_ppks.js","_app/immutable/chunks/index.C3Nj-XYD.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.C5BBI4Ia.js","_app/immutable/chunks/BlogCard.XSLLXbzU.js","_app/immutable/chunks/Icon.BFuADdba.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
