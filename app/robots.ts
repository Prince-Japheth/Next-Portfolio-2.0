import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/', '/v/'],
      },
      {
        userAgent: [
          'Google-Extended', 
          'GPTBot', 
          'ChatGPT-User', 
          'Anthropic-ai', 
          'Claude-Web', 
          'ClaudeBot', 
          'PerplexityBot', 
          'cohere-ai', 
          'OAI-SearchBot',
          'Applebot-Extended',
          'Bytespider',
          'Diffbot'
        ],
        allow: '/',
      }
    ],
    sitemap: [
      'https://japhethjerry.space/sitemap.xml',
      'https://japhethjerry.space/sitemap-image.xml'
    ],
  }
}