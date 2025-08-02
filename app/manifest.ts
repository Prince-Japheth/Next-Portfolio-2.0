import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Japheth Jerry - Software Engineer Portfolio',
    short_name: 'Japheth Jerry',
    description: 'Software Engineer specializing in React, Next.js, TypeScript, and modern web development. View my projects, skills, and experience.',
    start_url: 'https://japhethjerry.space',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ffbc5e',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/assets/images/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable any',
      },
      {
        src: '/assets/images/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable any',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    prefer_related_applications: false,
  }
} 