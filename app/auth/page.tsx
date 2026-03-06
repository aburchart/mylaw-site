import type { Metadata } from "next";
import { Suspense } from "react";
import AuthForm from "./auth-form";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Sign in to the MyLaw Solutions admin dashboard",
};

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">Loading...</p></div>}>
      <AuthForm />
    </Suspense>
  );
}
