import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Contact Zenith Accountancy Services | Free Consultation',
  description:
    'Get in touch with Zenith Accountancy Services. Free no-obligation consultation for bookkeeping, VAT, payroll and self assessment in Winchcombe and Cheltenham.',
  alternates: {
    canonical: 'https://zenithaccountancy.co.uk/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#0f2244] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a question about our bookkeeping services? We'd love to hear from you.
              Get a free, no-obligation consultation with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0f2244] mb-8">Send us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Contact Info Panel */}
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-[#0f2244] mb-8">Contact Details</h3>

                {/* Phone */}
                <div className="flex gap-4 mb-8">
                  <Phone className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Phone</p>
                    <a href="tel:+441242000000" className="text-lg font-semibold text-[#0f2244] hover:text-[#0ea5c8] transition-colors">
                      07399 734567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 mb-8">
                  <Mail className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                    <a href="mailto:info@zenith-as.co.uk" className="text-lg font-semibold text-[#0f2244] hover:text-[#0ea5c8] transition-colors">
                      info@zenith-as.co.uk
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 mb-8">
                  <MapPin className="w-6 h-6 text-[#0ea5c8] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-1">Office Location</p>
                    <p className="text-gray-700 font-medium">
                      Winchcombe, Gloucestershire<br />
                      GL54
                    </p>
                  </div>
                </div>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 flex flex-col items-center justify-center border-2 border-gray-300">
                <MapPin className="w-12 h-12 text-gray-400 mb-3" />
                <p className="text-gray-600 font-medium text-center px-4">
                  Winchcombe, Gloucestershire GL54<br />
                  <span className="text-sm text-gray-500">Map integration coming soon</span>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2244] mb-12 text-center">
            Quick Contact Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Call Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all text-center">
              <Phone className="w-12 h-12 text-[#0ea5c8] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0f2244] mb-2">Give us a Call</h3>
              <p className="text-gray-600 mb-6">
                Speak directly with our team about your bookkeeping needs.
              </p>
              <a
                href="tel:+441242000000"
                className="inline-flex items-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all text-center">
              <Mail className="w-12 h-12 text-[#0ea5c8] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0f2244] mb-2">Send an Email</h3>
              <p className="text-gray-600 mb-6">
                Email us with your enquiry and we'll respond within 24 hours.
              </p>
              <a
                href="mailto:info@zenith-as.co.uk"
                className="inline-flex items-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0ea5c8] hover:shadow-lg transition-all text-center">
              <MapPin className="w-12 h-12 text-[#0ea5c8] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#0f2244] mb-2">Use Our Form</h3>
              <p className="text-gray-600 mb-6">
                Fill out the contact form above to send a detailed message to our team.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-[#0ea5c8] hover:bg-[#0891b2] text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                <MapPin className="w-4 h-4" />
                Go to Form
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't Wait — Let's Get Your Books in Order"
        description="Book your free consultation today and discover how our bookkeeping services can save you time and money."
        variant="navy"
      />
    </main>
  );
}
