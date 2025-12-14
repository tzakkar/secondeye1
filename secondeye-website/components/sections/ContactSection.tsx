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
    { icon: <MapPin className="w-5 h-5" />, title: t('address'), content: t('location'), gradient: 'from-cyan-500 to-blue-500' },
    { icon: <Phone className="w-5 h-5" />, title: t('phone'), content: '+966 594 866 064', gradient: 'from-blue-500 to-purple-500' },
    { icon: <Mail className="w-5 h-5" />, title: t('email'), content: 'osamamo.saad83@gmail.com', gradient: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 grid-background opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse glass px-4 py-2 rounded-full mb-6">
              <Send className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-gradient">{t('title')}</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t('subtitle')}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="group glass-dark rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all hover-lift">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.gradient} mb-4 text-white`}>
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{info.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed break-words">{info.content}</p>
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
              <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-8 border border-white/10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('name')}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('email')}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
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
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder={t('subject')}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t('message')}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition-all mb-6 resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 glow-cyan" />
                  <span className="relative text-white flex items-center justify-center space-x-2 rtl:space-x-reverse">
                    <span>{isSubmitting ? 'Sending...' : t('send')}</span>
                    <Send className="w-5 h-5" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
