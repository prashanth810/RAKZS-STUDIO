import { Film, Play, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function VideoModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="section-band bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="reveal self-center">
            <p className="section-kicker">Cinematic Film Showcase</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-6xl">
              Motion, music, and memory in one luminous frame.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Preview an illustrative film treatment for wedding highlights, event stories, and refined brand edits.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group reveal relative min-h-[30rem] overflow-hidden rounded-lg border border-border bg-video-panel text-left shadow-cinematic"
            aria-label="Play cinematic showcase"
          >
            <div className="absolute inset-0 bg-film-strip" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid size-24 place-items-center rounded-full border border-primary/50 bg-background/80 text-primary shadow-gold transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 size-9" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <Film className="mb-4 size-8 text-primary" />
              <p className="font-display text-3xl text-foreground">Golden Hour Wedding Film</p>
              <p className="mt-2 text-sm text-muted-foreground">Illustrative preview interaction</p>
            </div>
          </button>
        </div>
      </section>

      {open ? (
        <div className="fixed inset-0 z-60 grid place-items-center bg-backdrop p-4 animate-fade-in" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-4xl rounded-lg border border-border bg-card p-6 shadow-cinematic">
            <Button variant="ghostGold" size="icon" className="absolute right-4 top-4" onClick={() => setOpen(false)} aria-label="Close video preview">
              <X className="size-5" />
            </Button>
            <div className="aspect-video rounded-md border border-border bg-video-panel p-8">
              <div className="grid size-full place-items-center text-center">
                <div>
                  <Film className="mx-auto size-12 text-primary" />
                  <h3 className="mt-5 font-display text-3xl text-foreground">Sample Film Preview</h3>
                  <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-muted-foreground">
                    This static website uses a modal interaction placeholder instead of hosting a real video file.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
