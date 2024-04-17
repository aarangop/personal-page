import * as server from '../entries/pages/admin/blog/new/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.BGELx-QW.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js","_app/immutable/chunks/Icon.CGOUE8U-.js"];
export const stylesheets = [];
export const fonts = [];
