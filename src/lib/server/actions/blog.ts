import { GCP_BUCKET } from '$env/static/private';
import prisma from '$lib/prisma';
import { BlogPostDisplaySchema, BlogPostSchema } from '$lib/schemas';
import { getGCPStorage, uploadAndGetPublicUrl } from '$lib/server/utils/storage';
import { compressImage } from '$lib/server/utils/utils';
import { toSlug } from '$lib/client/utils/utils';
import type { Prisma } from '@prisma/client';
import { error, json, redirect, type RequestEvent } from '@sveltejs/kit';
import { z } from 'zod';
import { getBlogPostHTMLContent } from '../utils/blog';

/**
 * This file contains functions for interacting with the blog posts in the database.
 * The functions in this file should be thought of as the "controller" for the blog posts.
 */

/**
 * Fetches blog posts from the database using the provided query.
 * @param query Prisma.BlogPostWhereInput - The query to use when fetching blog posts.
 * @returns An array of BlogPostDisplaySchema objects.
 */
export const getBlogPosts = async (query: Prisma.BlogPostWhereInput = {}) => {
	const entries = await prisma.blogPost.findMany({ where: query });
	return z.array(BlogPostSchema).parse(entries);
};

/**
 * Fetches a blog post from the database using the provided slug.
 * @param slug The slug of the blog post to fetch.
 * @returns A BlogPostDisplaySchema object.
 */
export const getBlogPostBySlug = async (slug: string) => {
	const post = await prisma.blogPost.findUnique({ where: { slug } });
	if (!post?.fileUrl) {
		throw error(500, { message: 'Blog post content not found' });
	}
	if (!post.imageUrl) {
		throw error(500, { message: 'Blog post image not found' });
	}
	const file = await fetch(post.fileUrl);
	return {
		...post,
		content: getBlogPostHTMLContent(await file.text())
	} as z.infer<typeof BlogPostDisplaySchema>;
};

/**
 * Creates a new blog post in the database.
 * @param data Blog post data to create.
 * @returns BlogPostSchema object.
 */
export const createBlogEntry = async (data: z.infer<typeof BlogPostSchema>) => {
	const entry = await prisma.blogPost.create({ data });
	return BlogPostSchema.parse(entry);
};

/**
 * Creates a new blog post from the provided Request object.
 * @param param0 RequestEvent
 * @param redirectUrl A url to redirect to. If undefined, no redirect will occur and the new blog post will be returned as JSON. If a url is provided, a 303 redirect will occur to the provided url with the new blog post's slug replacing :slug.
 * @returns A JSON response containing the new blog post.
 * @throws A 303 redirect response if a redirectUrl is provided.
 * @throws A 500 error response if an error occurs.
 */
export const createNewBlogPost = async (
	{ request }: RequestEvent,
	redirectUrl: string | undefined
) => {
	const formData = await request.formData();

	const image = formData.get('image') as File;
	const file = formData.get('file') as File;

	const compressedImage = await compressImage(image);

	let imageUrl: string | null = null;
	let fileUrl: string | null = null;

	// Setup Google Cloud Platform
	let storage;
	try {
		storage = getGCPStorage();
	} catch (e) {
		error(500, 'Could not obtain storage object');
	}

	const bucket = storage.bucket(GCP_BUCKET);

	try {
		if (image) {
			const imageFilename = `blog/img/${new Date().getTime()}_${compressedImage.name}`;
			imageUrl = await uploadAndGetPublicUrl(compressedImage, imageFilename);
		}
	} catch (e) {
		error(500, { message: `Error saving image: ${e}` });
	}

	try {
		if (file) {
			const fileFilename = `blog/files/${new Date().getTime()}_blog_post.md`;
			fileUrl = await uploadAndGetPublicUrl(file, fileFilename);
		}
	} catch (e) {
		error(500, { message: `Error saving file: ${e}` });
	}

	const title = formData.get('title')!.toString();
	const dateCreated = new Date();
	const slug = toSlug(title);

	const result = await prisma.blogPost.create({
		data: {
			title,
			slug,
			subtitle: formData.get('subtitle')!.toString(),
			fileUrl: fileUrl!,
			imageUrl: imageUrl!,
			dateCreated
		}
	});
	if (redirectUrl) {
		throw redirect(303, redirectUrl.replace(':slug', result.slug));
	}
	return json(result);
};
