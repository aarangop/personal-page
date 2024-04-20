

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BasVhQ8u.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js"];
export const stylesheets = [];
export const fonts = [];
