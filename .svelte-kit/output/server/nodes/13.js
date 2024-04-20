

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/podcast/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.BNkcdNSF.js","_app/immutable/chunks/scheduler.CRkTyoSA.js","_app/immutable/chunks/index.C3GTAeEF.js"];
export const stylesheets = [];
export const fonts = [];
