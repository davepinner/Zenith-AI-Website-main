import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.zenith-as.co.uk';
  const now = new Date();

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/analysis', priority: 0.8, changeFrequency: 'monthly' as const },
    // Service pages
    { url: '/bookkeeping-services', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/vat-returns', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/self-assessment', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/mtd-itsa', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/payroll-services', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/record-keeping', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/statutory-accounts', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/data-migration', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/software-setup', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/it-support', priority: 0.7, changeFrequency: 'monthly' as const },
    // Location page
    { url: '/areas', priority: 0.95, changeFrequency: 'monthly' as const },
    // Blog posts
    { url: '/blog/making-tax-digital-explained', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/when-to-outsource-bookkeeping', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/xero-vs-quickbooks', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/common-vat-mistakes', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/self-assessment-deadlines', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/blog/mtd-itsa-guide-sole-traders', priority: 0.6, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
