import { c as create_ssr_component, l as compute_rest_props, e as escape, i as spread, n as escape_attribute_value, j as escape_object, a as add_attribute, v as validate_component } from "./ssr.js";
import "./schemas.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full object-cover";
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
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
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
const PodcastCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { feedData } = $$props;
  let { enableEdit = false } = $$props;
  let { onClick = () => {
  } } = $$props;
  let { onEdit = () => {
  } } = $$props;
  if ($$props.feedData === void 0 && $$bindings.feedData && feedData !== void 0)
    $$bindings.feedData(feedData);
  if ($$props.enableEdit === void 0 && $$bindings.enableEdit && enableEdit !== void 0)
    $$bindings.enableEdit(enableEdit);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.onEdit === void 0 && $$bindings.onEdit && onEdit !== void 0)
    $$bindings.onEdit(onEdit);
  return `<button class="card p-4 flex flex-col backdrop-blur-sm"><div class="flex flex-row justify-between items-center space-x-2 mb-2 h-24">${validate_component(Avatar, "Avatar").$$render(
    $$result,
    {
      class: "min-w-20 max-w-20",
      shadow: "dropw-shadow-md",
      rounded: "rounded-md",
      src: feedData.imgUrl
    },
    {},
    {}
  )} <div class="flex flex-col p-2 w-full h-full justify-between"><h5 class="h5 text-lg font-medium line-clamp-1">${escape(feedData.title)}</h5> <span class="mb-2 text-right dark:text-gray-400 text-gray-500">${escape(`${feedData.numberOfEpisodes} episodes`)}</span></div></div> <div class="flex flex-col grow"><span class="line-clamp-3 text-left mb-2 text-gray-700 dark:text-gray-200">${escape(feedData.description)}</span></div> <div class="flex flex-row">${enableEdit ? `<button type="button" data-svelte-h="svelte-19napuo">Edit</button>` : ``}</div></button>`;
});
export {
  PodcastCard as P
};
