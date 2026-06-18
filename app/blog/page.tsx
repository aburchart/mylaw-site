import type { Metadata } from "next";
// import { getBlogPosts } from "@/lib/convex/server";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
// import BlogCard from "@/components/blog/BlogCard";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert insights and updates on healthcare compliance and best practices",
};

export default async function BlogPage() {
  // Convex blog feed disabled — re-enable when backend is configured.
  // let posts: any[] = [];
  // try {
  //   posts = await getBlogPosts();
  // } catch (error) {
  //   console.error("Error fetching posts:", error);
  // }

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
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles published yet.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
