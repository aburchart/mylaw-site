import type { Doc } from '../../../convex/_generated/dataModel';
import { getBlogPosts } from '@/lib/convex/server';
import { AdminGuard } from '@/components/admin/AdminGuard';
import { AdminDashboardClient } from '@/components/admin/AdminDashboardClient';

export default async function AdminDashboard() {
  let posts: Doc<"blog_posts">[] = [];

  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <AdminGuard>
      <AdminDashboardClient initialPosts={posts} />
    </AdminGuard>
  );
}