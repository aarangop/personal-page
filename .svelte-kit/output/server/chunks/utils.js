import "fast-xml-parser";
function toSlug(text) {
  return text.toLowerCase().replace(/\s+|\W/g, "-").replace(/-{2,}/g, "-").trim();
}
const getCrumbDisplayText = (crumb) => {
  return crumb.replace(/-/g, " ").replace(/\b[a-z]/g, (substr) => substr[0].toUpperCase());
};
const getBreadCrumbs = (crumbs, homeCrumb = { href: "/", text: "Home" }) => {
  if (crumbs == "/") {
    return [homeCrumb];
  }
  const breadCrumbs = crumbs.slice(1).split("/");
  const breadCrumbsArray = breadCrumbs.map((crumb, i, allCrumbs) => ({
    href: "/" + (i == 0 ? crumb : [...allCrumbs.slice(0, i), crumb].join("/")),
    text: getCrumbDisplayText(crumb)
  }));
  return [homeCrumb, ...breadCrumbsArray];
};
export {
  getBreadCrumbs as g,
  toSlug as t
};
