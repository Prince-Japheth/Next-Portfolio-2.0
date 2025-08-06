import { NextResponse } from 'next/server'

export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">
    <meta name="googlebot" content="noindex, nofollow">
    <title>Not Indexed</title>
</head>
<body>
    <h1>This page is not intended for indexing</h1>
    <p>This is a development/staging domain that should not appear in search results.</p>
    <script>
        // Additional JavaScript to prevent indexing
        if (window.location.hostname.includes('netlify.app')) {
            // Add noindex meta tag dynamically
            const meta = document.createElement('meta');
            meta.name = 'robots';
            meta.content = 'noindex, nofollow';
            document.head.appendChild(meta);
        }
    </script>
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
} 