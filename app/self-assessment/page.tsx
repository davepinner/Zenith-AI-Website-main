import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Calendar, AlertCircle, FileText, Shield } from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Self Assessment Tax Returns | Zenith Accountancy',
  description:
    'Self assessment tax returns for sole traders, landlords and directors in Cheltenham, Winchcombe and Gloucestershire. On-time, accurate, penalty-free.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/self-assessment',
  },
};

const faqs = [
  {
    question: 'Do I need to file a Self Assessment return?',
    answer:
      'Yes, if you\'re self-employed, a landlord, a company director, or have income from other sources (savings, dividends, etc.). Even if you only work part-time or have minimal income, HMRC requires a return if your total income exceeds £12,570 per year (or you have tax to pay).',
  },
  {
    question: 'What is the Self Assessment deadline?',
    answer:
      'The deadline is 31 January after the tax year ends. For example, the tax year 2024/25 ends on 5 April 2025, and you must file by 31 January 2026. Online filing requires submission by 23:59 GMT on that date.',
  },
  {
    question: 'What happens if I miss the deadline?',
    answer:
      'Late filing penalties start at £100 (even if you owe no tax). If you\'re more than 3 months late, penalties increase. Interest accrues on any tax owed from the due date. We ensure you file on time every year.',
  },
  {
    question: 'Can I get a deadline extension?',
    answer:
      'HMRC can grant extensions in exceptional circumstances (illness, bereavement, etc.). Extensions are rare and must be requested before the deadline. The best approach is to file early and avoid the stress entirely.',
  },
  {
    question: 'What records do I need?',
    answer:
      'Keep records of all income, expenses, invoices, receipts, mileage logs, and bank statements for at least 5 years. We can advise on what to keep and help organize everything for your return.',
  },
  {
    question: 'Can I claim home office expenses?',
    answer:
      'Yes. You can use the simplified method (£12 per month, no records needed) or calculate actual expenses (rent, utilities, internet split by usage). We help you maximize legitimate business deductions.',
  },
];

export default function SelfAssessmentPage() {
  return (
    <main>
      <ServiceHero
        title="Self Assessment Tax Returns — Filed on Time, Every Time"
        subtitle="Expert self assessment returns for sole traders, landlords, and directors. Accurate calculations, maximum allowable deductions, zero penalties."
        breadcrumbItems={[{ name: 'Services' }, { name: 'Self Assessment' }]}
        badge="PENALTY-FREE FILING"
        cta={{
          href: '/contact',
          text: 'Book Your Tax Consultation',
        }}
      />

      {/* Who Needs a Return */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Do You Need a Self Assessment Return?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            If any of these apply to you, you need to file a Self Assessment return:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              'Self-employed (including freelancers and contractors)',
              'Running a business or partnership',
              'Company director receiving income/dividends',
              'Landlord with rental income',
              'Income from savings interest over £500 (personal saving allowance)',
              'Income from investments or dividends',
              'Other taxable income not under PAYE',
              'Spouse/partner has separate tax code',
              'Entitled to Marriage Allowance',
              'Claim high-income child benefit tax charge',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#0ea5c8]/10 border border-[#0ea5c8]/20 rounded-xl p-8">
            <p className="text-gray-800 font-semibold mb-2">Unsure if you need to file?</p>
            <p className="text-gray-700">
              Get in touch with our team. We'll review your income and advise whether a Self Assessment return
              is required. It's better to file unnecessarily than to miss a deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Year Deadlines Table */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Key Self Assessment Deadlines
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Mark these dates in your calendar. Missing even one can cost you.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-[#0f2244]">
                  <th className="px-6 py-4 font-bold text-[#0f2244] bg-white">Deadline</th>
                  <th className="px-6 py-4 font-bold text-[#0f2244] bg-white">Event</th>
                  <th className="px-6 py-4 font-bold text-[#0f2244] bg-white">Action Required</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    deadline: '5 April',
                    event: 'End of Tax Year',
                    action: 'Tax year ends. Collect final expenses and income.',
                  },
                  {
                    deadline: '31 May',
                    event: 'Self Assessment Renewal',
                    action: 'HMRC sends a new return (if you filed last year).',
                  },
                  {
                    deadline: '30 September',
                    event: 'Deadline to File (if Paying by Tax Code)',
                    action: 'Deadline if HMRC calculates your tax via PAYE.',
                  },
                  {
                    deadline: '31 January',
                    event: 'Final Filing & Payment Deadline',
                    action: 'File online and pay any tax owed by 23:59 GMT.',
                  },
                  {
                    deadline: '28 February',
                    event: 'Payment Deadline (Cheque)',
                    action: 'If paying by cheque, must reach HMRC by this date.',
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                  >
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#0ea5c8] text-white font-bold px-3 py-2 rounded-lg text-sm">
                        {row.deadline}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-[#0f2244]">{row.event}</td>
                    <td className="px-6 py-4 text-gray-700">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sole Traders Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Sole Traders
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Running your own business? We handle your Self Assessment so you can focus on growth.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">What We Do for You</h3>
              <ul className="space-y-3">
                {[
                  'Organize your business expenses and income',
                  'Calculate business profit (turnover minus costs)',
                  'Claim all eligible business deductions',
                  'Complete your Self Assessment return',
                  'File before the deadline',
                  'Calculate any tax due and payment plans',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">Expenses We Claim</h3>
              <ul className="space-y-3 text-gray-800 text-sm">
                {[
                  'Office/workspace costs',
                  'Equipment and software',
                  'Vehicle mileage (45p per mile)',
                  'Stationery and supplies',
                  'Professional fees',
                  'Subscriptions and memberships',
                  'Business insurance',
                  'Marketing and advertising',
                  'Training and development',
                  'Telephone and internet',
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
      </section>

      {/* Landlords Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Landlords & Buy-to-Let Investors
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            Rental income must be declared. We calculate your tax liability and claim legitimate deductions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#0ea5c8]" />
                Rental Income Reporting
              </h3>
              <ul className="space-y-3">
                {[
                  'All rent received (even if unpaid)',
                  'Ground rent and service charges',
                  'Deposits held on your behalf',
                  'Holiday letting income',
                  'Furnished holiday letting relief',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#0ea5c8]" />
                Allowed Deductions
              </h3>
              <ul className="space-y-3">
                {[
                  'Mortgage interest (limited 25% relief)',
                  'Property maintenance and repairs',
                  'Management fees and services',
                  'Letting agent fees',
                  'Insurance (building and contents)',
                  'Utilities (if you pay them)',
                  'Council tax (if unfurnished)',
                  'Advertising for tenants',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-[#0f2244]/10 border border-[#0f2244]/20 rounded-xl p-8">
            <p className="text-gray-800">
              <span className="font-semibold">Important:</span> The landlord mortgage interest relief restriction
              means you can only claim 25% of mortgage interest as a deduction. This complicates tax calculations
              significantly. We ensure you get the tax relief you're entitled to.
            </p>
          </div>
        </div>
      </section>

      {/* Company Directors Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Company Directors
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl">
            As a company director, you may have income from salary, dividends, or director loans. We calculate
            your personal tax liability.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Salary Income',
                description:
                  'PAYE deducted by the company. This appears on your P60, which you use for Self Assessment.',
              },
              {
                title: 'Dividend Income',
                description:
                  'Tax-free dividend allowance (£500). Dividends above this are taxable at 8.75%-39.35% depending on tax band.',
              },
              {
                title: 'Other Income',
                description:
                  'Interest from company loans, expense reimbursements, benefits in kind. All declared in your return.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-[#0f2244] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
            <h3 className="font-bold text-[#0f2244] text-lg mb-4">Our Director Support</h3>
            <ul className="space-y-3">
              {[
                'Coordinate with your accountant (who handles company accounts)',
                'Calculate personal income tax correctly',
                'Manage national insurance implications',
                'Advise on salary vs. dividend tax efficiency',
                'File your Self Assessment on time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Penalty Avoidance */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Penalty Avoidance Tips
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            HMRC penalties are costly and unnecessary. Here's how we keep you safe.
          </p>

          <div className="space-y-4">
            {[
              {
                penalty: 'Late Filing Penalty',
                amount: 'From £100 to £1,000+',
                how: 'Triggered if you file after 31 January.',
                prevention: 'We file well before the deadline.',
              },
              {
                penalty: 'Interest on Late Tax Payment',
                amount: '8% per annum',
                how: 'Accrues from 31 January on any unpaid tax.',
                prevention: 'We ensure payment is made on time.',
              },
              {
                penalty: 'Inaccuracy Penalty',
                amount: '0-100% of tax undercharged',
                how: 'If your return contains careless errors.',
                prevention: 'We double-check all figures.',
              },
              {
                penalty: 'Failure to Notify Penalty',
                amount: 'Up to 100% of tax owed',
                how: 'If you don\'t tell HMRC about a tax liability.',
                prevention: 'We ensure complete disclosure.',
              },
              {
                penalty: 'Record-Keeping Penalty',
                amount: 'Up to £3,000',
                how: 'If you can\'t provide records HMRC requests.',
                prevention: 'We organize and maintain all records.',
              },
            ].map((item) => (
              <div key={item.penalty} className="border-l-4 border-[#0ea5c8] bg-[#0ea5c8]/5 p-6 rounded-r-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-[#0f2244]">{item.penalty}</h3>
                  <span className="text-red-600 font-bold text-sm bg-red-100 px-3 py-1 rounded">
                    {item.amount}
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-semibold">When:</span> {item.how}
                </p>
                <p className="text-[#0ea5c8] font-semibold text-sm">
                  <span className="text-gray-700">How we prevent it: </span>
                  {item.prevention}
                </p>
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
                href: '/mtd-itsa',
                title: 'MTD for Income Tax (ITSA)',
                description: 'Quarterly MTD requirements for sole traders and landlords.',
              },
              {
                href: '/bookkeeping-services',
                title: 'Bookkeeping Services',
                description: 'We organize your records to make Self Assessment easier.',
              },
              {
                href: '/vat-returns',
                title: 'VAT Returns & MTD',
                description: 'If you\'re VAT-registered, we handle both VAT and Self Assessment.',
              },
              {
                href: '/bookkeeper-cheltenham',
                title: 'Bookkeeper in Cheltenham',
                description: 'Local support for your bookkeeping and tax needs.',
              },
              {
                href: '/contact',
                title: 'Book Your Tax Consultation',
                description: 'Discuss your Self Assessment with our experts.',
              },
              {
                href: '/about',
                title: 'Meet Our Tax Team',
                description: 'Learn about our experience with Self Assessment returns.',
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
        title="Self Assessment Questions"
        subtitle="Answers to your most common Self Assessment concerns."
      />

      <CTASection
        title="Don't Navigate Self Assessment Alone"
        description="Our tax experts handle the complexity, ensure accuracy, and file on time. Get peace of mind with professional Self Assessment returns."
        primaryHref="/contact"
        primaryText="Book Your Tax Consultation"
      />
    </main>
  );
}
