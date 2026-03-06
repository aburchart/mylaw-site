import { createServerClient } from '@/lib/supabase/server';
import { AdminGuard } from '@/components/admin/AdminGuard';
import { AdminDashboardClient } from '@/components/admin/AdminDashboardClient';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const supabase = createServerClient();
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('id, title, slug, published, published_at, created_at')
    .order('created_at', { ascending: false });

  return (
    <AdminGuard>
      <AdminDashboardClient initialPosts={posts ?? []} />
    </AdminGuard>
  );
}
