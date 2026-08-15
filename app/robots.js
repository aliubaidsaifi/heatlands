import { company } from '@/data/company';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${company.url}/sitemap.xml`,
  };
}
