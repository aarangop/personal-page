import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
const BlogCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogPost } = $$props;
  let { onEdit = null } = $$props;
  let { onDelete = null } = $$props;
  if ($$props.blogPost === void 0 && $$bindings.blogPost && blogPost !== void 0)
    $$bindings.blogPost(blogPost);
  if ($$props.onEdit === void 0 && $$bindings.onEdit && onEdit !== void 0)
    $$bindings.onEdit(onEdit);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  return `<div class="card flex flex-row overflow-clip items-center backdrop-blur-sm" data-testid="blog-post"><img${add_attribute("src", blogPost.imageUrl, 0)} class="w-36 h-36 object-cover"${add_attribute("alt", blogPost.title, 0)}> <div class="flex flex-col h-full w-full p-4"><h4 class="h4 text-left mb-2">${escape(blogPost.title)}</h4> <span class="text-left flex-1 text-gray-600 dark:text-gray-300 line-clamp-1 mb-1 font-serif">${escape(blogPost.subtitle)}</span> <span class="text-left text-gray-500 dark:text-gray-400 text-sm">${escape(new Date(blogPost.dateCreated).toDateString())}</span></div> <div class="p-2 flex flex-row space-x-2"><div class="btn-group variant-soft"><a${add_attribute("href", `/blog/${blogPost.slug}`, 0)}><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:arrow-up-right" }, {}, {})}</span></a> ${onEdit ? `<a${add_attribute("href", `/admin/blog/edit/${blogPost.slug}`, 0)}><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ant-design:edit-filled" }, {}, {})}</span></a>` : ``}</div> ${onDelete ? `<button class="btn-icon variant-filled-error">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:trash" }, {}, {})}</button>` : ``}</div></div>`;
});
export {
  BlogCard as B
};
