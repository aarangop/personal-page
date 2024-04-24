const load = async ({ fetch }) => ({
  blogPosts: await fetch("/api/blogs").then((response) => response.json()).then((data) => data)
});
export {
  load
};
