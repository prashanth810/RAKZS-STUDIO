import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Aperture, Clapperboard, Images, Sparkles } from "lucide-react";

import heroBannerVideo from "@/data/herobannervideo.mp4";
import preWeddingHero from "@/assets/rakzs-prewedding.jpg";
import familyHero from "@/assets/rakzs-family-maternity.jpg";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/rakzs/EventCard";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { VideoModal } from "@/components/rakzs/VideoModal";
import { events, getEventsByServiceCategory, serviceCategories } from "@/data/events";
import { services } from "@/data/site";
import { CategoryCard } from "@/components/ui/Categorycard";
import { ProcessTimeline } from "@/data/Subpagetemplate";
import enquireImg from "@/assets/enquire.png";
import planImg from "@/assets/plan.png";
import captureImg from "@/assets/capture.png";
import refineDeliverImg from "@/assets/refine_deliver.png";

const heroSlides = [
  {
    eyebrow: "Photography",
    title: (
      <>
        Every Moment
        <br />
        Has a Story.
      </>
    ),
    description:
      "Editorial photographs shaped around honest emotion, considered light, and memories that last.",
  },
  {
    eyebrow: "Photography · Film · Post-Production",
    title: (
      <>
        Stories in
        <br />
        Motion.
      </>
    ),
    description:
      "Cinematic films that bring the atmosphere, movement, and feeling of your celebration to life.",
  },
  {
    eyebrow: "Editing",
    title: (
      <>
        The Final Frame
        <br />
        Feels Like You.
      </>
    ),
    description:
      "Thoughtful retouching, grading, and finishing that gives every image and film a distinctive point of view.",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wedding & Event Photography in Hyderabad | RAKZS Studio" },
      {
        name: "description",
        content:
          "RAKZS Studio offers wedding photography, cinematic wedding films, pre-wedding shoots, family celebrations and business photography in Hyderabad, Telangana.",
      },
      { property: "og:title", content: "Wedding & Event Photography in Hyderabad | RAKZS Studio" },
      {
        property: "og:description",
        content:
          "Wedding photography, cinematic films, pre-wedding shoots, family celebrations and business photography in Hyderabad, Telangana.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const homeProcess = {
  kicker: "Our Process",
  title: "From the first conversation\nto the memories you keep.",
  steps: [
    { title: "Enquire", text: "Tell us about your event, date and requirements." },
    { title: "Plan", text: "We discuss your ideas and plan the coverage." },
    { title: "Capture", text: "We photograph and film the moments that matter." },
    { title: "Refine", text: "We carefully select and edit your photographs and films." },
    { title: "Deliver", text: "Your memories are prepared in the agreed formats." },
  ],
};

// one image per step (same illustrations used on the event pages)
const homeProcessImages = [enquireImg, planImg, captureImg, refineDeliverImg, refineDeliverImg];

/** Home-page service cards (approved copy). Images/links come from serviceCategories by slug. */
const serviceCards: Record<
  string,
  { eyebrow: string; title: string; description: string; cta: string }
> = {
  "wedding-engagement": {
    eyebrow: "The Big Day",
    title: "Weddings & Engagements",
    description:
      "From meaningful rituals to joyful celebrations, we capture the people and emotions that make your wedding unforgettable.",
    cta: "Explore Weddings",
  },
  "pre-wedding-couple": {
    eyebrow: "Before Forever",
    title: "Pre-Wedding & Couples",
    description:
      "Before the wedding celebrations begin, create photographs and films that tell the story of just the two of you.",
    cta: "Explore Shoots",
  },
  "family-function": {
    eyebrow: "Family Milestones",
    title: "Family Celebrations",
    description:
      "From birthdays to meaningful traditions, we preserve the moments your family will love looking back on.",
    cta: "Explore Celebrations",
  },
  "corporate-business": {
    eyebrow: "The Professional Frame",
    title: "Corporate & Business Events",
    description:
      "Professional photography and films for the people, achievements and events that represent your organisation.",
    cta: "Explore Events",
  },
  "commercial-creative": {
    eyebrow: "Brand in Focus",
    title: "Brand & Creative",
    description:
      "Thoughtful photography and films that help people discover your products, services and business.",
    cta: "Explore Brand Work",
  },
};

/**
 * Client stories: add ONLY real, approved testimonials here.
 * While this list is empty the "Client Stories" section stays hidden (no invented quotes).
 */
const clientStories: { name: string; role: string; quote: string }[] = [];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide] ?? heroSlides[0];

  const goToSlide = (index: number) => {
    const total = heroSlides.length;
    setActiveSlide(((index % total) + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-end overflow-hidden pt-24">
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          preload="auto"
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={heroBannerVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:pb-24 lg:px-8">
          <div
            key={activeSlide}
            className="max-w-3xl animate-hero-in transition-opacity duration-700 ease-out"
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
              {slide.eyebrow}
            </p>
            <h1 className="mt-5 font-display text-6xl font-semibold leading-[0.95] text-on-media md:text-8xl">
              {slide.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-on-media-muted md:text-lg">
              {slide.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <Link to="/events">
                  Explore Our Work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outlineGold" size="lg">
                <Link to="/contact" search={{ event: undefined, service: undefined }}>
                  Let&apos;s Create Together
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-7 right-5 z-20 flex items-center gap-2 md:right-8"
          aria-label="Hero carousel controls"
        >
          <Button
            variant="ghostGold"
            size="icon"
            onClick={() => goToSlide(activeSlide - 1)}
            aria-label="Previous hero slide"
          >
            <ArrowLeft className="size-5" />
          </Button>
          <div className="flex items-center gap-2 px-1" role="tablist" aria-label="Hero slides">
            {heroSlides.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                role="tab"
                aria-selected={activeSlide === index}
                aria-label={`Show ${item.eyebrow} slide`}
                onClick={() => goToSlide(index)}
                className={`size-2.5 rounded-full border transition-all ${activeSlide === index ? "scale-125 border-primary bg-primary" : "border-on-media/70 bg-transparent"}`}
              />
            ))}
          </div>
          <Button
            variant="ghostGold"
            size="icon"
            onClick={() => goToSlide(activeSlide + 1)}
            aria-label="Next hero slide"
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </section>

      <section className="section-band">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="reveal relative min-h-[34rem] overflow-hidden rounded-lg">
            <img
              src={preWeddingHero}
              alt="Couple photographed at golden hour"
              loading="lazy"
              width={1408}
              height={1008}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="section-kicker">Inside RAKZS Studio</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
              Stories remembered by how they felt.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              The best photographs bring back more than a moment. They remind you of the people,
              laughter and emotions that made it special.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              At RAKZS Studio, we create photography and cinematic films for weddings, family
              celebrations and businesses, with care for every story we capture.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-7 text-sm text-muted-foreground">
              <span>
                <strong className="block font-display text-3xl text-primary">Still</strong>
                Photography
              </span>
              <span>
                <strong className="block font-display text-3xl text-primary">Motion</strong>
                Cinematic films
              </span>
            </div>
            <Button asChild variant="outlineGold" className="mt-8">
              <Link to="/about">
                Meet the Studio <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-band bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Our Services"
            title="Every story deserves its own way of being told."
            description="From weddings and family milestones to professional events and brands, we capture what makes each story meaningful."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
                content={serviceCards[category.slug]}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="gold">
              <Link to="/events">
                View All Services <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="What We Create" title="From first frame to final cut." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = [Aperture, Clapperboard, Images, Sparkles][index] ?? Aperture;
              return (
                <div
                  key={service.slug}
                  className="reveal rounded-lg border border-border bg-card p-7"
                >
                  <Icon className="size-7 text-primary" />
                  <h3 className="mt-8 font-display text-3xl">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    to="/contact"
                    search={{ service: service.title, event: undefined }}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Enquire <ArrowRight className="size-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      <ProcessTimeline process={homeProcess} images={homeProcessImages} />
      <VideoModal />

      {clientStories.length > 0 ? (
        <section className="section-band">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader
              eyebrow="Client Stories"
              title="The memories are theirs. The words should be too."
              description="Real experiences, shared by the people whose stories we've captured."
            />
            <div className="grid gap-5 md:grid-cols-3">
              {clientStories.map((item) => (
                <blockquote key={item.name} className="reveal border-l border-primary bg-card p-7">
                  <p className="font-display text-2xl leading-relaxed text-foreground">
                    “{item.quote}”
                  </p>
                  <footer className="mt-7 text-sm text-primary">
                    {item.name}
                    <span className="mt-1 block text-muted-foreground">{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Parallax: image stays fixed to the viewport, content scrolls over it (clip-path keeps it inside this section on every device, incl. iOS) */}
      <section
        className="relative overflow-hidden bg-card py-24 md:py-32"
        style={{ clipPath: "inset(0)" }}
      >
        <img
          src={familyHero}
          alt="Family portrait photographed by RAKZS Studio"
          loading="lazy"
          width={1408}
          height={1008}
          className="fixed inset-0 h-screen w-full object-cover opacity-25 will-change-transform"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
            Begin Your Story
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold text-on-media md:text-7xl">
            Let&apos;s create something worth remembering.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-on-media-muted md:text-lg">
            Whether it&apos;s your wedding, a family celebration or a business project, we&apos;d
            love to hear what you&apos;re planning.
          </p>
          <Button asChild variant="gold" size="lg" className="mt-8">
            <Link to="/contact" search={{ event: undefined, service: undefined }}>
              Start an Enquiry <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}