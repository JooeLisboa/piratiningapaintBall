export function Badge({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-accent-500/40 bg-accent-500/15 px-3 py-1 text-xs font-semibold text-accent-500">{children}</span>;
}
