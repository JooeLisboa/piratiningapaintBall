import { cn } from '@/lib/utils';

export function InfoCard({ title, description, className }: { title: string; description: string; className?: string }) {
  return (
    <article className={cn('card-surface p-5 transition hover:-translate-y-1 hover:border-accent-500/50', className)}>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-zinc-300">{description}</p>
    </article>
  );
}
