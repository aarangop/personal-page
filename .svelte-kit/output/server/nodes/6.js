import * as server from '../entries/pages/admin/blog/new/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.BAJh9bb4.js","_app/immutable/chunks/scheduler.RyT_ppks.js","_app/immutable/chunks/index.C3Nj-XYD.js","_app/immutable/chunks/Icon.BFuADdba.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
