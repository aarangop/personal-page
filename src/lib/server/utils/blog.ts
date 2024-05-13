import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

/**
 * Takes a html string and structures it into sections based on the headings.
 * @param html
 * @returns html string
 */
const structureBlogPostHTML = (html: string) => {
	const doc = new JSDOM(html).window.document;
	const strcuturedDoc = new JSDOM('').window.document;
	let currentSection: HTMLElement;
	doc.querySelectorAll('*').forEach((element) => {
		if (
			element.tagName === 'H1' ||
			element.tagName === 'H2' ||
			element.tagName === 'H3' ||
			element.tagName === 'H4'
		) {
			currentSection = strcuturedDoc.createElement('section');
			const sectionHeader = strcuturedDoc.createElement('header');
			sectionHeader.appendChild(element);
			currentSection.appendChild(sectionHeader);
			strcuturedDoc.body.appendChild(currentSection);
			return sectionHeader;
		}
		if (currentSection) {
			currentSection.appendChild(element);
		}
	});
	return strcuturedDoc.body.innerHTML;
};

/**
 * Returns HTML content from a markdown string.
 * @param markdown
 * @returns Structured HTML content from markdown string
 */
export const getBlogPostHTMLContent = (markdown: string) => {
	const window = new JSDOM('').window;
	const purify = DOMPurify(window);
	const htmlRaw = marked.parse(markdown).toString();
	const htmlSanitized = purify.sanitize(htmlRaw);
	return structureBlogPostHTML(htmlSanitized);
};
