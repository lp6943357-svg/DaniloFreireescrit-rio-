import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://danilo-freire-advogados.com'
  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/privacidade`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/termos`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}