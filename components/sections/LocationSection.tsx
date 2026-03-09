import { MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { siteContent } from '@/data/siteContent';

export function LocationSection() {
  return (
    <AnimatedSection id="local" className="container-max py-16">
      <SectionTitle title="Local" description="Arena de paintball em Piratininga com acesso fácil para sua turma." />
      <div className="card-surface flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3"><MapPin className="mt-1 text-brand-primary" /><div><p className="text-sm text-brand-muted">Endereço</p><p className="font-bold text-brand-text">{siteContent.address}</p><p className="mt-1 text-sm text-brand-muted">{siteContent.openingHours}</p></div></div>
        <a href={siteContent.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Abrir no Google Maps</a>
      </div>
    </AnimatedSection>
  );
}
