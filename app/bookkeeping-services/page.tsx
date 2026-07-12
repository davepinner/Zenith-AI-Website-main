import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, BarChart3, Shield, Clock, Zap } from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Bookkeeping Services in Cheltenham & Winchcombe | Zenith Accountancy Services',
  description:
    'Professional bookkeeping for small businesses in Cheltenham, Winchcombe and the North Cotswolds. Fixed monthly fees, MTD-compliant, ICB qualified.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/bookkeeping-services',
  },
};

const faqs = [
  {
    question: 'What does your bookkeeping service include?',
    answer:
      "Our comprehensive bookkeeping service includes monthly bank reconciliations, invoice management, expense categorisation, VAT compliance tracking, financial reporting, and year-end preparation for your accounts. We handle all the back-office work so you can focus on growing your business.",
  },
  {
    question: 'How much do bookkeeping services cost?',
    answer:
      'We offer transparent, fixed monthly fees based on your transaction volume and complexity. There are no hidden costs, and you can cancel anytime. Get a personalised quote by contacting us.',
  },
  {
    question: 'Can you integrate with our accounting software?',
    answer:
      'Yes, we work with Xero, QuickBooks, Sage, FreeAgent and more. We can set up integrations with your bank, suppliers, and invoicing tools to minimize manual data entry and keep everything up to date in real-time.',
  },
  {
    question: 'Do you handle VAT records?',
    answer:
      'Absolutely. We maintain detailed VAT records, track VAT on invoices and expenses, and help you prepare for VAT returns. We ensure all records are Making Tax Digital (MTD) compliant and ready for HMRC submission.',
  },
  {
    question: 'What if my records are a mess right now?',
    answer:
      "Don't worry — we've helped many businesses get organised from a messy starting point. We can do a one-off catch-up to get your records in order, then maintain them going forward. Let's discuss your situation in a free consultation.",
  },
];

export default function BookkeepingServicesPage() {
  return (
    <main>
      <ServiceHero
        title="Professional Bookkeeping Services for Small Businesses"
        subtitle="Keep your records accurate, compliant, and stress-free. Our ICB-qualified bookkeepers handle the detail so you focus on what matters."
        breadcrumbItems={[{ name: 'Services' }, { name: 'Bookkeeping Services' }]}
        badge="TRUSTED BY LOCAL BUSINESSES"
        cta={{
          href: '/contact',
          text: 'Get a Free Quote',
        }}
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
              Why Outsource Your Bookkeeping?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Small business owners often spend countless hours on bookkeeping—time that could be spent
              growing revenue. Our fixed-fee bookkeeping service handles all the financial administration,
              ensuring your records are always accurate, compliant, and ready for tax time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Save Time</h3>
                  <p className="text-gray-700">
                    Free up 5-10 hours per month to focus on sales, customer service, and business
                    development instead of data entry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Peace of Mind</h3>
                  <p className="text-gray-700">
                    Your records are maintained by ICB-qualified bookkeepers. No errors, no HMRC headaches,
                    no missed deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Real-Time Insights</h3>
                  <p className="text-gray-700">
                    Access your financial data anytime through cloud accounting software. Monitor your cash
                    flow, profitability, and key metrics daily.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Lower Costs</h3>
                  <p className="text-gray-700">
                    Fixed monthly fees beat the cost of hiring an in-house bookkeeper. Plus, accurate
                    records help at tax time — fewer corrections, lower fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-700">
              Our streamlined monthly bookkeeping process keeps everything organized and compliant.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: 'Connect Your Bank & Software',
                description:
                  'We link your bank accounts, payment processors, and invoice software to Xero (or your chosen platform) to pull data automatically.',
              },
              {
                step: 2,
                title: 'Monthly Reconciliation & Categorisation',
                description:
                  'We reconcile bank statements, categorise transactions correctly, and ensure VAT is tracked. Usually completed within 5 business days of month-end.',
              },
              {
                step: 3,
                title: 'Review & Approval',
                description:
                  'Your monthly financial reports are ready. We highlight any queries, explain the numbers, and ensure you have the data you need.',
              },
              {
                step: 4,
                title: 'Compliance & Reporting',
                description:
                  'We prepare VAT records, manage tax deadlines, and provide reports to your accountant. Everything is MTD-ready and audit-proof.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-bold text-lg text-[#0f2244] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Software Integrations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
              Software We Support
            </h2>
            <p className="text-lg text-gray-700">
              We're certified in cloud accounting software and integrate with your existing tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Xero',
                description: 'Our preferred platform. Real-time sync, excellent mobile app, UK tax-ready.',
              },
              {
                name: 'QuickBooks',
                description: 'Full UK support. Seamless invoicing and expense tracking integration.',
              },
              {
                name: 'Sage',
                description: 'Desktop or cloud. Ideal if you have complex invoicing or multi-location needs.',
              },
            ].map((software) => (
              <div
                key={software.name}
                className="bg-gradient-to-br from-[#0f2244]/5 to-transparent p-6 rounded-xl border border-[#0f2244]/10"
              >
                <h3 className="font-bold text-lg text-[#0f2244] mb-2">{software.name}</h3>
                <p className="text-gray-700">{software.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0ea5c8]/10 border border-[#0ea5c8]/20 rounded-xl p-8">
            <p className="text-gray-700">
              Not using one of these? We can work with most modern cloud accounting tools. Get in touch to
              discuss your setup.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-700">
              We work with businesses across various sectors, such as:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Professional Services (consultants, contractors, coaches)',
              'Hospitality & Retail',
              'E-commerce & Online Sellers',
              'Tradespeople & Contractors',
              'Property & Letting Businesses',
              'Creative Industries (design, marketing, media)',
              'Construction Businesses',
              'Tech Startups & Software Companies',
            ].map((industry) => (
              <div key={industry} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12">
            What You Get With Our Service
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Monthly bank reconciliations',
              'Invoice and expense management',
              'VAT compliance and tracking',
              'Real-time financial dashboards',
              'Year-end profit & loss statements',
              'Cash flow forecasting',
              'Supplier and customer records',
              'Tax-compliant documentation',
              'Quarterly reporting (if needed)',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2244] mb-8">
            Related Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/vat-returns',
                title: 'VAT Returns & MTD Compliance',
                description: 'We manage your VAT records and HMRC submissions.',
              },
              {
                href: '/record-keeping',
                title: 'Record Keeping Services',
                description: 'Keep your financial records organized and compliant.',
              },
              {
                href: '/bookkeeper-cheltenham',
                title: 'Bookkeeper in Cheltenham',
                description: 'Local bookkeeping expertise for Cheltenham businesses.',
              },
              {
                href: '/bookkeeper-winchcombe',
                title: 'Bookkeeper in Winchcombe',
                description: 'Professional bookkeeping for Winchcombe businesses.',
              },
              {
                href: '/about',
                title: 'About Our Team',
                description: 'Meet our ICB-qualified bookkeepers.',
              },
              {
                href: '/contact',
                title: 'Get in Touch',
                description: 'Book a free consultation today.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-6 bg-white rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-[#0f2244] mb-2 group-hover:text-[#0ea5c8] transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{link.description}</p>
                <span className="inline-flex items-center gap-2 text-[#0ea5c8] font-semibold">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Stop Worrying About Your Books?"
        description="Our fixed-fee bookkeeping service keeps your records accurate and compliant. Get a free consultation with our ICB-qualified team."
        primaryHref="/contact"
        primaryText="Book Your Free Consultation"
      />
    </main>
  );
}
