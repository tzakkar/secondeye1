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
    <section className="section bg-black">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Partners Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Handshake className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Partnerships</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Partners Logo Loop */}
          <div className="mb-32 md:mb-40">
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="flex gap-6 animate-logo-loop">
                {/* First set of logos */}
                {technicalPartners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 card text-center min-w-[140px] min-h-[100px] flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-sm">{partner}</span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {technicalPartners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 card text-center min-w-[140px] min-h-[100px] flex items-center justify-center"
                  >
                    <span className="text-white font-semibold text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clients Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20 md:mt-28 mb-16 py-[18px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Building2 className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Our Clients</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gradient mb-6">
              {tClients('title')}
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {tClients('subtitle')}
            </p>
          </motion.div>

          {/* Clients Logo Loop */}
          <div>
            <div className="relative overflow-hidden">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling container */}
              <div className="flex gap-8 animate-logo-loop">
                {/* First set of clients */}
                {clients.map((client, index) => (
                  <div
                    key={`client-first-${index}`}
                    className="flex-shrink-0 card min-w-[280px] min-h-[120px]"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{client.name}</h4>
                    <p className="text-gray-400 text-sm">{client.nameAr}</p>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clients.map((client, index) => (
                  <div
                    key={`client-second-${index}`}
                    className="flex-shrink-0 card min-w-[280px] min-h-[120px]"
                  >
                    <h4 className="text-lg font-bold text-white mb-2">{client.name}</h4>
                    <p className="text-gray-400 text-sm">{client.nameAr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

