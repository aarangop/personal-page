import { devices, type PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build:dev && npm run preview',
		url: 'http://localhost:4173',
		reuseExistingServer: !process.env.CI
	},
	use: {
		baseURL: 'http://localhost:4173'
	},
	projects: [
		{ name: 'setup', testMatch: /.*\.setup\.ts/ },
		{ name: 'chromium authentication', testMatch: /.*\.auth\.(test|spec)\.ts/ },
		{
			name: 'chromium',
			testMatch: /.*\.(test|spec).ts/,
			use: {
				...devices['Desktop Chrome'],
				storageState: 'playwright/.auth/user.json'
			},
			dependencies: ['setup']
		}
	],
	testDir: 'e2e',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
