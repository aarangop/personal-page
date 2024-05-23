import { test as setup } from '@playwright/test';
import { authenticate } from './utils/auth';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
	await authenticate(page);
	await page.context().storageState({ path: authFile });
});
