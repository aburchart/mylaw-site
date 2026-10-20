import Link from "next/link";
import { Button } from "@/components/ui/button";
import BlogCard from "./BlogCard";
import { ArrowRight } from "lucide-react";
import { getPublishedPosts } from "@/content/blog-posts";

const LatestPosts = () => {
  const latestPosts = getPublishedPosts().slice(0, 3);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
            <p className="text-muted-foreground">
              Stay updated with our latest insights and updates
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post) => (
            <BlogCard
              key={post.slug}
              id={post.slug}
              title={post.title}
              slug={post.slug}
              excerpt={post.excerpt}
              category={post.category}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
