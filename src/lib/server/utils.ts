import sharp from 'sharp';
import * as fs from 'node:fs';

export const getGCPCredentials = () => {
	// for Vercel, use environment variables
	return {
		credentials: {
			client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
			private_key: process.env.GOOGLE_PRIVATE_KEY
		},
		projectId: process.env.GCP_PROJECT_ID
	};
};

export async function compressImage(imageFile: File): Promise<File> {
	const imageBuffer = await imageFile.arrayBuffer();
	const compressedImage = await sharp(imageBuffer)
		.resize({ width: 700 })
		.jpeg({ quality: 80 })
		.toBuffer();

	return new File([compressedImage], imageFile.name, { type: imageFile.type });
}
