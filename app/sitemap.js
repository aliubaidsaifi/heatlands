import { company } from '@/data/company';

export default function sitemap() {
  const routes = ['', '/about', '/services', '/process', '/projects', '/contact'];
  const now = new Date();

  return routes.map((route) => ({
    url: `${company.url}${route}`,
    lastModified: now,
    changeFrequency: route === '' ? 'monthly' : 'yearly',
    priority: route === '' ? 1 : 0.8,
  }));
}
