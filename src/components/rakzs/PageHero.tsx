type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative mt-20 min-h-[calc(100vh-5rem)] overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover"
        width={1600}
        height={1000}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 pb-16 pt-12 lg:px-8">
        <div className="max-w-3xl animate-hero-in">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-on-media-accent">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-tight text-on-media md:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-on-media-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
