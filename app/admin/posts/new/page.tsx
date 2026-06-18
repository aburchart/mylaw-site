import { notFound } from "next/navigation";

// Admin post editor disabled — re-enable when Convex backend is configured.
// import { AdminGuard } from '@/components/admin/AdminGuard';
// import { PostEditorClient } from '@/components/admin/PostEditorClient';
//
// export default function NewPost() {
//   return (
//     <AdminGuard>
//       <PostEditorClient mode="new" />
//     </AdminGuard>
//   );
// }

export default function NewPost() {
  notFound();
}
