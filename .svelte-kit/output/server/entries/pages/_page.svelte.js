import { c as create_ssr_component, a as add_attribute } from "../../chunks/ssr.js";
const myPhoto = "/_app/immutable/assets/my_photo.naCLr7ks.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-yrdlok_START -->${$$result.title = `<title>@andresap</title>`, ""}<!-- HEAD_svelte-yrdlok_END -->`, ""} <section class="flex flex-col space-y-4 justify-start"><h1 class="h2" data-svelte-h="svelte-copysk">About Me</h1> <div class="flex flex-row space-x-4 drop-shadow-lg bg-gradient-to-tl from-secondary-100/30 to-tertiary-100 dark:from-secondary-900/70 dark:to-tertiary-700/70 backdrop-blur-sm border border-gray-200/10 dark:border-gray-600/30 p-8 rounded-lg"><img alt="This website's author"${add_attribute("src", myPhoto, 0)} class="rounded-full lg:h-64 lg:w-64 object-cover drop-shadow-lg"> <div class="flex justify-between flex-col space-y-2 p-2 rounded-lg drop-shadow-md"><div class="flex items-end"><div><p data-svelte-h="svelte-1stz1gk">This is me, </p></div> <div class="flex-1 text-left"><p class="text-2xl" data-svelte-h="svelte-glrmjd">Andrés!</p></div></div> <p class="leading-relaxed h-full drop-shadow-sm">...developer, aspiring pocaster from Colombia. Checkout my <a class="font-bold" href="/podcast" data-svelte-h="svelte-qlhgk4">podcasts</a>
				and
				<a class="font-semibold" href="/blog" data-svelte-h="svelte-jdmnsp">blog</a>!</p></div></div></section>`;
});
export {
  Page as default
};
