import { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useAdminCheck = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const userId = user?.id;
  const adminStatus = useQuery(api.auth.isAdmin, { userId: userId || "" });

  useEffect(() => {
    if (authLoading) {
      return;
    }

    if (!user) {
      setIsAdmin(false);
      setLoading(false);
      return;
    }

    if (adminStatus !== undefined) {
      setIsAdmin(adminStatus);
      setLoading(false);
    }
  }, [user, authLoading, adminStatus]);

  return { isAdmin, loading: loading || authLoading };
};
