import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.Cqdbn-YZ.js","_app/immutable/chunks/15.B-r9qISn.js","_app/immutable/chunks/index.BHkzuj50.js","_app/immutable/chunks/entry.D2iZWFcb.js","_app/immutable/chunks/paths.CxVw9jNI.js","_app/immutable/chunks/BlogCard.D4SVh8je.js","_app/immutable/chunks/Icon.DhXsKtF5.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
