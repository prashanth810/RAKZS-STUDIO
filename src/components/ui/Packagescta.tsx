import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PackagesCTA() {
  return (
    <section className="">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:py-16 lg:px-8">
        <div className="reveal max-w-2xl">
          <p className="section-kicker">Your Date. Your Story.</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Let&apos;s Capture It <span className="text-primary">Beautifully.</span>
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            Tell us what you&apos;re planning, and we&apos;ll help you find the right coverage for
            your occasion.
          </p>
        </div>

        <Button asChild variant="gold" className="reveal shrink-0">
          <Link to="/contact" search={{ service: undefined, event: undefined }}>
            Check Your Date
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}