import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { PricingCard } from '@/components/shared/PricingCard';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function PricingSection() {
  return (
    <AnimatedSection id="precos" className="container-max py-16">
      <SectionTitle title="Preços" description="Tabela de Preços do Arena Paintball Piratininga-SP. KIT = Máscara, Colete tático, Marcador (arma de paintball) e 1 hora de campo." />
      <p className="mb-6 text-center text-sm text-zinc-300">Terça à Domingo</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {siteContent.pricing.map((item) => <PricingCard key={item.title} item={item} />)}
      </div>
      <div className="mt-6 card-surface p-5 text-sm text-zinc-200">
        <p><strong>Aviso importante:</strong> Para menores de 16 anos é obrigatória a autorização dos pais ou responsável.</p>
        <p className="mt-2"><strong>Agendamento:</strong> Todos os jogos deverão ser agendados por telefone com antecedência pelo Fone/Whats: (014) 9.9622-2202 - Mateus.</p>
      </div>
      <div className="mt-6 text-center">
        <a href={buildWhatsAppUrl('Olá! Quero reservar uma data e confirmar os pacotes.')} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-accent-500 px-6 py-3 font-semibold text-black hover:bg-accent-600">Agendar pelo WhatsApp</a>
      </div>
    </AnimatedSection>
  );
}
