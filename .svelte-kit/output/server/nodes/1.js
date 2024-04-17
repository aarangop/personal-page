

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D60tJvAZ.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js","_app/immutable/chunks/stores.C1OY6Xip.js","_app/immutable/chunks/entry.CU6OfPmp.js"];
export const stylesheets = [];
export const fonts = [];
