import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import corporateHero from "@/assets/rakzs-corporate.jpg";
import { PageHero } from "@/components/rakzs/PageHero";
import { Button } from "@/components/ui/button";
import { studioContact } from "@/data/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — RAKZS STUDIO" },
      { name: "description", content: "How RAKZS STUDIO handles enquiry details, image usage, cookies, and client privacy." },
      { property: "og:title", content: "Privacy Policy — RAKZS STUDIO" },
      { property: "og:description", content: "Our approach to enquiry information, image rights, and client confidentiality." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  {
    title: "Information We Collect",
    body: "The enquiry form asks for your name, email, phone number, event type, date, location, required services, budget range, preferred contact method, and any additional requirements you choose to share.",
  },
  {
    title: "How Enquiry Details Are Used",
    body: "Enquiry details are used only to understand your request, prepare a suitable creative plan, and contact you manually about availability, coverage, and a custom quote.",
  },
  {
    title: "Enquiry Delivery",
    body: "When you submit the enquiry form, the details you provide are securely emailed to the studio so we can respond. The website does not create a client account or store your enquiry in a website database.",
  },
  {
    title: "Image Rights & Portfolio Use",
    body: "All photographs and films shown here are illustrative samples. Client images are never published without permission, and portfolio usage is always agreed in writing before a shoot.",
  },
  {
    title: "Cookies & Analytics",
    body: "No tracking cookies or third-party analytics are used in this static presentation. Your selected light or dark theme is stored locally in your own browser for convenience.",
  },
  {
    title: "Data Retention",
    body: "Once you contact the studio directly, correspondence and project files are retained only for as long as required to plan, deliver, and archive your commission.",
  },
  {
    title: "Your Choices",
    body: "You may ask the studio at any time to correct your details, withdraw your enquiry, or remove your images from portfolio use. Requests are honoured promptly.",
  },
  {
    title: "Contact",
    body: `For any privacy question, write to ${studioContact.email} or call ${studioContact.phone}.`,
  },
];

function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Your trust, handled with care."
        description="A plain-language summary of how enquiry details, images, and client information are treated by RAKZS STUDIO."
        image={corporateHero}
      />

      <section className="section-band">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="text-sm uppercase tracking-[0.22em] text-primary">Last updated: 2026</p>
          <div className="mt-10 grid gap-4">
            {sections.map((section, index) => (
              <article key={section.title} className="reveal rounded-lg border border-border bg-card p-7 shadow-cinematic">
                <span className="font-display text-2xl text-primary">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-3 font-display text-3xl font-semibold text-foreground">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground">{section.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild variant="gold">
              <Link to="/contact" search={{ event: undefined, service: undefined }}>
                Start an Enquiry <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outlineGold">
              <Link to="/faq">Read the FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
