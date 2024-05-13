import * as server from '../entries/pages/admin/blog/_slug_/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.CcJAaiWx.js","_app/immutable/chunks/16.qRzACfvT.js","_app/immutable/chunks/index.DWOnfsL5.js","_app/immutable/chunks/BlogView.B0LXhR8m.js","_app/immutable/chunks/utils.Dz9d82DD.js"];
export const stylesheets = [];
export const fonts = [];
