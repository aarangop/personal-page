import { Storage } from '@google-cloud/storage';
import * as fs from 'fs';

export const getGCPCredentials = () => {
	// for Vercel, use environment variables
	if (process.env.LOCAL) {
		if (!process.env.GCP_PRIVATE_KEY) {
			throw Error('GCP_PRIVATE_KEY environment variable required');
		}
		return JSON.parse(fs.readFileSync(process.env.GCP_PRIVATE_KEY!, 'utf-8'));
	}
	return {
		credentials: {
			client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
			private_key: process.env.GOOGLE_PRIVATE_KEY
		},
		projectId: process.env.GCP_PROJECT_ID
	};
};

export const getGCPStorage = (): Storage => {
	const credentials = getGCPCredentials();
	return new Storage(credentials);
};
