import { z } from 'zod';

export enum UserRoles {
	ADMIN = 'admin',
	USER = 'user'
}

export type PodcastFeed = {
	id: string;
	slug: string;
	rssFeed: string;
};

export const PodcastLinkSchema = z.object({
	platform: z.string(),
	url: z.string().url()
});

export const PodcastFeedSchema = z.object({
	id: z.string(),
	slug: z.string().regex(/^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/),
	rssFeed: z.string().url(),
	links: z.array(PodcastLinkSchema).optional()
});

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
	.merge(PodcastFeedSchema);

export const BlogPostSchema = z.object({
	id: z.string().optional(),
	title: z.string(),
	subtitle: z.string().optional(),
	slug: z.string(),
	dateCreated: z.coerce.date(),
	fileUrl: z.string().url().optional(),
	imageUrl: z.string().url().optional()
});

export const BlogPostDisplaySchema = z
	.object({
		markdown: z.string()
	})
	.merge(BlogPostSchema);
