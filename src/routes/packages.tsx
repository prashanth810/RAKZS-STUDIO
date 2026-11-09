import { createFileRoute } from "@tanstack/react-router";

import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import { PackageBuilder } from "@/components/ui/Packagebuilder";
import { PricingTiers } from "@/components/ui/Pricingtiers";
import { PageHero } from "@/components/rakzs/PageHero";
import { PackagesCTA } from "@/components/ui/Packagescta";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Wedding Photography Packages in Hyderabad | RAKZS Studio" },
      {
        name: "description",
        content:
          "Explore wedding and event photography packages in Hyderabad by RAKZS Studio. Compare coverage options or build your own photography and video package.",
      },
      {
        property: "og:title",
        content: "Wedding Photography Packages in Hyderabad | RAKZS Studio",
      },
      {
        property: "og:description",
        content:
          "Explore wedding and event photography packages in Hyderabad by RAKZS Studio. Compare coverage options or build your own photography and video package.",
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
        eyebrow="Photography & Film Packages"
        title="Your Story. Your Coverage. Your Choice."
        description="Choose a package or build your own coverage. Share your requirements with us directly on WhatsApp."
        image={weddingHero}
      />
      <PricingTiers />
      <PackageBuilder />
      <PackagesCTA />
    </>
  );
}