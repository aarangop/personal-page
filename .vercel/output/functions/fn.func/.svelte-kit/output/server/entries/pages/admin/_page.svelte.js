import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { S as SignIn } from "../../../chunks/SignIn.js";
import "devalue";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row">${validate_component(SignIn, "SignIn").$$render($$result, { provider: "github", signInPage: "signin" }, {}, {})} <a class="card p-4" href="/admin/podcast" data-svelte-h="svelte-1wastld">Podcast</a> <a class="card p-4" href="/admin/blog" data-svelte-h="svelte-1s4kslt">Blog</a></div>`;
});
export {
  Page as default
};
