import { NoticesSection } from '@/components/sections/NoticesSection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function NoticesPageContent() {
  return (
    <main>
      <AnimatedSection className="container-max pt-16">
        <p className="text-sm uppercase tracking-[0.24em] text-accent-500">Informações importantes</p>
        <h1 className="mt-3 text-4xl font-black md:text-5xl">Recados</h1>
        <p className="mt-4 max-w-3xl text-zinc-300">Consulte os avisos institucionais antes do agendamento para garantir uma experiência organizada e segura.</p>
      </AnimatedSection>
      <NoticesSection />
      <section className="container-max pb-20 text-center">
        <a href={buildWhatsAppUrl('Olá! Li os recados e quero tirar dúvidas sobre meu agendamento.')} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent-500 px-6 py-3 font-semibold text-black">Falar com a equipe</a>
      </section>
    </main>
  );
}
