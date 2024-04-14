import type { Actions } from './$types';
import fs from 'fs';
import { Storage } from '@google-cloud/storage';
import { GCP_STORAGE_KEY, GCP_PROJECT, GCP_BUCKET } from '$env/static/private';
import { error, redirect } from '@sveltejs/kit';
import type { z } from 'zod';
import { BlogPostSchema } from '$lib/schemas';
import prisma from '$lib/prisma';

export const actions = {
	saveBlogPost: async ({ request }) => {
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
		throw redirect(303, '/admin/blog');
	}
} satisfies Actions;
