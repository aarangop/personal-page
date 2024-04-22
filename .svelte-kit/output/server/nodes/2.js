

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DVm0iYAK.js","_app/immutable/chunks/scheduler.RyT_ppks.js","_app/immutable/chunks/index.C3Nj-XYD.js"];
export const stylesheets = [];
export const fonts = [];
