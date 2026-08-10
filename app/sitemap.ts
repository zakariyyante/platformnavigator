import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://platformnavigator.com';
  const routes = [
    '',
    '/guide',
    '/contact',
    '/privacy',
    '/brands',
    '/terms',
    '/about',
    '/responsible-gambling',
    '/cookies',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
