import { LucideIcon } from 'lucide-react';

export function ContactInfoCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="card-surface flex items-start gap-3 p-4">
      <Icon className="mt-0.5 text-accent-500" size={18} />
      <div>
        <p className="text-xs uppercase tracking-wider text-zinc-400">{label}</p>
        <p className="text-sm font-medium text-zinc-100">{value}</p>
      </div>
    </div>
  );
}
