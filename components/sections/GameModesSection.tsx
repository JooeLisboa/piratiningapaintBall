import { Sword, Crown, RefreshCcw, Flag, Trophy, Trees, Timer } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';

const icons = [Sword, Crown, RefreshCcw, Flag, Flag, Trophy, Trees];

export function GameModesSection() {
  return (
    <AnimatedSection id="modalidades" className="container-max py-16">
      <SectionTitle title="Modalidades de jogo" description="Escolha a dinâmica ideal para sua turma. Observação: o time vencedor é o que atingir maior pontuação." />
      <div className="grid gap-4 lg:grid-cols-2">
        {siteContent.gameModes.map((mode, index) => {
          const Icon = icons[index] ?? Sword;
          return (
            <article key={mode.title} className="card-surface p-5 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-brand">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-brand-text">{mode.title}</h3>
                <Icon className="text-brand-primary" />
              </div>
              <p className="mt-3 text-sm text-brand-muted">{mode.description}</p>
              {mode.score ? <p className="mt-3 text-sm font-medium text-brand-text">{mode.score}</p> : null}
              {mode.note ? <p className="mt-3 rounded-lg border border-white/10 bg-black/35 p-3 text-sm text-brand-muted">{mode.note}</p> : null}
              <p className="mt-4 flex items-center gap-2 text-sm font-bold text-brand-primary"><Timer size={14} />{mode.duration}</p>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
