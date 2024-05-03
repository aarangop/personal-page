import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.BEpulKPq.js","_app/immutable/chunks/16.qRzACfvT.js","_app/immutable/chunks/index.DWOnfsL5.js","_app/immutable/chunks/ReaderLayout.MiE4ZAnT.js","_app/immutable/chunks/BlogCard.CUuE7ZOX.js","_app/immutable/chunks/Icon.TsCgaYdk.js","_app/immutable/chunks/spread.CgU5AtxT.js"];
export const stylesheets = [];
export const fonts = [];
