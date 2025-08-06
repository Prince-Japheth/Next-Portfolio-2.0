import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Check if the request is coming from a Netlify domain
  const hostname = request.headers.get('host') || ''
  
  if (hostname.includes('netlify.app')) {
    // Add noindex headers for Netlify domains
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex')
    response.headers.set('X-Googlebot', 'noindex, nofollow')
    response.headers.set('X-Bingbot', 'noindex, nofollow')
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 