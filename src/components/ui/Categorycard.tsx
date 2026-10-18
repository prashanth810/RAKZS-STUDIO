import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ServiceCategory } from "@/data/events";

export function CategoryCard({
  category,
  count,
  content,
  featured = false,
}: {
  category: ServiceCategory;
  /** optional: shows the "N Stories" label when provided */
  count?: number;
  /** optional: overrides the card copy (eyebrow / title / description / button) */
  content?: { eyebrow: string; title: string; description: string; cta: string };
  featured?: boolean;
}) {
  const eyebrow = content?.eyebrow ?? category.kicker;
  const title = content?.title ?? category.cardTitle;
  const description = content?.description ?? category.description;
  const cta = content?.cta ?? category.cardCta;
  return (
    <article className="group reveal overflow-hidden rounded-lg border border-border bg-card shadow-cinematic">
      <Link
        to="/events/category/$category"
        params={{ category: category.slug }}
        className="block overflow-hidden"
      >
        <img
          src={category.image}
          alt={title}
          loading="lazy"
          width={1400}
          height={1000}
          className={
            featured
              ? "h-[32rem] w-full object-cover image-zoom"
              : "h-80 w-full object-cover image-zoom"
          }
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-primary">
          <span>{eyebrow}</span>
          {count !== undefined ? (
            <span>
              {count} {count === 1 ? "Story" : "Stories"}
            </span>
          ) : null}
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
        <Button asChild variant="outlineGold" className="mt-6">
          <Link to="/events/category/$category" params={{ category: category.slug }}>
            {cta} <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
