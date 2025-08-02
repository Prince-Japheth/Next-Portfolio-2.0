import { MetadataRoute } from 'next'
import { projectData } from './data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [...staticImages, ...projectImages]
} 