import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.zenith-as.co.uk',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.href && { item: `https://www.zenith-as.co.uk${item.href}` }),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/60">
        <Link href="/" className="hover:text-white transition-colors">
          <Home className="w-3.5 h-3.5" />
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-1.5">
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-white transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-white/80">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
