import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Clapperboard, Heart, Sparkles, Users } from "lucide-react";
import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import preWeddingHero from "@/assets/rakzs-prewedding.jpg";
import familyHero from "@/assets/rakzs-family-maternity.jpg";
import editorialHero from "@/assets/rakzs-commercial-fashion.jpg";
import { PageHero } from "@/components/rakzs/PageHero";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RAKZS Studio | Wedding Photographers in Hyderabad" },
      {
        name: "description",
        content:
          "Discover RAKZS Studio, a Hyderabad photography and videography studio capturing weddings, family celebrations and business stories through meaningful photography and cinematic films.",
      },
      { property: "og:title", content: "About RAKZS Studio | Wedding Photographers in Hyderabad" },
      {
        property: "og:description",
        content:
          "A Hyderabad photography and videography studio capturing weddings, family celebrations and business stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const craft = [
  {
    role: "Photography",
    image: weddingHero,
    alt: "Wedding photography by RAKZS Studio",
    title: "The moments you want to remember.",
    text: "From genuine emotions to carefully composed portraits, we capture the details that tell your story.",
  },
  {
    role: "Cinematography",
    image: preWeddingHero,
    alt: "Cinematic pre-wedding frame by RAKZS Studio",
    title: "The moments you want to experience again.",
    text: "Movement, expressions and atmosphere come together to bring your memories back to life.",
  },
  {
    role: "Editing & Finishing",
    image: editorialHero,
    alt: "Edited and finished photograph by RAKZS Studio",
    title: "The care that brings every frame together.",
    text: "Thoughtful selection, colour and editing help give photographs and films a consistent, natural finish.",
  },
];
const reasons = [
  [
    Users,
    "People First",
    "We listen to your story and understand the moments that matter most to you.",
  ],
  [
    Heart,
    "Natural Emotions",
    "We capture genuine expressions alongside thoughtfully composed photographs.",
  ],
  [
    Clapperboard,
    "Coverage Your Way",
    "We discuss photography and film options based on your occasion and requirements.",
  ],
  [
    Sparkles,
    "Careful Finishing",
    "We give attention to selecting and editing the photographs and films you receive.",
  ],
] as const;

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About RAKZS Studio"
        title="We preserve the feeling, not only the frame."
        description="Every celebration has its own people, emotions and moments worth remembering. We capture them through thoughtful photography and cinematic films, with care for what makes each story personal."
        image={weddingHero}
      />
      <section className="section-band">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <p className="section-kicker">Our Story</p>
            <h2 className="mt-4 font-display text-5xl font-semibold">
              Built around people, memories and the stories they share.
            </h2>
          </div>
          <div className="reveal space-y-6 text-base leading-8 text-muted-foreground">
            <p>
              RAKZS Studio began in 2023 with a simple belief: photographs should bring back more
              than how a moment looked. They should remind you how it felt.
            </p>
            <p>
              From weddings and family celebrations to professional events and businesses, we create
              photography and films with attention to the people and purpose behind each occasion.
            </p>
            <p>
              We begin by listening, understanding what matters and planning the coverage around
              your story.
            </p>
            <p>Because the most meaningful memories are the ones that still feel like yours.</p>
          </div>
        </div>
      </section>
      <section className="section-band bg-card">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="The Work Behind the Memories"
            title="A photograph captures a moment. Thoughtful work brings the story together."
            description="Every story involves more than pressing the shutter. It's understanding the occasion, noticing the moments that matter, capturing them with care and bringing everything together through editing."
          />
          <p className="reveal mx-auto -mt-6 mb-12 max-w-3xl text-center text-base leading-8 text-muted-foreground">
            At RAKZS Studio, photography, cinematography and post-production work toward one
            purpose: creating memories that feel personal and lasting.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {craft.map((p) => (
              <article key={p.role} className="reveal overflow-hidden rounded-lg bg-background">
                <img
                  src={p.image}
                  alt={p.alt}
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-96 w-full object-cover image-zoom"
                />
                <div className="p-6">
                  <p className="section-kicker">{p.role}</p>
                  <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Why RAKZS Studio"
            title="Beautiful photographs begin with understanding the people in them."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([Icon, title, text], index) => (
              <div key={title} className="reveal rounded-lg border border-border bg-card p-8">
                <Icon className="size-7 text-primary" />
                <p className="mt-6 font-display text-xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-band bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <img
            src={familyHero}
            alt="Family photographed by RAKZS Studio"
            loading="lazy"
            width={1408}
            height={1008}
            className="reveal min-h-[28rem] w-full rounded-lg object-cover"
          />
          <div className="reveal">
            <p className="section-kicker">Create With Us</p>
            <h2 className="mt-4 font-display text-5xl">
              Your story deserves to be remembered the way it felt.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              Tell us what you&apos;re planning, where it&apos;s happening and the moments you want
              to keep.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              We&apos;ll help you plan photography and films around what matters most.
            </p>
            <Button asChild variant="gold" className="mt-8">
              <Link to="/contact" search={{ event: undefined, service: undefined }}>
                Let&apos;s Talk <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
