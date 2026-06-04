import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zamashange.co.za'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          title: 'Zama Shange - Founder Portfolio',
        },
      ],
    },
  ]
}