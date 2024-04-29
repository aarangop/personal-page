import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.BiEIH8rp.js","_app/immutable/chunks/15.B-r9qISn.js","_app/immutable/chunks/index.BHkzuj50.js","_app/immutable/chunks/BlogCard.DhqoM8cJ.js","_app/immutable/chunks/Icon.DhXsKtF5.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
