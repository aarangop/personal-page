import { c as create_ssr_component, e as escape, v as validate_component, a as add_attribute } from "../../../chunks/ssr.js";
import { I as Icon } from "../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.providers.filter((provider) => provider.id === "github");
  let credentialsProvider = data.providers.filter((provider) => provider.id === "credentials");
  let username = "";
  let password = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h2 class="h2 mb-4" data-svelte-h="svelte-1q515s4">Log In</h2> ${data.session ? `<div class="flex flex-col space-y-2"><div>You&#39;re currently logged in as ${escape(data.session.user?.name)}</div> <button class="btn variant-filled" data-svelte-h="svelte-1g06cml">Log Out</button></div>` : `<div class="flex flex-col space-y-2"><button class="btn variant-filled"><span data-svelte-h="svelte-1cqsa9">Sign In with GitHub</span> <span>${validate_component(Icon, "Icon").$$render($$result, { icon: "bi:github" }, {}, {})}</span></button> ${credentialsProvider ? `<div class="flex flex-row justify-between items-center space-x-2"><hr class="flex-1"> <span data-svelte-h="svelte-17wkmf7">or</span> <hr class="flex-1"></div> <form class="card flex flex-col p-4"><label class="label" for="username" data-svelte-h="svelte-1dmp8vp">Username</label> <input class="input mb-2" type="text" name="username"${add_attribute("value", username, 0)}> <label class="label" for="password" data-svelte-h="svelte-m1esth">Password</label> <input class="input mb-2" type="password" name="password"${add_attribute("value", password, 0)}> <button class="btn variant-filled" data-svelte-h="svelte-izxejo">Log In</button></form>` : ``}</div>`}`;
});
export {
  Page as default
};
