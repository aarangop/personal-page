import * as server from '../entries/pages/admin/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.B5fil3YE.js","_app/immutable/chunks/16.DwSqnteW.js","_app/immutable/chunks/index.DO47-CzA.js","_app/immutable/chunks/entry.YchZaRP1.js","_app/immutable/chunks/BlogCard.FYs5F79Y.js","_app/immutable/chunks/Icon.S52N0jui.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
