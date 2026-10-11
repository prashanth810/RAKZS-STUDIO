import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Camera,
  ChevronLeft,
  ChevronRight,
  Clapperboard,
  Film,
  Gift,
  Heart,
  Lightbulb,
  MapPin,
  Mic,
  Minus,
  MonitorPlay,
  Music,
  Package,
  Palette,
  Plane,
  Plus,
  Radio,
  Smartphone,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SubPage, SubPageIcon } from "@/data/subPages";
import { cn } from "@/lib/utils";
import enquire from "../assets/enquire.png";
import understand from "../assets/understand.png";
import plan from "../assets/plan.png";
import capture from "../assets/capture.png";
import refine_deliver from "../assets/refine_deliver.png";

/**
 * Single-page UI used by every sub-page (Wedding, Engagement, Pre-Wedding …).
 * ALL text and images come from  src/data/subPages.ts  — edit content there.
 */

const iconMap: Record<SubPageIcon, LucideIcon> = {
  camera: Camera,
  users: Users,
  video: Video,
  clapperboard: Clapperboard,
  drone: Plane,
  reels: Film,
  album: BookOpen,
  live: Radio,
  led: MonitorPlay,
  heart: Heart,
  gift: Gift,
  mic: Mic,
  briefcase: Briefcase,
  phone: Smartphone,
  light: Lightbulb,
  palette: Palette,
  music: Music,
  package: Package,
};

/** **double stars** inside a paragraph become bold text */
function RichText({ text }: { text: string }): ReactNode {
  return (
    <>
      {text.split("**").map((part, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}

const anchorTarget = {
  gallery: "#gallery",
  packages: "#packages",
} as const;

export function SubPageTemplate({ page, categoryLabel }: { page: SubPage; categoryLabel: string }) {
  const { hero, blocks, sidebar, process, gallery, packages, faqs } = page;

  return (
    <>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-28">
        <img
          src={hero.image}
          alt={page.card.title}
          className="absolute inset-0 size-full object-cover"
          width={1600}
          height={1000}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-14 lg:px-8">
          <div className="max-w-2xl animate-hero-in">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
              {hero.kicker}
            </p>
            <h1 className="mt-5 whitespace-pre-line font-display text-4xl font-semibold leading-[1.05] text-on-media md:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-on-media-muted md:text-lg md:leading-8">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button asChild variant="gold" size="lg">
                <Link to="/contact" search={{ service: categoryLabel, event: page.card.title }}>
                  {hero.cta} <ArrowRight />
                </Link>
              </Button>
              <span className="inline-flex items-center gap-2 text-sm text-on-media-muted">
                <MapPin className="size-4 text-on-media-accent" />
                {hero.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────── STORY + COVERAGE ───────────────────── */}
      <section className="section-band">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          {/* Left column — text blocks */}
          <div className="reveal space-y-12">
            {blocks.map((block, index) => (
              <div
                key={block.kicker}
                className={cn(index > 0 && "border-t border-border/60 pt-10")}
              >
                <p className="section-kicker">{block.kicker}</p>
                <h2 className="mt-4 whitespace-pre-line font-display text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                  {block.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-muted-foreground">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText text={paragraph} />
                    </p>
                  ))}
                </div>
                {block.cta ? (
                  <Button asChild variant="outlineGold" className="mt-6">
                    {block.cta.to === "contact" ? (
                      <Link
                        to="/contact"
                        search={{ service: categoryLabel, event: page.card.title }}
                      >
                        {block.cta.label} <ArrowRight className="size-4" />
                      </Link>
                    ) : (
                      <a href={anchorTarget[block.cta.to]}>
                        {block.cta.label} <ArrowRight className="size-4" />
                      </a>
                    )}
                  </Button>
                ) : null}
              </div>
            ))}
          </div>

          {/* Right column — coverage card + steps */}
          <aside className="reveal grid content-start gap-6">
            <div className="rounded-lg border border-border bg-card p-7 shadow-cinematic">
              <p className="section-kicker">{sidebar.kicker}</p>
              <h3 className="mt-3 whitespace-pre-line font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                {sidebar.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                {sidebar.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                <p className="section-kicker">{sidebar.listTitle}</p>
                <ul className="mt-4 grid gap-3">
                  {sidebar.services.map((service) => {
                    const Icon = iconMap[service.icon] ?? Camera;
                    return (
                      <li
                        key={service.label}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <Icon className="size-4 shrink-0 text-primary" />
                        {service.label}
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-4 text-xs leading-6 text-muted-foreground">{sidebar.note}</p>
              </div>

              <div className="mt-6 grid gap-3">
                <Button asChild variant="gold" size="lg">
                  <Link to="/packages">
                    {sidebar.primaryCta} <ArrowRight />
                  </Link>
                </Button>
                {sidebar.secondaryCta ? (
                  <Button asChild variant="outlineGold" size="lg">
                    <Link to="/packages">
                      {sidebar.secondaryCta} <ArrowRight />
                    </Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───────────────────────── PROCESS (zig-zag timeline) ───────────────────────── */}
      <ProcessTimeline process={process} />

      {/* ───────────────────────── GALLERY (own row) ───────────────────────── */}
      <section id="gallery" className="section-band scroll-mt-24 bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="section-kicker">{gallery.kicker}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {gallery.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{gallery.description}</p>
          </div>
          <SubPageGallery images={gallery.images} title={page.card.title} />
          {gallery.cta ? (
            <div className="mt-8 text-center">
              <Button asChild variant="gold">
                <Link to="/events/category/$category" params={{ category: page.categorySlug }}>
                  {gallery.cta} <ArrowRight />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </section>

      {/* ───────────────────────── PACKAGES (own row) ───────────────────────── */}
      <section id="packages" className="section-band scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal mx-auto max-w-3xl text-center">
            <p className="section-kicker">{packages.kicker}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {packages.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">{packages.description}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {packages.items.map((item) => (
              <article
                key={item.title}
                className="reveal flex flex-col rounded-lg border border-border bg-card p-7 shadow-cinematic"
              >
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.tagline ? (
                  <p className="mt-3 text-sm font-semibold text-primary">{item.tagline}</p>
                ) : null}
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
                <Link
                  to="/packages"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"
                >
                  {item.cta} <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
          {packages.footerLink ? (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              {packages.footerLink.prefix}{" "}
              <Link
                to="/packages"
                className="inline-flex items-center gap-1.5 font-semibold text-primary"
              >
                {packages.footerLink.label} <ArrowRight className="size-4" />
              </Link>
            </p>
          ) : null}
          {packages.note ? (
            <p className="mt-3 text-center text-xs leading-6 text-muted-foreground">
              {packages.note}
            </p>
          ) : null}
        </div>
      </section>

      {/* ───────────────────────── FAQ (own row) ───────────────────────── */}
      <section id="faq" className="section-band scroll-mt-24 bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal text-center">
            <p className="section-kicker">{faqs.kicker}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {faqs.title}
            </h2>
          </div>
          <SubPageFaq items={faqs.items} />
        </div>
      </section>
    </>
  );
}

/* ───────────────────────── Process: zig-zag timeline with dotted connector ───────────────────────── */

/** Images are mapped by step order: 01 enquire, 02 understand, 03 plan, 04 capture, 05 refine & deliver */
const processImages: string[] = [enquire, understand, plan, capture, refine_deliver];

const processColumns: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
};

function ProcessTimeline({ process }: { process: SubPage["process"] }) {
  const { kicker, title, steps, note } = process;
  // First line is normal text, remaining line(s) get the gold accent
  const [firstLine, ...restLines] = title.split("\n");
  const total = steps.length;

  return (
    <section className="section-band">
      <div className="mx-auto max-w-[95%] px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-lg bg-card px-5 py-12 md:px-10 md:py-16">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">{kicker}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-foreground md:text-5xl">
              {firstLine}
              {restLines.length > 0 ? (
                <span className="block text-primary">{restLines.join(" ")}</span>
              ) : null}
            </h3>
          </div>

          {/* Steps */}
          <ol className={cn("relative mt-12 grid md:mt-16", processColumns[total])}>
            {/* Dotted wavy connector (desktop only, sits behind the images) */}
            {total === 5 ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 1000 160"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 w-full md:block"
              >
                <path
                  d="M100,72 C200,72 200,152 300,152 C400,152 400,72 500,72 C600,72 600,152 700,152 C800,152 800,72 900,72"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  className="text-primary/50"
                />
              </svg>
            ) : null}

            {steps.map((step, index) => {
              const image = processImages[index];
              const isLow = index % 2 === 1; // 02 & 04 sit lower; 01 / 03 / 05 sit higher
              const isLast = index === total - 1;

              return (
                <li
                  key={step.title}
                  className={cn(
                    "relative flex gap-5 pb-10 md:flex-col md:items-center md:gap-0 md:px-3 md:pb-0 md:text-center",
                    isLow && "md:pt-20",
                    // vertical dotted line for mobile
                    !isLast &&
                      "before:absolute before:left-10 before:top-20 before:h-[calc(100%-5rem)] before:border-l-2 before:border-dashed before:border-primary/40 md:before:hidden",
                  )}
                >
                  {/* Image + number badge */}
                  <div className="relative z-10 shrink-0">
                    {image ? (
                      <img
                        src={image}
                        alt={step.title}
                        loading="lazy"
                        width={130}
                        height={130}
                        className="size-24 rounded-full bg-card object-cover shadow-lg ring-4 ring-card md:size-35"
                      />
                    ) : (
                      <div className="size-24 rounded-full bg-secondary shadow-lg ring-4 ring-card md:size-44" />
                    )}
                    <span className="absolute -top-1 left-0 grid size-8 place-items-center rounded-full bg-primary font-display text-xs font-semibold text-primary-foreground shadow-md md:left-3 md:-top-1 md:size-10 md:text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="md:mt-5 md:max-w-[15rem]">
                    <h4 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
          {note ? (
            <p className="mt-10 text-center text-sm text-muted-foreground md:mt-14">{note}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Gallery (1 large + 2 stacked, extras below) ───────────────────────── */

function SubPageGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const total = images.length;
  const current = active === null ? undefined : images[active];

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % total));
      if (event.key === "ArrowLeft") setActive((i) => (i === null ? i : (i - 1 + total) % total));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, total]);

  const [first, ...rest] = images;
  const stacked = rest.slice(0, 2);
  const extras = rest.slice(2);

  const tile = (image: string, index: number, className: string) => (
    <button
      key={`${image}-${index}`}
      type="button"
      onClick={() => setActive(index)}
      aria-label={`Open ${title} gallery image ${index + 1}`}
      className={cn("group overflow-hidden rounded-lg", className)}
    >
      <img
        src={image}
        alt={`${title} gallery ${index + 1}`}
        loading="lazy"
        width={1400}
        height={1000}
        className="size-full object-cover image-zoom"
      />
    </button>
  );

  return (
    <>
      <div className="reveal mt-10 grid gap-4 md:h-[28rem] md:grid-cols-[1.35fr_1fr]">
        {first ? tile(first, 0, "h-72 md:h-full md:min-h-0") : null}
        <div className="grid gap-4 md:h-full md:min-h-0 md:grid-rows-2">
          {stacked.map((image, i) => tile(image, i + 1, "h-52 md:h-full md:min-h-0"))}
        </div>
      </div>
      {extras.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map((image, i) => tile(image, i + 3, "h-56"))}
        </div>
      ) : null}

      {current ? (
        <div
          className="fixed inset-0 z-60 grid place-items-center bg-backdrop p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <Button
            variant="ghostGold"
            size="icon"
            className="absolute right-5 top-5"
            onClick={() => setActive(null)}
            aria-label="Close gallery"
          >
            <X className="size-5" />
          </Button>
          {total > 1 ? (
            <Button
              variant="ghostGold"
              size="icon"
              className="absolute left-5 top-1/2 -translate-y-1/2"
              onClick={() => setActive((i) => (i === null ? i : (i - 1 + total) % total))}
              aria-label="Previous gallery image"
            >
              <ChevronLeft className="size-5" />
            </Button>
          ) : null}
          <img
            src={current}
            alt={`${title} enlarged gallery`}
            className="max-h-[84vh] max-w-[90vw] rounded-lg object-contain shadow-cinematic"
          />
          {total > 1 ? (
            <Button
              variant="ghostGold"
              size="icon"
              className="absolute right-5 top-1/2 -translate-y-1/2"
              onClick={() => setActive((i) => (i === null ? i : (i + 1) % total))}
              aria-label="Next gallery image"
            >
              <ChevronRight className="size-5" />
            </Button>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

/* ───────────────────────── FAQ: one row per question, first open, only one open at a time ───────────────────────── */

function SubPageFaq({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0); // first question is open by default

  return (
    <div className="mt-10 grid gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-lg border bg-background transition-colors",
              isOpen ? "border-primary/50" : "border-border",
            )}
          >
            <button
              type="button"
              // opening one automatically closes the previous one
              onClick={() => setOpen(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
            >
              <span className="font-display text-xl font-semibold leading-snug text-foreground">
                {item.question}
              </span>
              {isOpen ? (
                <Minus className="size-5 shrink-0 text-primary" />
              ) : (
                <Plus className="size-5 shrink-0 text-primary" />
              )}
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
