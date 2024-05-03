import { describe, expect, test } from 'vitest';
import { getBlogPostHTMLContent } from './blog';
import { XMLParser } from 'fast-xml-parser';

const blogContent =
	'# Hello World\n\nThis is a test blog post.\n' +
	'## Second Header\n\n' +
	'Sommore text.\n\n' +
	'### Third Header\n\n' +
	'And a little bit more text';

describe('Blog utils', () => {
	test('getBlogPostHTMLContent should return content in sections', () => {
		const html = getBlogPostHTMLContent(blogContent);
		const parser = new XMLParser({
			ignoreAttributes: false
		});
		const parsedContent = parser.parse(html);
		const sections = parsedContent['section'];
		const headers = sections.map((section: any) => section['header']);
		const paragraphs = sections.map((section: any) => section['p']);

		expect(sections).not.toBeUndefined();
		expect(headers).not.toBeUndefined();
		expect(paragraphs).not.toBeUndefined();
	});
});
