import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const BlogForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form method="post" class="h-full flex flex-col justify-between" enctype="multipart/form-data"><div class="flex flex-col"><label for="title" class="label mb-1" data-svelte-h="svelte-b57y6c">Title</label> <input type="text" class="input mb-2" placeholder="Post Title" required maxlength="50" minlength="1" id="title" name="title"> <label for="subtitle" class="label mb-1" data-svelte-h="svelte-az1y48">Subtitle</label> <input maxlength="50" minlength="1" class="input mb-2" name="subtitle" id="subtitle" placeholder="Subtitle"> <label for="image" class="label mb-2" data-svelte-h="svelte-1ubwbax">Image</label> <input type="file" id="image" name="image" class="input mb-4" accept="image/*" required> <label for="file" class="label mb-2" data-svelte-h="svelte-affrpz">File</label> <input type="file" id="file" name="file" accept=".md" class="input mb-4"></div> <div class="flex flex-row w-full justify-start"><button class="btn variant-filled flex-1" type="submit"><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:floppy-disk" }, {}, {})}</span> <span data-svelte-h="svelte-l126tb">Save</span></button> ${slots.editButton ? slots.editButton({}) : ``} ${slots.deleteButton ? slots.deleteButton({}) : ``}</div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="card p-4 flex-1 flex flex-col"><h3 class="h3 mb-2" data-svelte-h="svelte-vn367u">New Blog Post</h3> <div class="flex-1">${validate_component(BlogForm, "BlogForm").$$render($$result, {}, {}, {})}</div></section>`;
});
export {
  Page as default
};
