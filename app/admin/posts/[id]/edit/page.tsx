import { notFound } from "next/navigation";

// Admin post editor disabled — re-enable when Convex backend is configured.
// import { getBlogPosts } from '@/lib/convex/server';
// import { AdminGuard } from '@/components/admin/AdminGuard';
// import { PostEditorClient } from '@/components/admin/PostEditorClient';
//
// export const dynamic = 'force-dynamic';
//
// export default async function EditPost({ params }: { params: { id: string } }) {
//   let post = null;
//   try {
//     const posts = await getBlogPosts();
//     post = posts.find((p) => p._id === params.id);
//   } catch (error) {
//     console.error("Error fetching post:", error);
//   }
//   if (!post) notFound();
//   return (
//     <AdminGuard>
//       <PostEditorClient
//         mode="edit"
//         initialData={{
//           id: post._id,
//           title: post.title,
//           slug: post.slug,
//           excerpt: post.excerpt ?? '',
//           content: post.content,
//           category: post.category ?? '',
//           featuredImage: post.featured_image ?? '',
//         }}
//       />
//     </AdminGuard>
//   );
// }

export default function EditPost() {
  notFound();
}
