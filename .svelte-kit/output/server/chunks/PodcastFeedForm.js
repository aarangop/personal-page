import { c as create_ssr_component, a as add_attribute, v as validate_component } from "./ssr.js";
import "fast-xml-parser";
import { I as Icon } from "./Icon.js";
const PodcastFeedForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { slug = "" } = $$props;
  let { submitFormAction } = $$props;
  let { feedUrl = "" } = $$props;
  let { podcastId = "" } = $$props;
  let { deleteAction = "" } = $$props;
  if ($$props.slug === void 0 && $$bindings.slug && slug !== void 0)
    $$bindings.slug(slug);
  if ($$props.submitFormAction === void 0 && $$bindings.submitFormAction && submitFormAction !== void 0)
    $$bindings.submitFormAction(submitFormAction);
  if ($$props.feedUrl === void 0 && $$bindings.feedUrl && feedUrl !== void 0)
    $$bindings.feedUrl(feedUrl);
  if ($$props.podcastId === void 0 && $$bindings.podcastId && podcastId !== void 0)
    $$bindings.podcastId(podcastId);
  if ($$props.deleteAction === void 0 && $$bindings.deleteAction && deleteAction !== void 0)
    $$bindings.deleteAction(deleteAction);
  return `<form method="POST" class="flex p-4 flex-col grow rounded-lg"><div class="flex flex-col space-y-2 grow mb-4"><div><label class="mb-2 label" for="podcast_slug" data-svelte-h="svelte-1mk8vbq">Slug</label> <input class="lowercase input" pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$" type="text" name="podcast_slug" placeholder="My Awesome Podcast" required${add_attribute("value", slug, 0)}></div> <div><label class="label mb-2" for="rss_feed" data-svelte-h="svelte-172u07t">RSS Feed URL</label> <input${add_attribute(
    "class",
    `input ${""}`,
    0
  )} type="url" name="rss_feed" placeholder="https://my.awesome.podcast/rss"${add_attribute("value", feedUrl, 0)}> ${`${``}`} <div class="hidden"><input name="podcast_id"${add_attribute("value", podcastId, 0)}></div></div> <button class="btn variant-filled" ${!feedUrl ? "disabled" : ""}>Test feed</button></div> <div class="flex flex-row justify-between space-x-2"><button type="submit" class="btn variant-filled" ${"disabled"}${add_attribute("formaction", `?/${submitFormAction}`, 0)}>Save</button> ${deleteAction.length ? `<button class="btn variant-filled-error" type="submit"${add_attribute("formaction", `?/${deleteAction}`, 0)}>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "w-4 h-4 me-2",
      icon: "flowbite:trash-bin-outline"
    },
    {},
    {}
  )}
				Delete</button>` : ``}</div></form>`;
});
export {
  PodcastFeedForm as P
};
