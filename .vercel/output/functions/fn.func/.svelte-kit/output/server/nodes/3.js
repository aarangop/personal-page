

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BBg0nTZ1.js","_app/immutable/chunks/16.qRzACfvT.js","_app/immutable/chunks/index.DWOnfsL5.js"];
export const stylesheets = [];
export const fonts = [];
