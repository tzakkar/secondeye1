'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Network, Shield, Home } from 'lucide-react';

export default function ServicesSection() {
  const t = useTranslations('services');

  const services = [
    {
      icon: <Network className="w-12 h-12" />,
      title: t('telecom.title'),
      description: t('telecom.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: t('security.title'),
      description: t('security.description'),
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: t('smart.title'),
      description: t('smart.description'),
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gradient">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

