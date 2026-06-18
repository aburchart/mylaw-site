import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Clerk session cookie names typically include '__clerk'
    const hasClerkSession = request.cookies
      .getAll()
      .some((c) => c.name.startsWith('__clerk'));

    if (!hasClerkSession) {
      const url = new URL('/auth', request.url);
      url.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
