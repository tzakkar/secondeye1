'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = locale === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative group flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 rounded-lg glass border border-white/10 hover:border-cyan-400/30 transition-all"
      aria-label="Switch language"
    >
      <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
      <Globe size={16} className="text-cyan-400" />
      <span className="relative text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {locale === 'ar' ? 'EN' : 'العربية'}
      </span>
    </button>
  );
}
