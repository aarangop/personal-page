import { c as create_ssr_component, g as each, v as validate_component, e as escape } from "../../../chunks/ssr.js";
import { P as PodcastCard } from "../../../chunks/PodcastCard.js";
import { g as goto } from "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const onPodcastClick = (slug) => {
    goto();
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1ngju15_START -->${$$result.title = `<title>Podcasts</title>`, ""}<!-- HEAD_svelte-1ngju15_END -->`, ""} <section class="flex flex-col"><h2 class="h2 mb-4 dark:text-white text-2xl" data-svelte-h="svelte-1iff8uz">My Podcasts</h2> <div class="flex flex-col space-y-2 grow"><div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-2">${data.podcastFeeds.length > 0 ? `${each(data.podcastFeeds, (feed) => {
    return `${validate_component(PodcastCard, "PodcastCard").$$render(
      $$result,
      {
        enableEdit: false,
        onClick: () => onPodcastClick(feed.slug),
        feedData: feed
      },
      {},
      {
        default: () => {
          return `${escape(feed.slug)}`;
        }
      }
    )}`;
  })}` : ``}</div></div></section>`;
});
export {
  Page as default
};
