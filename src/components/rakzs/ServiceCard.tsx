import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { services } from "@/data/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group reveal overflow-hidden rounded-lg border border-border bg-card shadow-cinematic">
      <div className="overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1400}
          height={1000}
          className="h-80 w-full object-cover image-zoom"
        />
      </div>
      <div className="p-7">
        <h3 className="font-display text-3xl font-semibold text-foreground">{service.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.description}</p>
        <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="gold" className="mt-7">
          <Link to="/contact" search={{ service: service.title, event: undefined }}>
            Enquire Now <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
