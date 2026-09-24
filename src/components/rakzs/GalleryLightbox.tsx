import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function GalleryLightbox({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  const currentImage = active === null ? undefined : images[active];

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index === null ? index : (index + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((index) => (index === null ? index : (index - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, images.length]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-5">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            className={index === 0 ? "group overflow-hidden rounded-lg md:col-span-3 md:row-span-2" : "group overflow-hidden rounded-lg md:col-span-2"}
            onClick={() => setActive(index)}
            aria-label={`Open ${title} gallery image ${index + 1}`}
          >
            <img
              src={image}
              alt={`${title} gallery ${index + 1}`}
              loading="lazy"
              width={1400}
              height={1000}
              className={index === 0 ? "h-full min-h-96 w-full object-cover image-zoom" : "h-52 w-full object-cover image-zoom"}
            />
          </button>
        ))}
      </div>

      {currentImage ? (
        <div className="fixed inset-0 z-60 grid place-items-center bg-backdrop p-4 animate-fade-in" role="dialog" aria-modal="true">
          <Button variant="ghostGold" size="icon" className="absolute right-5 top-5" onClick={() => setActive(null)} aria-label="Close gallery">
            <X className="size-5" />
          </Button>
          <Button
            variant="ghostGold"
            size="icon"
            className="absolute left-5 top-1/2 -translate-y-1/2"
            onClick={() => setActive((index) => (index === null ? index : (index - 1 + images.length) % images.length))}
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <img src={currentImage} alt={`${title} enlarged gallery`} className="max-h-[84vh] max-w-[90vw] rounded-lg object-contain shadow-cinematic" />
          <Button
            variant="ghostGold"
            size="icon"
            className="absolute right-5 top-1/2 -translate-y-1/2"
            onClick={() => setActive((index) => (index === null ? index : (index + 1) % images.length))}
            aria-label="Next gallery image"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      ) : null}
    </>
  );
}
