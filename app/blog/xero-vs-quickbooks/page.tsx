import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Xero vs QuickBooks: Which is Best for Your Small Business? | Zenith',
  description:
    'Comparing Xero and QuickBooks for small business accounting. Learn the pros, cons, and which platform is right for your business.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/blog/xero-vs-quickbooks',
  },
};

const faqs = [
  {
    question: 'Which is easier to use for beginners, Xero or QuickBooks?',
    answer:
      'Both are user-friendly, but Xero has a slight edge for UK businesses due to its design being specifically tailored to UK accounting practices. QuickBooks is also intuitive but requires a bit more customization for UK compliance. Trial both before deciding.',
  },
  {
    question: 'Can I switch from one to the other later?',
    answer:
      'Yes, you can migrate between platforms, but it requires data export and re-entry or professional migration services. Making the right choice initially saves time and hassle, so try both free trials thoroughly before committing.',
  },
  {
    question: 'What\'s the difference in cost between Xero and QuickBooks?',
    answer:
      'Both offer tiered pricing starting around £10-15/month for basic plans and scaling up to £50-100+ for advanced features. Xero tends to be slightly more affordable for smaller businesses, while QuickBooks may be better value if you need advanced reporting or inventory management.',
  },
  {
    question: 'Which software is better for VAT compliance?',
    answer:
      'Both are MTD-compliant and handle VAT properly, but Xero has a slight advantage as it\'s built specifically with UK VAT rules in mind from the ground up. QuickBooks requires more customization for UK VAT workflows.',
  },
  {
    question: 'Do both integrate with my bank?',
    answer:
      'Yes, both Xero and QuickBooks integrate with UK and international banks. They can automatically import bank transactions, making reconciliation much faster. The integration quality is comparable between the two platforms.',
  },
];

const relatedArticles = [
  { slug: 'when-to-outsource-bookkeeping', title: 'When Should a Small Business Outsource Its Bookkeeping?' },
  { slug: 'making-tax-digital-explained', title: 'Making Tax Digital Explained: What Every Business Owner Needs to Know' },
];

export default function XeroVsQuickBooksBlog() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2244] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8 text-white/70 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Xero vs QuickBooks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Xero vs QuickBooks: Which is Best for Your Small Business?
          </h1>
          <div className="flex flex-wrap gap-6 items-center text-white/80">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                Software
              </span>
            </div>
            <div>
              <span>22 February 2025</span>
            </div>
            <div>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Choosing accounting software is one of the most important decisions you'll make as a business owner. If you're weighing up Xero and QuickBooks, you're looking at two of the best cloud-based accounting platforms available. Both are excellent, but which is right for your business? Let's break it down.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Xero Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Xero is a New Zealand-based accounting software company that has become hugely popular with UK small businesses and accountants. It's built specifically with UK accounting practices in mind, making it naturally compliant with UK tax rules, VAT, and MTD requirements.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">QuickBooks Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              QuickBooks, owned by Intuit, is an American company with strong presence in the UK. It's known for robust invoicing, expense tracking, and advanced reporting. QuickBooks has been around longer and maintains a large user base worldwide.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Xero Pros</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Built for UK businesses:</strong> Designed with UK tax rules, VAT, and PAYE in mind. MTD compliance is built in, not bolted on.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Excellent mobile app:</strong> The Xero mobile app is genuinely useful for capturing receipts and invoices on the go.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Preferred by accountants:</strong> Many UK accountants prefer working with Xero clients due to its features and integration capabilities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Real-time collaboration:</strong> Multiple users can work simultaneously, and real-time dashboard updates are smooth.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Strong API:</strong> Excellent integration options with third-party apps and custom solutions.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Xero Cons</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Steep learning curve for absolute beginners:</strong> Xero has more features, which means more to learn if you're new to accounting software.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Limited offline functionality:</strong> Xero is cloud-first, so you need internet connection to work. No offline mode.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Pricing can add up:</strong> While entry-level plans are affordable, adding extra users or advanced features increases cost quickly.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">QuickBooks Pros</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Excellent invoicing:</strong> QuickBooks' invoicing features are particularly strong and professional-looking.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Inventory management:</strong> Better inventory tracking than Xero for businesses selling physical products.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Advanced reporting:</strong> Customizable reports and advanced financial analysis tools are robust.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Established and familiar:</strong> Millions of users worldwide, so finding support and resources is easy.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Desktop option:</strong> QuickBooks Desktop still available for users who prefer non-cloud software.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">QuickBooks Cons</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">US-first design:</strong> Requires more customization for UK accounting practices and tax compliance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Steeper pricing:</strong> Generally more expensive than Xero at equivalent feature levels.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Mobile app lags behind Xero:</strong> The mobile experience isn't quite as polished.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#0ea5c8] font-bold mt-1">•</span>
                <span><strong className="text-[#0f2244]">Accountant preference:</strong> UK accountants often prefer Xero, so less integration support from your accountant if you use QuickBooks.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Head-to-Head Comparison</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Here's how they compare across key categories:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 px-3 font-bold text-[#0f2244]">Feature</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0f2244]">Xero</th>
                    <th className="text-center py-3 px-3 font-bold text-[#0f2244]">QuickBooks</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-3">UK Tax Compliance</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Excellent</td>
                    <td className="text-center py-3 px-3 font-semibold text-yellow-600">Good</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3">Invoicing</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Very Good</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Excellent</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3">Mobile App</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Excellent</td>
                    <td className="text-center py-3 px-3 font-semibold text-yellow-600">Good</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3">Reporting</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Very Good</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Excellent</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3">Pricing</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Affordable</td>
                    <td className="text-center py-3 px-3 font-semibold text-yellow-600">Moderate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3">Learning Curve</td>
                    <td className="text-center py-3 px-3 font-semibold text-yellow-600">Moderate</td>
                    <td className="text-center py-3 px-3 font-semibold text-green-600">Easier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">Which Should You Choose?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong className="text-[#0f2244]">Choose Xero if:</strong> You're a UK business wanting seamless tax compliance, MTD readiness, and accountant support. You like modern, intuitive design and want excellent mobile functionality. You're comfortable with a bit of a learning curve for more power.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-[#0f2244]">Choose QuickBooks if:</strong> You prioritize invoicing and advanced reporting. You need strong inventory management. You're a beginner and want simpler, more straightforward software. You anticipate growing into more complex financial analysis.
            </p>

            <h2 className="text-3xl font-bold text-[#0f2244] mt-12 mb-6">The Best Approach</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Both platforms offer free trials. Take advantage of them. Spend a few hours in each platform entering sample transactions, creating invoices, and exploring reports. See which feels more natural to you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Zenith Accountancy Services, we work fluently with both platforms. We can help you set up whichever you choose, ensure it's configured for your business, and maintain your records throughout the year. Ultimately, the best software is the one you'll use consistently and that integrates smoothly with your accountant's workflow.
            </p>
          </article>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/software-setup"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                Accounting Software Setup
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We'll set up and configure your accounting software for maximum efficiency.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/bookkeeping-services"
              className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                Bookkeeping Services
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We can manage your accounts on whichever platform you choose.
              </p>
              <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold text-sm">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        title="Accounting Software FAQs"
        subtitle="Common questions about Xero, QuickBooks, and choosing the right platform"
      />

      {/* CTA Section */}
      <CTASection
        title="Let Us Help You Set Up Your Accounting Software"
        description="Whether you choose Xero, QuickBooks, or another platform, we can configure it perfectly for your business and manage your bookkeeping."
        variant="navy"
      />
    </main>
  );
}
