'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ 
                scale: { type: "spring", stiffness: 400, damping: 17 },
                rotate: { duration: 0.5 }
              }}
              className="relative w-12 h-12 flex items-center justify-center"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              
              {/* Border glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-blue-400/0 group-hover:border-blue-400/30 transition-all duration-300" />
              
              {/* Logo image */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Second Eye Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                  priority
                />
              </div>
            </motion.div>
            <div>
              <span className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors duration-300">Second Eye</span>
              <p className="text-xs text-gray-400 -mt-1 group-hover:text-gray-300 transition-colors duration-300">Security Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <span
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-blue-400'
                      : 'text-gray-300 group-hover:text-white'
                  }`}
                >
                  {item.label}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-lg border border-blue-400/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="hidden md:block btn-primary text-sm"
            >
              {t('contact')}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2 text-gray-300 hover:text-white transition-colors z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden absolute left-0 right-0 top-20 bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
              >
                <nav className="flex flex-col p-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`relative block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 mb-2 ${
                          pathname === item.href
                            ? 'text-blue-400 bg-white/10'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                        {pathname === item.href && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400 rounded-r"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

