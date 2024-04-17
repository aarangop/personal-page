import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.CvF8B38v.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js"];
export const stylesheets = [];
export const fonts = [];
