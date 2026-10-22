import { notFound } from "next/navigation";

// Admin section disabled while Convex backend is not configured.
// export default function AdminPage() {
//   redirect("/admin/dashboard");
// }

export default function AdminPage() {
  notFound();
}
