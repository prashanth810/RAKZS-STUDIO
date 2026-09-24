import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

import familyHero from "@/assets/rakzs-family-maternity.jpg";
import { ContactForm } from "@/components/rakzs/ContactForm";
import { PageHero } from "@/components/rakzs/PageHero";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { studioContact } from "@/data/site";

type ContactSearch = { service: string | undefined; event: string | undefined };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search["service"] === "string" ? (search["service"] as string) : undefined,
    event: typeof search["event"] === "string" ? (search["event"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact & Enquiry — RAKZS STUDIO" },
      {
        name: "description",
        content:
          "Share your date, location, and required photography, videography, or editing services to start an enquiry with RAKZS STUDIO.",
      },
      { property: "og:title", content: "Contact RAKZS STUDIO" },
      {
        property: "og:description",
        content: "Begin your enquiry for cinematic photography, films, and premium editing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  {
    icon: Phone,
    label: "Phone",
    value: studioContact.phone,
    href: `tel:${studioContact.phone.replace(/\s/g, "")}`,
  },
  { icon: Mail, label: "Email", value: studioContact.email, href: `mailto:${studioContact.email}` },
  { icon: Instagram, label: "Instagram", value: studioContact.instagram },
];

function ContactPage() {
  const { service, event } = Route.useSearch();

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us the story you want remembered."
        description="Share your date, location, and the coverage you have in mind. We reply personally and plan every shoot by conversation."
        image={familyHero}
      />

      <section className="section-band">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="Start an Enquiry"
            title="Every commission begins with a conversation."
            description="Send your details to the studio, and we’ll contact you personally to discuss availability, coverage, and your custom quote."
          />
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ContactForm prefillEvent={event} prefillService={service} />

            <aside className="reveal grid content-start gap-4">
              <div className="overflow-hidden rounded-lg border border-primary/40 bg-secondary">
                <div className="p-6">
                  <MapPin className="size-6 text-primary" />
                  <p className="section-kicker">Studio Location</p>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {studioContact.location}
                  </p>
                </div>
                <iframe
                  title="RAKZS STUDIO office at Cyber Towers"
                  src={studioContact.maps}
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              {details.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-card p-6 shadow-cinematic"
                >
                  <item.icon className="size-6 text-primary" />
                  <p className="mt-4 text-xs uppercase tracking-[0.22em] text-primary">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block font-display text-2xl text-foreground hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base leading-7 text-muted-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
