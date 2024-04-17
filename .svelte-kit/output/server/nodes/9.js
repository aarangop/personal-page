import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/9.fgG7V-HF.js","_app/immutable/chunks/scheduler.CIki45mO.js","_app/immutable/chunks/index.CqOp4gxH.js"];
export const stylesheets = [];
export const fonts = [];
