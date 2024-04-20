import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { P as PodcastFeedForm } from "../../../../../chunks/PodcastFeedForm.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1iwem0m_START -->${$$result.title = `<title>New Podcast</title>`, ""}<!-- HEAD_svelte-1iwem0m_END -->`, ""} <section class="flex flex-col py-4 items-center"><h1 class="font-serif flex-1 text-2xl mb-4" data-svelte-h="svelte-16pziw9">New Podcast Feed</h1> <div class="card flex justify-center w-full overflow-scroll">${validate_component(PodcastFeedForm, "PodcastFeedForm").$$render($$result, { submitFormAction: "createFeed" }, {}, {})}</div></section>`;
});
export {
  Page as default
};
