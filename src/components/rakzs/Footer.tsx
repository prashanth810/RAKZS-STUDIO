import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, PinIcon, Youtube } from "lucide-react";
import { studioContact } from "@/data/site";
import GMB_QR from "../../data/GMB_QR.png";
import RAKZS_Logo from "../../assets/Brand_logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/events" },
  { label: "Packages", to: "/packages" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Privacy Policy", to: "/privacy-policy" },
] as const;

// label = text shown in the footer, value = service name the contact form understands
const serviceLinks = [
  { label: "Weddings & Engagements", value: "Wedding & Engagement" },
  { label: "Pre-Wedding & Couples", value: "Pre-Wedding & Couple" },
  { label: "Family Celebrations", value: "Family Function" },
  { label: "Corporate & Business Events", value: "Corporate & Business" },
  { label: "Brand & Creative", value: "Commercial & Creative" },
];

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: studioContact.instagram },
  { label: "YouTube", icon: Youtube, href: "https://youtube.com/@rakzsstudio" },
  { label: "Facebook", icon: Facebook, href: "https://facebook.com/rakzsstudio" },
  { label: "Pinterest", icon: PinIcon, href: "https://pinterest.com/rakzsstudio" },
];

const toTel = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card text-card-foreground">
      <div className="mountain-silhouette pointer-events-none absolute inset-x-0 bottom-0 h-56 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <Link to="/" className="group flex items-center gap-3">
            <img
              src={RAKZS_Logo}
              alt="RAKZS STUDIO"
              width={60}
              height={60}
              className="size-12 rounded object-cover shadow-gold ring-2 ring-primary/50 transition-transform duration-300 sm:size-16"
            />
            <span className="hidden leading-none lg:block">
              <span className="block font-display text-xl font-semibold tracking-wide text-foreground">
                RAKZS STUDIO
              </span>
              <span className="mt-1.5 block text-[0.62rem] uppercase tracking-[0.32em] text-primary">
                We Capture Memories
              </span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            Photography and cinematic films for weddings, family celebrations and businesses in
            Hyderabad and Telangana.
          </p>
          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
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
          <h3 className="font-display text-lg text-foreground">Our Services</h3>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            {serviceLinks.map(({ label, value }) => (
              <li key={label}>
                <Link
                  to="/contact"
                  search={{ service: value, event: undefined }}
                  className="transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-foreground">Contact Details</h3>
          <div className="mt-5 grid gap-4 text-sm text-muted-foreground">
            <span className="flex gap-3">
              <Phone className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="grid gap-1">
                {studioContact.phones.map((phone) => (
                  <a
                    key={phone}
                    href={toTel(phone)}
                    className="transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </span>
            </span>

            <span className="flex gap-3">
              <Mail className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`mailto:${studioContact.email}`}
                className="min-w-0 break-all transition-colors hover:text-primary"
              >
                {studioContact.email}
              </a>
            </span>

            <span className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={studioContact.gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 leading-6 transition-colors hover:text-primary"
              >
                {studioContact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </a>
            </span>
          </div>

          <a
            href={studioContact.gmbUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open RAKZS Studio on Google Maps"
            className="mt-3 inline-block"
          >
            <img
              src={GMB_QR}
              alt="Scan to find RAKZS Studio on Google Maps"
              className="h-[9rem] w-[9rem] rounded"
            />
          </a>
        </div>
      </div>
      <div className="relative border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RAKZS Studio. All rights reserved.
      </div>
    </footer>
  );
}