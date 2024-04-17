import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import { marked } from "marked";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const readDuration = (text) => (text.length / 350).toFixed(0);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="self-center py-4 flex flex-col"><div class="flex flex-row mb-6"><div class="flex flex-col flex-1"><h2 class="h2 mb-2">${escape(data.blogPost.title)}</h2> <h3 class="h3 text-gray-500 dark:text-gray-400 mb-2 flex-1">${escape(data.blogPost.subtitle)}</h3> <span class="text-gray-400 dark:text-gray-400">${escape(`${readDuration(data.blogPost.markdown)} min read`)}</span></div> <img${add_attribute("src", data.blogPost.imageUrl, 0)}${add_attribute("alt", data.blogPost.title, 0)} class="sm:w-12 sm:h-12 lg:w-36 lg:h-36 object-cover rounded-lg drop-shadow-lg"></div> <div class="font-serif text-gray-900 dark:text-gray-100"><!-- HTML_TAG_START -->${marked.parse(data.blogPost.markdown)}<!-- HTML_TAG_END --></div></section>`;
});
export {
  Page as default
};
