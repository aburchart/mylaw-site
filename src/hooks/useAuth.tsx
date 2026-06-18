'use client';

import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import { useAuth as useClerkAuth, useUser, useClerk } from "@clerk/react";
// import { useMutation } from "convex/react";
import { useToast } from "@/hooks/use-toast";
// import { api } from "../../convex/_generated/api";

interface AuthContextType {
  user: ReturnType<typeof useUser>["user"];
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function FallbackAuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        isLoading: false,
        isAuthenticated: false,
        signIn: async () => {},
        signUp: async () => {},
        signOut: async () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function ClerkAuthProvider({ children }: { children: ReactNode }) {
  const { isLoaded: clerkLoaded, userId, signOut: clerkSignOut } = useClerkAuth();
  const { user: clerkUser } = useUser();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  // Convex role sync disabled — re-enable when backend is configured.
  // const setUserRole = useMutation(api.auth.setUserRole);

  useEffect(() => {
    if (clerkLoaded) {
      setIsLoading(false);
    }
  }, [clerkLoaded]);

  // useEffect(() => {
  //   if (userId && clerkUser?.emailAddresses?.[0]?.emailAddress) {
  //     const ensureUserRole = async () => {
  //       try {
  //         await setUserRole({ userId, role: "user" });
  //       } catch {
  //         // Role might already exist, ignore
  //       }
  //     };
  //     ensureUserRole();
  //   }
  // }, [userId, clerkUser, setUserRole]);

  const signIn = async () => {
    toast({
      title: "Sign in",
      description: "Please use the sign in form",
    });
  };

  const signUp = async () => {
    toast({
      title: "Sign up",
      description: "Please use the sign up form",
    });
  };

  const signOut = async () => {
    try {
      await clerkSignOut();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
    } catch {
      toast({
        title: "Logout failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!clerkLoaded || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user: clerkUser,
        isLoading: false,
        isAuthenticated: !!userId,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!clerkPublishableKey) {
    return <FallbackAuthProvider>{children}</FallbackAuthProvider>;
  }
  return <ClerkAuthProvider>{children}</ClerkAuthProvider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
