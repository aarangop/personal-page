import { c as create_ssr_component, k as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { B as BlogCard } from "../../../../chunks/BlogCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="flex flex-col"><div class="flex flex-row justify-between mb-2 items-center"><h2 class="h2 text-2xl mb-2" data-svelte-h="svelte-127oq5k">Blogs Admin Page</h2> <button class="btn variant-filled" data-svelte-h="svelte-14a0g6b">Add Blog Entry</button></div> <div class="flex flex-col space-y-4">${each(data.blogPosts, (blogPost) => {
    return `${validate_component(BlogCard, "BlogCard").$$render($$result, { blogPost }, {}, {})}`;
  })}</div></section>`;
});
export {
  Page as default
};
