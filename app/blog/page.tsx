import type { Metadata } from "next";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import BlogCard from "@/components/blog/BlogCard";
import { getPublishedPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insights and updates on healthcare compliance and best practices",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="bg-gradient-hero py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog & Insights
            </h1>
            <p className="text-xl text-white/90">
              Expert insights and updates on healthcare compliance and best practices
            </p>
          </div>
        </section>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles published yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
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
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
