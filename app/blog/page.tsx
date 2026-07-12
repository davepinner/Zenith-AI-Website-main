import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Bookkeeping & Accountancy Blog | Zenith Accountancy Services',
  description:
    'Expert guidance on bookkeeping, VAT, Making Tax Digital, self assessment and more. Free resources for small businesses in Winchcombe, Cheltenham and Gloucestershire.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog',
  },
};

const articles = [
  {
    slug: 'making-tax-digital-explained',
    title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know',
    category: 'MTD',
    date: '15 January 2025',
    readTime: '7 min read',
    excerpt:
      'Making Tax Digital is changing how UK businesses report their finances to HMRC. Here\'s everything you need to know about the current rules and what\'s coming next.',
  },
  {
    slug: 'when-to-outsource-bookkeeping',
    title: 'When Should a Small Business Outsource Its Bookkeeping?',
    category: 'Bookkeeping',
    date: '8 February 2025',
    readTime: '5 min read',
    excerpt:
      'Struggling to keep on top of your books? Here are the tell-tale signs that it\'s time to bring in a professional bookkeeper.',
  },
  {
    slug: 'xero-vs-quickbooks',
    title: 'Xero vs QuickBooks: Which is Best for Your Small Business?',
    category: 'Software',
    date: '22 February 2025',
    readTime: '8 min read',
    excerpt:
      'Choosing between Xero and QuickBooks? We break down the pros and cons of each platform to help you make the right choice for your business.',
  },
  {
    slug: 'common-vat-mistakes',
    title: '5 Common VAT Return Mistakes (and How to Avoid Them)',
    category: 'VAT',
    date: '10 March 2025',
    readTime: '6 min read',
    excerpt:
      'VAT errors can result in penalties and interest charges from HMRC. Learn the most common mistakes small businesses make and how to avoid them.',
  },
  {
    slug: 'self-assessment-deadlines',
    title: 'Self Assessment Deadlines: A Complete Guide for 2024/25',
    category: 'Tax',
    date: '1 April 2025',
    readTime: '5 min read',
    excerpt:
      'Never miss an HMRC deadline again. This guide covers all the key self assessment dates and what you need to do — and when.',
  },
  {
    slug: 'mtd-itsa-guide-sole-traders',
    title: 'MTD ITSA: A Complete Guide for Sole Traders',
    category: 'MTD',
    date: '20 April 2025',
    readTime: '9 min read',
    excerpt:
      'Making Tax Digital for Income Tax Self Assessment will affect millions of sole traders. Find out what it means for you and how to get ready.',
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  MTD: { bg: 'bg-blue-100', text: 'text-blue-800' },
  Bookkeeping: { bg: 'bg-teal-100', text: 'text-teal-800' },
  Software: { bg: 'bg-purple-100', text: 'text-purple-800' },
  VAT: { bg: 'bg-orange-100', text: 'text-orange-800' },
  Tax: { bg: 'bg-green-100', text: 'text-green-800' },
};

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2244] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Bookkeeping & Tax Guides
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Free resources, insights, and practical advice to help you stay on top of your finances.
              From VAT compliance to Making Tax Digital, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const colors = categoryColors[article.category] || { bg: 'bg-gray-100', text: 'text-gray-800' };
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[#0ea5c8] hover:shadow-lg transition-all duration-300"
                >
                  {/* Card Content */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#0f2244] mb-3 group-hover:text-[#0ea5c8] transition-colors line-clamp-3">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read Article Link */}
                    <div className="flex items-center gap-2 text-[#0ea5c8] font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sidebar Suggestion */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-[#0f2244] mb-8">More Resources</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-[#0f2244] mb-2">Bookkeeping Best Practices</h3>
                  <p className="text-gray-600 text-sm">
                    Keep your finances organized with our comprehensive guides on record keeping, expense tracking, and financial management.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-[#0f2244] mb-2">Tax Compliance Updates</h3>
                  <p className="text-gray-600 text-sm">
                    Stay current with HMRC requirements and tax deadlines. We regularly update our guides to reflect the latest regulatory changes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-[#0f2244] mb-2">Software Integrations</h3>
                  <p className="text-gray-600 text-sm">
                    Learn how to leverage Xero, QuickBooks, and other accounting platforms to streamline your bookkeeping workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Related Services */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 mb-6">
                <h3 className="font-bold text-[#0f2244] mb-6 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-[#0ea5c8]" />
                  Related Services
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/bookkeeping-services"
                    className="block text-sm text-[#0ea5c8] hover:text-[#0891b2] font-semibold"
                  >
                    → Bookkeeping Services
                  </Link>
                  <Link
                    href="/vat-returns"
                    className="block text-sm text-[#0ea5c8] hover:text-[#0891b2] font-semibold"
                  >
                    → VAT Returns & Compliance
                  </Link>
                  <Link
                    href="/self-assessment"
                    className="block text-sm text-[#0ea5c8] hover:text-[#0891b2] font-semibold"
                  >
                    → Self Assessment Services
                  </Link>
                  <Link
                    href="/mtd-itsa"
                    className="block text-sm text-[#0ea5c8] hover:text-[#0891b2] font-semibold"
                  >
                    → MTD ITSA Support
                  </Link>
                  <Link
                    href="/payroll-services"
                    className="block text-sm text-[#0ea5c8] hover:text-[#0891b2] font-semibold"
                  >
                    → Payroll Services
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-[#0ea5c8] text-white p-8 rounded-xl">
                <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
                <p className="text-sm text-white/90 mb-6">
                  Get our latest articles and tax tips delivered to your inbox each month.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-3 py-2 rounded text-gray-900 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-[#0ea5c8] font-semibold py-2 px-4 rounded hover:bg-gray-100 transition-colors text-sm"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-xs text-white/70 mt-4">
                  We respect your privacy. No spam, just useful insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Professional Bookkeeping Support?"
        description="Let our expert team handle your financial administration. Book a free consultation to discuss how we can help your business."
        variant="navy"
      />
    </main>
  );
}
