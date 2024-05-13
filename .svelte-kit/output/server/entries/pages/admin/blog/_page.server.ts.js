import { g as getBlogPosts } from "../../../../chunks/blogs.js";
const load = async () => ({
  blogPosts: await getBlogPosts()
});
export {
  load
};
