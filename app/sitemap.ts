import { MetadataRoute } from 'next'
import { projectData } from './data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://japhethjerry.space' // Replace with your actual domain
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/instagram`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/linkedin`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Dynamic project pages
  const projectPages = projectData
    .filter(project => project.link.startsWith('http')) // Only projects with external links
    .map(project => {
      const slug = project.title
        .toLowerCase()
        .replace(/[|]/g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
      
      return {
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })

  return [...staticPages, ...projectPages]
} 