import { error, json, redirect } from '@sveltejs/kit';
import { GCP_BUCKET, GCP_PROJECT, GCP_STORAGE_KEY } from '$env/static/private';
import { Storage } from '@google-cloud/storage';
import prisma from '$lib/prisma';

export async function GET() {
	const options: ResponseInit = {
		status: 418,
		headers: {
			X: 'Gon give it to ya'
		}
	};

	return new Response('Hello', options);
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
			console.log('Image saved to gcp!');
			await imageUpload.makePublic();
			imageUrl = imageUpload.publicUrl();
		}
		if (file) {
			const fileFilename = `blog/files/${new Date().getTime()}_blog_post.md`;
			const fileUpload = bucket.file(fileFilename);
			await fileUpload.save(Buffer.from(await file.arrayBuffer()));
			console.log('Blog file saved to gcp!');
			await fileUpload.makePublic();
			fileUrl = fileUpload.publicUrl();
		}
	} catch (e) {
		error(500, { message: 'Error saving data' });
	}
	const result = await prisma.blogPost.create({
		data: {
			title: formData.get('title')!.toString(),
			subtitle: formData.get('subtitle')!.toString(),
			fileUrl: fileUrl!,
			imageUrl: imageUrl!
		}
	});
	return json(result);
}
