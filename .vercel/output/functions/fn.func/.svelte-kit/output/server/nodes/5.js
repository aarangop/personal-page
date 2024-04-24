import * as server from '../entries/pages/admin/blog/_slug_/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.Bvo3spS5.js","_app/immutable/chunks/16.DwSqnteW.js","_app/immutable/chunks/index.DO47-CzA.js","_app/immutable/chunks/BlogView.91yCh2al.js","_app/immutable/chunks/utils.Dz9d82DD.js"];
export const stylesheets = [];
export const fonts = [];
