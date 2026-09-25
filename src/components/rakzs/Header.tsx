import { Link, useRouterState } from "@tanstack/react-router";
import { Camera, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/rakzs/ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

function isActive(pathname: string, to: string) {
  if (to === "/") return pathname === "/";
  return pathname === to || pathname.startsWith(`${to}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const overHomeVideo = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        overHomeVideo
          ? "bg-transparent text-on-media"
          : "bg-background/90 text-foreground shadow-cinematic backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid size-11 place-items-center rounded-full border border-primary/45 bg-secondary text-primary shadow-gold">
            <Camera className="size-5" />
          </span>
          <span className="hidden leading-none lg:block">
            <span
              className={cn(
                "block font-display text-xl font-semibold tracking-normal",
                overHomeVideo ? "text-on-media" : "text-foreground",
              )}
            >
              RAKZS STUDIO
            </span>
            <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.32em] text-primary">
              Cinema & Still Life
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "nav-underline text-sm font-medium transition-colors",
                overHomeVideo
                  ? "text-on-media-muted hover:text-on-media"
                  : "text-muted-foreground hover:text-foreground",
                isActive(pathname, item.to) &&
                  (overHomeVideo ? "is-active text-on-media" : "is-active text-foreground"),
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle
            className={overHomeVideo ? "text-on-media-accent hover:text-on-media" : undefined}
          />
          <Button asChild variant="gold" size="lg">
            <Link to="/contact" search={{ service: undefined, event: undefined }}>
              Let&apos;s Talk
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle
            className={cn(
              "size-11",
              overHomeVideo ? "text-on-media hover:bg-white/10 hover:text-on-media" : undefined,
            )}
          />
          <Button
            variant="ghostGold"
            size="icon"
            className={cn(
              "size-11",
              overHomeVideo ? "text-on-media hover:bg-white/10 hover:text-on-media" : undefined,
            )}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "overflow-hidden border-0 bg-card transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                isActive(pathname, item.to) && "bg-secondary text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild variant="gold" className="mt-3 w-full">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              search={{ service: undefined, event: undefined }}
            >
              Let&apos;s Talk
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
