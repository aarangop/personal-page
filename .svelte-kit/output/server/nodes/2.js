

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DpnlT3HD.js","_app/immutable/chunks/scheduler.CIki45mO.js","_app/immutable/chunks/index.CqOp4gxH.js"];
export const stylesheets = [];
export const fonts = [];
