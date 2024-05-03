import type { BlogPostDisplaySchema } from '$lib/schemas';
import { render } from '@testing-library/svelte';
import { describe, expect, test } from 'vitest';
import type { z } from 'zod';
import BlogView from './BlogView.svelte';

export const sampleBlogFile =
	'https://storage.googleapis.com/andresap-perspage-dev/testing/Learning%20Machine%20Learning.md';
export const sampleBlogImage =
	'https://storage.googleapis.com/andresap-perspage-dev/testing/Pasted%20image%2020221121144208.png';

const blogPost = {
	title: 'Test Blog Post',
	subtitle: 'This is a test blog post',
	fileUrl: sampleBlogFile,
	imageUrl: sampleBlogImage,
	dateCreated: new Date(),
	content:
		'# First Heading\n\nThis is a test blog post with title\n## This is a subheading\n\nAnd this is more content',
	slug: 'test-blog-post'
} as z.infer<typeof BlogPostDisplaySchema>;

describe('BlogView', () => {
	test('should display title as h2 tag', async () => {
		const postViewComponent = render(BlogView, { post: blogPost });
		const heading = postViewComponent.getByRole('heading', { name: blogPost.title });
		const headingClasses = heading.getAttribute('class');

		expect(postViewComponent.getByRole('heading', { name: blogPost.title })).toBeInTheDocument();
		expect(headingClasses).toContain('h2');
	});

	test('should display subtitle as smaller h3 tag', async () => {
		const postViewComponent = render(BlogView, { post: blogPost });
		const subtitle = postViewComponent.getByRole('heading', { name: blogPost.subtitle });
		const subtitleClasses = subtitle.getAttribute('class');

		expect(subtitle).toBeInTheDocument();
		expect(subtitleClasses).toContain('h3');
	});

	test('should display blog post content as HTML', async () => {
		const postViewComponent = render(BlogView, { post: blogPost });
		const firstHeading = postViewComponent.getByRole('heading', { name: 'First Heading' });
		const secondHeading = postViewComponent.getByRole('heading', { name: 'This is a subheading' });

		expect(firstHeading).toBeInTheDocument();
		expect(secondHeading).toBeInTheDocument();
	});

	test('should display estimated reading time', async () => {
		const postViewComponent = render(BlogView, { post: blogPost });
		const readingTime = postViewComponent.getByText('1 min read');
		expect(readingTime).toBeInTheDocument();
	});
});
