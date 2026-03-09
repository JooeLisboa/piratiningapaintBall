import { Star } from 'lucide-react';
import { TestimonialItem } from '@/data/siteContent';

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="card-surface p-5">
      <div className="mb-3 flex gap-1 text-accent-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}</div>
      <p className="text-zinc-200">“{item.quote}”</p>
    </article>
  );
}
