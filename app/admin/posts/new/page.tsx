import { AdminGuard } from '@/components/admin/AdminGuard';
import { PostEditorClient } from '@/components/admin/PostEditorClient';

export default function NewPost() {
  return (
    <AdminGuard>
      <PostEditorClient mode="new" />
    </AdminGuard>
  );
}
