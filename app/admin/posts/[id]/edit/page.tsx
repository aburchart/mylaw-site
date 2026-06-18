import { convexServer, getBlogPosts } from '@/lib/convex/server';
import { notFound } from 'next/navigation';
import { AdminGuard } from '@/components/admin/AdminGuard';
import { PostEditorClient } from '@/components/admin/PostEditorClient';

export const dynamic = 'force-dynamic';

export default async function EditPost({ params }: { params: { id: string } }) {
  let post = null;
  
  try {
    // Try to fetch the post by ID
    const posts = await getBlogPosts();
    post = posts.find((p: any) => p._id === params.id);
  } catch (error) {
    console.error("Error fetching post:", error);
  }

  if (!post) notFound();

  return (
    <AdminGuard>
      <PostEditorClient
        mode="edit"
        initialData={{
          id: post._id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt ?? '',
          content: post.content,
          category: post.category ?? '',
          featured_image: post.featured_image ?? '',
        }}
      />
    </AdminGuard>
  );
}
