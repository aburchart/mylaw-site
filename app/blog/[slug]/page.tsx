import type { Metadata } from "next";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { BlogPostBody } from "@/components/blog/BlogPostBody";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/content/blog-posts";

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://mylawsolutions.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "MyLaw Solutions",
      url: "https://mylawsolutions.com.au",
    },
    mainEntityOfPage: `https://mylawsolutions.com.au/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <article className="max-w-4xl mx-auto px-4 py-12">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">{post.title}</h1>
          <p className="text-sm text-muted-foreground mb-10">By {post.author}</p>

          <BlogPostBody blocks={post.content} />
        </article>
      </main>
      <Footer />
    </div>
  );
}
