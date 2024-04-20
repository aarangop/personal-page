import { p as prisma } from "../../../../chunks/prisma.js";
import { P as PodcastFeedDataSchema, b as PodcastLinkSchema } from "../../../../chunks/schemas.js";
import { j as json, e as error } from "../../../../chunks/index.js";
import pino from "pino";
import { XMLParser } from "fast-xml-parser";
import { z } from "zod";
const logger = pino({
  transport: {
    target: "pino-pretty"
  }
});
async function GET() {
  const response = await prisma.podcastFeed.findMany({});
  const fetchFeedDataPromises = response.map(async (feedMetaData) => {
    return await fetch(feedMetaData.rssFeed).then((res) => res.text()).then((str) => {
      const parser = new XMLParser({
        ignoreAttributes: false
      });
      let feed = parser.parse(str);
      let name = feed.rss.channel.title;
      if (!name) {
        name = "Unknown";
      }
      let imgUrl = feed.rss.channel.image?.url;
      if (!imgUrl) {
        imgUrl = "https://media1.tenor.com/m/x8v1oNUOmg4AAAAd/rickroll-roll.gif";
      }
      let numberOfEpisodes = feed.rss.channel.item.length;
      let description = feed.rss.channel.description;
      return PodcastFeedDataSchema.parse({
        ...feedMetaData,
        title: name,
        imgUrl,
        description,
        numberOfEpisodes
      });
    });
  });
  const podcasts = await Promise.all(fetchFeedDataPromises);
  return json(podcasts);
}
async function POST({ request }) {
  const log = logger.child({ name: "api/podcasts POST" });
  const data = await request.formData();
  const slug = data.get("podcast_slug");
  if (!slug) {
    throw Error("Invalid slug");
  }
  const feed = data.get("rss_feed");
  if (!feed) {
    throw Error("Invalid feed");
  }
  const spotifyUrl = data.get("spotify_link");
  let links;
  if (spotifyUrl) {
    links = z.array(PodcastLinkSchema).parse([
      {
        platform: "Spotify",
        url: spotifyUrl
      }
    ]);
  }
  try {
    const result = await prisma.podcastFeed.create({
      data: {
        slug: slug.toString(),
        rssFeed: feed.toString(),
        links: {
          create: links
        }
      }
    });
    log.info("Created new podcast feed", result);
    return json(result);
  } catch (e) {
    log.error("Failed to create podcast feed", e);
    error(500, { message: "Error creating new podcast feed" });
  }
}
const PUT = async ({ request }) => {
  const log = logger.child({ name: "api/podcasts PUT" });
  const data = await request.formData();
  const id = data.get("podcast_id");
  if (!id) {
    throw Error("Invalid podcast id!");
  }
  const slug = data.get("podcast_slug");
  if (!slug) {
    throw Error("Invalid slug");
  }
  const feed = data.get("rss_feed");
  if (!feed) {
    throw Error("Invalid feed");
  }
  const spotifyUrl = data.get("spotify_link");
  let updateQuery = {
    slug: slug.toString(),
    rssFeed: feed.toString()
  };
  if (spotifyUrl) {
    updateQuery = {
      ...updateQuery,
      links: {
        deleteMany: {},
        create: { platform: "Spotify", url: spotifyUrl.toString() }
      }
    };
  }
  try {
    const result = await prisma.podcastFeed.update({
      where: {
        id: id.toString()
      },
      data: updateQuery
    });
    log.info("Podcast feed updated", result);
    return json(result);
  } catch (e) {
    log.error(e);
    return json(e);
  }
};
export {
  GET,
  POST,
  PUT
};
