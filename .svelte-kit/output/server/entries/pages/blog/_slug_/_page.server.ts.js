const load = async ({ params, fetch }) => ({
  blogPost: await fetch(`/api/blogs/${params.slug}`).then((response) => response.json()).then((blogPost) => blogPost)
});
export {
  load
};
