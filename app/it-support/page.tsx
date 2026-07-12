import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
  Headphones,
  Zap,
  Shield,
  Users,
  MessageCircle,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import { ServiceHero } from '@/components/ServiceHero';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Business IT Support Cheltenham & Winchcombe | Zenith Accountancy Services',
  description:
    'Practical IT support and technology guidance for small businesses in Cheltenham, Winchcombe and Gloucestershire. Software troubleshooting, systems advice, staff training.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/it-support',
  },
};

const faqs = [
  {
    question: 'What IT issues do you help with?',
    answer:
      'We specialise in business software and systems relevant to accounting and operations. This includes accounting software (Xero, QuickBooks, Sage), office tools (Excel, Word, Teams), CRM systems, e-commerce platforms, email, and basic hardware troubleshooting. We focus on practical solutions that keep your business running.',
  },
  {
    question: 'Do you provide 24/7 IT support?',
    answer:
      'We offer business hours support with emergency availability for critical issues. For many small businesses, our standard support hours work perfectly. We can discuss bespoke arrangements if 24/7 coverage is important for your operations.',
  },
  {
    question: "Can you help if we're having system downtime?",
    answer:
      "Yes, absolutely. System downtime is costly. We prioritise urgent issues and work to restore service quickly. We'll diagnose the problem, implement fixes, and help you prevent recurrence. This is why many businesses maintain ongoing support relationships.",
  },
  {
    question: 'What about cybersecurity and data protection?',
    answer:
      'We advise on basic cybersecurity for small businesses: strong passwords, two-factor authentication, regular backups, email security, and staff training. For sensitive matters like GDPR compliance or advanced security, we refer to specialist cybersecurity firms.',
  },
  {
    question: 'How much does IT support cost?',
    answer:
      'We offer flexible options: hourly support for one-off issues, or retainer agreements for ongoing support. Retainers are often better value and build a relationship where we understand your systems and can advise proactively.',
  },
  {
    question: 'Can you train my staff on software?',
    answer:
      "Yes. We provide role-specific training on the business software your team uses. This reduces support tickets, improves productivity, and helps staff use features they weren't aware of. Training is delivered in short, practical sessions.",
  },
  {
    question: "What if we're using software you're not familiar with?",
    answer:
      'Most business software follows similar principles. We can typically troubleshoot issues, train users, and provide guidance. If specialised knowledge is needed, we consult documentation, vendor support, or refer to appropriate specialists.',
  },
  {
    question: 'Do you help with software purchasing decisions?',
    answer:
      "We're happy to advise on software choices for your business. We discuss your requirements, budget, and team preferences. We help evaluate options and often provide better pricing through vendor relationships.",
  },
];

export default function ITSupportPage() {
  return (
    <>
      <ServiceHero
        title="Business IT Support for Small Businesses"
        subtitle="Practical technology support and guidance so you can focus on running your business, not fighting with software."
        breadcrumbItems={[
          { name: 'Services', href: '/bookkeeping-services' },
          { name: 'Business IT Support' },
        ]}
        badge="TECHNICAL SUPPORT"
      />

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6">
                What We Support
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Small business owners juggle many roles. Technology should serve your business, not distract from it.
                When software breaks, connections fail, or processes don't work, it costs you time and money.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We provide practical, focused IT support for the business systems you actually use. We're not a
                generalist IT firm. We specialise in the tools small accounting and services businesses need: business
                software, cloud services, and practical productivity tools.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Fast Response to Issues</h3>
                    <p className="text-gray-600">
                      When something breaks, we diagnose and fix it quickly. Minimal downtime.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Proactive Advice</h3>
                    <p className="text-gray-600">
                      We spot problems before they become disasters and recommend solutions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Staff Training</h3>
                    <p className="text-gray-600">
                      Your team learns to use software better, reducing support needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0f2244] mb-1">Clear Communication</h3>
                    <p className="text-gray-600">
                      No jargon. We explain technical issues in plain English and recommended solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244] to-[#0f2244]/90 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">IT Problems We Solve</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold text-[#0ea5c8] mb-2">Accounting Software Issues</p>
                  <p className="text-white/80 text-sm">Xero crashes, QuickBooks errors, Sage sync issues</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold text-[#0ea5c8] mb-2">Email & Connectivity</p>
                  <p className="text-white/80 text-sm">Email not sending, cloud access issues, VPN problems</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold text-[#0ea5c8] mb-2">Office Tools</p>
                  <p className="text-white/80 text-sm">Excel formulas, Word formatting, Teams collaboration</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold text-[#0ea5c8] mb-2">Database & Integrations</p>
                  <p className="text-white/80 text-sm">CRM syncing, e-commerce data flow, automation</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <p className="font-semibold text-[#0ea5c8] mb-2">Hardware & Setup</p>
                  <p className="text-white/80 text-sm">Printer configuration, network issues, device setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Software Support */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Business Software Support
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <Zap className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-4">Accounting Software</h3>
              <p className="text-gray-700 mb-4">
                We support the platforms you use for financial management:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>Xero:</strong> Errors, integration issues, reporting problems, user management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>QuickBooks:</strong> Company file issues, multi-user sync, data troubleshooting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>Sage:</strong> Module configuration, reporting customisation, upgrades</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>Cloud Platforms:</strong> Any cloud-based accounting tool you rely on</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <MessageCircle className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-xl font-semibold text-[#0f2244] mb-4">CRM & Business Tools</h3>
              <p className="text-gray-700 mb-4">
                We help with the systems that manage your business relationships and operations:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>CRM Systems:</strong> Pipedrive, HubSpot, Salesforce troubleshooting</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>E-commerce Platforms:</strong> Shopify, WooCommerce, inventory sync</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>Project Tools:</strong> Asana, Monday.com, team collaboration platforms</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#0ea5c8] font-bold">•</span>
                  <span><strong>Integration Issues:</strong> Connecting systems so data flows automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Systems Troubleshooting */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Systems Troubleshooting
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <AlertCircle className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Problem Diagnosis</h3>
              <p className="text-gray-700">
                We systematically identify the root cause. Often the symptoms are misleading. We ask the right
                questions and check the right places to find real issues.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <Zap className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Quick Resolution</h3>
              <p className="text-gray-700">
                Most issues have straightforward fixes. We implement them efficiently and test thoroughly to ensure
                they work. Minimal disruption to your business.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#0f2244]/5 to-[#0ea5c8]/5 rounded-xl p-8 border border-[#0ea5c8]/20">
              <TrendingUp className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Prevention</h3>
              <p className="text-gray-700">
                We explain what caused the problem and recommend changes to prevent recurrence. Often this involves
                better procedures or system configuration.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0ea5c8]/10 to-[#0f2244]/10 rounded-xl p-8 border border-[#0ea5c8]/30">
            <div className="flex gap-4 items-start">
              <Shield className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-[#0f2244] mb-2">Common Troubleshooting Areas</h4>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                  <div>
                    <p className="font-medium text-[#0f2244]">Connectivity Issues</p>
                    <p>Cloud access, login problems, network connections</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#0f2244]">Data Sync Problems</p>
                    <p>Missing transactions, duplicate entries, sync failures</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#0f2244]">Performance Issues</p>
                    <p>Slow systems, timeouts, software crashes</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#0f2244]">Integration Failures</p>
                    <p>Systems not talking, data not flowing, error messages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Guidance & Training */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Technology Guidance & Staff Training
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-start gap-4 mb-8">
                <Users className="w-8 h-8 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Staff Training</h3>
                  <p className="text-gray-700 mb-4">
                    Your team might underutilise software because they don't know its capabilities. We provide
                    practical training on the tools they use daily.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span><strong>Role-Specific Training:</strong> Each team member learns what they need</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Hands-On Sessions:</strong> Practical exercises, not theory
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Documentation:</strong> Reference guides and quick-start cards
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Ongoing Support:</strong> Follow-up training as new features roll out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-[#0ea5c8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#0f2244] mb-3">Technology Advice</h3>
                  <p className="text-gray-700 mb-4">
                    Should you upgrade that software? Is there a better platform for your needs? We advise on
                    technology decisions based on your requirements and budget.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Software Recommendations:</strong> Honest advice on platforms for your business
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Cost Analysis:</strong> Total cost of ownership, not just subscription fees
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Integration Planning:</strong> How new tools fit your existing systems
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#0ea5c8] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Implementation Strategy:</strong> How to move without disrupting the business
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why IT Matters for Accountancy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-6 text-center">
            Why IT Matters for Accounting Businesses
          </h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            In accounting and bookkeeping, IT isn't just support—it's core to your business. You rely on software for
            accuracy, compliance, and client service.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <Shield className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Compliance Risk</h3>
              <p className="text-gray-700">
                If your accounting software breaks during tax season or you can't file returns on time, the penalties
                are severe. Reliable systems are non-negotiable.
              </p>
            </div>

            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <Zap className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Client Expectations</h3>
              <p className="text-gray-700">
                Your clients expect prompt reporting and fast turnarounds. System downtime directly damages your
                reputation and client satisfaction.
              </p>
            </div>

            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <TrendingUp className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Data Security</h3>
              <p className="text-gray-700">
                You hold sensitive financial information. Breaches, ransomware, or data loss are disasters. Proper
                systems and practices are essential.
              </p>
            </div>

            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <Headphones className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Team Productivity</h3>
              <p className="text-gray-700">
                When staff spend time fighting with software instead of serving clients, you lose revenue. Properly
                functioning systems boost productivity.
              </p>
            </div>

            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <CheckCircle2 className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Quality Assurance</h3>
              <p className="text-gray-700">
                Accounting requires accuracy. Technology failures lead to errors. Robust systems and training prevent
                mistakes that damage client relationships.
              </p>
            </div>

            <div className="border-2 border-[#0ea5c8]/30 rounded-xl p-8 hover:border-[#0ea5c8] transition-colors">
              <MessageCircle className="w-8 h-8 text-[#0ea5c8] mb-4" />
              <h3 className="text-lg font-semibold text-[#0f2244] mb-3">Business Growth</h3>
              <p className="text-gray-700">
                Reliable systems free you to focus on growth. You can take on more clients, improve service, and scale
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            How We Provide IT Support
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-4">Break-Fix Support</h3>
              <p className="text-gray-700 mb-4">
                When something breaks, you call and we fix it. Perfect for one-off issues or occasional problems.
              </p>
              <p className="text-sm text-gray-600">
                Hourly rates or per-incident pricing. No long-term commitment.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-4">Managed IT Support</h3>
              <p className="text-gray-700 mb-4">
                Fixed monthly fee covers unlimited support. Proactive monitoring, updates, and issue prevention.
              </p>
              <p className="text-sm text-gray-600">
                Best value for ongoing relationships. Peace of mind knowing support is included.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="w-12 h-12 rounded-lg bg-[#0ea5c8]/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#0ea5c8]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0f2244] mb-4">Training & Consulting</h3>
              <p className="text-gray-700 mb-4">
                Custom projects like staff training, technology assessments, or system implementations.
              </p>
              <p className="text-sm text-gray-600">
                Project-based pricing. Often combined with ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="IT Support Questions"
        subtitle="Get answers to common questions about our IT support services."
      />

      {/* Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">Related Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link
              href="/software-setup"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Software Setup & Training
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Proper software implementation and staff training.
              </p>
            </Link>

            <Link
              href="/data-migration"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Data Migration
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Safe transition between accounting systems.
              </p>
            </Link>

            <Link
              href="/contact"
              className="group bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors">
                  Get Support
                </h3>
                <ArrowRight className="w-5 h-5 text-[#0ea5c8] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-600">
                Contact us about IT support for your business.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Reliable Business IT Support?"
        description="Stop fighting with software. Get practical IT support for your business systems, staff training, and technology advice. Available for break-fix issues or ongoing managed support."
        variant="navy"
      />
    </>
  );
}
