import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.DiRy4IxU.js","_app/immutable/chunks/16.qRzACfvT.js","_app/immutable/chunks/index.DWOnfsL5.js","_app/immutable/chunks/entry.DAzvZ7mJ.js","_app/immutable/chunks/paths.DKtcFExo.js","_app/immutable/chunks/BlogCard.CUuE7ZOX.js","_app/immutable/chunks/Icon.TsCgaYdk.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
