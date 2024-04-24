import { c as create_ssr_component, j as validate_store, k as subscribe, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { S as SignIn } from "../../../chunks/SignIn.js";
import { S as SignOut } from "../../../chunks/SignOut.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div>${$page.data.session?.user ? `<p>Logged In as ${escape($page.data.session?.user.name)}</p> ${validate_component(SignOut, "SignOut").$$render($$result, {}, {}, {
    submitButton: () => {
      return `<div slot="submitButton" class="btn variant-filled"><span data-svelte-h="svelte-5cn72c">Log Out</span></div>`;
    }
  })}` : `${validate_component(SignIn, "SignIn").$$render($$result, {}, {}, {
    submitButton: () => {
      return `<div slot="submitButton" class="btn variant-filled"><span data-svelte-h="svelte-m3t7dv">Log In</span></div>`;
    }
  })}`}</div>`;
});
export {
  Page as default
};
