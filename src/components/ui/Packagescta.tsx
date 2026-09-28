import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PackagesCTA() {
  return (
    <section className="">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:py-16 lg:px-8">
        <h2 className="reveal font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
          Your Date. Your Story.
          <br />
          <span className="text-primary">Let&apos;s Make It Unforgettable.</span>
        </h2>

        <Button asChild variant="gold" className="reveal shrink-0">
          <Link to="/contact" search={{ service: undefined, event: undefined }}>
            Check Availability
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
