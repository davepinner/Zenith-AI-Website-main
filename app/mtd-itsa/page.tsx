import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, BarChart3, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'MTD for Income Tax (MTD ITSA) | Zenith Accountancy',
  description:
    'Expert MTD ITSA guidance for sole traders and landlords in Cheltenham, Winchcombe and the North Cotswolds. Quarterly submissions, software setup, compliance planning.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/mtd-itsa',
  },
};

const faqs = [
  {
    question: 'What is MTD for Income Tax (MTD ITSA)?',
    answer:
      'MTD ITSA requires self-employed individuals and landlords to keep digital records and submit quarterly tax updates to HMRC via MTD software. It moves from one annual Self Assessment filing to four quarterly submissions spread through the tax year.',
  },
  {
    question: 'When does MTD ITSA come into effect?',
    answer:
      'MTD ITSA is rolling out in phases: From April 2026, businesses with turnover above £50k must comply. From 6 April 2027, traders with turnover above £30k. From 6 April 2028, traders with turnover above £20k.',
  },
  {
    question: 'Who does MTD ITSA affect?',
    answer:
      'All sole traders, and landlords reporting through Self Assessment. It doesn\'t affect employees or company directors. Directors only file one annual return.',
  },
  {
    question: 'What software can I use for MTD ITSA?',
    answer:
      'We recommend Xero, QuickBooks, or Sage (all HMRC-approved for MTD ITSA). These maintain digital records year-round and submit quarterly updates to HMRC automatically. Spreadsheets cannot be used.',
  },
  {
    question: 'How often do I submit under MTD ITSA?',
    answer:
      'Four quarterly submissions each tax year, roughly every three months. Deadlines are typically one month after quarter-end. Your final return (linking quarterly updates to Self Assessment) is due 31 January after the tax year ends.',
  },
  {
    question: 'Do I still file an annual Self Assessment?',
    answer:
      'Yes. You submit four quarterly updates through MTD software, then file one final Self Assessment return by 31 January. The annual return links your quarterly figures to calculate total tax, allowances, and any payments due.',
  },
];

export default function MTDITSAPage() {
  return (
    <main>
      <ServiceHero
        title="Making Tax Digital for Income Tax — Are You Ready?"
        subtitle="Expert MTD ITSA guidance from setup through quarterly submissions. We handle the compliance so you focus on your business."
        breadcrumbItems={[{ name: 'Services' }, { name: 'MTD for Income Tax' }]}
        badge="QUARTERLY COMPLIANCE MADE EASY"
        cta={{
          href: '/contact',
          text: 'Plan Your MTD ITSA Strategy',
        }}
      />

      {/* What is MTD ITSA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            What Is MTD for Income Tax?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            MTD ITSA (Making Tax Digital for Income Tax Self Assessment) transforms how you report income to
            HMRC. Instead of filing once per year, you submit quarterly digital updates.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">Old Way (Annual Filing)</h3>
              <ul className="space-y-3">
                {[
                  'One annual Self Assessment return',
                  'File by 31 January after tax year end',
                  'Paper records or spreadsheets',
                  'Less frequent monitoring',
                  'Last-minute rush every January',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">New Way (MTD ITSA - Quarterly)</h3>
              <ul className="space-y-3">
                {[
                  'Four quarterly tax updates',
                  'Spread throughout the tax year',
                  'Digital records (software required)',
                  'Real-time business monitoring',
                  'Final return linked to quarterly updates',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0f2244]/5 border border-[#0f2244]/10 rounded-xl p-6">
            <p className="text-gray-800">
              <span className="font-semibold">Key change:</span> MTD ITSA requires digital records maintained
              throughout the year, not retroactively compiled for a tax return. This means better accuracy,
              easier compliance, and clearer visibility of your financial position.
            </p>
          </div>
        </div>
      </section>

      {/* Who It Affects - Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Who Does MTD ITSA Affect? (Rollout Timeline)
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            MTD ITSA is being introduced in phases based on business turnover.
          </p>

          <div className="space-y-4">
            {[
              {
                date: 'April 2026 - Now',
                threshold: 'Turnover over £50,000+',
                status: 'MANDATORY',
                description:
                  'Sole tradersvand landlords earning over £50k must use MTD ITSA software. If this is you, we can help with immediate setup and compliance.',
              },
              {
                date: 'April 2027',
                threshold: 'Turnover over £30,000+',
                status: 'MANDATORY',
                description:
                  'The threshold drops to £30k. Anyone earning above this must comply. This will cover many small businesses that weren\'t previously required.',
              },
              {
                date: 'April 2028',
                threshold: 'Turnover over £20,000+',
                status: 'MANDATORY',
                description:
                  'The threshold drops to £20k. Anyone earning above this must comply. This will cover many small businesses that weren\'t previously required.',
              },
            ].map((phase, idx) => (
              <div key={phase.date} className="border-l-4 border-[#0ea5c8] bg-white p-6 rounded-r-lg shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0f2244] text-lg">{phase.date}</h3>
                    <p className="text-[#0ea5c8] font-semibold text-sm">{phase.threshold}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-lg font-bold text-white text-sm whitespace-nowrap ${
                      phase.status === 'MANDATORY' ? 'bg-red-600' : 'bg-orange-500'
                    }`}
                  >
                    {phase.status}
                  </span>
                </div>
                <p className="text-gray-700">{phase.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0ea5c8]/10 border border-[#0ea5c8]/20 rounded-xl p-6">
            <p className="text-gray-800">
              <span className="font-semibold">Even if not yet mandatory for you:</span> We recommend moving to
              MTD software now. The earlier you start, the easier the transition will be. Plus, you'll have real-time
              visibility of your finances throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Quarterly Submissions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            How Quarterly Submissions Work
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            MTD ITSA quarterly submissions are straightforward once your software is set up.
          </p>

          <div className="space-y-6 mb-12">
            {[
              {
                quarter: 'Q1 (Apr-Jun)',
                deadline: 'By 31 July',
                what: 'Sales and expenses for Apr-Jun',
              },
              {
                quarter: 'Q2 (Jul-Sep)',
                deadline: 'By 31 October',
                what: 'Sales and expenses for Jul-Sep',
              },
              {
                quarter: 'Q3 (Oct-Dec)',
                deadline: 'By 31 January',
                what: 'Sales and expenses for Oct-Dec',
              },
              {
                quarter: 'Q4 (Jan-Mar)',
                deadline: 'By 31 May',
                what: 'Sales and expenses for Jan-Mar',
              },
            ].map((q) => (
              <div key={q.quarter} className="flex gap-6">
                <div className="flex-shrink-0 pt-1">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold">
                    {q.quarter.split(' ')[0]}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#0f2244] text-lg mb-1">{q.quarter}</h3>
                  <p className="text-gray-700 mb-2">{q.what}</p>
                  <p className="text-[#0ea5c8] font-semibold text-sm">
                    Deadline: {q.deadline}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
            <h3 className="font-bold text-[#0f2244] text-lg mb-4">What Gets Submitted in Each Update</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#0f2244] mb-3">Income</h4>
                <ul className="space-y-2 text-sm text-gray-800">
                  {[
                    'Business sales/turnover',
                    'Invoices issued',
                    'Cash received',
                    'Other business income',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#0f2244] mb-3">Expenses</h4>
                <ul className="space-y-2 text-sm text-gray-800">
                  {[
                    'Business costs',
                    'Equipment purchases',
                    'Mileage (if claiming)',
                    'Other allowable expenses',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Requirements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Software Requirements
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            You must use HMRC-approved MTD software. Spreadsheets and paper records are not acceptable under
            MTD ITSA rules.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: 'Xero',
                pros: ['Our preferred choice', 'Excellent mobile app', 'Real-time bank feeds', 'Built for MTD'],
                price: 'From £14/month',
              },
              {
                name: 'QuickBooks',
                pros: ['Strong invoicing', 'UK support', 'Integrations available', 'MTD ready'],
                price: 'From £9/month',
              },
              {
                name: 'Sage',
                pros: ['Invoicing-focused', 'Expense capture', 'MTD compliant', 'Excellent mobile app'],
                price: 'From £5/month',
              },
            ].map((software) => (
              <div key={software.name} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-[#0f2244] text-lg mb-3">{software.name}</h3>
                <ul className="space-y-2 mb-4">
                  {software.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#0ea5c8] font-bold">{software.price}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#0f2244] text-white rounded-xl p-8">
            <h3 className="font-bold text-lg mb-2">What You Need to Do</h3>
            <ol className="space-y-3">
              {[
                'Choose one of the approved software options (we recommend Xero)',
                'Link your business bank account so transactions sync automatically',
                'Set up income and expense categories matching your business',
                'Keep receipts and invoices digitally for 6 years',
                'Submit quarterly updates as they become due',
              ].map((step, idx) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0ea5c8] text-white font-bold text-sm flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* How Zenith Helps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            How Zenith Helps With MTD ITSA
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            We guide you through every stage of MTD ITSA compliance, from setup to quarterly submissions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Planning & Assessment',
                description:
                  'We assess whether you\'re currently in scope and advise on software choices. If not mandatory yet, we help plan your transition.',
              },
              {
                icon: BarChart3,
                title: 'Software Setup',
                description:
                  'We set up your chosen platform (usually Xero), configure income and expense categories, and connect your bank accounts for automatic sync.',
              },
              {
                icon: Clock,
                title: 'Quarterly Support',
                description:
                  'We manage each quarterly submission, ensuring all figures are accurate and submitted by the deadline. You stay compliant without the stress.',
              },
              {
                icon: CheckCircle2,
                title: 'Annual Linking Return',
                description:
                  'We prepare your final Self Assessment return, linking all quarterly updates and calculating your tax liability by 31 January.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20"
                >
                  <Icon className="w-8 h-8 text-[#0ea5c8] mb-4" />
                  <h3 className="font-bold text-[#0f2244] text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Benefits of MTD ITSA (Even Though It's Mandatory)
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            While MTD ITSA is a compliance requirement, it actually brings real business benefits.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Real-Time Financial Visibility',
                description:
                  'You\'ll see your profit/loss, cash flow, and key metrics updated daily. No more guessing how your business is performing.',
              },
              {
                title: 'Easier Quarterly Reviews',
                description:
                  'Four smaller quarterly reviews are less daunting than one big annual accounting job. You stay on top of things throughout the year.',
              },
              {
                title: 'Better Record Organization',
                description:
                  'Digital records from day one mean no scrambling for receipts at tax time. Everything is organized and categorized automatically.',
              },
              {
                title: 'Faster Compliance',
                description:
                  'Once your software is set up, submissions take minutes. Most of the work is automated; we just verify and submit.',
              },
              {
                title: 'Reduced Audit Risk',
                description:
                  'HMRC has real-time visibility of compliant businesses. Digital records reduce the chance of disputes or misunderstandings.',
              },
              {
                title: 'Better Tax Planning',
                description:
                  'Quarterly reviews mean we can advise on tax-saving opportunities sooner, rather than discovering them at year-end.',
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-[#0f2244] mb-2">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2244] mb-8">
            Related Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/self-assessment',
                title: 'Self Assessment Returns',
                description: 'Your annual Self Assessment return links to MTD ITSA quarterly updates.',
              },
              {
                href: '/vat-returns',
                title: 'VAT Returns & MTD',
                description: 'If VAT-registered, you\'ll use MTD for VAT as well as income tax.',
              },
              {
                href: '/bookkeeping-services',
                title: 'Bookkeeping Services',
                description: 'Bookkeeping forms the foundation of your MTD ITSA records.',
              },
              {
                href: '/software-setup',
                title: 'Software Setup & Training',
                description: 'We set up your MTD software and train you on how to use it.',
              },
              {
                href: '/contact',
                title: 'Plan Your MTD Strategy',
                description: 'Get a personalized MTD ITSA transition plan.',
              },
              {
                href: '/about',
                title: 'Our MTD Expertise',
                description: 'Learn about our experience with MTD implementation.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
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

      <FAQSection
        faqs={faqs}
        title="MTD ITSA Questions"
        subtitle="Answers about Making Tax Digital for Income Tax."
      />

      <CTASection
        title="Ready to Get MTD ITSA Right?"
        description="Whether you're in scope now or preparing for 2027/2028, we'll guide you through every step. Let's make MTD compliance simple."
        primaryHref="/contact"
        primaryText="Book Your MTD ITSA Consultation"
      />
    </main>
  );
}
