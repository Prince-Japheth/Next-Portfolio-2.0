import { NextResponse } from 'next/server'
import { projectData } from '../data/projects'

export async function GET() {
  const baseUrl = 'https://japhethjerry.space'
  
  // Static images
  const staticImages = [
    {
      url: `${baseUrl}/assets/images/project_0.png`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/assets/images/me.png`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/assets/images/me2.png`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/assets/images/logo.png`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]

  // Project images
  const projectImages = projectData
    .filter(project => project.image && !project.image.startsWith('http'))
    .map(project => {
      const imagePath = project.image.startsWith('/') ? project.image : `/${project.image}`
      return {
        url: `${baseUrl}${imagePath}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })

  const sitemap = [...staticImages, ...projectImages]

  // Convert to XML format
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.map(item => `
  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastModified.toISOString()}</lastmod>
    <changefreq>${item.changeFrequency}</changefreq>
    <priority>${item.priority}</priority>
  </url>
`).join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
} 