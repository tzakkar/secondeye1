'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Clock } from 'lucide-react';

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    { icon: <Users size={32} />, label: 'Happy Clients', value: '50+', gradient: 'from-cyan-500 to-blue-500' },
    { icon: <Award size={32} />, label: 'Projects Done', value: '200+', gradient: 'from-blue-500 to-purple-500' },
    { icon: <TrendingUp size={32} />, label: 'Success Rate', value: '100%', gradient: 'from-purple-500 to-pink-500' },
    { icon: <Clock size={32} />, label: 'Years Experience', value: '10+', gradient: 'from-pink-500 to-cyan-500' },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">About Us</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                <div className="relative glass-dark rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 text-center hover-lift h-full flex flex-col items-center justify-center">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.gradient} mb-4 text-white`}>
                    {stat.icon}
                  </div>

                  <div className="text-4xl md:text-5xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
