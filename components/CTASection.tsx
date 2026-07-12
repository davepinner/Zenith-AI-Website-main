import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryText?: string;
  secondaryHref?: string;
  secondaryText?: string;
  variant?: 'navy' | 'light' | 'teal';
}

export function CTASection({
  title = 'Ready to Take Control of Your Finances?',
  description = 'Book a free, no-obligation consultation with David Pinner and discover how professional bookkeeping can save you time and money.',
  primaryHref = '/contact',
  primaryText = 'Get a Free Quote',
  secondaryHref = 'tel:+441242000000',
  secondaryText = 'Call 01242 000 000',
  variant = 'navy',
}: CTASectionProps) {
  const backgrounds = {
    navy: 'bg-[#0f2244]',
    light: 'bg-gray-50',
    teal: 'bg-[#0ea5c8]',
  };

  const textColors = {
    navy: 'text-white',
    light: 'text-[#0f2244]',
    teal: 'text-white',
  };

  const descColors = {
    navy: 'text-white/70',
    light: 'text-gray-600',
    teal: 'text-white/80',
  };

  return (
    <section className={`${backgrounds[variant]} py-16 md:py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColors[variant]} mb-4`}>
          {title}
        </h2>
        <p className={`text-lg ${descColors[variant]} mb-8 max-w-2xl mx-auto`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/30 hover:-translate-y-0.5"
          >
            {primaryText}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href={secondaryHref}
            className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border-2 transition-all hover:-translate-y-0.5 ${
              variant === 'light'
                ? 'border-[#0f2244] text-[#0f2244] hover:bg-[#0f2244] hover:text-white'
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
          >
            <Phone className="w-5 h-5" />
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}
