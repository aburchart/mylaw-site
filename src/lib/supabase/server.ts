import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';

// Use this ONLY in Server Components and Route Handlers (never in client components)
export function createServerClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
