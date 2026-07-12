import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Users, FileCheck, Shield, Zap } from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Payroll Services | Zenith Accountancy Services',
  description:
    'Reliable payroll, PAYE, CIS and auto enrolment services for businesses in Cheltenham, Winchcombe and Gloucestershire.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/payroll-services',
  },
};

const faqs = [
  {
    question: 'How much does payroll outsourcing cost?',
    answer:
      'We charge based on the number of employees. Most small businesses pay £40-£80 per month for 1-5 employees, scaling up as you grow. No setup fees or hidden costs. Get a personalized quote based on your payroll complexity.',
  },
  {
    question: 'What is PAYE and who needs it?',
    answer:
      'PAYE (Pay As You Earn) is the system for deducting income tax and National Insurance from employees\' wages before they receive them. Any business with employees (or a director taking a salary) must operate PAYE.',
  },
  {
    question: 'What is CIS and do I need it?',
    answer:
      'CIS (Construction Industry Scheme) requires subcontractors in construction to be registered. We handle CIS registration, monthly payments, and worker deferrals if you hire subcontractors on your projects.',
  },
  {
    question: 'What is auto enrolment?',
    answer:
      'Auto enrolment requires employers to enroll eligible employees into a pension scheme (like NEST or Now Pensions). We help you register, manage enrolment, and handle contributions each month.',
  },
  {
    question: 'When are payroll submissions due?',
    answer:
      'Full Payment Submission (FPS) must be submitted by the 22nd of the month or (if paying late) the day of payment. Monthly Payroll Summary (if applicable) is usually due by the 22nd. We submit everything on time.',
  },
  {
    question: 'Can you handle multiple payroll runs?',
    answer:
      'Yes. If you pay weekly, fortnightly, or have multiple payment dates, we manage all of it. We also handle variations (overtime, bonuses, additional pay) and adjustments.',
  },
];

export default function PayrollServicesPage() {
  return (
    <main>
      <ServiceHero
        title="Payroll Services — Accurate, Compliant, On Time"
        subtitle="From employee setup to monthly submissions and year-end reporting. We handle payroll so you focus on growing your team."
        breadcrumbItems={[{ name: 'Services' }, { name: 'Payroll Services' }]}
        badge="HMRC-COMPLIANT PAYROLL"
        cta={{
          href: '/contact',
          text: 'Get a Payroll Quote',
        }}
      />

      {/* Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Why Outsource Your Payroll?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Payroll is complex, time-consuming, and mistakes are costly. HMRC penalties for late submissions
            and incorrect filings add up quickly. Our fixed-fee payroll service removes the headache.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Compliance</h3>
                  <p className="text-gray-700">
                    All statutory payroll rules followed. PAYE, NI, pension contributions, and CIS all
                    calculated correctly. No HMRC penalties.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Time Savings</h3>
                  <p className="text-gray-700">
                    No more wrestling with payroll software or spreadsheets. We handle everything from
                    employee setup to monthly submissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <FileCheck className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Accurate Calculations</h3>
                  <p className="text-gray-700">
                    Tax, National Insurance, and pension contributions calculated precisely. Your employees
                    are paid the right amount, every time.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0f2244] mb-2">Peace of Mind</h3>
                  <p className="text-gray-700">
                    HMRC submissions are handled by qualified professionals. Your payroll is always
                    compliant and on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Payroll */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Employee Payroll Services
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            From onboarding new employees to monthly processing and year-end P60 generation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-[#0f2244] text-lg mb-6">What We Handle Each Month</h3>
              <ul className="space-y-3">
                {[
                  'Collect timesheet or salary details from you',
                  'Calculate gross pay and deductions',
                  'Compute tax (PAYE) and National Insurance',
                  'Prepare payslips for each employee',
                  'Process payment instructions',
                  'Submit Full Payment Submission (FPS) to HMRC',
                  'Provide you with a payroll summary',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0f2244] text-lg mb-6">Employee Onboarding</h3>
              <ul className="space-y-3">
                {[
                  'Collect employee details (name, NI number, address)',
                  'Issue P45 (if joining from another job)',
                  'Set up tax code and allowances',
                  'Register with HMRC if your first employee',
                  'Create personnel record',
                  'Process starter form (if required)',
                  'Provide employee with payslip',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0f2244]/5 to-transparent p-8 rounded-xl border border-[#0f2244]/10">
            <h4 className="font-bold text-[#0f2244] mb-3">Year-End Payroll</h4>
            <p className="text-gray-700 mb-3">
              Each April we prepare and submit:
            </p>
            <ul className="space-y-2 text-gray-800 text-sm">
              {[
                'P60 forms (year-end statement for each employee)',
                'End of Year (EoY) submission to HMRC',
                'P11D forms (benefits in kind, if applicable)',
                'Year-end reconciliation and certificates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0f2244] rounded-full mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PAYE & RTI */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            PAYE & Real Time Information (RTI)
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            PAYE (Pay As You Earn) is how HMRC collects income tax from employees. RTI means payroll data is
            reported to HMRC in real-time rather than at year-end.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">How PAYE Works</h3>
              <ol className="space-y-3">
                {[
                  'You register as an employer with HMRC',
                  'We process your payroll and calculate tax',
                  'Tax is deducted from employees\' wages',
                  'Deductions are submitted to HMRC monthly',
                  'HMRC reconciles at year-end',
                  'Employees receive P60 form showing total tax',
                ].map((item, idx) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#0ea5c8] text-white font-bold text-xs flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-gray-800 pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">RTI Requirements</h3>
              <ul className="space-y-3">
                {[
                  'Full Payment Submission (FPS) each pay period',
                  'Due by 22nd of the month (or day of payment)',
                  'Contains employee details and pay information',
                  'Submitted via HMRC\'s payroll software portal',
                  'Provides real-time view of tax liabilities',
                  'Required for all employers with RTI status',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0ea5c8]/10 border border-[#0ea5c8]/20 rounded-xl p-6">
            <p className="text-gray-800">
              <span className="font-semibold">Late RTI submission penalties:</span> Submitting FPS after the
              22nd (or day of payment) incurs HMRC penalties starting at £100. We ensure all submissions are on
              time.
            </p>
          </div>
        </div>
      </section>

      {/* CIS Payroll */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            CIS Payroll for Contractors
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            If you hire subcontractors or contractors in construction, the CIS (Construction Industry Scheme)
            applies.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">CIS Requirements</h3>
              <ul className="space-y-3">
                {[
                  'All contractors must be registered with HMRC for CIS',
                  'Retain 20% of gross payments to subcontractors (payment on account)',
                  'Monthly CIS returns and payments to HMRC',
                  'Subcontractors can claim the 20% retained as credit',
                  'Unregistered subcontractors get 30% retention',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">What We Do</h3>
              <ul className="space-y-3">
                {[
                  'Check contractor CIS registration status',
                  'Calculate 20% retention correctly',
                  'Process contractor payments with deductions',
                  'Submit monthly CIS returns to HMRC',
                  'Manage contractor deferrals if applicable',
                  'Provide contractor with deduction statements',
                  'Handle CIS paperwork and compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-gray-800 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <p className="text-red-900">
              <span className="font-semibold">CIS penalties are severe:</span> Incorrect retention amounts or
              late payments can result in penalties up to 100% of the amount due, plus interest. Proper CIS
              management is essential.
            </p>
          </div>
        </div>
      </section>

      {/* Auto Enrolment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Auto Enrolment Support
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Auto enrolment is a legal requirement for UK employers. We handle registration, enrolment, and
            ongoing contributions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0f2244]/5 to-transparent p-8 rounded-xl border border-[#0f2244]/10">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">What Triggers Auto Enrolment</h3>
              <ul className="space-y-3 text-gray-800">
                {[
                  'Having at least one employee',
                  'Employee is aged 22-state pension age',
                  'Employee earnings exceed £10,000/year',
                  'No exemptions apply',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0f2244] rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-8 rounded-xl border border-[#0ea5c8]/20">
              <h3 className="font-bold text-[#0f2244] text-lg mb-4">Our Auto Enrolment Services</h3>
              <ul className="space-y-3 text-gray-800">
                {[
                  'Check if you need to auto enrol',
                  'Register with a pension provider (NEST, Now Pensions, etc.)',
                  'Calculate eligible employees',
                  'Notify employees of enrolment',
                  'Calculate and deduct contributions',
                  'Pay employer contributions',
                  'Handle opt-out requests',
                  'Annual re-enrolment compliance',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[#0f2244] text-white rounded-xl p-8">
            <h4 className="font-bold text-lg mb-3">Contribution Rates (2024/25)</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Employee contribution: 5% of qualifying earnings (minimum)',
                'Employer contribution: 3% of qualifying earnings (minimum)',
                'Total: 8% minimum',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-[#0ea5c8] rounded-full mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Payroll Reporting */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Payroll Reporting
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            You'll receive detailed payroll reports to track costs, compliance, and business metrics.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Monthly Payroll Reports',
                items: [
                  'Payroll summary showing gross pay, deductions, net pay',
                  'Tax and NI breakdown',
                  'Pension contributions',
                  'CIS deductions (if applicable)',
                  'Payment instructions for you to action',
                ],
              },
              {
                title: 'Employee Records',
                items: [
                  'Individual payslips for each employee',
                  'Year-to-date pay and tax',
                  'Pension pot balance',
                  'Absence tracking (if applicable)',
                  'P60 forms (year-end)',
                ],
              },
              {
                title: 'Compliance Reports',
                items: [
                  'HMRC RTI submissions status',
                  'CIS returns and payments due',
                  'Auto enrolment compliance status',
                  'Pension contribution payments',
                  'Penalty risk alerts',
                ],
              },
              {
                title: 'Cost Analysis',
                items: [
                  'Total payroll costs vs budget',
                  'Tax and NI cost breakdown',
                  'Pension cost tracking',
                  'CIS payment reconciliation',
                  'Headcount and average salary metrics',
                ],
              },
            ].map((report) => (
              <div key={report.title} className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="font-bold text-[#0f2244] mb-4">{report.title}</h3>
                <ul className="space-y-2">
                  {report.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-800">
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

      {/* Why Outsource */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-4">
            Why Choose Zenith for Payroll?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Payroll is critical—mistakes cost money and damage employee trust.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'HMRC Compliance',
                description: 'All payments and submissions are correct and on time. No penalties.',
              },
              {
                icon: CheckCircle2,
                title: 'Accuracy Guaranteed',
                description:
                  'Tax, NI, and pension contributions calculated precisely for every employee.',
              },
              {
                icon: Zap,
                title: 'Quick Turnaround',
                description: 'Process your payroll within 24 hours of receiving timesheets.',
              },
              {
                icon: Users,
                title: 'Employee Satisfaction',
                description: 'Payslips issued on time, every time. Happy employees, lower turnover.',
              },
              {
                icon: FileCheck,
                title: 'Full Documentation',
                description: 'Detailed records for audit purposes. Everything organized and backed up.',
              },
              {
                icon: ArrowRight,
                title: 'Scalability',
                description: 'Add or remove employees easily. We scale with your business growth.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-[#0ea5c8]/10 to-transparent p-6 rounded-xl border border-[#0ea5c8]/20"
                >
                  <Icon className="w-6 h-6 text-[#0ea5c8] mb-3" />
                  <h3 className="font-bold text-[#0f2244] mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              );
            })}
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
                description: 'Payroll integrates with your overall bookkeeping.',
              },
              {
                href: '/vat-returns',
                title: 'VAT Returns',
                description: 'We handle both VAT and payroll tax reporting.',
              },
              {
                href: '/self-assessment',
                title: 'Self Assessment',
                description: 'If you have multiple roles, we manage all income reporting.',
              },
              {
                href: '/about',
                title: 'Meet Our Team',
                description: 'Our payroll experts are fully qualified and experienced.',
              },
              {
                href: '/contact',
                title: 'Get a Payroll Quote',
                description: 'Let\'s discuss your payroll needs and pricing.',
              },
              {
                href: '/bookkeeper-cheltenham',
                title: 'Local Payroll Support',
                description: 'Face-to-face payroll advice in Cheltenham.',
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
        title="Payroll Questions"
        subtitle="Get answers to common payroll and PAYE queries."
      />

      <CTASection
        title="Simplify Your Payroll"
        description="Accurate, compliant, stress-free payroll processing. Let our team handle the complexity while you focus on your business."
        primaryHref="/contact"
        primaryText="Get Your Payroll Quote"
      />
    </main>
  );
}
