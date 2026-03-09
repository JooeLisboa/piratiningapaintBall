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
            <BellRing size={18} className="text-brand-primary" />
            <h3 className="mt-2 font-bold text-brand-text">{item.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
