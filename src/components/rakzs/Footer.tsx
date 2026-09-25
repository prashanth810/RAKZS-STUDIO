import { Link } from "@tanstack/react-router";
import { Camera, Facebook, Instagram, Mail, MapPin, Phone, PinIcon, Youtube } from "lucide-react";

import { studioContact } from "@/data/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

const serviceLinks = ["Photography", "Videography", "Photo Editing", "Video Editing"];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: "https://instagram.com/rakzsstudio" },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@rakzsstudio" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com/rakzsstudio" },
  { label: "Pinterest", icon: PinIcon, href: "https://pinterest.com/rakzsstudio" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card text-card-foreground">
      <div className="mountain-silhouette pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-full border border-primary/45 bg-secondary text-primary shadow-gold">
              <Camera className="size-5" />
            </span>
            <span>
              <span className="block font-display text-2xl font-semibold text-foreground">
                RAKZS STUDIO
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.28em] text-primary">
                Your Story | Our Lens | A Brighter Tomorrow
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
              {studioContact.phone}
            </span>
            <span className="flex gap-3">
              <Mail className="mt-1 size-4 text-primary" />
              {studioContact.email}
            </span>
            <span className="flex gap-3">
              <MapPin className="mt-1 size-4 text-primary" />
              {studioContact.location}
            </span>
          </div>
          <div className="mt-6 max-w-32">
            <div className="aspect-square rounded-md border border-border bg-secondary p-3 text-center text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Instagram QR
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RAKZS STUDIO. Editable static website draft.
      </div>
    </footer>
  );
}
