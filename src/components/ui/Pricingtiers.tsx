import { ArrowRight, Check, FileCheck2, Info, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { cn } from "@/lib/utils";
import { pricingTiers, type PricingTier } from "@/data/Packages";
import { studioContact } from "@/data/site";

// Package enquiry message — identifies the selected package. Prices are indicative and
// coverage items are options, so nothing is described as guaranteed or confirmed.
function buildPackageMessage(tier: PricingTier) {
  const lines: string[] = [];

  lines.push("Hello RAKZS Studio,");
  lines.push("");
  lines.push(`I'm interested in the *${tier.name}* package (${tier.category.toLowerCase()}).`);
  lines.push(`Indicative price range: ${tier.price}`);
  lines.push("");
  lines.push("Coverage options I'd like to discuss:");
  tier.features.forEach((feature) => lines.push(`- ${feature}`));
  lines.push("");
  lines.push(
    "Please share your availability and a personalized quotation based on my event details.",
  );
  lines.push("");
  lines.push("Thank you.");

  return lines.join("\n");
}

function openWhatsApp(tier: PricingTier) {
  const number = studioContact.whatsappPhone.replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(buildPackageMessage(tier))}`;
  window.open(url, "_blank");
}

export function PricingTiers() {
  return (
    <section className="section-band">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-5 lg:px-8">
        <SectionHeader
          eyebrow="Ready-Made Packages"
          title="Thoughtful coverage for every celebration."
          description="Explore our packages or create coverage that suits your event."
        />

        <div className="grid gap-5 md:grid-cols-3 md:gap-7">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "reveal relative flex flex-col rounded-lg border bg-card p-5 shadow-cinematic md:p-6 xl:p-8",
                tier.highlighted ? "border-primary shadow-gold md:-translate-y-3" : "border-border",
              )}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                  Recommended
                </span>
              ) : null}

              <p className="inline-flex w-fit rounded-full bg-[#F3E0C2] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#8A5A20]">
                {tier.category}
              </p>
              <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-foreground">
                {tier.name}
              </h3>
              <div className="mt-2">
                <span className="block whitespace-nowrap font-mono text-xl font-medium tracking-tight text-foreground md:text-lg lg:text-xl xl:text-3xl">
                  {tier.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{tier.description}</p>

              <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Coverage options
              </p>
              <ul className="mt-3 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-r-md border-l-2 border-primary bg-secondary/70 px-3 py-2.5 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">Suitable for: </span>
                {tier.suitableFor}
              </p>

              <Button
                variant={tier.highlighted ? "gold" : "outlineGold"}
                className="mt-8 w-full"
                onClick={() => openWhatsApp(tier)}
              >
                Enquire Now
                <ArrowRight className="size-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Pricing note — directly below the package cards */}
        <div className="reveal relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-xl border border-primary/50 bg-gradient-to-br from-primary/15 via-card to-primary/5 shadow-gold">
          <span className="absolute inset-y-0 left-0 w-1.5 bg-primary" aria-hidden="true" />

          <div className="flex flex-col gap-6 p-6 pl-8 md:p-8 md:pl-10">
            <div className="flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-gold">
                <Info className="size-5" />
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary">
                  <Sparkles className="size-3.5" />
                  Good to know
                </p>
                <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                  Important Pricing Note
                </h3>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:gap-8">
              <div className="flex items-start gap-3">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-primary/40 bg-background text-primary">
                  <Info className="size-4" />
                </span>
                <p className="text-sm leading-7 text-foreground/85">
                  <span className="font-semibold text-foreground">
                    Package prices are indicative, not fixed.
                  </span>{" "}
                  Final pricing depends on the event type, dates, location, duration, selected
                  services and agreed deliverables.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-primary/40 bg-background text-primary">
                  <FileCheck2 className="size-4" />
                </span>
                <p className="text-sm leading-7 text-foreground/85">
                  <span className="font-semibold text-foreground">
                    Coverage items are available options.
                  </span>{" "}
                  Exact inclusions will be confirmed in your personalized quotation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}