import type { Metadata } from "next";
import { createServerClient } from "@/lib/supabase/server";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
  const supabase = createServerClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("slug")
    .eq("published", true);
  return (data || []).map((post: { slug: string }) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = createServerClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt, featured_image")
    .eq("slug", params.slug)
    .eq("published", true)
    .maybeSingle();

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image ? [{ url: post.featured_image }] : [],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const supabase = createServerClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", params.slug)
    .eq("published", true)
    .maybeSingle();

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
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
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
