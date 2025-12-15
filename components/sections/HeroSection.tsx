'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Shield, Eye, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-black to-black" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Premium Security Solutions</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white block mb-2">
                {t('title')}
              </span>
              <span className="text-gradient">
                {t('subtitle')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
              {t('description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Link href="/contact" className="btn-primary">
                <span>{t('cta')}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                {t('learnMore')}
              </Link>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <FeatureCard icon={<Shield className="w-6 h-6" />} text="Advanced Protection" />
            <FeatureCard icon={<Eye className="w-6 h-6" />} text="24/7 Monitoring" />
            <FeatureCard icon={<Lock className="w-6 h-6" />} text="Access Control" />
            <FeatureCard icon={<Zap className="w-6 h-6" />} text="Smart Solutions" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="card text-center">
      <div className="text-blue-400 mb-2 flex justify-center">{icon}</div>
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

