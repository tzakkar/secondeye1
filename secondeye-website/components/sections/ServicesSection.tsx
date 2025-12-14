'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Shield, Network, Home, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: <Network className="w-12 h-12" />,
      title: t('telecom.title'),
      description: t('telecom.description'),
      gradient: 'from-cyan-500 to-blue-600',
      features: ['Network Design', 'Fiber Installation', 'Wi-Fi Solutions', 'Data Centers', 'UPS Systems'],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('security.title'),
      description: t('security.description'),
      gradient: 'from-blue-500 to-purple-600',
      features: ['CCTV Systems', 'Access Control', 'Fire Alarms', 'Intrusion Detection', 'Vehicle Tracking'],
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: t('smart.title'),
      description: t('smart.description'),
      gradient: 'from-purple-500 to-pink-600',
      features: ['Smart Home', 'IoT Integration', 'AI Automation', 'Voice Control', 'Energy Management'],
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">What We Offer</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                {/* Card */}
                <div className="relative h-full glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} glow-cyan`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-400">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <a href="#contact" className="inline-flex items-center space-x-2 rtl:space-x-reverse text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" />
                  </a>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
