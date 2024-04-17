import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component } from "./ssr.js";
import "./schemas.js";
import { I as Icon } from "./Icon.js";
import "./ProgressBar.svelte_svelte_type_style_lang.js";
const PodcastCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { feedData } = $$props;
  let { enableEdit = false } = $$props;
  let { onClick = (event) => {
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
  return `<div class="card p-4 flex flex-col backdrop-blur-sm"><div class="flex flex-row justify-between items-center space-x-2 mb-2 h-24"><div class="flex flex-col p-2 w-full h-full justify-between"><h5 class="h5 text-lg font-medium line-clamp-1">${escape(feedData.title)}</h5> <span class="dark:text-gray-400 text-gray-500">${escape(`${feedData.numberOfEpisodes} episodes`)}</span></div> <img class="min-w-20 max-w-20 drop-shadow-sm rounded-lg object-cover"${add_attribute("src", feedData.imgUrl, 0)} alt="podcast feed"></div> <div class="flex flex-col grow mb-4"><span class="line-clamp-3 text-left text-gray-700 dark:text-gray-200">${escape(feedData.description)}</span></div> <div class="justify-end flex"><div class="btn-group variant-soft"><button>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:arrow-up-right" }, {}, {})}</button> ${feedData.links ? `<a type="button" class="btn variant-filled"${add_attribute("href", feedData.links[0].link, 0)}><span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ant-design:spotify-filled" }, {}, {})}</span> <span data-svelte-h="svelte-1fvwtj4">Listen on Spotify</span></a>` : ``} ${enableEdit ? `<button type="button" class="btn variant-filled-secondary" data-svelte-h="svelte-1ifa87o">Edit</button>` : ``}</div></div></div>`;
});
export {
  PodcastCard as P
};
