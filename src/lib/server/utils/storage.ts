import { GCP_BUCKET } from '$env/static/private';
import { Storage } from '@google-cloud/storage';
import * as fs from 'fs';

export const getGCPCredentials = () => {
	if (!process.env.VERCEL) {
		if (!process.env.GCP_PRIVATE_KEY) {
			throw Error('GCP_PRIVATE_KEY environment variable required');
		}
		const credentialsObj = JSON.parse(fs.readFileSync(process.env.GCP_PRIVATE_KEY!, 'utf-8'));
		return {
			projectId: credentialsObj.project_id,
			credentials: credentialsObj
		};
	}
	return {
		projectId: process.env.GCP_PROJECT_ID,
		credentials: {
			client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
			private_key: process.env.GOOGLE_PRIVATE_KEY
		}
	};
};

export const getGCPStorage = (): Storage => {
	const credentials = getGCPCredentials();
	return new Storage(credentials);
};

export const uploadImage = async (image: string) => {};

export const uploadAndGetPublicUrl = async (file: File, destinationFilename: string) => {
	const blob = await uploadFile(file, destinationFilename);
	blob.makePublic();
	return blob.publicUrl();
};
export const uploadFile = async (file: File, destinationFilename: string) => {
	const storage = getGCPStorage();
	const blob = storage.bucket(GCP_BUCKET).file(destinationFilename);
	await blob.save(Buffer.from(await file.arrayBuffer()));
	return blob;
};
