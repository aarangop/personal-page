import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, a as add_attribute, l as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
const SignIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["className", "provider", "signInPage", "options", "authorizationParams"]);
  let { className = "" } = $$props;
  let { provider = "" } = $$props;
  let { signInPage = "signin" } = $$props;
  let { options = void 0 } = $$props;
  let { authorizationParams = void 0 } = $$props;
  const callbackUrl = options instanceof FormData ? options.get("redirectTo") : options?.redirectTo;
  const redirect = options instanceof FormData ? options.get("redirect") : options?.redirectTo;
  const authorizationParamsInputs = authorizationParams ? typeof authorizationParams === "string" && authorizationParams ? new URLSearchParams(authorizationParams) : authorizationParams : void 0;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.provider === void 0 && $$bindings.provider && provider !== void 0)
    $$bindings.provider(provider);
  if ($$props.signInPage === void 0 && $$bindings.signInPage && signInPage !== void 0)
    $$bindings.signInPage(signInPage);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.authorizationParams === void 0 && $$bindings.authorizationParams && authorizationParams !== void 0)
    $$bindings.authorizationParams(authorizationParams);
  return `<form${spread(
    [
      { method: "POST" },
      {
        action: escape_attribute_value(`/${signInPage}`)
      },
      {
        class: escape_attribute_value(`signInButton ${className}`)
      },
      escape_object($$restProps)
    ],
    {}
  )}><input type="hidden" name="providerId"${add_attribute("value", provider, 0)}> ${callbackUrl ? `<input type="hidden" name="callbackUrl"${add_attribute("value", callbackUrl, 0)}>` : ``} ${redirect ? `<input type="hidden" name="redirect"${add_attribute("value", redirect, 0)}>` : ``} ${authorizationParamsInputs ? `${each(Object.entries(authorizationParamsInputs), ([key, value]) => {
    return `<input type="hidden"${add_attribute("name", `authorizationParams-${key}`, 0)}${add_attribute("value", value, 0)}>`;
  })}` : ``} ${provider === "credentials" ? `${slots.credentials ? slots.credentials({}) : ``}` : ``}  ${provider === "email" || provider === "sendgrid" || provider === "resend" ? `${slots.email ? slots.email({}) : ` <label class="section-header"${add_attribute("for", `input-email-for-${provider}-provider`, 0)}>Email</label> <input id="input-email-for-email-provider" type="email" name="email" placeholder="email@example.com" required> `}` : ``} <button type="submit">${slots.submitButton ? slots.submitButton({}) : `Signin${escape(provider ? ` with ${provider}` : "")}`}</button></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row">${validate_component(SignIn, "SignIn").$$render($$result, { provider: "github", signInPage: "signin" }, {}, {})} <a class="card p-4" href="/admin/podcast" data-svelte-h="svelte-1wastld">Podcast</a> <a class="card p-4" href="/admin/blog" data-svelte-h="svelte-1s4kslt">Blog</a></div>`;
});
export {
  Page as default
};
