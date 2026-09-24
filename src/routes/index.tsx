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
import { events } from "@/data/events";
import { services, testimonials } from "@/data/site";

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
      { title: "RAKZS STUDIO — Every Moment Has a Story" },
      {
        name: "description",
        content:
          "Luxury photography, videography, and editing for weddings, celebrations, families, and brands.",
      },
      { property: "og:title", content: "RAKZS STUDIO — Every Moment Has a Story" },
      {
        property: "og:description",
        content: "Cinematic photography and films shaped around emotion, atmosphere, and memory.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const process = [
  ["01", "Enquire", "Tell us the story, date, place, and services you have in mind."],
  ["02", "Plan", "We shape a thoughtful visual direction, timeline, and creative approach."],
  ["03", "Capture", "Our team follows real emotion while creating polished editorial frames."],
  ["04", "Refine", "Every photograph and film is carefully selected, edited, and graded."],
  ["05", "Deliver", "Your finished story arrives in formats prepared for keepsakes and sharing."],
];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

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
      <section className="relative flex min-h-[96vh] items-end overflow-hidden pt-24">
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
            <p className="section-kicker">Inside RAKZS STUDIO</p>
            <h2 className="mt-4 font-display text-5xl font-semibold leading-tight md:text-6xl">
              Stories remembered by how they felt.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              We are a photography, videography, and editing studio drawn to honest expression,
              considered light, and imagery with lasting atmosphere. From intimate families to grand
              celebrations and refined brands, every commission begins by listening.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-7 text-sm text-muted-foreground">
              <span>
                <strong className="block font-display text-3xl text-primary">Still</strong>Editorial
                photographs
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
            eyebrow="Selected Stories"
            title="Moments with a life of their own."
            description="Illustrative portfolio stories spanning celebrations, families, and brand worlds."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.slice(0, 6).map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="gold">
              <Link to="/events">
                View All Events <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-band">
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
      </section>

      <section className="section-band bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="Made carefully, from conversation to delivery."
          />
          <div className="grid gap-8 md:grid-cols-5">
            {process.map(([number, title, text]) => (
              <div key={number} className="reveal border-t border-primary/45 pt-5">
                <span className="font-display text-3xl text-primary">{number}</span>
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <VideoModal />

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Client Notes"
            title="Kind words, thoughtfully shared."
            description="Editable sample testimonials for layout demonstration."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
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

      <section className="relative overflow-hidden bg-card py-24">
        <img
          src={familyHero}
          alt="Warm family portrait"
          loading="lazy"
          width={1408}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto max-w-4xl px-5 text-center">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
            Begin Your Story
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold text-on-media md:text-7xl">
            Let&apos;s create something worth remembering.
          </h2>
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
