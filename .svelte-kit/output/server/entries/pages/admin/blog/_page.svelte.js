import { c as create_ssr_component, g as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { B as BlogCard } from "../../../../chunks/BlogCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="px-16 py-4 flex flex-col space-y-4 grow"><h2 class="h2 text-2xl grow-0" data-svelte-h="svelte-xkwqty">Blogs Admin Page</h2> <div class="flex flex-col space-y-2 grow"><div class="flex flex-col grow space-y-2">${each(data.blogPosts, (blogPost) => {
    return `${validate_component(BlogCard, "BlogCard").$$render($$result, { blogPost }, {}, {})}`;
  })}</div> <div><button class="btn variant-filled" data-svelte-h="svelte-14a0g6b">Add Blog Entry</button></div></div></section>`;
});
export {
  Page as default
};
