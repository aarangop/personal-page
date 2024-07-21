import { GCP_BUCKET, GCP_PRIVATE_KEY } from '$env/static/private';
import 'dotenv/config';
import { describe, expect, test, vi } from 'vitest';
import { getGCPCredentials, getGCPStorage } from './storage';

vi.mock('$env/dynamic/private', () => ({
	GCP_BUCKET: process.env.GCP_BUCKET,
	GCP_PRIVATE_KEY: process.env.GCP_PRIVATE_KEY
}));

describe('GCP Storage', () => {
	test('should get GCP credentials', () => {
		// Test the getGCPCredentials function
		const { credentials, projectId } = getGCPCredentials();
		expect(projectId).not.toBeUndefined();
		expect(credentials.client_email).not.toBeUndefined();
		expect(credentials.private_key).not.toBeUndefined();
	});

	test('should get GCP storage object', async () => {
		// Get the GCP storage object
		const storage = getGCPStorage();

		// Check that the storage object is not undefined
		expect(storage).toBeDefined();
	});
});
