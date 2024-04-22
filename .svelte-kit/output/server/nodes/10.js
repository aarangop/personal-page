import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.BRUujMUd.js","_app/immutable/chunks/scheduler.RyT_ppks.js","_app/immutable/chunks/index.C3Nj-XYD.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/BlogCard.XSLLXbzU.js","_app/immutable/chunks/Icon.BFuADdba.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
