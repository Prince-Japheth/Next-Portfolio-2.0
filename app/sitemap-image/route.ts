import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://japhethjerry.space'
  
  const imageSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <image:image>
      <image:loc>${baseUrl}/assets/images/me2.png</image:loc>
      <image:title>Japheth Jerry - Software Engineer and Co-Founder of Qallie</image:title>
      <image:caption>Japheth Jerry - Software Engineer and Co-Founder of Qallie</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/assets/images/logo.png</image:loc>
      <image:title>Japheth Jerry Portfolio Logo</image:title>
      <image:caption>Japheth Jerry Portfolio Logo</image:caption>
    </image:image>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <image:image>
      <image:loc>${baseUrl}/assets/images/me2.png</image:loc>
      <image:title>About Japheth Jerry - Software Engineer</image:title>
      <image:caption>Japheth Jerry - Software Engineer and Co-Founder of Qallie</image:caption>
    </image:image>
  </url>
</urlset>`

  return new NextResponse(imageSitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 