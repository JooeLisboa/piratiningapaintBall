import { GallerySection } from '@/components/sections/GallerySection';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function GalleryPageContent() {
  return (
    <main>
      <AnimatedSection className="container-max pt-16">
        <p className="text-sm uppercase tracking-[0.24em] text-brand-primary">Página satélite</p>
        <h1 className="mt-3 text-4xl font-black text-brand-text md:text-5xl">Galeria de Fotos</h1>
        <p className="mt-4 max-w-3xl text-brand-muted">Veja momentos de adrenalina, integração e diversão na Arena Paintball em Piratininga.</p>
      </AnimatedSection>
      <GallerySection />
      <section className="container-max pb-20 text-center">
        <a href={buildWhatsAppUrl('Olá! Vi a galeria e quero agendar uma partida.')} target="_blank" rel="noopener noreferrer" className="btn-primary shadow-brand">Agendar pelo WhatsApp</a>
      </section>
    </main>
  );
}
