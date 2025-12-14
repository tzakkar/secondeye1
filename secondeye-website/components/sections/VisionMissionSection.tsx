'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export default function VisionMissionSection() {
  const tVision = useTranslations('vision');
  const tMission = useTranslations('mission');

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* Animated Grid */}
      <div className="absolute inset-0 grid-background opacity-10" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              {/* Card */}
              <div className="relative glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 glow-cyan">
                    <Eye className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient">
                  {tVision('title')}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed flex-grow">
                  {tVision('description')}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

              {/* Card */}
              <div className="relative glass-dark rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600">
                    <Target className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black mb-4 text-gradient">
                  {tMission('title')}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed flex-grow">
                  {tMission('description')}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
