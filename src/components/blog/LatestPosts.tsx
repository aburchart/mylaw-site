'use client';

// Convex blog feed disabled — re-enable when backend is configured.
// import Link from "next/link";
// import { useQuery } from "convex/react";
// import { api } from "../../../convex/_generated/api";
// import { Button } from "@/components/ui/button";
// import BlogCard from "./BlogCard";
// import { ArrowRight } from "lucide-react";

const LatestPosts = () => {
  return null;

  // const posts = useQuery(api.blog.list);
  //
  // if (!posts || posts.length === 0) {
  //   return null;
  // }
  //
  // const latestPosts = posts.slice(0, 3);
  //
  // return (
  //   <section className="py-16 px-4">
  //     <div className="max-w-7xl mx-auto">
  //       <div className="flex items-center justify-between mb-8">
  //         <div>
  //           <h2 className="text-3xl font-bold mb-2">Latest Articles</h2>
  //           <p className="text-muted-foreground">
  //             Stay updated with our latest insights and updates
  //           </p>
  //         </div>
  //         <Button asChild variant="outline">
  //           <Link href="/blog">
  //             View All Articles
  //             <ArrowRight className="ml-2 h-4 w-4" />
  //           </Link>
  //         </Button>
  //       </div>
  //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {latestPosts.map((post) => (
  //           <BlogCard
  //             key={post._id}
  //             id={post._id}
  //             title={post.title}
  //             slug={post.slug}
  //             excerpt={post.excerpt || ""}
  //             category={post.category || undefined}
  //             featuredImage={post.featured_image || undefined}
  //             publishedAt={post.published_at || undefined}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default LatestPosts;
