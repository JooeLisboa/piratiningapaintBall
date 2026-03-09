export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-brand-primary/40 bg-brand-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">{children}</span>;
}
