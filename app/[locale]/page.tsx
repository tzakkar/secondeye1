import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import PartnersSection from '@/components/sections/PartnersSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VisionMissionSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
