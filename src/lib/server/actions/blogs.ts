import prisma from '$lib/prisma';
import { BlogPostDisplaySchema, BlogPostSchema } from '$lib/schemas';
import { error, json, redirect, type RequestEvent } from '@sveltejs/kit';
import { z } from 'zod';
import { toSlug } from '$lib/utils';
import { compressImage } from '$lib/server/utils';
import { getGCPStorage, uploadAndGetPublicUrl } from '$lib/server/storage';
import { GCP_BUCKET } from '$env/static/private';
import type { Prisma } from '@prisma/client';

export const getBlogPosts = async (query: Prisma.BlogPostWhereInput = {}) => {
	const entries = await prisma.blogPost.findMany({ where: query });
	return z.array(BlogPostSchema).parse(entries);
};

export const getBlogPostBySlug = async (slug: string) => {
	const post = await prisma.blogPost.findUnique({ where: { slug } });
	if (!post?.fileUrl) {
		throw new Error('Blog post content not found');
	}
	if (!post.imageUrl) {
		throw new Error('Blog post image not found');
	}
	const file = await fetch(post.fileUrl);
	return {
		...post,
		markdown: await file.text()
	} as z.infer<typeof BlogPostDisplaySchema>;
};

export const createBlogEntry = async (data: z.infer<typeof BlogPostSchema>) => {
	const entry = await prisma.blogPost.create({ data });
	return BlogPostSchema.parse(entry);
};

/**
 * Creates a new blog post from the provided Request object.
 * @param param0 RequestEvent
 * @param redirectUrl A url to redirect to. If undefined, no redirect will occur and the new blog post will be returned as JSON. If a url is provided, a 303 redirect will occur to the provided url with the new blog post's slug replacing :slug.
 * @returns
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
