import { createFileRoute } from "@tanstack/react-router";

import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import { PackageBuilder } from "@/components/ui/Packagebuilder";
import { PricingTiers } from "@/components/ui/Pricingtiers";
import { PageHero } from "@/components/rakzs/PageHero";
import { PackagesCTA } from "@/components/ui/Packagescta";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — RAKZS STUDIO" },
      {
        name: "description",
        content:
          "Explore fixed photography packages or build your own custom coverage — team, drone, LED screen, live streaming and albums — and send your enquiry directly on WhatsApp.",
      },
      { property: "og:title", content: "Packages & Pricing — RAKZS STUDIO" },
      {
        property: "og:description",
        content:
          "Fixed packages and a fully custom coverage builder for your photography and film needs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PackagesPage,
});

function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Coverage built around your story, priced with clarity."
        description="Choose a ready-made package, or build your own team, add-ons, and coverage — then send it straight to us on WhatsApp."
        image={weddingHero}
      />
      <PricingTiers />
      <PackageBuilder />
      <PackagesCTA />
    </>
  );
}
