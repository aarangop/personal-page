import { j as json, e as error } from "../../../../chunks/index.js";
import { Storage } from "@google-cloud/storage";
import { p as prisma } from "../../../../chunks/prisma.js";
import { t as toSlug } from "../../../../chunks/utils.js";
import { B as BlogPostSchema } from "../../../../chunks/schemas.js";
import { z } from "zod";
import sharp from "sharp";
const GCP_PROJECT_ID = "andresap-personal-page";
const GCP_BUCKET = "andresap-perspage-dev";
const GCP_PRIVATE_KEY = "./secrets/andresap-personal-page-2d8f54d65feb.json";
const getGCPCredentials = () => {
  return {
    credentials: {
      client_email: process.env.GCLOUD_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY
    },
    projectId: process.env.GCP_PROJECT_ID
  };
};
async function compressImage(imageFile) {
  const imageBuffer = await imageFile.arrayBuffer();
  const compressedImage = await sharp(imageBuffer).resize({ width: 700 }).jpeg({ quality: 80 }).toBuffer();
  return new File([compressedImage], imageFile.name, { type: imageFile.type });
}
const GET = async ({ url }) => {
  const blogPosts = await prisma.blogPost.findMany();
  return json(z.array(BlogPostSchema).parse(blogPosts));
};
const POST = async ({ request }) => {
  const formData = await request.formData();
  const image = formData.get("image");
  const file = formData.get("file");
  const compressedImage = await compressImage(image);
  let imageUrl = null;
  let fileUrl = null;
  let storage;
  if (process.env.VERCEL) {
    storage = new Storage(getGCPCredentials());
  } else {
    storage = new Storage({
      projectId: GCP_PROJECT_ID,
      keyFilename: GCP_PRIVATE_KEY
    });
  }
  const bucket = storage.bucket(GCP_BUCKET);
  try {
    if (image) {
      const imageFilename = `blog/img/${(/* @__PURE__ */ new Date()).getTime()}_${compressedImage.name}`;
      const imageUpload = bucket.file(imageFilename);
      await imageUpload.save(Buffer.from(await compressedImage.arrayBuffer()));
      await imageUpload.makePublic();
      imageUrl = imageUpload.publicUrl();
    }
    if (file) {
      const fileFilename = `blog/files/${(/* @__PURE__ */ new Date()).getTime()}_blog_post.md`;
      const fileUpload = bucket.file(fileFilename);
      await fileUpload.save(Buffer.from(await file.arrayBuffer()));
      await fileUpload.makePublic();
      fileUrl = fileUpload.publicUrl();
    }
  } catch (e) {
    error(500, { message: e });
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
  return json(result);
};
export {
  GET,
  POST
};
