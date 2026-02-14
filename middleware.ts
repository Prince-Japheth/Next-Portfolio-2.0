
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Add restrictive headers for the /v/ path
    if (pathname.startsWith('/v/')) {
        const response = NextResponse.next();
        response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
        return response;
    }

    // Continue for other routes
    return NextResponse.next();
}

export const config = {
    matcher: '/v/:path*',
};
