'use client';

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/hooks/useAuth';
import { BookingModalProvider } from '@/components/ui/booking-modal';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { ConvexClientProvider } from '@/components/ConvexClientProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  // useState ensures QueryClient is not shared between server requests
  const [queryClient] = useState(() => new QueryClient());
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

  const content = (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <TooltipProvider>
          <AuthProvider>
            <BookingModalProvider>
              {children}
              <Toaster />
              <Sonner />
            </BookingModalProvider>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );

  return (
    <ConvexClientProvider>
      {clerkPublishableKey ? (
        <ClerkProvider publishableKey={clerkPublishableKey}>{content}</ClerkProvider>
      ) : (
        content
      )}
    </ConvexClientProvider>
  );
}
