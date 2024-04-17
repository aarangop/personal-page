import { error, json, type RequestHandler } from '@sveltejs/kit';
import { GCP_BUCKET, GCP_PROJECT_ID, GCP_STORAGE_KEY, VERCEL } from '$env/static/private';
import { Storage } from '@google-cloud/storage';
import prisma from '$lib/prisma';
import { toSlug } from '$lib/utils';
import { BlogPostSchema } from '$lib/schemas.js';
import { z } from 'zod';
import sharp from 'sharp';
import { getGCPCredentials } from '../../../lib/utils.js';

export const GET: RequestHandler = async ({ url }) => {
	const blogPosts = await prisma.blogPost.findMany();
	return json(z.array(BlogPostSchema).parse(blogPosts));
};

async function compressImage(imageFile: File): Promise<File> {
	const imageBuffer = await imageFile.arrayBuffer();
	const compressedImage = await sharp(imageBuffer)
		.resize({ width: 700 }) // Adjust width as needed
		.jpeg({ quality: 80 }) // Adjust quality
		.toBuffer();

	return new File([compressedImage], imageFile.name, { type: imageFile.type });
}

export const POST = async ({ request }) => {
	const formData = await request.formData();

	const image = formData.get('image') as File;
	const file = formData.get('file') as File;

	const compressedImage = await compressImage(image);

	let imageUrl: string | null = null;
	let fileUrl: string | null = null;
	let credentials;
	console.log(VERCEL);
	if (process.env.VERCEL) {
		credentials = getGCPCredentials();
	} else {
		credentials = {
			projectId: GCP_PROJECT_ID,
			keyFilename: GCP_STORAGE_KEY
		};
	}

	// Setup Google Cloud Platform
	const storage = new Storage(credentials);
	const bucket = storage.bucket(GCP_BUCKET);

	try {
		if (image) {
			const imageFilename = `blog/img/${new Date().getTime()}_${compressedImage.name}`;
			const imageUpload = bucket.file(imageFilename);
			await imageUpload.save(Buffer.from(await compressedImage.arrayBuffer()));
			await imageUpload.makePublic();
			imageUrl = imageUpload.publicUrl();
		}
		if (file) {
			const fileFilename = `blog/files/${new Date().getTime()}_blog_post.md`;
			const fileUpload = bucket.file(fileFilename);
			await fileUpload.save(Buffer.from(await file.arrayBuffer()));
			await fileUpload.makePublic();
			fileUrl = fileUpload.publicUrl();
		}
	} catch (e) {
		error(500, { message: 'Error saving data' });
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
	return json(result);
};
