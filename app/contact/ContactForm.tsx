'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional().or(z.literal('')),
  serviceEnquiry: z.enum(['Bookkeeping', 'VAT Returns', 'Self Assessment', 'Payroll', 'MTD ITSA', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('Form submitted:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#0f2244] mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-4">
          We've received your enquiry and will get back to you within 24 hours during business hours.
        </p>
        <p className="text-sm text-gray-600">
          In the meantime, feel free to call us on <span className="font-semibold">01242 000 000</span>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[#0f2244] mb-2">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          placeholder="Your full name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2244] focus:border-transparent transition-all"
        />
        {errors.name && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[#0f2244] mb-2">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2244] focus:border-transparent transition-all"
        />
        {errors.email && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-[#0f2244] mb-2">
          Phone <span className="text-gray-500 text-xs">(optional)</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          placeholder="01242 000 000"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2244] focus:border-transparent transition-all"
        />
      </div>

      {/* Service Enquiry */}
      <div>
        <label htmlFor="serviceEnquiry" className="block text-sm font-semibold text-[#0f2244] mb-2">
          What service are you interested in? <span className="text-red-500">*</span>
        </label>
        <select
          {...register('serviceEnquiry')}
          id="serviceEnquiry"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2244] focus:border-transparent transition-all text-gray-700"
        >
          <option value="">-- Select a service --</option>
          <option value="Bookkeeping">Bookkeeping</option>
          <option value="VAT Returns">VAT Returns</option>
          <option value="Self Assessment">Self Assessment</option>
          <option value="Payroll">Payroll</option>
          <option value="MTD ITSA">MTD ITSA</option>
          <option value="Other">Other</option>
        </select>
        {errors.serviceEnquiry && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.serviceEnquiry.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0f2244] mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Tell us about your enquiry..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0f2244] focus:border-transparent transition-all resize-none"
        />
        {errors.message && (
          <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0ea5c8] hover:bg-[#0891b2] disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:shadow-[#0ea5c8]/30"
      >
        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We respect your privacy. Your details are secure and will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
