import { z } from 'zod';

export enum UserRoles {
	ADMIN = 'admin',
	USER = 'user'
}

export const PodcastLinkSchema = z.object({
	platform: z.string(),
	url: z.string().url()
});

export const podcastFeedSchema = z.object({
	id: z.string().optional(),
	title: z.string(),
	slug: z.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/, { message: 'Invalid slug' }),
	rssFeed: z.string().url(),
	links: z.array(PodcastLinkSchema).optional()
});

export type PodcastFeedSchema = z.infer<typeof podcastFeedSchema>;

export const PodcastEpisodeSchema = z.object({
	id: z.string().optional(),
	title: z.string(),
	description: z.string(),
	imgUrl: z.string().url(),
	audioUrl: z.string().url()
});

export const PodcastFeedDataSchema = z
	.object({
		imgUrl: z.string().url(),
		title: z.string(),
		description: z.string(),
		numberOfEpisodes: z.number().int(),
		episodes: z.array(z.object({})).optional()
	})
	.merge(podcastFeedSchema);

export const BlogPostSchema = z.object({
	id: z.string().optional(),
	title: z.string(),
	subtitle: z.string(),
	slug: z.string(),
	dateCreated: z.coerce.date(),
	fileUrl: z.string().url(),
	imageUrl: z.string().url()
});

export const BlogPostDisplaySchema = z
	.object({
		content: z.string()
	})
	.merge(BlogPostSchema);
