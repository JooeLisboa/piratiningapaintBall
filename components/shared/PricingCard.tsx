import { Check } from 'lucide-react';
import { PricingItem } from '@/data/siteContent';
import { cn } from '@/lib/utils';

export function PricingCard({ item }: { item: PricingItem }) {
  return (
    <article className={cn('card-surface p-6', item.featured && 'border-brand-primary/60 bg-brand-primary/10 shadow-brand')}>
      <h3 className="text-lg font-bold text-brand-text">{item.title}</h3>
      <p className="mt-2 text-3xl font-black text-brand-primary">{item.price}</p>
      {item.description ? <p className="mt-2 text-sm text-brand-muted">{item.description}</p> : null}
      {item.items ? (
        <ul className="mt-4 space-y-2 text-sm text-brand-text">
          {item.items.map((entry) => (
            <li key={entry} className="flex items-center gap-2"><Check size={16} className="text-brand-primary" />{entry}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
