import { error, json, redirect } from '@sveltejs/kit';
import { GCP_BUCKET, GCP_PROJECT, GCP_STORAGE_KEY } from '$env/static/private';
import { Storage } from '@google-cloud/storage';
import prisma from '$lib/prisma';
import { toSlug } from '$lib/utils';

export async function GET() {
	const blogPosts = await prisma.blogPost.findMany();
	return json(blogPosts);
}

export async function POST({ request }) {
	const formData = await request.formData();
	const image = formData.get('image') as File;
	const file = formData.get('file') as File;
	let imageUrl: string | null = null;
	let fileUrl: string | null = null;

	// Setup Google Cloud Platform
	const storage = new Storage({
		projectId: GCP_PROJECT,
		keyFilename: GCP_STORAGE_KEY
	});
	const bucket = storage.bucket(GCP_BUCKET);

	try {
		if (image) {
			const imageFilename = `blog/img/${new Date().getTime()}_${image.name}`;
			const imageUpload = bucket.file(imageFilename);
			await imageUpload.save(Buffer.from(await image.arrayBuffer()));
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
	const slug = toSlug(title);
	const result = await prisma.blogPost.create({
		data: {
			title,
			slug,
			subtitle: formData.get('subtitle')!.toString(),
			fileUrl: fileUrl!,
			imageUrl: imageUrl!
		}
	});
	return json(result);
}
