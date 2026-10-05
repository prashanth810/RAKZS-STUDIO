import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Camera, CalendarDays, ChevronDown, MapPin } from "lucide-react";

import { GalleryLightbox } from "@/components/rakzs/GalleryLightbox";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { EventCard } from "@/components/rakzs/EventCard";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = events.find((item) => item.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found — RAKZS STUDIO" }, { name: "robots", content: "noindex" }],
      };
    }
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — RAKZS STUDIO` },
        { name: "description", content: event.summary },
        { property: "og:title", content: `${event.title} — RAKZS STUDIO` },
        { property: "og:description", content: event.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: EventDetailPage,
  errorComponent: EventDetailError,
  notFoundComponent: EventNotFound,
});

function EventDetailPage() {
  const { event } = Route.useLoaderData();
  const related = events.filter((item) => item.slug !== event.slug).slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <section className="relative flex min-h-[calc(105vh-2rem)] items-end overflow-hidden pt-28">
        <img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 size-full object-cover"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8">
          <div className="max-w-3xl animate-hero-in">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
              {event.category}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-on-media md:text-7xl">
              {event.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-on-media-muted">{event.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-on-media-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-on-media-accent" />
                {event.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-on-media-accent" />
                {event.year}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="reveal space-y-10">
            <div>
              <p className="section-kicker">The Story</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                How this story would be told.
              </h2>
              <p className="mt-6 text-base leading-8 text-muted-foreground whitespace-pre-line">{event.story}</p>
            </div>

            <div>
              <h3 className="font-display text-3xl text-foreground">Creative Vision</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{event.vision}</p>
            </div>

            <div>
              <h3 className="font-display text-3xl text-foreground">Our Approach</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">{event.approach}</p>
            </div>

            {event.sections?.map((sec) => (
              <div key={sec.title} className="border-t border-border/60 pt-8">
                <h3 className="font-display text-3xl text-foreground">{sec.title}</h3>
                {sec.content ? (
                  <p className="mt-4 text-base leading-8 text-muted-foreground whitespace-pre-line">
                    {sec.content}
                  </p>
                ) : null}
                {sec.items && sec.items.length > 0 ? (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {sec.items.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-border/80 bg-card p-5 shadow-xs transition hover:border-primary/40"
                      >
                        <h4 className="font-display text-base font-semibold text-primary">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <aside className="reveal grid content-start gap-4">
            <div className="rounded-lg border border-border bg-card p-7 shadow-cinematic">
              <p className="section-kicker">Deliverables</p>
              <ul className="mt-5 grid gap-3 text-sm leading-7 text-muted-foreground">
                {event.deliverables.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-7 shadow-cinematic">
              <p className="section-kicker">Shoot Timeline</p>
              <ol className="mt-5 grid gap-4 text-sm leading-7 text-muted-foreground">
                {event.timeline.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="font-display text-xl text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg border border-primary/40 bg-secondary p-7">
              <Camera className="size-6 text-primary" />
              <p className="section-kicker mt-4">Equipment Notes</p>
              <ul className="mt-4 grid gap-4 text-sm leading-7 text-muted-foreground">
                {event.equipment.map((item) => (
                  <li key={item.title}>
                    <strong className="block text-foreground">{item.title}</strong>
                    {item.note}
                  </li>
                ))}
              </ul>
            </div>

            {event.faqs && event.faqs.length > 0 ? (
              <div className="rounded-lg border border-border bg-card p-6 shadow-cinematic">
                <p className="section-kicker">Questions & Answers</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  Frequently Asked Questions
                </h3>
                <div className="mt-5 divide-y divide-border/60">
                  {event.faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={faq.question} className="py-3.5 first:pt-0 last:pb-0">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                          className="group flex w-full items-start justify-between gap-3 text-left transition hover:text-primary"
                          aria-expanded={isOpen}
                        >
                          <div className="flex items-start gap-3">
                            <span className="font-display text-xs font-semibold text-primary/80 mt-0.5 shrink-0">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown
                            className={cn(
                              "size-4 shrink-0 text-primary transition-transform duration-300 mt-0.5",
                              isOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <div
                          className={cn(
                            "grid transition-all duration-300 ease-in-out",
                            isOpen ? "grid-rows-[1fr] mt-2.5 opacity-100" : "grid-rows-[0fr] opacity-0"
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="pl-7 text-xs leading-6 text-muted-foreground whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <Button asChild variant="gold" size="lg">
              <Link to="/contact" search={{ event: event.title, service: undefined }}>
                Enquire About This Story <ArrowRight />
              </Link>
            </Button>
          </aside>
        </div>
      </section>

      <section className="section-band bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Gallery"
            title="Frames from the collection."
            description="Illustrative sample gallery. Click any frame to view it enlarged."
          />
          <GalleryLightbox images={event.gallery} title={event.title} />
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="More Stories" title="Continue through the portfolio." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <EventCard key={item.slug} event={item} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outlineGold">
              <Link to="/events">
                <ArrowLeft className="size-4" /> Back to All Events
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function EventNotFound() {
  const { slug } = Route.useParams();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 pt-28">
      <div className="max-w-xl text-center">
        <p className="section-kicker">Story Not Found</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-foreground">
          We couldn&apos;t find “{slug}”.
        </h1>
        <p className="mt-5 text-base leading-8 text-muted-foreground">
          This story may have been renamed or removed. Explore the full portfolio instead.
        </p>
        <Button asChild variant="gold" className="mt-8">
          <Link to="/events">Explore All Events</Link>
        </Button>
      </div>
    </div>
  );
}

function EventDetailError() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 pt-28">
      <div className="max-w-xl text-center">
        <p className="section-kicker">Something went wrong</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-foreground">
          This story didn&apos;t load.
        </h1>
        <Button asChild variant="gold" className="mt-8">
          <Link to="/events">Back to Portfolio</Link>
        </Button>
      </div>
    </div>
  );
}
