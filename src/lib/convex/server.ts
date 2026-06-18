// Convex server client disabled — re-enable when NEXT_PUBLIC_CONVEX_URL is configured.
// import { ConvexHttpClient } from "convex/browser";
// import { api } from "../../../convex/_generated/api";
//
// const convexHttpUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
//
// if (!convexHttpUrl) {
//   throw new Error("Missing NEXT_PUBLIC_CONVEX_URL environment variable");
// }
//
// export const convexServer = new ConvexHttpClient(convexHttpUrl);

export async function getBlogPosts() {
  return [];
}

export async function getBlogPostBySlug(_slug: string) {
  return null;
}
