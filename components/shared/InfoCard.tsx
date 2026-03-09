import { cn } from '@/lib/utils';

export function InfoCard({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <article className={cn('card-surface p-5 transition hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-brand', className)}>
      <h3 className="font-semibold text-brand-text">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">{description}</p>
    </article>
  );
}
