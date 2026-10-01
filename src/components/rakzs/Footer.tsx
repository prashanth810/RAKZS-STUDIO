import { Link, useRouterState } from "@tanstack/react-router";
import { Camera, Facebook, Instagram, Mail, MapPin, Phone, PinIcon, Youtube } from "lucide-react";
import { studioContact } from "@/data/site";
import GMB_QR from "../../data/GMB_QR.png";
import RAKZS_Logo from "../../assets/RAKZS_Logo.png";
import { cn } from "@/lib/utils";
import { useState } from "react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

const serviceLinks = [
  "Wedding & Engagement",
  "Pre-Wedding / Couple",
  "Family Function",
  "Corporate / Business",
  "Commercial / Creative",
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/rakzsstudio" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@rakzsstudio" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com/rakzsstudio" },
  { label: "Pinterest", icon: PinIcon, href: "https://pinterest.com/rakzsstudio" },
];

export function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const overHomeVideo = pathname === "/" && !scrolled && !open;

  return (
    <footer className="relative overflow-hidden border-t border-border bg-card text-card-foreground">
      <div className="mountain-silhouette pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={RAKZS_Logo}
              alt="RAKZS STUDIO"
              width={56}
              height={56}
              className="size-12 rounded bg-white object-cover shadow-gold ring-2 ring-primary/50 transition-transform duration-300 group-hover:scale-105 sm:size-14"
            />
            <span className="hidden leading-none lg:block">
              <span
                className={cn(
                  "block font-display text-xl font-semibold tracking-wide",
                  overHomeVideo ? "text-on-media" : "text-foreground",
                )}
              >
                RAKZS STUDIO
              </span>
              <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.32em] text-primary">
                Cinema & Still Life
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            Luxury photography, videography, and editing for celebrations, families, brands, and
            stories that deserve a cinematic memory.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid size-11 place-items-center rounded-full border border-border bg-secondary text-primary transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label={`Visit RAKZS STUDIO on ${label}`}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-foreground">Quick Links</h3>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-foreground">Services</h3>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link
                  to="/contact"
                  search={{ service, event: undefined }}
                  className="transition-colors hover:text-primary"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-foreground">Contact Details</h3>
          <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
            <span className="flex gap-3">
              <Phone className="mt-1 size-4 text-primary" />
              {studioContact.phone}, {studioContact.whatsappPhone}
            </span>
            <span className="flex gap-3">
              <Mail className="mt-1 size-4 text-primary" />
              {studioContact.email}
            </span>
            <span className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-primary" />
              <span className="min-w-0 leading-6">{studioContact.location}</span>
            </span>
          </div>
          <div className="mt-3">
            <img src={GMB_QR} className="w-20 h-20 rounded" />
          </div>
        </div>
      </div>
      <div className="relative border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RAKZS STUDIO. Editable static website draft.
      </div>
    </footer>
  );
}
