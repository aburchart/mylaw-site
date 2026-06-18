import type { Metadata } from "next";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/convex/server";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts();
    return posts.map((post: { slug: string }) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) return { title: "Post Not Found" };

    return {
      title: post.title,
      description: post.excerpt || undefined,
      openGraph: {
        title: post.title,
        description: post.excerpt || undefined,
        images: post.featured_image ? [{ url: post.featured_image }] : [],
      },
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;
  try {
    post = await getBlogPostBySlug(params.slug);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) notFound();

  const formattedDate = post.published_at
    ? new Date(post.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {post.featured_image && (
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Image
                src={post.featured_image}
                alt={post.title}
                fill
                sizes="(min-width: 1280px) 896px, (min-width: 768px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            {post.category && <Badge variant="secondary">{post.category}</Badge>}
            {post.published_at && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          {post.excerpt && (
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
          )}

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n").map((paragraph: string, index: number) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
