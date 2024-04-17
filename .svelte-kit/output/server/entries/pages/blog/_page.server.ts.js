import "../../../chunks/schemas.js";
const load = async ({ fetch }) => ({
  posts: await fetch("/api/blogs").then((response) => response.json()).then((data) => data)
});
export {
  load
};
