export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-primary">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-black text-brand-text md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-brand-muted">{description}</p> : null}
    </div>
  );
}
