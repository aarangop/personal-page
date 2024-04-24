import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { B as BlogView } from "../../../../../chunks/BlogView.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="self-center py-4 flex flex-col">${validate_component(BlogView, "BlogView").$$render($$result, { post: data.blogPost }, {}, {})}</section>`;
});
export {
  Page as default
};
