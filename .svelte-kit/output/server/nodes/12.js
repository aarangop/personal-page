

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/podcast/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.CqKDSDUV.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js"];
export const stylesheets = [];
export const fonts = [];
