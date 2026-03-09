'use client';

import { useState } from 'react';
import { ChevronDown, ShieldAlert } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';

export function RulesSection() {
  const [open, setOpen] = useState(true);
  return (
    <AnimatedSection id="regras" className="container-max py-16">
      <SectionTitle title="Regras de jogo" description="Segurança e responsabilidade em primeiro lugar em toda partida." />
      <div className="card-surface overflow-hidden">
        <button className="flex w-full items-center justify-between px-5 py-4 text-left font-bold" onClick={() => setOpen((prev) => !prev)}>
          Diretrizes essenciais
          <ChevronDown className={`transition ${open ? 'rotate-180' : ''}`} />
        </button>
        <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden px-5 pb-5">
            <ul className="space-y-3 text-sm text-brand-text">
              {siteContent.rules.map((rule) => <li key={rule} className="rounded-lg border border-white/10 bg-black/35 px-3 py-2">{rule}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-4 flex items-start gap-2 rounded-xl border border-brand-primary/30 bg-brand-primary/10 p-4 text-sm text-brand-primaryHover"><ShieldAlert size={18} className="mt-0.5" />{siteContent.rulesAlert}</p>
    </AnimatedSection>
  );
}
