import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, AlertCircle, FileCheck, BarChart3, Shield } from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'VAT Returns & Making Tax Digital | Zenith',
  description:
    'VAT returns and MTD compliance for businesses in Cheltenham, Winchcombe and Gloucestershire. HMRC-compliant, stress-free VAT management.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/vat-returns',
  },
};

const faqs = [
  {
    question: 'When do I need to register for VAT?',
    answer:
      'If your business turnover exceeds £85,000 in the last 12 months (as of April 2024), you must register for VAT. Some businesses choose to register below this threshold. We can advise whether voluntary registration makes sense for your business.',
  },
  {
    question: 'How often are VAT returns submitted?',
    answer:
      'Standard VAT returns are quarterly (four times a year), with a submission deadline of one month after the quarter ends. Some businesses submit monthly. We manage all deadlines and ensure timely HMRC submission through MTD.',
  },
  {
    question: 'What is Making Tax Digital (MTD)?',
    answer:
      'MTD requires VAT-registered businesses to keep digital records and submit VAT returns through MTD-compatible software. We use Xero and other HMRC-approved platforms to ensure full compliance. No more paper records or manual submissions.',
  },
  {
    question: 'What if I miss a VAT deadline?',
    answer:
      'Late submissions incur HMRC penalties. Missing the deadline by 1-3 months triggers a £200 penalty; further delays lead to higher penalties plus interest. We manage all dates so you never miss a deadline.',
  },
  {
    question: 'Can you help if I owe VAT?',
    answer:
      'Yes. We can help you set up a payment plan with HMRC if you owe VAT, and we advise on cash flow planning. Sometimes claiming VAT recovery on expenses can reduce or eliminate what you owe. Let\'s discuss your situation.',
  },
  {
    question: 'Do you handle VAT audits or disputes?',
    answer:
      'We help prepare your records for HMRC reviews and liaise with tax authorities on your behalf. For complex disputes, we work alongside your accountant or tax advisor.',
  },
];

export default function VATReturnsPage() {
  return (
    <main>
      <ServiceHero
        title="VAT Returns & Making Tax Digital Compliance"
        subtitle="Manage VAT confidently with expert guidance. We handle registration, submissions, and MTD compliance."
        breadcrumbItems={[{ name: 'Services' }, { name: 'VAT Returns & MTD' }]}
        badge="HMRC-COMPLIANT SUBMISSIONS"
        cta={{
          href: '/contact',
          text: 'Start Your VAT Journey',
        }}
      />

      {/* VAT Registration Support */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
            VAT Registration Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Registering for VAT can seem daunting, but it's a straightforward process when you have expert
                guidance. We'll assess whether VAT registration is mandatory for your business or whether
                voluntary registration could benefit you.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Once registered, we help you understand your VAT obligations, set up proper record-keeping, and
                ensure you're ready to submit compliant returns from day one.
              </p>

              <div className="space-y-3">
                {[
                  'Threshold assessment and advice',
                  'HMRC registration application',
                  'Voluntary registration guidance',
                  'Initial setup and training',
                  'Record-keeping best practices',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">Immediate VAT Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0ea5c8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-800">Reclaim VAT on business expenses and equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0ea5c8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-800">Invoice customers including VAT</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0ea5c8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-800">Strengthen credibility with large clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0ea5c8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-800">Potential VAT reclaim refunds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Submissions Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            The VAT Submission Process
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Our streamlined approach ensures accurate, timely VAT returns every time.
          </p>

          <div className="space-y-6">
            {[
              {
                step: 1,
                icon: BarChart3,
                title: 'Quarterly Review',
                description:
                  'We review all your sales, purchases, and VAT records for the quarter. Everything is reconciled and categorized in your MTD software.',
              },
              {
                step: 2,
                icon: FileCheck,
                title: 'Calculation & Verification',
                description:
                  'We calculate the VAT due, identify any credits owed to you, and verify every figure. All records are checked for accuracy and compliance.',
              },
              {
                step: 3,
                icon: AlertCircle,
                title: 'Review Meeting (Optional)',
                description:
                  'We can discuss the results with you, explain any adjustments, and answer questions about what\'s due or refundable.',
              },
              {
                step: 4,
                icon: Shield,
                title: 'HMRC Submission',
                description:
                  'We submit your return through MTD software before the deadline. You receive confirmation, and payment is due within 30 days.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0ea5c8] text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-lg text-[#0f2244] mb-2 flex items-center gap-2">
                      <Icon className="w-5 h-5 text-[#0ea5c8]" />
                      {item.title}
                    </h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MTD Compliance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Making Tax Digital (MTD) Compliance
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            All VAT-registered businesses must use MTD-compliant software to keep records and submit returns to
            HMRC. We handle the technology so you don't have to.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0f2244]/5 to-transparent p-8 rounded-xl border border-[#0f2244]/10">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">What MTD Means</h3>
              <ul className="space-y-4">
                {[
                  'Digital records kept in real-time (not spreadsheets)',
                  'API-connected software (like Xero)',
                  'Submissions direct to HMRC via MTD portal',
                  'Automated reconciliation and data integrity checks',
                  'Audit trail of all changes and transactions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">Our MTD Support</h3>
              <ul className="space-y-4">
                {[
                  'Xero setup and training',
                  'Bank connection and reconciliation',
                  'Quarterly VAT submission via MTD',
                  'HMRC communication and issues',
                  'Compliance advice and updates',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HMRC Requirements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Key HMRC Requirements
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Understanding what HMRC expects keeps you compliant and confident.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Record Keeping',
                items: [
                  'Keep records for 6 years',
                  'Digital copies are acceptable',
                  'Maintain audit trail',
                  'Show source of all figures',
                ],
              },
              {
                title: 'Submission Deadlines',
                items: [
                  'Submit by 1 month after quarter end',
                  'Payment due within 30 days',
                  'Late payments incur penalties',
                  'Monthly submissions are allowed',
                ],
              },
              {
                title: 'VAT Codes',
                items: [
                  'Use correct codes for each transaction',
                  'Standard rate (20%)',
                  'Reduced rate (5%)',
                  'Zero rate (0%) and exempt',
                ],
              },
              {
                title: 'VAT Recovery',
                items: [
                  'Can only claim on business purchases',
                  'Input tax must be from registered suppliers',
                  'No recovery on expenses like entertainment',
                  'Proper invoices and receipts required',
                ],
              },
              {
                title: 'Corrections',
                items: [
                  'Correct errors within 1 month',
                  'Some errors don\'t need disclosure',
                  'Large errors need HMRC notification',
                  'Interest accrues on late payments',
                ],
              },
              {
                title: 'Penalties & Interest',
                items: [
                  'Late return penalty: £200',
                  'Repeated late returns: higher penalties',
                  'Payment interest: 8% per annum',
                  'Fraud penalties: up to 100%',
                ],
              },
            ].map((section) => (
              <div
                key={section.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-[#0f2244] text-lg mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Common VAT Mistakes to Avoid
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            We've seen hundreds of VAT issues. Here's what we help our clients avoid.
          </p>

          <div className="space-y-4">
            {[
              {
                mistake: 'Missing Deadlines',
                consequence: 'HMRC penalties up to £200 per submission.',
                solution: 'We manage all dates and submit early.',
              },
              {
                mistake: 'Incorrect VAT Codes',
                consequence: 'Overpaying VAT or claiming incorrectly.',
                solution: 'We audit every transaction and use correct codes.',
              },
              {
                mistake: 'Mixing Personal and Business Expenses',
                consequence: 'VAT reclaim denied; compliance issues.',
                solution: 'We keep records separate from day one.',
              },
              {
                mistake: 'Not Recording Invoice Details',
                consequence: 'Can\'t prove VAT paid; HMRC challenges.',
                solution: 'We maintain full invoice and receipt records.',
              },
              {
                mistake: 'Claiming VAT on Non-Business Items',
                consequence: 'Penalties and interest from HMRC.',
                solution: 'We only claim VAT on eligible business expenses.',
              },
              {
                mistake: 'Poor Record Organization',
                consequence: 'Audit delays; penalties if records can\'t be found.',
                solution: 'Everything is organized and audit-ready.',
              },
            ].map((item) => (
              <div key={item.mistake} className="border-l-4 border-[#0ea5c8] bg-[#0ea5c8]/5 p-6 rounded-r-lg">
                <h3 className="font-bold text-[#0f2244] text-lg mb-2">{item.mistake}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Risk:</span> {item.consequence}
                </p>
                <p className="text-[#0ea5c8] font-semibold">
                  <span className="text-gray-700">How we help: </span>
                  {item.solution}
                </p>
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
                href: '/bookkeeping-services',
                title: 'Bookkeeping Services',
                description: 'Our full bookkeeping includes VAT record-keeping.',
              },
              {
                href: '/mtd-itsa',
                title: 'MTD for Income Tax',
                description: 'Sole traders need both VAT MTD and income tax MTD.',
              },
              {
                href: '/self-assessment',
                title: 'Self Assessment Returns',
                description: 'We handle both VAT and personal tax filings.',
              },
              {
                href: '/payroll-services',
                title: 'Payroll Services',
                description: 'Payroll includes VAT on employee expenses.',
              },
              {
                href: '/contact',
                title: 'Get Expert Advice',
                description: 'Discuss your VAT situation with our team.',
              },
              {
                href: '/about',
                title: 'Meet Our Team',
                description: 'Learn about our tax compliance expertise.',
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

      <FAQSection
        faqs={faqs}
        title="VAT Returns & MTD Questions"
        subtitle="Find answers to common VAT and compliance questions."
      />

      <CTASection
        title="Take Control of Your VAT Compliance"
        description="Our experts handle VAT registration, calculations, and HMRC submissions. Let us take the stress out of VAT."
        primaryHref="/contact"
        primaryText="Book a Free VAT Consultation"
      />
    </main>
  );
}
