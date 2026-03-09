import { ShieldCheck, CalendarCheck2, Users, Medal, Crosshair, HeartHandshake } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { SectionTitle } from '@/components/shared/SectionTitle';

const highlights = [
  { title: 'Estrutura preparada', description: 'Arena organizada para receber sua turma com conforto e ritmo dinâmico.', icon: Medal },
  { title: 'Equipamentos inclusos', description: 'Máscara, colete tático e marcador em excelente estado.', icon: Crosshair },
  { title: 'Segurança em foco', description: 'Equipe proativa, instrutores atentos e operação responsável.', icon: ShieldCheck },
  { title: 'Excelente para grupos', description: 'Perfeito para amigos, aniversário com paintball e confraternizações.', icon: Users },
  { title: 'Agendamento rápido', description: 'Reserva fácil e direta pelo WhatsApp com atendimento humano.', icon: CalendarCheck2 },
  { title: 'Atendimento atencioso', description: 'Experiência memorável com suporte do início ao fim.', icon: HeartHandshake }
];

export function ArenaSection() {
  return (
    <AnimatedSection className="container-max py-16 md:py-20">
      <SectionTitle eyebrow="Diferenciais" title="Arena de paintball com padrão profissional" description="Estrutura premium, segurança e diversão com atmosfera esportiva de alto impacto." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item) => (
          <article key={item.title} className="card-surface p-5 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-brand">
            <item.icon className="text-brand-primary" size={20} />
            <h3 className="mt-3 font-bold text-brand-text">{item.title}</h3>
            <p className="mt-2 text-sm text-brand-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
