'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { icon: <Users size={32} />, label: 'Happy Clients', value: '50+', color: 'text-blue-400' },
    { icon: <Award size={32} />, label: 'Projects Done', value: '200+', color: 'text-cyan-400' },
    { icon: <TrendingUp size={32} />, label: 'Success Rate', value: '100%', color: 'text-blue-400' },
    { icon: <Clock size={32} />, label: 'Years Experience', value: '10+', color: 'text-cyan-400' },
  ];

  return (
    <section className="section bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
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
            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              {t('description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className={`${stat.color} mb-4 flex justify-center`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

