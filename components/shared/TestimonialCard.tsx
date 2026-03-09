import { Star } from 'lucide-react';
import { TestimonialItem } from '@/data/siteContent';

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="card-surface p-5 transition hover:-translate-y-1 hover:border-brand-primary/40">
      <div className="mb-3 flex gap-1 text-brand-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
      <p className="text-brand-text">“{item.quote}”</p>
    </article>
  );
}
