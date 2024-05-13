

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CFwrB6hi.js","_app/immutable/chunks/16.qRzACfvT.js","_app/immutable/chunks/index.DWOnfsL5.js","_app/immutable/chunks/ReaderLayout.MiE4ZAnT.js"];
export const stylesheets = [];
export const fonts = [];
