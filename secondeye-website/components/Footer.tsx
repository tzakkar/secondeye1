'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Second Eye Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white">Second Eye</span>
                <p className="text-xs text-gray-400 -mt-1">Security Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                  {t('nav.portfolio')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">{t('nav.services')}</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t('services.telecom.title')}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t('services.security.title')}
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                {t('services.smart.title')}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">{t('nav.contact')}</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-blue-400" />
                <span className="leading-relaxed">{t('contact.location')}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={16} className="flex-shrink-0 text-blue-400" />
                <span dir="ltr">+966 594 866 064</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={16} className="flex-shrink-0 text-blue-400" />
                <span className="break-all">osamamo.saad83@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 text-center space-y-2">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Second Eye Security. {t('footer.rights')}
          </p>
          <p className="text-xs text-gray-600">
            Designed & Developed by{' '}
            <a 
              href="https://www.njmh.com.sa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Njmh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

