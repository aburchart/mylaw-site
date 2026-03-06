'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useAdminCheck } from '@/hooks/useAdminCheck';
import { useToast } from '@/hooks/use-toast';

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { isAdmin, loading: adminLoading } = useAdminCheck();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/auth');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!adminLoading && !isAdmin && user) {
      toast({
        title: 'Access Denied',
        description: "You don't have admin privileges.",
        variant: 'destructive',
      });
      router.push('/');
    }
  }, [isAdmin, adminLoading, user, router, toast]);

  if (authLoading || adminLoading || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return <>{children}</>;
}
