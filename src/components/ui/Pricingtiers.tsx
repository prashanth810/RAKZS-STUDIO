import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { cn } from "@/lib/utils";
import { pricingTiers, type PricingTier } from "@/data/Packages";
import { studioContact } from "@/data/site";

// Emoji as unicode escapes so they never turn into "�".
const EMOJI = {
  camera: "\u{1F4F8}",
  sparkle: "\u2728",
  wave: "\u{1F44B}",
  money: "\u{1F4B0}",
  check: "\u2705",
  note: "\u{1F4DD}",
};

function buildPackageMessage(tier: PricingTier) {
  const lines: string[] = [];

  lines.push(`${EMOJI.camera} *RAKZS STUDIO — Package Enquiry* ${EMOJI.sparkle}`);
  lines.push("");
  lines.push(`${EMOJI.wave} Hi, I'm interested in the *${tier.name}* package.`);
  lines.push("");
  lines.push("----------------------------");
  lines.push("*PACKAGE DETAILS*");
  lines.push("----------------------------");
  lines.push(`Package: *${tier.name}*`);
  lines.push(`${EMOJI.money} Price: *${tier.price}*`);
  lines.push(tier.description);
  lines.push("");
  lines.push("*Includes:*");
  tier.features.forEach((feature) => lines.push(`${EMOJI.check} ${feature}`));
  if (tier.note) {
    lines.push("");
    lines.push(`${EMOJI.note} ${tier.note}`);
  }
  lines.push("");
  lines.push("Could you please confirm availability and share the next steps?");
  lines.push("");
  lines.push("Thank you!");

  return lines.join("\n");
}

function openWhatsApp(tier: PricingTier) {
  const number = studioContact.phone.replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(buildPackageMessage(tier))}`;
  window.open(url, "_blank");
}

export function PricingTiers() {
  return (
    <section className="section-band">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Fixed Packages"
          title="Straightforward pricing for every occasion."
          description="Pick a ready-made package, or scroll down to build your own coverage."
        />

        <div className="grid gap-7 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "reveal relative flex flex-col rounded-lg border bg-card p-8 shadow-cinematic",
                tier.highlighted ? "border-primary shadow-gold md:-translate-y-3" : "border-border",
              )}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                  Most Booked
                </span>
              ) : null}

              <p className="inline-flex w-fit rounded-full bg-[#F3E0C2] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#8A5A20]">
                {tier.name}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-3xl font-semibold text-foreground">
                  {tier.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{tier.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 rounded-r-md border-l-2 border-primary bg-secondary/70 px-3 py-2.5 text-sm leading-6 text-muted-foreground">
                {tier.note}
              </p>

              <Button
                variant={tier.highlighted ? "gold" : "outlineGold"}
                className="mt-8 w-full"
                onClick={() => openWhatsApp(tier)}
              >
                Enquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
