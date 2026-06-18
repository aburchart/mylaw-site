import type { Metadata } from "next";
// import { getBlogPostBySlug, getBlogPosts } from "@/lib/convex/server";
import { notFound } from "next/navigation";

export const revalidate = 3600;

// Convex blog disabled — re-enable when backend is configured.
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params: _params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return { title: "Post Not Found" };
}

export default async function BlogPostPage({
  params: _params,
}: {
  params: { slug: string };
}) {
  notFound();
}
