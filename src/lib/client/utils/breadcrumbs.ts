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

	const breadCrumbsArray = breadCrumbs.map((crumb, i, allCrumbs) => ({
		href: '/' + (i == 0 ? crumb : [...allCrumbs.slice(0, i), crumb].join('/')),
		text: getCrumbDisplayText(crumb)
	}));

	return [homeCrumb, ...breadCrumbsArray];
};
