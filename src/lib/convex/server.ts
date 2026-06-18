import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";

// Server-side Convex client for use in Server Components
const convexHttpUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexHttpUrl) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL environment variable");
}

export const convexServer = new ConvexHttpClient(convexHttpUrl);

// Blog queries for server-side fetching
export async function getBlogPosts() {
  return await convexServer.query(api.blog.list, {});
}

export async function getBlogPostBySlug(slug: string) {
  return await convexServer.query(api.blog.getBySlug, { slug });
}
