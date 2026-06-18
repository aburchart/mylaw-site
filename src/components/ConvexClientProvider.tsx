'use client';

import { ReactNode } from 'react';
import { ConvexProvider } from 'convex/react';
import { convex } from '@/integrations/convex/client';

interface ConvexClientProviderProps {
  children: ReactNode;
}

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  return (
    <ConvexProvider client={convex}>
      {children}
    </ConvexProvider>
  );
}