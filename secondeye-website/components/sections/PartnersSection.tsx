'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Handshake, Building2 } from 'lucide-react';

export default function PartnersSection() {
  const t = useTranslations('partners');
  const tClients = useTranslations('clients');

  const technicalPartners = [
    '3M', 'APC', 'Juniper', 'EVOKO', 'Cisco', 'HP', 'PELCO', 'Fluke',
    'Televés', 'FORTINET', 'Bitdefender', 'SYSTIMAX', 'AVAYA', 'Panasonic',
    'Dell', 'Panduit', 'ZKTeco', 'Dahua', 'Samsung', 'Honeywell', 'Hikvision', 'Legrand'
  ];

  const clients = [
    { name: 'General Entertainment Authority', nameAr: 'الهيئة العامة للترفيه' },
    { name: 'Riyadh Cables Group', nameAr: 'مجموعة كابلات الرياض' },
    { name: 'Zajil', nameAr: 'زاجل' },
    { name: 'MASIC', nameAr: 'ماسك' },
    { name: 'TVTC', nameAr: 'المؤسسة العامة للتدريب التقني والمهني' },
    { name: 'Smaat', nameAr: 'سماعات' },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6">
              <Handshake className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Partnerships</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gradient">{t('title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20">
            {technicalPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group relative"
              >
                <div className="glass-dark rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover-lift h-full flex items-center justify-center min-h-[80px]">
                  <span className="text-white font-semibold text-center text-sm">{partner}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Our Clients</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gradient">{tClients('title')}</h3>
          </motion.div>

          {/* Clients Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

                {/* Card */}
                <div className="relative glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500">
                  <h4 className="text-lg font-bold text-white mb-2">{client.name}</h4>
                  <p className="text-gray-400 text-sm">{client.nameAr}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
