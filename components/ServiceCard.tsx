import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  features?: string[];
}

export function ServiceCard({ title, description, href, icon: Icon, features }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:shadow-[#0f2244]/8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-[#0f2244]/5 group-hover:bg-[#0ea5c8]/10 flex items-center justify-center mb-4 transition-colors">
        <Icon className="w-6 h-6 text-[#0f2244] group-hover:text-[#0ea5c8] transition-colors" />
      </div>
      <h3 className="font-semibold text-[#0f2244] text-lg mb-2 group-hover:text-[#0ea5c8] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      {features && (
        <ul className="space-y-1 mb-4">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#0ea5c8] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center gap-1 text-[#0ea5c8] text-sm font-medium mt-auto">
        Learn more
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
