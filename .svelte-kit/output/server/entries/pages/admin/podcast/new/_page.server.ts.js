import { p as prisma } from "../../../../../chunks/prisma.js";
import { f as fail, r as redirect } from "../../../../../chunks/index.js";
const actions = {
  saveFeed: async ({ request }) => {
    const data = await request.formData();
    const podcastName = data.get("podcast_slug");
    const podcastFeed = data.get("rss_feed");
    if (!podcastName) {
      return fail(400, { podcastName, missing: true });
    }
    if (!podcastFeed) {
      return fail(400, { podcastFeed, missing: true });
    }
    await prisma.podcastFeeds.create({
      data: {
        slug: data.get("podcast_slug").toString(),
        rssFeed: data.get("rss_feed").toString()
      }
    });
    throw redirect(303, "/admin/podcast");
  }
};
export {
  actions
};
