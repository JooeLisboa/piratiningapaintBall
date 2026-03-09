import { Check } from 'lucide-react';
import { PricingItem } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export function PricingCard({ item }: { item: PricingItem }) {
  return (
    <article className={cn('card-surface p-6', item.featured && 'border-accent-500/60 bg-accent-500/10 shadow-glow')}>
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="mt-2 text-3xl font-bold text-accent-500">{item.price}</p>
      {item.description ? <p className="mt-2 text-sm text-zinc-300">{item.description}</p> : null}
      {item.items ? (
        <ul className="mt-4 space-y-2 text-sm text-zinc-200">
          {item.items.map((entry) => (
            <li key={entry} className="flex items-center gap-2"><Check size={16} className="text-accent-500" />{entry}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
