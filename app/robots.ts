import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/_next/', '/private/', '/v/'],
    },
    sitemap: [
      'https://japhethjerry.space/sitemap.xml',
      'https://japhethjerry.space/sitemap-image.xml'
    ],
  }
} 