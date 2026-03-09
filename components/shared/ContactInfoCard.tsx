import { LucideIcon } from 'lucide-react';

export function ContactInfoCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="card-surface flex items-start gap-3 p-4">
      <Icon className="mt-0.5 text-brand-primary" size={18} />
      <div>
        <p className="text-xs uppercase tracking-wider text-brand-muted">{label}</p>
        <p className="text-sm font-semibold text-brand-text">{value}</p>
      </div>
    </div>
  );
}
