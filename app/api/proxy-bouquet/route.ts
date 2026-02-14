import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url');

    if (!url) {
        return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
    }

    // Basic security check to ensure we only proxy allowed domains if needed, 
    // but for now we focus on the specific task.
    // Ideally, restrict to digibouquet.vercel.app
    if (!url.startsWith('https://digibouquet.vercel.app/')) {
        return NextResponse.json({ error: 'Invalid URL domain' }, { status: 400 });
    }

    try {
        console.log(`[Proxy] Fetching content from: ${url}`);
        const res = await fetch(url, {
            headers: {
                'User-Agent': request.headers.get('user-agent') || 'Next-Portfolio-Proxy',
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error(`[Proxy] Failed to fetch. Status: ${res.status}`);
            return NextResponse.json({ error: `Failed to fetch upstream: ${res.status}` }, { status: res.status });
        }

        let html = await res.text();

        // Inject <base> tag to ensure relative links (styles, scripts, images) resolve correctly
        // We add it right after <head>
        const baseTag = '<base href="https://digibouquet.vercel.app/" />';
        html = html.replace('<head>', `<head>${baseTag}`);

        // Hiding specific elements as requested by the user.
        // We expect the HTML structure to match the provided snippet.
        // Strategy: Add 'hidden' class (display: none) to the elements.

        // 1. Hide the buttons container
        // Regex to handle potential whitespace variations
        // Target: <div class="py-10 pt-4"><div class="flex flex-wrap...
        const buttonsRegex = /<div\s+class=["']py-10\s+pt-4["']\s*>\s*<div\s+class=["']flex\s+flex-wrap/i;

        if (buttonsRegex.test(html)) {
            html = html.replace(buttonsRegex, '<div class="py-10 pt-4" style="display:none !important;"><div class="flex flex-wrap');
            console.log('[Proxy] Successfully hid buttons container.');
        } else {
            console.warn('[Proxy] Count not find buttons container to hide using regex. Fallback check skipped.');
        }

        // 2. Hide "made with digibouquet" paragraph
        // Regex: <p class="text-sm text-black">made with digibouquet
        const footerTextRegex = /<p\s+class=["']text-sm\s+text-black["']\s*>\s*made\s+with\s+digibouquet/i;

        if (footerTextRegex.test(html)) {
            html = html.replace(footerTextRegex, '<p class="text-sm text-black" style="display:none !important;">made with digibouquet');
            console.log('[Proxy] Successfully hid footer text.');
        } else {
            console.warn('[Proxy] Could not find footer text to hide.');
        }

        // 3. Hide "make a bouquet now!" link
        // Regex: <a class="text-sm underline text-black mt-2" href="/">make a bouquet now!</a>
        const linkRegex = /<a\s+class=["']text-sm\s+underline\s+text-black\s+mt-2["']\s+href=["']\/["']\s*>\s*make\s+a\s+bouquet\s+now!/i;

        if (linkRegex.test(html)) {
            html = html.replace(linkRegex, '<a class="text-sm underline text-black mt-2" href="/" style="display:none !important;">make a bouquet now!</a>');
            console.log('[Proxy] Successfully hid call-to-action link.');
        } else {
            console.warn('[Proxy] Could not find call-to-action link to hide.');
        }

        return new NextResponse(html, {
            headers: {
                'Content-Type': 'text/html',
                'Cache-Control': 'no-store, max-age=0', // Prevent caching of modified content
            },
        });

    } catch (error) {
        console.error('[Proxy] Error processing request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
