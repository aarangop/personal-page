import { GCP_BUCKET } from '$env/static/private';
import prisma from '$lib/prisma';
import { getBlogEntries } from '$lib/server/actions/blogs.js';
import { getGCPStorage } from '$lib/server/storage';
import { compressImage } from '$lib/server/utils';
import { toSlug } from '$lib/utils';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	return json(await getBlogEntries());
};

export const POST = async ({ request }) => {
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
		error(500, { message: e as string });
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
