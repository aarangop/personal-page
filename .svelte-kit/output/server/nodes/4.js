import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.B2EkFyeM.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.DLzDeUKm.js","_app/immutable/chunks/BlogCard.Beti2mP-.js","_app/immutable/chunks/Icon.CGOUE8U-.js"];
export const stylesheets = [];
export const fonts = [];
