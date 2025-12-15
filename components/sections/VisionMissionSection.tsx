'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export default function VisionMissionSection() {
  const tVision = useTranslations('vision');
  const tMission = useTranslations('mission');

  return (
    <section className="section bg-black !py-0">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-6 text-gradient">
                {tVision('title')}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {tVision('description')}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-8">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-6 text-gradient">
                {tMission('title')}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                {tMission('description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

