'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

const CLERK_ENABLED = typeof process !== "undefined" && !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function ClerkAuthUI({ redirect }: { redirect: string }) {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return (
      <div className="space-y-4">
        <SignInButton mode="modal">
          <Button className="w-full" size="lg">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button variant="outline" className="w-full" size="lg">Sign Up</Button>
        </SignUpButton>
      </div>
    );
  }
  return (
    <div className="text-center space-y-4">
      <p className="text-muted-foreground">You are already signed in.</p>
      <Button onClick={() => router.push(redirect)} className="w-full">Go to Dashboard</Button>
      <div className="flex justify-center"><UserButton /></div>
    </div>
  );
}

const AuthForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/admin/dashboard";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Welcome</CardTitle>
            <CardDescription>Sign in to access the admin dashboard</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {CLERK_ENABLED ? (
              <ClerkAuthUI redirect={redirect} />
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Sign-in is not configured. Set <code className="text-xs bg-muted px-1 rounded">NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> in <code className="text-xs bg-muted px-1 rounded">.env.local</code> and add Clerk to this app to sign in.
                </p>
                <Button variant="outline" className="w-full" onClick={() => router.push("/")}>
                  Back to home
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AuthForm;
