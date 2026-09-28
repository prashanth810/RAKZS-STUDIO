import { Film, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import golden_hour from "../../data/golden_hour.mp4";

export function VideoModal() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="section-band bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="reveal self-center">
          <p className="section-kicker">Cinematic Film Showcase</p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-6xl">
            Motion, music, and memory in one luminous frame.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            Preview an illustrative film treatment for wedding highlights, event stories, and
            refined brand edits.
          </p>
        </div>

        <div className="reveal relative aspect-video overflow-hidden rounded-lg border border-border bg-video-panel shadow-cinematic">
          <video
            ref={videoRef}
            src={golden_hour}
            className="size-full cursor-pointer object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          {!playing ? (
            <button
              type="button"
              onClick={togglePlay}
              aria-label="Play cinematic showcase"
              className="absolute inset-0 grid place-items-center bg-background/30"
            >
              <span className="grid size-20 place-items-center rounded-full border border-primary/50 bg-background/80 text-primary shadow-gold transition-transform duration-300 hover:scale-110">
                <Play className="ml-1 size-8" />
              </span>
            </button>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-6">
            <div>
              <Film className="mb-2 size-6 text-primary" />
              <p className="font-display text-2xl text-white">Golden Hour Wedding Film</p>
            </div>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? "Unmute video" : "Mute video"}
              className="pointer-events-auto grid size-10 place-items-center rounded-full border border-white/40 bg-black/40 text-white transition-colors hover:bg-primary"
            >
              {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
