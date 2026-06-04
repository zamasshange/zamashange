import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zamashange.co.za'
  const pages = [
    '',
    '/about',
    '/sonke',
    '/bdl-corp',
    '/bdl-news',
    '/contact',
    '/insights',
    '/insights/early-experiments-to-sonke',
    '/insights/designing-from-south-africa',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
    images: page === '' ? [`${baseUrl}/og-image.png`] : undefined,
  }))
}
