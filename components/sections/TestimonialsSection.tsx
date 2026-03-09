import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { TestimonialCard } from '@/components/shared/TestimonialCard';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function TestimonialsSection() {
  return (
    <AnimatedSection className="container-max py-16">
      <SectionTitle eyebrow="Prova social" title="5,0 estrelas com 201 avaliações" description="Quem visita destaca atendimento maravilhoso, segurança, estrutura boa e muita diversão para grupos." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.testimonials.map((item) => <TestimonialCard key={item.quote} item={item} />)}
      </div>
      <div className="mt-8 text-center">
        <a href={buildWhatsAppUrl('Olá! Vi as avaliações e quero reservar uma data para meu grupo.')} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent-500 px-6 py-3 font-semibold text-black hover:bg-accent-600">Agendar pelo WhatsApp</a>
      </div>
    </AnimatedSection>
  );
}
