import { MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { siteContent } from '@/data/siteContent';

export function LocationSection() {
  return (
    <AnimatedSection id="local" className="container-max py-16">
      <SectionTitle title="Local" description="Arena de paintball em Piratininga com acesso fácil para sua turma." />
      <div className="card-surface flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-3">
          <MapPin className="mt-1 text-accent-500" />
          <div>
            <p className="text-sm text-zinc-300">Endereço</p>
            <p className="font-semibold">{siteContent.address}</p>
            <p className="mt-1 text-sm text-zinc-300">{siteContent.openingHours}</p>
          </div>
        </div>
        <a href={siteContent.mapsUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent-500 px-6 py-3 text-center font-semibold text-black hover:bg-accent-600">Abrir no Google Maps</a>
      </div>
    </AnimatedSection>
  );
}
