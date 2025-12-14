'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { ArrowRight, Shield, Eye, Lock, Zap, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Pre-generated stable particle data to avoid hydration mismatch
const particleData = [
  { width: 4, height: 4, left: 10, delay: 2, duration: 18 },
  { width: 3, height: 3, left: 25, delay: 5, duration: 22 },
  { width: 5, height: 5, left: 40, delay: 1, duration: 20 },
  { width: 2, height: 2, left: 55, delay: 8, duration: 16 },
  { width: 4, height: 4, left: 70, delay: 3, duration: 19 },
  { width: 3, height: 3, left: 15, delay: 12, duration: 21 },
  { width: 5, height: 5, left: 85, delay: 6, duration: 17 },
  { width: 2, height: 2, left: 30, delay: 15, duration: 23 },
  { width: 4, height: 4, left: 60, delay: 4, duration: 18 },
  { width: 3, height: 3, left: 75, delay: 10, duration: 20 },
  { width: 5, height: 5, left: 20, delay: 7, duration: 19 },
  { width: 2, height: 2, left: 90, delay: 13, duration: 22 },
  { width: 4, height: 4, left: 35, delay: 2, duration: 21 },
  { width: 3, height: 3, left: 50, delay: 9, duration: 17 },
  { width: 5, height: 5, left: 65, delay: 11, duration: 24 },
];

export default function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient pt-20">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Particle Effects */}
      <div className="particles">
        {particleData.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6 glow-cyan">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-gray-300">Premium Security Solutions</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                  <span className="text-white block mb-2">
                    {t('title')}
                  </span>
                  <span className="text-gradient">
                    Security Solutions
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-4">
                  {t('subtitle')}
                </p>

                {/* Description */}
                <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
                  {t('description')}
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <FeatureBadge icon={<CheckCircle className="w-5 h-5" />} text="24/7 Monitoring" />
                  <FeatureBadge icon={<CheckCircle className="w-5 h-5" />} text="AI-Powered" />
                  <FeatureBadge icon={<CheckCircle className="w-5 h-5" />} text="Smart Integration" />
                  <FeatureBadge icon={<CheckCircle className="w-5 h-5" />} text="Expert Support" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 glow-cyan" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative text-white flex items-center space-x-2 rtl:space-x-reverse">
                      <span>{t('cta')}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </Link>

                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg glass border-2 border-white/10 hover:border-cyan-400/50 transition-all"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">Our Services</span>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Content - 5 columns */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                {/* Main Feature Card */}
                <div className="glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all">
                  <div className="space-y-6">
                    {/* Feature Items */}
                    <SecurityFeature
                      icon={<Shield className="w-6 h-6" />}
                      title="Advanced Protection"
                      description="AI-powered security monitoring"
                      gradient="from-cyan-500 to-blue-500"
                    />
                    <SecurityFeature
                      icon={<Eye className="w-6 h-6" />}
                      title="24/7 Surveillance"
                      description="Real-time monitoring systems"
                      gradient="from-blue-500 to-purple-500"
                    />
                    <SecurityFeature
                      icon={<Lock className="w-6 h-6" />}
                      title="Access Control"
                      description="Biometric security systems"
                      gradient="from-purple-500 to-pink-500"
                    />
                    <SecurityFeature
                      icon={<Zap className="w-6 h-6" />}
                      title="Smart Automation"
                      description="IoT integrated solutions"
                      gradient="from-pink-500 to-cyan-500"
                    />
                  </div>

                  {/* Stats Bar */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    <StatItem value="50+" label="Clients" />
                    <StatItem value="200+" label="Projects" />
                    <StatItem value="100%" label="Secure" />
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-dark rounded-2xl p-4 border border-cyan-400/30 glow-cyan hidden lg:block"
                >
                  <Shield className="w-12 h-12 text-cyan-400" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeatureBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
      <div className="text-cyan-400">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function SecurityFeature({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="flex items-start space-x-4 rtl:space-x-reverse group">
      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-black text-gradient mb-1">{value}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  );
}
