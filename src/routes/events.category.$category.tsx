import { useCallback, useEffect, useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/rakzs/PageHero";
import weddingPhoto from "@/assets/rakzs-hero-wedding.jpg";
import familyPhoto from "@/assets/rakzs-family.jpg";
import prePhoto from "@/assets/rakzs-prewedding.jpg";
import corporatePhoto from "@/assets/rakzs-corporate.jpg";
import productPhoto from "@/assets/rakzs-product.jpg";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { getServiceCategoryBySlug } from "@/data/events";
import { getSubPagesByCategory } from "@/data/subPages";

export const Route = createFileRoute("/events/category/$category")({
  loader: ({ params }) => {
    const category = getServiceCategoryBySlug(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found — RAKZS STUDIO" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { category } = loaderData;
    return {
      meta: [
        { title: category.seoTitle ?? `${category.cardTitle} — RAKZS STUDIO` },
        { name: "description", content: category.seoDescription ?? category.heroDescription },
        {
          property: "og:title",
          content: category.seoTitle ?? `${category.cardTitle} — RAKZS STUDIO`,
        },
        {
          property: "og:description",
          content: category.seoDescription ?? category.heroDescription,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: EventCategoryPage,
  notFoundComponent: CategoryNotFound,
});

function EventCategoryPage() {
  const { category } = Route.useLoaderData();
  // Sub-page cards (Wedding, Engagement & Reception …) come from src/data/subPages.ts
  const subPages = getSubPagesByCategory(category.slug);

  return (
    <>
      <PageHero
        eyebrow={category.heroEyebrow}
        title={category.heroTitle}
        description={category.heroDescription}
        image={category.image}
      />

      {/* Child sections */}
      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subPages.map((sub) => (
              <article
                key={sub.slug}
                className="group reveal overflow-hidden rounded-lg border border-border bg-card shadow-cinematic"
              >
                <Link
                  to="/events/$slug"
                  params={{ slug: sub.slug }}
                  className="block overflow-hidden"
                >
                  <img
                    src={sub.card.image}
                    alt={sub.card.title}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="h-80 w-full object-cover image-zoom"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary">
                    {sub.card.eyebrow}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
                    {sub.card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {sub.card.description}
                  </p>
                  <Button asChild variant="outlineGold" className="mt-6">
                    <Link to="/events/$slug" params={{ slug: sub.slug }}>
                      {sub.card.cta} <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Optional SEO / context section */}
      {category.seo ? (
        <section className="section-band bg-card">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            {category.seo.eyebrow ? (
              <p className="section-kicker mb-4">{category.seo.eyebrow}</p>
            ) : null}
            <h2 className="reveal font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              {category.seo.title}
            </h2>
            {category.seo.paragraphs.map((text) => (
              <p key={text} className="mt-6 text-base leading-8 text-muted-foreground">
                {text}
              </p>
            ))}
            {category.seo.note ? (
              <p className="mt-6 text-sm font-semibold text-primary">{category.seo.note}</p>
            ) : null}
            <Button asChild variant="outlineGold" className="mt-8">
              <Link to="/services">
                {category.seo.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      ) : null}

      {/* The Art of Noticing — replaces "Stories from this collection." */}
      <ArtOfNoticing categorySlug={category.slug} />

      {/* Optional bottom CTA */}
      {category.bottomCta ? (
        <section className="section-band bg-card">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="reveal font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              {category.bottomCta.title}
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              {category.bottomCta.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="gold" size="lg">
                <Link to="/contact" search={{ service: category.label, event: undefined }}>
                  {category.bottomCta.primary} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outlineGold" size="lg">
                <Link to="/packages">{category.bottomCta.secondary}</Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <div className="pb-20 text-center">
        <Button asChild variant="outlineGold">
          <Link to="/events">
            <ArrowLeft className="size-4" /> Back to All Categories
          </Link>
        </Button>
      </div>
    </>
  );
}

function CategoryNotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5 pt-28">
      <div className="max-w-xl text-center">
        <p className="section-kicker">Category Not Found</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-foreground">
          We couldn&apos;t find that category.
        </h1>
        <Button asChild variant="gold" className="mt-8">
          <Link to="/events">Explore All Categories</Link>
        </Button>
      </div>
    </div>
  );
}

/**
 * THE ART OF NOTICING — signature section (carousel).
 * Replaces the old "Stories from this collection." block on the 5 parent pages.
 *
 * - The main photo and the enlarged detail use the SAME imported file (`image`).
 * - `focus` = centre of the detail (0–1, x/y of the original photo), `zoom` = magnification.
 * - Both frames share the photo's aspect ratio, so the marker box matches the crop exactly.
 */
type NoticingSlide = {
  id: string;
  number: string; // "01" … "05"
  image: string;
  alt: string;
  /** "MAIN PHOTOGRAPH" line from the content doc */
  photoNote: string;
  width: number;
  height: number;
  focus: { x: number; y: number };
  zoom: number;
  detailAlt: string;
  detailLine: string;
  storyEyebrow: string;
  storyTitle: string;
  storyText: string;
};

const wedding: NoticingSlide = {
  id: "the-big-day",
  number: "01",
  image: weddingPhoto,
  alt: "A couple holding hands during their wedding ceremony at sunset",
  photoNote:
    "A real wedding frame showing the couple holding hands during a ceremony; zoom the handhold and bridal bangles.",
  width: 1600,
  height: 1008,
  focus: { x: 0.39, y: 0.68 },
  zoom: 3.4,
  detailAlt: "Close-up of the couple's clasped hands and the bride's bangles",
  detailLine: "A gentle touch. A moment of reassurance.",
  storyEyebrow: "The Big Day",
  storyTitle: "Everyone sees the wedding. We notice the moments between the rituals.",
  storyText:
    "The quiet gestures, brief expressions and unspoken emotions that make the story yours.",
};

const family: NoticingSlide = {
  id: "family-milestones",
  number: "02",
  image: familyPhoto,
  alt: "Three generations of a family laughing together in a garden",
  photoNote:
    "A genuine family gathering with different generations; crop a small affectionate gesture between family members.",
  width: 1408,
  height: 1008,
  focus: { x: 0.68, y: 0.58 },
  zoom: 2.6,
  detailAlt: "Close-up of a grandmother and granddaughter sharing a smile",
  detailLine: "A little gesture. A lifetime of belonging.",
  storyEyebrow: "Family Milestones",
  storyTitle: "Everyone sees the celebration. We notice the love between generations.",
  storyText:
    "A familiar touch, a shared smile and the small moments that make a family feel like home.",
};

const beforeForever: NoticingSlide = {
  id: "before-forever",
  number: "03",
  image: prePhoto,
  alt: "A couple embracing beside a lake at sunset during a pre-wedding shoot",
  photoNote: "A genuine pre-wedding or couple frame; crop the glance, smile, or natural handhold.",
  width: 1408,
  height: 1008,
  focus: { x: 0.56, y: 0.27 },
  zoom: 3,
  detailAlt: "Close-up of a quiet glance and soft smile between the couple",
  detailLine: "One quiet glance. A story of its own.",
  storyEyebrow: "Before Forever",
  storyTitle: "Everyone sees two people together. We notice the connection between them.",
  storyText:
    "The almost-smiles, quiet glances and natural moments that make your relationship uniquely yours.",
};

const professional: NoticingSlide = {
  id: "the-professional-frame",
  number: "04",
  image: corporatePhoto,
  alt: "A speaker addressing an audience at a corporate event",
  photoNote:
    "Genuine RAKZS corporate/event photo; crop an authentic audience response, applause, or moment of recognition.",
  width: 1408,
  height: 1008,
  focus: { x: 0.37, y: 0.4 },
  zoom: 2.8,
  detailAlt: "Close-up of the speaker's expressive hand gesture on stage",
  detailLine: "A brief reaction. A meaningful achievement.",
  storyEyebrow: "The Professional Frame",
  storyTitle: "Everyone sees the stage. We notice the people who give the moment meaning.",
  storyText:
    "The expressions, recognition and genuine connections that tell the story beyond the event programme.",
};

const brand: NoticingSlide = {
  id: "brand-in-focus",
  number: "05",
  image: productPhoto,
  alt: "A perfume bottle with gemstone earrings and a bangle on dark stone",
  photoNote:
    "Genuine RAKZS business/product shoot; crop a finish, material texture, craftsmanship, or meaningful detail from the SAME photograph.",
  width: 1408,
  height: 1008,
  focus: { x: 0.62, y: 0.7 },
  zoom: 3.4,
  detailAlt: "Close-up of the gemstone setting and metalwork on the bangle",
  detailLine: "A small detail. A great deal of care.",
  storyEyebrow: "Brand in Focus",
  storyTitle: "Everyone sees the finished work. We notice the care that goes into it.",
  storyText:
    "The details, decisions and effort behind the products and businesses people come to trust.",
};

/** Show the doc's "MAIN PHOTOGRAPH" line as a small caption under each photo (set false to hide). */
const SHOW_PHOTO_NOTES = true;

/** First 3 parent pages share one carousel, last 2 share the other. */
const GROUP_A: NoticingSlide[] = [wedding, family, beforeForever];
const GROUP_B: NoticingSlide[] = [professional, brand];

const SLIDES_BY_CATEGORY: Record<string, NoticingSlide[]> = {
  "wedding-engagement": GROUP_A,
  "family-function": GROUP_A,
  "pre-wedding-couple": GROUP_A,
  "corporate-business": GROUP_B,
  "commercial-creative": GROUP_B,
};

/** Each parent page opens on its own slide (doc: 01—05 Big Day … 05—05 Brand in Focus). */
const START_INDEX_BY_CATEGORY: Record<string, number> = {
  "wedding-engagement": 0, // 01 — 05
  "family-function": 1, // 02 — 05
  "pre-wedding-couple": 2, // 03 — 05
  "corporate-business": 0, // 04 — 05
  "commercial-creative": 1, // 05 — 05
};

function getNoticingSlides(categorySlug: string) {
  return SLIDES_BY_CATEGORY[categorySlug] ?? [];
}

function NoticingFrame({ slide }: { slide: NoticingSlide }) {
  const [active, setActive] = useState(false);
  const { focus, zoom } = slide;

  // Keep the detail window fully inside the photo.
  const half = 0.5 / zoom;
  const cx = Math.min(Math.max(focus.x, half), 1 - half);
  const cy = Math.min(Math.max(focus.y, half), 1 - half);

  // background-position that centres (cx, cy) in a `zoom`-times enlarged frame.
  const posX = ((cx - half) / (1 - 1 / zoom)) * 100;
  const posY = ((cy - half) / (1 - 1 / zoom)) * 100;

  const aspect = `${slide.width} / ${slide.height}`;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
      {/* Full photograph + focus marker */}
      <div>
        <div
          className="relative overflow-hidden rounded-lg border border-border shadow-cinematic"
          style={{ aspectRatio: aspect }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            aria-pressed={active}
            aria-label={`Reveal the detail: ${slide.detailLine}`}
            onClick={() => setActive((v) => !v)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            className={cn(
              "absolute rounded-sm border border-primary/80 outline-none transition-all duration-500 motion-reduce:transition-none",
              "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              active ? "bg-primary/10 shadow-[0_0_0_9999px_rgb(0_0_0/0.28)]" : "bg-transparent",
            )}
            style={{
              left: `${(cx - half) * 100}%`,
              top: `${(cy - half) * 100}%`,
              width: `${(1 / zoom) * 100}%`,
              height: `${(1 / zoom) * 100}%`,
            }}
          >
            <span
              className="absolute -right-1 -top-1 size-2.5 rounded-full bg-primary"
              aria-hidden
            />
          </button>
        </div>
        {SHOW_PHOTO_NOTES ? (
          <p className="mt-3 text-xs leading-6 text-muted-foreground">{slide.photoNote}</p>
        ) : null}
      </div>

      {/* Detail + story */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <figure>
          <div
            role="img"
            aria-label={slide.detailAlt}
            className={cn(
              "w-full overflow-hidden rounded-lg border bg-no-repeat transition-all duration-500 motion-reduce:transition-none",
              active ? "border-primary shadow-gold" : "border-border",
            )}
            style={{
              aspectRatio: aspect,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: `${zoom * 100}% ${zoom * 100}%`,
              backgroundPosition: `${posX}% ${posY}%`,
            }}
          />
          <figcaption className="mt-4">
            <p className="section-kicker">The Detail</p>
            <p className="mt-2 font-display text-xl text-foreground">{slide.detailLine}</p>
          </figcaption>
        </figure>

        <div>
          <p className="section-kicker">{slide.storyEyebrow}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-foreground">
            {slide.storyTitle}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{slide.storyText}</p>
        </div>
      </div>
    </div>
  );
}

function ArtOfNoticing({ categorySlug }: { categorySlug: string }) {
  const slides = getNoticingSlides(categorySlug);
  const startIndex = START_INDEX_BY_CATEGORY[categorySlug] ?? 0;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const goTo = useCallback((i: number) => api?.scrollTo(i), [api]);

  // Nothing genuine to show → hide the section.
  if (slides.length === 0) return null;

  return (
    <section className="section-band" aria-labelledby="art-of-noticing-heading">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Carousel
          setApi={setApi}
          opts={{ loop: slides.length > 1, startIndex }}
          aria-label="The Art of Noticing"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={slide.id}>
                {/* TOP LEFT / TOP RIGHT */}
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  <span>RAKZS Studio / The Art of Noticing</span>
                  <span aria-hidden>{slide.number} — 05</span>
                </div>

                {/* HEADING + SUBLINE */}
                <div className="mx-auto my-10 max-w-3xl text-center">
                  {index === 0 ? (
                    <h2
                      id="art-of-noticing-heading"
                      className="font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl"
                    >
                      Look a little closer.
                    </h2>
                  ) : (
                    <p
                      aria-hidden
                      className="font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl"
                    >
                      Look a little closer.
                    </p>
                  )}
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    Sometimes the smallest detail holds the deepest feeling.
                  </p>
                </div>

                {/* PHOTO + DETAIL + STORY */}
                <NoticingFrame slide={slide} />

                {/* BOTTOM SIGNATURE */}
                <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                  One photograph. A closer story.
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>

          {slides.length > 1 ? (
            <div className="mt-8 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous"
                className="flex size-10 items-center justify-center rounded-full border border-primary/55 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === current}
                    className={cn(
                      "h-1.5 rounded-full transition-all motion-reduce:transition-none",
                      i === current ? "w-8 bg-primary" : "w-3 bg-primary/30",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next"
                className="flex size-10 items-center justify-center rounded-full border border-primary/55 text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          ) : null}
        </Carousel>
      </div>
    </section>
  );
}
