import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import brandingHero from "@/assets/rakzs-branding.jpg";
import { FAQAccordion } from "@/components/rakzs/FAQAccordion";
import { PageHero } from "@/components/rakzs/PageHero";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { Button } from "@/components/ui/button";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — RAKZS STUDIO" },
      { name: "description", content: "Answers about booking, coverage, editing requests, delivery timelines, and custom quotes at RAKZS STUDIO." },
      { property: "og:title", content: "FAQ — RAKZS STUDIO" },
      { property: "og:description", content: "How booking, planning, capture, editing, and delivery work at our studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Everything you may want to ask us."
        description="Booking, coverage, editing requests, delivery, and creative direction — explained simply before you enquire."
        image={brandingHero}
      />

      <section className="section-band">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeader eyebrow="Frequently Asked" title="Clear answers, no guesswork." />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section-band bg-card">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <p className="section-kicker">Still Wondering?</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-6xl">
            Ask us anything about your shoot.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Share your date and requirements, and we will reply with a considered plan and a custom quote.
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
