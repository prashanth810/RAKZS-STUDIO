import { createFileRoute, Link } from "@tanstack/react-router";
import { Aperture, Clapperboard, Heart, Sparkles } from "lucide-react";
import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import preWeddingHero from "@/assets/rakzs-prewedding.jpg";
import familyHero from "@/assets/rakzs-family-maternity.jpg";
import editorialHero from "@/assets/rakzs-commercial-fashion.jpg";
import { PageHero } from "@/components/rakzs/PageHero";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About RAKZS STUDIO — Story, Craft & Philosophy" },
    { name: "description", content: "Meet the creative photography, videography, and editing practice behind RAKZS STUDIO." },
    { property: "og:title", content: "About RAKZS STUDIO" }, { property: "og:description", content: "Our story, visual philosophy, and approach to cinematic memories." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

const profiles = [
  { role: "Lead Photographer", name: "Editable Name", image: weddingHero, text: "Focused on emotion-led documentary frames and refined portrait direction." },
  { role: "Cinematographer", name: "Editable Name", image: preWeddingHero, text: "Shapes movement, atmosphere, and sound into cinematic visual stories." },
  { role: "Lead Editor", name: "Editable Name", image: editorialHero, text: "Brings rhythm, tonal consistency, and a timeless finish to each delivery." },
];
const reasons = [[Heart,"Emotion First"],[Aperture,"Intentional Light"],[Clapperboard,"One Creative Team"],[Sparkles,"Careful Finish"]] as const;

function AboutPage() { return <>
  <PageHero eyebrow="About the Studio" title="We preserve the feeling, not only the frame." description="A creative studio for people, celebrations, and brands that value honest emotion and considered craft." image={weddingHero} />
  <section className="section-band"><div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:px-8"><div className="reveal"><p className="section-kicker">Our Story</p><h2 className="mt-4 font-display text-5xl font-semibold">Built from a love of people, light, and lasting stories.</h2></div><div className="reveal space-y-6 text-base leading-8 text-muted-foreground"><p>RAKZS STUDIO is an editable studio concept created around one belief: meaningful imagery should feel true in the moment and timeless years later.</p><p>We bring photography, videography, photo editing, and video editing together under one visual direction, so every part of a story feels connected.</p></div></div></section>
  <section className="section-band bg-card"><div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3 lg:px-8">{[["Mission","To turn real emotion into photographs and films that remain vivid across generations."],["Vision","To create a studio known for warm, artful storytelling across celebrations, families, and brands."],["Philosophy","Observe patiently. Direct gently. Refine carefully. Never let polish erase personality."]].map(([title,text])=><div key={title} className="reveal border-t border-primary pt-6"><h2 className="font-display text-4xl">{title}</h2><p className="mt-4 leading-8 text-muted-foreground">{text}</p></div>)}</div></section>
  <section className="section-band"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader eyebrow="The People Behind the Lens" title="A small team with one visual language." description="Editable placeholder profiles ready for the studio’s real team details." /><div className="grid gap-6 md:grid-cols-3">{profiles.map(p=><article key={p.role} className="reveal overflow-hidden rounded-lg bg-card"><img src={p.image} alt={`${p.role} profile placeholder`} loading="lazy" width={1408} height={1008} className="h-96 w-full object-cover image-zoom"/><div className="p-6"><p className="section-kicker">{p.role}</p><h3 className="mt-3 font-display text-3xl">{p.name}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{p.text}</p></div></article>)}</div></div></section>
  <section className="section-band bg-card"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeader eyebrow="Why Choose Us" title="A calm, collaborative creative experience." /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{reasons.map(([Icon,title])=><div key={title} className="reveal rounded-lg border border-border bg-background p-8"><Icon className="size-7 text-primary"/><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Thoughtful planning, clear communication, and a finish shaped around your story.</p></div>)}</div></div></section>
  <section className="section-band"><div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8"><img src={familyHero} alt="Gentle family photography session" loading="lazy" width={1408} height={1008} className="reveal min-h-[28rem] w-full rounded-lg object-cover"/><div className="reveal"><p className="section-kicker">Create With Us</p><h2 className="mt-4 font-display text-5xl">Your story deserves an intentional frame.</h2><p className="mt-5 leading-8 text-muted-foreground">Share the occasion, place, mood, and memories you want to keep. We’ll shape the next step together.</p><Button asChild variant="gold" className="mt-8"><Link to="/contact" search={{event:undefined,service:undefined}}>Let&apos;s Talk</Link></Button></div></div></section>
</>; }
