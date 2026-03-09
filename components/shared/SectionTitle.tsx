export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent-500">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-bold md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-zinc-300">{description}</p> : null}
    </div>
  );
}
