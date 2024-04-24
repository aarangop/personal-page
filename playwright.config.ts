import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build:dev && npm run preview',
		port: 5173
	},
	use: {
		baseURL: 'http://localhost:4173'
	},
	testDir: 'tests/e2e',
	testMatch: /(.+\.)?(test|spec|setup)\.[jt]s/
};

export default config;
