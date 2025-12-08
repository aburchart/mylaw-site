import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { z } from "zod";

type AuthMode = "login" | "signup" | "forgot" | "reset";

const emailSchema = z.string().trim().email("Invalid email address").max(255, "Email is too long");
const passwordSchema = z.string().min(8, "Password must be at least 8 characters").max(128, "Password is too long");

const Auth = () => {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    // Check if this is a password reset callback
    const type = searchParams.get("type");
    if (type === "recovery") {
      setMode("reset");
    }
  }, [searchParams]);

  useEffect(() => {
    if (user && mode !== "reset") {
      navigate("/admin/dashboard");
    }
  }, [user, navigate, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email for all modes except reset
    if (mode !== "reset") {
      const emailResult = emailSchema.safeParse(email);
      if (!emailResult.success) {
        toast({
          title: "Validation Error",
          description: emailResult.error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }
    
    // Validate password for login, signup, and reset modes
    if (mode === "login" || mode === "signup" || mode === "reset") {
      const passwordResult = passwordSchema.safeParse(password);
      if (!passwordResult.success) {
        toast({
          title: "Validation Error",
          description: passwordResult.error.errors[0].message,
          variant: "destructive",
        });
        return;
      }
    }
    
    setLoading(true);

    try {
      if (mode === "login") {
        const { error } = await signIn(email.trim(), password);
        if (!error) {
          navigate("/admin/dashboard");
        }
      } else if (mode === "signup") {
        const { error } = await signUp(email.trim(), password);
        if (!error) {
          toast({
            title: "Account created",
            description: "Please check your email to confirm your account.",
          });
        }
      } else if (mode === "forgot") {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: `${window.location.origin}/auth?type=recovery`,
        });
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Reset email sent",
            description: "Check your inbox for the password reset link.",
          });
          setMode("login");
        }
      } else if (mode === "reset") {
        if (password !== confirmPassword) {
          toast({
            title: "Error",
            description: "Passwords do not match.",
            variant: "destructive",
          });
          return;
        }
        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Password updated",
            description: "You can now log in with your new password.",
          });
          setMode("login");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    switch (mode) {
      case "login": return "Login";
      case "signup": return "Sign Up";
      case "forgot": return "Reset Password";
      case "reset": return "Set New Password";
    }
  };

  const getDescription = () => {
    switch (mode) {
      case "login": return "Enter your credentials to access the admin dashboard";
      case "signup": return "Create an account to get started";
      case "forgot": return "Enter your email to receive a password reset link";
      case "reset": return "Enter your new password";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{getTitle()}</CardTitle>
            <CardDescription>{getDescription()}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode !== "reset" && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}
              {(mode === "login" || mode === "signup" || mode === "reset") && (
                <div className="space-y-2">
                  <Label htmlFor="password">
                    {mode === "reset" ? "New Password" : "Password"}
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              )}
              {mode === "reset" && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              )}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Loading..." : getTitle()}
              </Button>
              
              {mode === "login" && (
                <>
                  <Button
                    type="button"
                    variant="link"
                    className="w-full text-sm"
                    onClick={() => setMode("forgot")}
                  >
                    Forgot password?
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => setMode("signup")}
                  >
                    Don't have an account? Sign up
                  </Button>
                </>
              )}
              {mode === "signup" && (
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setMode("login")}
                >
                  Already have an account? Login
                </Button>
              )}
              {(mode === "forgot" || mode === "reset") && (
                <Button
                  type="button"
                  variant="ghost"
                  className="w-full"
                  onClick={() => setMode("login")}
                >
                  Back to login
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
