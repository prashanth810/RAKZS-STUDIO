import { createFileRoute } from "@tanstack/react-router";
import editorialHero from "@/assets/rakzs-commercial-fashion.jpg";
import { PageHero } from "@/components/rakzs/PageHero";
import { getEventsByServiceCategory, serviceCategories } from "@/data/events";
import { CategoryCard } from "@/components/ui/Categorycard";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events & Portfolio — RAKZS STUDIO" },
      {
        name: "description",
        content:
          "Explore wedding, family, corporate, product, fashion, and personal branding photography stories.",
      },
      { property: "og:title", content: "Events & Portfolio — RAKZS STUDIO" },
      {
        property: "og:description",
        content:
          "A cinematic portfolio of illustrative celebrations, portraits, and brand stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});
function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Stories in stillness, movement, and light."
        description="Explore illustrative sample stories across weddings, families, celebrations, and commercial work."
        image={editorialHero}
      />
      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <div key={category.slug} className={index % 5 === 0 ? "lg:col-span-2" : ""}>
                <CategoryCard
                  category={category}
                  count={getEventsByServiceCategory(category).length}
                  featured={index % 5 === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
