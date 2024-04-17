import { c as create_ssr_component, g as each, v as validate_component } from "../../../../chunks/ssr.js";
import "../../../../chunks/client.js";
import { P as PodcastCard } from "../../../../chunks/PodcastCard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="px-16 py-4 flex flex-col space-y-4 grow"><h1 class="font-serif text-2xl grow-0" data-svelte-h="svelte-1qkq773">Podcasts admin page</h1> <div class="flex flex-col space-y-2 grow"><div class="flex flex-col grow">${data.podcastFeeds.length == 0 ? `<div class="" data-svelte-h="svelte-12ytcvi">No podcast feeds!</div>` : `<div class="grid lg:grid-cols-3 gap-2">${each(data.podcastFeeds, (feed) => {
    return `${validate_component(PodcastCard, "PodcastCard").$$render($$result, { enableEdit: true, feedData: feed }, {}, {})}`;
  })}</div>`}</div> <div><button class="btn variant-filled" data-svelte-h="svelte-k1fv47">Add Podcast Feed</button></div></div></section>`;
});
export {
  Page as default
};
