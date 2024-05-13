import { c as create_ssr_component } from "./ssr.js";
const ReaderLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full md:w-4/5 lg:w-3/5 xl:w-2/3 2xl:w-1/3 justify-center">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  ReaderLayout as R
};
