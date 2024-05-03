import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { R as ReaderLayout } from "../../../chunks/ReaderLayout.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ReaderLayout, "ReaderLayout").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
