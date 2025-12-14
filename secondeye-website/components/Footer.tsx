'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield } from 'lucide-react';

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="absolute inset-0 grid-background opacity-5" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-md opacity-50" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-gradient">Second Eye</span>
                <p className="text-xs text-gray-500">Security Solutions</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">{t('footer.description')}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <SocialIcon href="#" icon={<Facebook size={18} />} />
              <SocialIcon href="#" icon={<Twitter size={18} />} />
              <SocialIcon href="#" icon={<Instagram size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label={t('nav.home')} />
              <FooterLink href="/about" label={t('nav.about')} />
              <FooterLink href="/services" label={t('nav.services')} />
              <FooterLink href="/portfolio" label={t('nav.portfolio')} />
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('nav.services')}</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('services.telecom.title')}</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('services.security.title')}</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">{t('services.smart.title')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">{t('nav.contact')}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 rtl:space-x-reverse text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-1 text-cyan-400" />
                <span>{t('contact.location')}</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Phone size={16} className="flex-shrink-0 text-cyan-400" />
                <span dir="ltr">+966 594 866 064</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse text-gray-400">
                <Mail size={16} className="flex-shrink-0 text-cyan-400" />
                <span className="break-all">osamamo.saad83@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Second Eye Security. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 border border-white/10 transition-all hover-lift"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
        {label}
      </Link>
    </li>
  );
}
