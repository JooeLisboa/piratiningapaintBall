import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { ArenaSection } from '@/components/sections/ArenaSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { GameModesSection } from '@/components/sections/GameModesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { RulesSection } from '@/components/sections/RulesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FloatingWhatsAppButton } from '@/components/shared/FloatingWhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ArenaSection />
        <TestimonialsSection />
        <GameModesSection />
        <RulesSection />
        <PricingSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
