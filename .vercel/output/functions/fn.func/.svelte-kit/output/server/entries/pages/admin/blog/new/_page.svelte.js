import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const BlogForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { submitAction } = $$props;
  let { deleteFormAction = null } = $$props;
  let { onDelete = null } = $$props;
  if ($$props.submitAction === void 0 && $$bindings.submitAction && submitAction !== void 0)
    $$bindings.submitAction(submitAction);
  if ($$props.deleteFormAction === void 0 && $$bindings.deleteFormAction && deleteFormAction !== void 0)
    $$bindings.deleteFormAction(deleteFormAction);
  if ($$props.onDelete === void 0 && $$bindings.onDelete && onDelete !== void 0)
    $$bindings.onDelete(onDelete);
  return `<section${add_attribute("class", $$props.class, 0)}><form method="post" class="flex flex-col" enctype="multipart/form-data"${add_attribute("action", `?/${submitAction}`, 0)}><label for="title" class="label mb-1" data-svelte-h="svelte-b57y6c">Title</label> <input type="text" class="input mb-2" placeholder="Post Title" required maxlength="50" minlength="1" id="title" name="title"> <label for="subtitle" class="label mb-1" data-svelte-h="svelte-az1y48">Subtitle</label> <input maxlength="50" minlength="1" class="input mb-2" name="subtitle" id="subtitle" placeholder="Subtitle"> <label for="image" class="label mb-2" data-svelte-h="svelte-1ubwbax">Image</label> <input type="file" id="image" name="image" class="input mb-4" accept="image/*" required> <label for="file" class="label mb-2" data-svelte-h="svelte-affrpz">File</label> <input type="file" id="file" name="file" accept=".md" class="input mb-4"> <div class="flex flex-row w-full justify-start"><button class="btn variant-filled" type="submit"><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:floppy-disk" }, {}, {})}</span> <span data-svelte-h="svelte-l126tb">Save</span></button> ${onDelete ? `<button class="btn variant-filled-error" type="submit"${add_attribute("formaction", `?/${deleteFormAction}`, 0)}>Delete</button>` : ``}</div></form></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="content-center w-full p-4 flex justify-center"><div class="card min-w-64 lg:w-1/3 md:w-1/2 p-4"><h3 class="h3 mb-2" data-svelte-h="svelte-vn367u">New Blog Post</h3> ${validate_component(BlogForm, "BlogForm").$$render($$result, { submitAction: "saveBlogPost", class: "" }, {}, {})}</div></section>`;
});
export {
  Page as default
};
