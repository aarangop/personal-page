import * as server from '../entries/pages/login/_page.server.ts.js';

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.ts";
export const imports = ["_app/immutable/nodes/12.DYvlXsC6.js","_app/immutable/chunks/15.B-r9qISn.js","_app/immutable/chunks/index.BHkzuj50.js","_app/immutable/chunks/paths.CxVw9jNI.js","_app/immutable/chunks/Icon.DhXsKtF5.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
