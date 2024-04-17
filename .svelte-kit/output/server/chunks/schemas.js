import { z } from "zod";
const PodcastLinkSchema = z.object({
  platform: z.string(),
  link: z.string().url()
});
const PodcastFeedSchema = z.object({
  id: z.string(),
  slug: z.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/),
  rssFeed: z.string().url(),
  links: z.array(PodcastLinkSchema).optional()
});
z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  imgUrl: z.string().url(),
  audioUrl: z.string().url()
});
const PodcastFeedDataSchema = z.object({
  imgUrl: z.string().url(),
  title: z.string(),
  description: z.string(),
  numberOfEpisodes: z.number().int(),
  episodes: z.array(z.object({})).optional()
}).merge(PodcastFeedSchema);
const BlogPostSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  subtitle: z.string().optional(),
  slug: z.string(),
  dateCreated: z.coerce.date(),
  fileUrl: z.string().url().optional(),
  imageUrl: z.string().url().optional()
});
const BlogPostDisplaySchema = z.object({
  markdown: z.string()
}).merge(BlogPostSchema);
export {
  BlogPostSchema as B,
  PodcastFeedDataSchema as P,
  BlogPostDisplaySchema as a
};
