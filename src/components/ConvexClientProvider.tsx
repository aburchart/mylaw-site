'use client';

import { ReactNode } from 'react';
// import { ConvexProvider } from 'convex/react';
// import { convex } from '@/integrations/convex/client';

interface ConvexClientProviderProps {
  children: ReactNode;
}

export function ConvexClientProvider({ children }: ConvexClientProviderProps) {
  // Convex disabled — pass through children until backend is configured.
  // return (
  //   <ConvexProvider client={convex}>
  //     {children}
  //   </ConvexProvider>
  // );
  return <>{children}</>;
}
