import { p as prisma } from "../../../../../../chunks/prisma.js";
import { r as redirect } from "../../../../../../chunks/index.js";
const load = async ({ params }) => {
  const feedData = await prisma.podcastFeed.findUnique({ where: { slug: params.slug } });
  return {
    ...feedData,
    podcastId: feedData?.id
  };
};
const actions = {
  saveFeed: async ({ fetch, request }) => await fetch("/api/podcast", {
    method: "POST",
    body: await request.formData()
  }).then(async (data) => {
    const res = await data.json();
    redirect(303, `/admin/podcast/${res.slug}`);
  }),
  deleteFeed: async ({ request }) => {
    const data = await request.formData();
    console.log("Deleting feed");
    const id = data.get("podcast_id");
    if (!id) {
      throw Error("Invalid podcast id");
    }
    const result = await prisma.podcastFeed.delete({
      where: { id: id.toString() }
    });
    redirect(303, "/admin/podcast");
    return result;
  }
};
export {
  actions,
  load
};
