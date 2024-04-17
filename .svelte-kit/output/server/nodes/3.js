import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CmQQEB42.js","_app/immutable/chunks/scheduler.CIki45mO.js","_app/immutable/chunks/index.CqOp4gxH.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/entry.Z-bY69p6.js","_app/immutable/chunks/BlogCard.CPW8goFI.js","_app/immutable/chunks/Icon.BLCYRnwr.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
