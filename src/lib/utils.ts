import { XMLParser } from 'fast-xml-parser';

export function toSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/\s+|\W/g, '-') // Replace spaces and non-word characters with hyphens
		.replace(/-{2,}/g, '-') // Replace multiple hyphens with a single hyphen
		.trim(); // Remove leading/trailing hyphens
}

export const slugRegex = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/;

export type BreadCrumb = {
	href: string;
	text: string;
};

export const getCrumbDisplayText = (crumb: string) => {
	return crumb.replace(/-/g, ' ').replace(/\b[a-z]/g, (substr) => substr[0].toUpperCase());
};

export const getBreadCrumbs = (
	crumbs: string,
	homeCrumb: BreadCrumb = { href: '/', text: 'Home' }
): BreadCrumb[] => {
	if (crumbs == '/') {
		return [homeCrumb];
	}
	const breadCrumbs = crumbs.slice(1).split('/');

	// if (breadCrumbs.length == 1) {
	// 	return [homeCrumb];
	// }

	const breadCrumbsArray = breadCrumbs.map((crumb, i, allCrumbs) => ({
		href: '/' + (i == 0 ? crumb : [...allCrumbs.slice(0, i), crumb].join('/')),
		text: getCrumbDisplayText(crumb)
	}));

	return [homeCrumb, ...breadCrumbsArray];
};

export const validateUrl = (url: String) => {
	return url.startsWith('http://') || url.startsWith('https://');
};
export const testFeed = async (rssFeed: string) => {
	if (!validateUrl(rssFeed)) {
		throw new Error('Invalid feed url.');
	}
	await fetch(rssFeed)
		.then((response) => response.text())
		.then((str) => {
			const parser = new XMLParser({
				ignoreAttributes: false
			});
			const feed = parser.parse(str);
			const imgUrl = feed.rss.channel.image.url;
			const title = feed.rss.channel.title;
			const description = feed.rss.channel.description;
			const episodes = feed.rss.channel.items;
			return imgUrl && title && description && episodes;
		})
		.catch((e) => {
			throw new Error(e);
		});
};
