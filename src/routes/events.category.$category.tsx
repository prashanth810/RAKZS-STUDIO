import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { EventCard } from "@/components/rakzs/EventCard";
import { PageHero } from "@/components/rakzs/PageHero";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { Button } from "@/components/ui/button";
import { getEventsByServiceCategory, getServiceCategoryBySlug } from "@/data/events";
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
        { title: `${category.cardTitle} — RAKZS STUDIO` },
        { name: "description", content: category.heroDescription },
        { property: "og:title", content: `${category.cardTitle} — RAKZS STUDIO` },
        { property: "og:description", content: category.heroDescription },
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
  const categoryEvents = getEventsByServiceCategory(category);
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
              <Link to="/packages">
                {category.seo.cta} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </section>
      ) : null}

      {/* Sample stories */}
      {categoryEvents.length > 0 ? (
        <section className="section-band">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeader
              eyebrow="Portfolio"
              title="Stories from this collection."
              description="Stories from our collection."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryEvents.map((event, index) => (
                <div key={event.slug} className={index % 5 === 0 ? "lg:col-span-2" : ""}>
                  <EventCard event={event} featured={index % 5 === 0} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
