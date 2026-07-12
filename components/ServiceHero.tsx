import Link from 'next/link';
import { Breadcrumb } from './Breadcrumb';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  breadcrumbItems: Array<{ name: string; href?: string }>;
  badge?: string;
  cta?: {
    href: string;
    text: string;
  };
}

export function ServiceHero({ title, subtitle, breadcrumbItems, badge, cta }: ServiceHeroProps) {
  return (
    <section className="bg-[#0f2244] pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />
        <div className="mt-6 max-w-3xl">
          {badge && (
            <span className="inline-block bg-[#0ea5c8]/20 text-[#0ea5c8] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-6">{subtitle}</p>
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/25"
            >
              {cta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
