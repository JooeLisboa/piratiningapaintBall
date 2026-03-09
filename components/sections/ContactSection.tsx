import { MessageCircle, Phone, UserRound } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ContactInfoCard } from '@/components/shared/ContactInfoCard';
import { siteContent } from '@/data/siteContent';
import { BookingForm } from '@/components/forms/BookingForm';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function ContactSection() {
  return (
    <AnimatedSection id="contato" className="container-max py-16">
      <SectionTitle title="Contato" description="Fale com nossa equipe e confirme seu agendamento via WhatsApp com rapidez." />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <ContactInfoCard icon={Phone} label="Telefone / WhatsApp" value={siteContent.phoneDisplay} />
          <ContactInfoCard icon={UserRound} label="Contato" value={siteContent.contactName} />
          <ContactInfoCard icon={MessageCircle} label="Atendimento" value={siteContent.openingHours} />
          <a href={buildWhatsAppUrl('Olá! Quero agendar uma partida na Arena Paintball - Piratininga PaintBall.')} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent-500 px-5 py-3 font-semibold text-black">Agendar pelo WhatsApp</a>
        </div>
        <BookingForm />
      </div>
    </AnimatedSection>
  );
}
