import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { EventCard } from "@/components/rakzs/EventCard";
import { PageHero } from "@/components/rakzs/PageHero";
import { Button } from "@/components/ui/button";
import { getEventsByServiceCategory, getServiceCategoryBySlug } from "@/data/events";

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
        { title: `${category.label} — RAKZS STUDIO` },
        { name: "description", content: category.description },
        { property: "og:title", content: `${category.label} — RAKZS STUDIO` },
        { property: "og:description", content: category.description },
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

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title={category.label}
        description={category.description}
        image={category.image}
      />
      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categoryEvents.map((event, index) => (
              <div key={event.slug} className={index % 5 === 0 ? "lg:col-span-2" : ""}>
                <EventCard event={event} featured={index % 5 === 0} />
              </div>
            ))}
          </div>
          {categoryEvents.length === 0 ? (
            <p className="py-20 text-center text-muted-foreground">
              No illustrative stories in this category yet.
            </p>
          ) : null}
          <div className="mt-12 text-center">
            <Button asChild variant="outlineGold">
              <Link to="/events">
                <ArrowLeft className="size-4" /> Back to All Categories
              </Link>
            </Button>
          </div>
        </div>
      </section>
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
