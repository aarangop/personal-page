import { a as getBlogPosts } from "../../../chunks/blogs.js";
const load = async () => ({ posts: await getBlogPosts() });
export {
  load
};
