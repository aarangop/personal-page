import { c as create_ssr_component, g as each, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogCard } from "../../../chunks/BlogCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex flex-col"><h2 class="h2 text-2xl mb-2" data-svelte-h="svelte-qcy91p">My Blog</h2> <div class="flex flex-col">${each(data.posts, (blog) => {
    return `${validate_component(BlogCard, "BlogCard").$$render($$result, { blogPost: blog }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
