import { Sword, Crown, RefreshCcw, Flag, Trophy, Trees, Timer } from 'lucide-react';
import { siteContent } from '@/data/siteContent';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';

const icons = [Sword, Crown, RefreshCcw, Flag, Flag, Trophy, Trees];

export function GameModesSection() {
  return (
    <AnimatedSection id="modalidades-de-jogo" className="container-max py-16">
      <SectionTitle title="Modalidades de jogo" description="Escolha a dinâmica ideal para sua turma. Observação: o time vencedor é o que atingir maior pontuação." />
      <div className="grid gap-4 lg:grid-cols-2">
        {siteContent.gameModes.map((mode, index) => {
          const Icon = icons[index] ?? Sword;
          return (
            <article key={mode.title} className="card-surface p-5 transition hover:-translate-y-1 hover:border-accent-500/50">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold">{mode.title}</h3>
                <Icon className="text-accent-500" />
              </div>
              <p className="mt-3 text-sm text-zinc-300">{mode.description}</p>
              {mode.score ? <p className="mt-3 text-sm font-medium text-zinc-200">{mode.score}</p> : null}
              {mode.note ? <p className="mt-3 rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-zinc-300">{mode.note}</p> : null}
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-accent-500"><Timer size={14} />{mode.duration}</p>
            </article>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
