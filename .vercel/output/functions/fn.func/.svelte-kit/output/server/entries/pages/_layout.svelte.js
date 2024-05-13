import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, d as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, i as validate_store, j as subscribe, v as validate_component, k as each } from "../../chunks/ssr.js";
import { m as modeCurrent, s as setInitialClassState } from "../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
import { I as Icon } from "../../chunks/Icon.js";
import { twMerge } from "tailwind-merge";
import { p as page } from "../../chunks/stores.js";
import "devalue";
import "../../chunks/client.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { w as writable } from "../../chunks/index2.js";
import { g as getBreadCrumbs } from "../../chunks/utils.js";
const storePopup = writable(void 0);
const cBase = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}> <div class="${"app-bar-row-main " + escape(classesRowMain, true)}"> ${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}  <div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>  ${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  let cBase2 = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
  let cImage = "w-full object-cover";
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase2} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `  <figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", fontSize, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const cTrack = "cursor-pointer";
const cThumb = "aspect-square scale-[0.8] flex justify-center items-center";
const cIcon = "w-[70%] aspect-square";
const LightSwitch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let trackBg;
  let thumbBg;
  let thumbPosition;
  let iconFill;
  let classesTrack;
  let classesThumb;
  let classesIcon;
  let $modeCurrent, $$unsubscribe_modeCurrent;
  validate_store(modeCurrent, "modeCurrent");
  $$unsubscribe_modeCurrent = subscribe(modeCurrent, (value) => $modeCurrent = value);
  let { title = "Toggle light or dark mode." } = $$props;
  let { bgLight = "bg-surface-50" } = $$props;
  let { bgDark = "bg-surface-900" } = $$props;
  let { fillLight = "fill-surface-50" } = $$props;
  let { fillDark = "fill-surface-900" } = $$props;
  let { width = "w-12" } = $$props;
  let { height = "h-6" } = $$props;
  let { ring = "ring-[1px] ring-surface-500/30" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  const cTransition = `transition-all duration-[200ms]`;
  const svgPath = {
    sun: "M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",
    moon: "M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
  };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bgLight === void 0 && $$bindings.bgLight && bgLight !== void 0)
    $$bindings.bgLight(bgLight);
  if ($$props.bgDark === void 0 && $$bindings.bgDark && bgDark !== void 0)
    $$bindings.bgDark(bgDark);
  if ($$props.fillLight === void 0 && $$bindings.fillLight && fillLight !== void 0)
    $$bindings.fillLight(fillLight);
  if ($$props.fillDark === void 0 && $$bindings.fillDark && fillDark !== void 0)
    $$bindings.fillDark(fillDark);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.ring === void 0 && $$bindings.ring && ring !== void 0)
    $$bindings.ring(ring);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  trackBg = $modeCurrent === true ? bgLight : bgDark;
  thumbBg = $modeCurrent === true ? bgDark : bgLight;
  thumbPosition = $modeCurrent === true ? "translate-x-[100%]" : "";
  iconFill = $modeCurrent === true ? fillLight : fillDark;
  classesTrack = `${cTrack} ${cTransition} ${width} ${height} ${ring} ${rounded} ${trackBg} ${$$props.class ?? ""}`;
  classesThumb = `${cThumb} ${cTransition} ${height} ${rounded} ${thumbBg} ${thumbPosition}`;
  classesIcon = `${cIcon} ${iconFill}`;
  $$unsubscribe_modeCurrent();
  return `${$$result.head += `<!-- HEAD_svelte-gewkj4_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-gewkj4_END -->`, ""} <div class="${"lightswitch-track " + escape(classesTrack, true)}" role="switch" aria-label="Light Switch"${add_attribute("aria-checked", $modeCurrent, 0)}${add_attribute("title", title, 0)} tabindex="0"> <div class="${"lightswitch-thumb " + escape(classesThumb, true)}"> <svg class="${"lightswitch-icon " + escape(classesIcon, true)}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path${add_attribute("d", $modeCurrent ? svgPath.sun : svgPath.moon, 0)}></path></svg></div></div>`;
});
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "/" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${add_attribute("href", href, 0)}${add_attribute("class", twMerge($$props.class, "hover:font-semibold transition-all"), 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
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
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="sticky top-0 z-10">${validate_component(AppBar, "AppBar").$$render(
    $$result,
    {
      slotDefault: "place-self-center flex flex-row space-x-6 w-full justify-end",
      slotTrail: "place-content-end",
      background: "backdrop-blur-md bg-gray-100/50 dark:bg-gray-800/50 drop-shadow-sm"
    },
    {},
    {
      trail: () => {
        return `${validate_component(Icon, "Icon").$$render($$result, { icon: "bi:github" }, {}, {})} ${validate_component(Icon, "Icon").$$render($$result, { icon: "bi:linkedin" }, {}, {})} ${validate_component(LightSwitch, "LightSwitch").$$render($$result, {}, {}, {})} ${$page.data.session?.user ? `<div>${validate_component(Avatar, "Avatar").$$render(
          $$result,
          {
            width: "w-10",
            src: $page.data.session?.user.image?.toString()
          },
          {},
          {}
        )} <div data-popup="avatarPopup" class="card p-4 shadow-xl"><div class="arrow"></div> ${validate_component(SignOut, "SignOut").$$render($$result, {}, {}, {
          submitButton: () => {
            return `<div class="btn variant-filled" slot="submitButton"><span data-svelte-h="svelte-5cn72c">Log Out</span></div>`;
          }
        })}</div></div>` : ``} `;
      },
      default: () => {
        return `${validate_component(Link, "Link").$$render($$result, { href: "/", class: "min-w-20" }, {}, {
          default: () => {
            return `Home`;
          }
        })} ${validate_component(Link, "Link").$$render($$result, { href: "/podcast", class: "min-w-20" }, {}, {
          default: () => {
            return `Podcast`;
          }
        })} ${validate_component(Link, "Link").$$render($$result, { href: "/blog", class: "min-w-20" }, {}, {
          default: () => {
            return `Blog`;
          }
        })} `;
      },
      lead: () => {
        return `${validate_component(Link, "Link").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<h3 class="font-mono" data-svelte-h="svelte-19wslu">@andresap</h3>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url } = $$props;
  let breadCrumbs = [];
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  breadCrumbs = getBreadCrumbs(url, { href: "/", text: "Home" });
  return `<ol class="breadcrumb bg-gray-100/30 dark:bg-gray-800/30 flex-0 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-300/70 dark:border-gray-400/30">${each(breadCrumbs, (crumb, i) => {
    return `${i < breadCrumbs.length - 1 ? `<li class="crumb"><a${add_attribute("href", crumb.href, 0)} class="anchor">${escape(crumb.text)}</a></li> <li class="crumb-separator" aria-hidden data-svelte-h="svelte-1t7edrb">/</li>` : `<li class="crumb">${escape(crumb.text)}</li>`}`;
  })}</ol>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let url;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  url = $page.url.pathname;
  $$unsubscribe_page();
  return `<main class="flex flex-col h-full w-full overflow-auto absolute top-0">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="self-center mb-2 mt-2">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { url }, {}, {})}</div> <div class="flex-1 flex justify-center p-2 lg:px-8">${slots.default ? slots.default({}) : ``}</div></main>`;
});
export {
  Layout as default
};
