import { NoticesSection } from '@/components/sections/NoticesSection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function NoticesPageContent() {
  return (
    <main>
      <AnimatedSection className="container-max pt-16">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Informações importantes</p>
        <h1 className="mt-3 text-4xl font-black text-brand-text md:text-5xl">Recados</h1>
        <p className="mt-4 max-w-3xl text-brand-muted">Consulte os avisos institucionais antes do agendamento para garantir uma experiência organizada e segura.</p>
      </AnimatedSection>
      <NoticesSection />
      <section className="container-max pb-20 text-center">
        <a href={buildWhatsAppUrl('Olá! Li os recados e quero tirar dúvidas sobre meu agendamento.')} target="_blank" rel="noopener noreferrer" className="btn-primary shadow-brand">Falar com a equipe</a>
      </section>
    </main>
  );
}
