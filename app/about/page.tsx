import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  Briefcase,
  CheckCircle,
  Shield,
  Code2,
  ArrowRight,
  Users,
} from 'lucide-react';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About David Pinner | Zenith Accountancy Services, Winchcombe',
  description: 'Meet David Pinner, the qualified bookkeeper behind Zenith Accountancy Services. ICB Member, AAT Level 3, 25+ years experience in finance and technology.',
  alternates: {
    canonical: 'https://www.zenith-as.co.uk/about',
  },
  openGraph: {
    title: 'About David Pinner | Zenith Accountancy Services',
    description: 'Meet David Pinner, qualified bookkeeper with 25+ years experience.',
    url: 'https://www.zenith-as.co.uk/about',
    type: 'website',
  },
};

const qualifications = [
  'Member of the Institute of Certified Bookkeepers (ICB)',
  'AAT Level 2 Certificate in Accounting',
  'AAT Level 3 Diploma in Accounting',
];

const softwareExpertise = [
  'Xero Cloud Accounting',
  'QuickBooks Online',
  'Sage 50 & Sage 100',
  'Making Tax Digital',
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#0f2244] text-white pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            About Zenith Accountancy Services
          </h1>

          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Meet David Pinner—qualified bookkeeper and founder of Zenith Accountancy Services. Over 25 years of finance, technology, and business systems expertise dedicated to supporting local businesses.
          </p>
        </div>
      </section>

      {/* Meet David Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="David Pinner, Qualified Bookkeeper"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>

            {/* Profile Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-[#0f2244] mb-6">
                David Pinner
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 25 years in finance, technology, and business systems, I've built a career helping businesses manage their finances effectively. Before founding Zenith Accountancy Services, I worked on HMRC tax-related systems, implementing accounting software for businesses of all sizes.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I started Zenith because I believed small and medium businesses deserve the same quality financial support that larger firms take for granted. Every business, regardless of size, deserves a qualified, professional bookkeeper they can trust.
              </p>

              {/* Credentials Card */}
              <div className="bg-[#0f2244] text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Professional Credentials</h3>
                <ul className="space-y-3">
                  {qualifications.map((qual) => (
                    <li key={qual} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#0ea5c8] mr-3 flex-shrink-0 mt-0.5" />
                      <span>{qual}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-12">
            My Approach to Bookkeeping
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-[#0ea5c8] shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Accuracy First</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your books must be accurate and compliant. That's non-negotiable. Every transaction is carefully recorded, every figure verified. HMRC compliance and tax efficiency are built into everything I do.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-[#0ea5c8] shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Proactive Communication</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I don't just process your books — I communicate. You'll understand what's happening, why it matters, and what opportunities exist for your business. Regular updates and clear explanations are standard.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-[#0ea5c8] shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Technology-Enabled</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Cloud-based accounting systems, digital workflows, and secure data access mean efficiency and accessibility. Technology serves your business—making life easier while keeping everything secure and professional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border-l-4 border-[#0ea5c8] shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Personal Service</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You work directly with me. No call centres, no junior staff, no surprises. Your business matters, and you deserve a qualified professional who gives your account proper attention.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Experience & Expertise Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-12">
            Experience & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-[#0ea5c8] mr-3" />
                <h3 className="text-xl font-bold text-[#0f2244]">25+ Years in Finance and Information Technology</h3>
              </div>
              <p className="text-gray-700">
                Extensive background in accounting, finance systems, and business management across multiple sectors.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Code2 className="w-6 h-6 text-[#0ea5c8] mr-3" />
                <h3 className="text-xl font-bold text-[#0f2244]">HMRC Tax Systems</h3>
              </div>
              <p className="text-gray-700">
                Former experience working on tax-related systems at HMRC. Deep understanding of tax compliance requirements.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="w-6 h-6 text-[#0ea5c8] mr-3" />
                <h3 className="text-xl font-bold text-[#0f2244]">Software Implementation</h3>
              </div>
              <p className="text-gray-700">
                Implemented Sage, Xero, QuickBooks, and other accounting platforms for many businesses.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-[#0ea5c8] mr-3" />
                <h3 className="text-xl font-bold text-[#0f2244]">Diverse Sector Experience</h3>
              </div>
              <p className="text-gray-700">
                Retail, hospitality, professional services, trades, agriculture, and manufacturing. I understand sector-specific challenges.
              </p>
            </div>
          </div>

          {/* Software Expertise */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-[#0f2244] mb-6">Software Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softwareExpertise.map((soft) => (
                <div key={soft} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#0ea5c8] mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{soft}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Qualified Matters Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0f2244] mb-12">
            Why Work With a Qualified Bookkeeper?
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">HMRC Recognition</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As an ICB Member, I'm recognized by HMRC. Your affairs are in trusted hands. My qualifications carry weight with tax authorities and give them confidence in the accuracy of submissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Award className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Professional Standards</h3>
                  <p className="text-gray-700 leading-relaxed">
                    ICB membership means I adhere to a strict code of conduct and continued professional development. Regular training ensures I'm current with tax law, accounting standards, and best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Shield className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Professional Indemnity Insurance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I carry professional indemnity insurance. If something goes wrong, you're protected. This isn't optional — it's a sign of commitment to your security.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <CheckCircle className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Tax Efficiency & Compliance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Qualifications mean I can ensure complete compliance. Unqualified bookkeepers can't provide this level of insight.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Briefcase className="w-8 h-8 text-[#0ea5c8] mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-[#0f2244] mb-3">Peace of Mind</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work with someone qualified and professional, and you can focus on running your business. You know your finances are in capable, accountable hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0f2244] text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>

          <p className="text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let's discuss how I can support your business with professional, personal bookkeeping and accountancy services.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0ea5c8] hover:bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA Section Component */}
      <CTASection />
    </main>
  );
}
