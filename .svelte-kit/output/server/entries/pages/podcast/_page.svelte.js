import { c as create_ssr_component, v as validate_component, k as each, e as escape } from "../../../chunks/ssr.js";
import { P as PodcastCard } from "../../../chunks/PodcastCard.js";
import "../../../chunks/client.js";
import { R as ReaderLayout } from "../../../chunks/ReaderLayout.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ngju15_START -->${$$result.title = `<title>Podcasts</title>`, ""}<!-- HEAD_svelte-1ngju15_END -->`, ""} ${validate_component(ReaderLayout, "ReaderLayout").$$render($$result, {}, {}, {
    default: () => {
      return `<section class="flex flex-col"><h2 class="h2 mb-4 dark:text-white text-2xl" data-svelte-h="svelte-1iff8uz">My Podcasts</h2> <div class="flex flex-col space-y-2 grow"><div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">${data.podcastFeeds.length > 0 ? `${each(data.podcastFeeds, (feed) => {
        return `${validate_component(PodcastCard, "PodcastCard").$$render($$result, { enableEdit: false, feedData: feed }, {}, {
          default: () => {
            return `${escape(feed.slug)}`;
          }
        })}`;
      })}` : ``}</div></div></section>`;
    }
  })}`;
});
export {
  Page as default
};
