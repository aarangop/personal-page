import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.BN07bh8c.js","_app/immutable/chunks/scheduler.RyT_ppks.js","_app/immutable/chunks/index.C3Nj-XYD.js","_app/immutable/chunks/BlogView.B8hmRcWW.js","_app/immutable/chunks/utils.7Z_EbZrr.js"];
export const stylesheets = [];
export const fonts = [];
