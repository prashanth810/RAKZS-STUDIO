import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { EventItem } from "@/data/events";

export function EventCard({ event, featured = false }: { event: EventItem; featured?: boolean }) {
  return (
    <article className="group reveal overflow-hidden rounded-lg border border-border bg-card shadow-cinematic">
      <Link to="/events/$slug" params={{ slug: event.slug }} className="block overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          width={1400}
          height={1000}
          className={featured ? "h-[32rem] w-full object-cover image-zoom" : "h-80 w-full object-cover image-zoom"}
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-primary">
          <span>{event.category}</span>
          <span>{event.location} · {event.year}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{event.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{event.summary}</p>
        <Button asChild variant="outlineGold" className="mt-6">
          <Link to="/events/$slug" params={{ slug: event.slug }}>
            Explore Story <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
