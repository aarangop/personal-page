

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BzUFE_pr.js","_app/immutable/chunks/scheduler.B5yUOgXq.js","_app/immutable/chunks/index.DViKZBH0.js"];
export const stylesheets = [];
export const fonts = [];
