import { createServerClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';
import { AdminGuard } from '@/components/admin/AdminGuard';
import { PostEditorClient } from '@/components/admin/PostEditorClient';

export const dynamic = 'force-dynamic';

export default async function EditPost({ params }: { params: { id: string } }) {
  const supabase = createServerClient();
  const { data: post } = await supabase
    .from('blog_posts')
    .select('id, title, slug, excerpt, content, category, featured_image')
    .eq('id', params.id)
    .maybeSingle();

  if (!post) notFound();

  return (
    <AdminGuard>
      <PostEditorClient
        mode="edit"
        initialData={{
          id: post.id,
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
