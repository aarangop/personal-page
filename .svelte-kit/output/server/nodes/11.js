import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.Dw-3Q1H8.js","_app/immutable/chunks/15.B-r9qISn.js","_app/immutable/chunks/index.BHkzuj50.js","_app/immutable/chunks/BlogView.Cc8VijYJ.js","_app/immutable/chunks/utils.Dz9d82DD.js"];
export const stylesheets = [];
export const fonts = [];
