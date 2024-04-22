import { c as create_ssr_component, e as escape, b as add_attribute } from "./ssr.js";
import { r as readDuration } from "./utils.js";
import { marked } from "marked";
const BlogView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  return `<div><div class="flex flex-row mb-6"><div class="flex flex-col flex-1"><h2 class="h2 mb-2">${escape(post.title)}</h2> <h3 class="h3 text-gray-500 dark:text-gray-400 mb-2 flex-1">${escape(post.subtitle)}</h3> <span class="text-gray-400 dark:text-gray-400">${escape(`${readDuration(post.markdown)} min read`)}</span></div> <img${add_attribute("src", post.imageUrl, 0)}${add_attribute("alt", post.title, 0)} class="sm:w-12 sm:h-12 lg:w-36 lg:h-36 object-cover rounded-lg drop-shadow-lg"></div> <div class="font-serif text-gray-900 dark:text-gray-100"><!-- HTML_TAG_START -->${marked.parse(post.markdown)}<!-- HTML_TAG_END --></div></div>`;
});
export {
  BlogView as B
};
