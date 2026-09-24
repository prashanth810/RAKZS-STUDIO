export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-3xl text-center">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}
