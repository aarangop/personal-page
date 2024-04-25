import prisma from '$lib/__mocks__/prisma';
import { BlogPostSchema } from '$lib/schemas';
import { beforeAll, expect, test, vi } from 'vitest';

test('GET blog posts status ok', async () => {
	const response = await fetch('http://localhost:5173/api/blogs');
	expect(response.status).toBe(200);
});
