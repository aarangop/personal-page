import { c as create_ssr_component, f as compute_rest_props, g as spread, h as escape_attribute_value, i as escape_object, a as add_attribute } from "./ssr.js";
import "devalue";
import "./client.js";
const SignOut = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["className", "options", "signOutPage"]);
  let { className = "" } = $$props;
  let { options = void 0 } = $$props;
  let { signOutPage = "signout" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.signOutPage === void 0 && $$bindings.signOutPage && signOutPage !== void 0)
    $$bindings.signOutPage(signOutPage);
  return `<form${spread(
    [
      { method: "POST" },
      {
        action: escape_attribute_value(`/${signOutPage}`)
      },
      {
        class: escape_attribute_value(`signOutButton ${className}`)
      },
      escape_object($$restProps)
    ],
    {}
  )}>${options ? `${options?.redirect ? `<input type="hidden" name="redirect"${add_attribute("value", options.redirect, 0)}>` : ``} ${options?.redirectTo ? `<input type="hidden" name="redirectTo"${add_attribute("value", options.redirectTo, 0)}>` : ``}` : ``} <button type="submit">${slots.submitButton ? slots.submitButton({}) : `Sign Out`}</button></form>`;
});
export {
  SignOut as S
};
