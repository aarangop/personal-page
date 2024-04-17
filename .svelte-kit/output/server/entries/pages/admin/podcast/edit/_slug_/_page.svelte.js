import { c as create_ssr_component, v as validate_component } from "../../../../../../chunks/ssr.js";
import { P as PodcastFeedForm } from "../../../../../../chunks/PodcastFeedForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let podcastId = data.id;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section class="flex flex-col grow lg:px-24 px-12 py-4 items-center"><div class="card min-w-128 grow flex justify-center"><h1 class="font-serif text-2xl mb-4 text-gray-950 dark:text-white" data-svelte-h="svelte-vlfo7v">Edit Podcast Feed</h1> ${validate_component(PodcastFeedForm, "PodcastFeedForm").$$render(
      $$result,
      Object.assign({}, data, { deleteAction: "deleteFeed" }, { submitFormAction: "saveFeed" }, { podcastId }),
      {
        podcastId: ($$value) => {
          podcastId = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></section>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
