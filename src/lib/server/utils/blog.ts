import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

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

export const getBlogPostHTMLContent = (markdown: string) => {
	const window = new JSDOM('').window;
	const purify = DOMPurify(window);
	const htmlRaw = marked.parse(markdown).toString();
	const htmlSanitized = purify.sanitize(htmlRaw);
	return structureBlogPostHTML(htmlSanitized);
};
