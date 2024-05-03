import { p as prisma } from "./prisma.js";
import { B as BlogPostSchema } from "./schemas.js";
import { e as error, r as redirect, j as json } from "./index.js";
import { z } from "zod";
import { t as toSlug } from "./utils.js";
import sharp from "sharp";
import { Storage } from "@google-cloud/storage";
import * as fs from "fs";
async function compressImage(imageFile) {
  const imageBuffer = await imageFile.arrayBuffer();
  const compressedImage = await sharp(imageBuffer).resize({ width: 700 }).jpeg({ quality: 80 }).toBuffer();
  return new File([compressedImage], imageFile.name, { type: imageFile.type });
}
const GCP_BUCKET = "andresap-perspage-dev";
const getGCPCredentials = () => {
  if (!process.env.VERCEL) {
    if (!process.env.GCP_PRIVATE_KEY) {
      throw Error("GCP_PRIVATE_KEY environment variable required");
    }
    const credentialsObj = JSON.parse(fs.readFileSync(process.env.GCP_PRIVATE_KEY, "utf-8"));
    return {
      projectId: credentialsObj.project_id,
      credentials: credentialsObj
    };
  }
  return {
    projectId: process.env.GCP_PROJECT_ID,
    credentials: {
      client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    }
  };
};
const getGCPStorage = () => {
  const credentials = getGCPCredentials();
  return new Storage(credentials);
};
const uploadAndGetPublicUrl = async (file, destinationFilename) => {
  const blob = await uploadFile(file, destinationFilename);
  blob.makePublic();
  return blob.publicUrl();
};
const uploadFile = async (file, destinationFilename) => {
  const storage = getGCPStorage();
  const blob = storage.bucket(GCP_BUCKET).file(destinationFilename);
  await blob.save(Buffer.from(await file.arrayBuffer()));
  return blob;
};
const getBlogPosts = async (query = {}) => {
  const entries = await prisma.blogPost.findMany({ where: query });
  return z.array(BlogPostSchema).parse(entries);
};
const getBlogPostBySlug = async (slug) => {
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  if (!post?.fileUrl) {
    throw error(500, { message: "Blog post content not found" });
  }
  if (!post.imageUrl) {
    throw error(500, { message: "Blog post image not found" });
  }
  const file = await fetch(post.fileUrl);
  return {
    ...post,
    markdown: await file.text()
  };
};
const createNewBlogPost = async ({ request }, redirectUrl) => {
  const formData = await request.formData();
  const image = formData.get("image");
  const file = formData.get("file");
  const compressedImage = await compressImage(image);
  let imageUrl = null;
  let fileUrl = null;
  let storage;
  try {
    storage = getGCPStorage();
  } catch (e) {
    error(500, "Could not obtain storage object");
  }
  storage.bucket(GCP_BUCKET);
  try {
    if (image) {
      const imageFilename = `blog/img/${(/* @__PURE__ */ new Date()).getTime()}_${compressedImage.name}`;
      imageUrl = await uploadAndGetPublicUrl(compressedImage, imageFilename);
    }
  } catch (e) {
    error(500, { message: `Error saving image: ${e}` });
  }
  try {
    if (file) {
      const fileFilename = `blog/files/${(/* @__PURE__ */ new Date()).getTime()}_blog_post.md`;
      fileUrl = await uploadAndGetPublicUrl(file, fileFilename);
    }
  } catch (e) {
    error(500, { message: `Error saving file: ${e}` });
  }
  const title = formData.get("title").toString();
  const dateCreated = /* @__PURE__ */ new Date();
  const slug = toSlug(title);
  const result = await prisma.blogPost.create({
    data: {
      title,
      slug,
      subtitle: formData.get("subtitle").toString(),
      fileUrl,
      imageUrl,
      dateCreated
    }
  });
  if (redirectUrl) {
    throw redirect(303, redirectUrl.replace(":slug", result.slug));
  }
  return json(result);
};
export {
  getBlogPostBySlug as a,
  createNewBlogPost as c,
  getBlogPosts as g
};
