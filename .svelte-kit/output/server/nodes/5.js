import * as server from '../entries/pages/admin/blog/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D6ZZjhAh.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js","_app/immutable/chunks/BlogView.DFzhnR2Z.js","_app/immutable/chunks/utils.7Z_EbZrr.js"];
export const stylesheets = [];
export const fonts = [];
