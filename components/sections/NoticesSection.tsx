import { BellRing } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';

export function NoticesSection() {
  return (
    <AnimatedSection id="recados" className="container-max py-16">
      <SectionTitle title="Recados" description="Informações institucionais importantes para um agendamento tranquilo." />
      <div className="grid gap-4 md:grid-cols-2">
        {siteContent.notices.map((item) => (
          <article key={item.title} className="card-surface p-5">
            <BellRing size={18} className="text-accent-500" />
            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
