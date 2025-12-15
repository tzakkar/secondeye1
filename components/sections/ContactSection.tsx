'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, title: t('address'), content: t('location'), color: 'text-blue-400' },
    { icon: <Phone className="w-5 h-5" />, title: t('phone'), content: '+966 594 866 064', color: 'text-cyan-400' },
    { icon: <Mail className="w-5 h-5" />, title: t('email'), content: 'osamamo.saad83@gmail.com', color: 'text-blue-400' },
  ];

  return (
    <section id="contact" className="section bg-black !py-[30px]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Send className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gradient">
              {t('title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('subtitle')}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="card">
                  <div className={`${info.color} mb-4`}>
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{info.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed break-words">
                    {info.content}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="card">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('name')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('email')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t('phone')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('subject')}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('message')}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-400 focus:outline-none transition-all mb-8 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  <span>{isSubmitting ? 'Sending...' : t('send')}</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

