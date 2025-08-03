import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Japheth Jerry - Portfolio',
    short_name: 'Japheth Jerry',
    description: 'Full Stack Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/assets/images/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'maskable any',
      },
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
  }
} 