import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import preWeddingHero from "@/assets/rakzs-prewedding.jpg";
import familyHero from "@/assets/rakzs-family-maternity.jpg";
import editorialHero from "@/assets/rakzs-commercial-fashion.jpg";
import newbornHero from "@/assets/rakzs-newborn.jpg";
import birthdayHero from "@/assets/rakzs-birthday.jpg";
import corporateHero from "@/assets/rakzs-corporate.jpg";
import productHero from "@/assets/rakzs-product.jpg";
import familyPortrait from "@/assets/rakzs-family.jpg";
import brandingHero from "@/assets/rakzs-branding.jpg";

export type EventCategory =
  | "Weddings"
  | "Pre-Weddings"
  | "Maternity"
  | "Newborn"
  | "Birthdays"
  | "Family"
  | "Corporate"
  | "Products"
  | "Fashion"
  | "Events & Celebrations"
  | "Personal Branding";

export const eventCategories = [
  "All Events",
  "Weddings",
  "Pre-Weddings",
  "Maternity",
  "Newborn",
  "Birthdays",
  "Family",
  "Corporate",
  "Products",
  "Fashion",
  "Events & Celebrations",
  "Personal Branding",
] as const;

export type EventItem = {
  slug: string;
  title: string;
  category: EventCategory;
  location: string;
  year: string;
  summary: string;
  story: string;
  vision: string;
  approach: string;
  image: string;
  gallery: string[];
  accent: "wedding" | "prewedding" | "family" | "editorial";
  deliverables: string[];
  timeline: string[];
  equipment: { title: string; note: string }[];
};

const gallerySet = [weddingHero, preWeddingHero, familyHero, editorialHero, weddingHero];
const warmGallery = [preWeddingHero, weddingHero, familyHero, editorialHero, preWeddingHero];
const intimateGallery = [familyHero, weddingHero, preWeddingHero, editorialHero, familyHero];
const commercialGallery = [editorialHero, preWeddingHero, weddingHero, familyHero, editorialHero];

const sharedEquipment = [
  {
    title: "Full-frame camera bodies",
    note: "Illustrative examples for dependable detail, low-light confidence, and editorial clarity.",
  },
  {
    title: "Prime portrait lenses",
    note: "Used as a planning example for soft backgrounds, natural skin tones, and intimate framing.",
  },
  {
    title: "Cinematic lighting kit",
    note: "An illustrative setup for controlled highlights, warm separation, and graceful depth.",
  },
];

export const events: EventItem[] = [
  {
    slug: "traditional-indian-wedding",
    title: "Traditional Indian Wedding",
    category: "Weddings",
    location: "Jaipur, Rajasthan",
    year: "2026",
    summary: "A regal celebration shaped by rituals, family emotion, and golden mandap light.",
    story:
      "This illustrative sample story follows a wedding day from quiet preparation to the final celebration, focusing on rituals, family blessings, and emotional portraits.",
    vision:
      "The client vision is represented as timeless Indian grandeur: ornate details, warm candlelight, and portraits that feel cinematic without losing sincerity.",
    approach:
      "The creative approach blends documentary moments with directed editorial portraits, using warm contrast and soft motion to preserve the feeling of the day.",
    image: weddingHero,
    gallery: gallerySet,
    accent: "wedding",
    deliverables: [
      "Edited ceremony photographs",
      "Cinematic highlight film",
      "Retouched couple portraits",
      "Family formals",
      "Album-ready selections",
    ],
    timeline: [
      "Ritual and decor recce",
      "Getting-ready portraits",
      "Ceremony coverage",
      "Couple editorial session",
      "Reception and family moments",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "sunset-pre-wedding",
    title: "Sunset Pre-Wedding",
    category: "Pre-Weddings",
    location: "Udaipur, Rajasthan",
    year: "2026",
    summary:
      "A lakeside portrait story with palace silhouettes, flowing outfits, and sunset romance.",
    story:
      "This illustrative sample story explores a relaxed pre-wedding session planned around soft light, architecture, and natural chemistry.",
    vision:
      "The represented vision is graceful and cinematic, with space for candid laughter, quiet closeness, and dramatic wide frames.",
    approach:
      "We would plan around blue hour, golden edges, and gentle posing so the couple feels present rather than staged.",
    image: preWeddingHero,
    gallery: warmGallery,
    accent: "prewedding",
    deliverables: [
      "Edited couple portraits",
      "Short romantic reel",
      "Location story frames",
      "Retouched hero images",
      "Social media crops",
    ],
    timeline: [
      "Moodboard planning",
      "Wardrobe and location timing",
      "Golden-hour portraits",
      "Cinematic movement clips",
      "Final retouch and grading",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "maternity-moments",
    title: "Maternity Moments",
    category: "Maternity",
    location: "Studio Garden",
    year: "2026",
    summary:
      "Soft, intimate portraits celebrating anticipation, family connection, and gentle light.",
    story:
      "This illustrative sample story celebrates a maternity session built around warmth, comfort, and natural family affection.",
    vision:
      "The vision is airy yet luxurious: cream styling, floral details, and portraits that feel calm, intimate, and heirloom-worthy.",
    approach:
      "The session uses patient direction, flattering seated compositions, and soft backlight to make every frame feel safe and graceful.",
    image: familyHero,
    gallery: intimateGallery,
    accent: "family",
    deliverables: [
      "Retouched maternity portraits",
      "Family photographs",
      "Soft color-graded set",
      "Print-ready favorites",
      "Private gallery selection",
    ],
    timeline: [
      "Comfort-first planning",
      "Wardrobe styling",
      "Family portraits",
      "Solo maternity frames",
      "Careful retouching",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "newborn-memories",
    title: "Newborn Memories",
    category: "Newborn",
    location: "Home Session",
    year: "2026",
    summary: "Tender newborn frames with natural textures, soft hands, and quiet family moments.",
    story:
      "This illustrative sample story imagines a peaceful newborn session designed around safety, patience, and emotionally honest details.",
    vision:
      "The vision is minimal and warm, preserving tiny gestures, soft expressions, and the feeling of a new chapter at home.",
    approach:
      "A calm pace, window light, and gentle compositions keep the session baby-led while still delivering polished imagery.",
    image: newbornHero,
    gallery: [newbornHero, familyHero, preWeddingHero, newbornHero, familyPortrait],
    accent: "family",
    deliverables: [
      "Edited newborn portraits",
      "Parent-and-baby frames",
      "Detail photographs",
      "Retouched keepsakes",
      "Print-ready collection",
    ],
    timeline: [
      "Safety-led setup",
      "Family warmups",
      "Newborn portraits",
      "Detail frames",
      "Soft retouch and delivery",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "birthday-celebration",
    title: "Birthday Celebration",
    category: "Birthdays",
    location: "Banquet Hall",
    year: "2026",
    summary:
      "A warm celebration story with decor details, laughter, cake moments, and family portraits.",
    story:
      "This illustrative sample story follows a milestone birthday through candid arrivals, decor, stage moments, and joyful portraits.",
    vision:
      "The represented vision keeps the event bright and refined while preserving spontaneous laughter and family energy.",
    approach:
      "Coverage would combine fast documentary timing with polished portraits and edited reels for sharing.",
    image: birthdayHero,
    gallery: [birthdayHero, weddingHero, familyPortrait, preWeddingHero, birthdayHero],
    accent: "wedding",
    deliverables: [
      "Edited event photographs",
      "Short celebration film",
      "Family portraits",
      "Decor details",
      "Social media reels",
    ],
    timeline: [
      "Venue and decor coverage",
      "Guest arrivals",
      "Cake ceremony",
      "Candid celebrations",
      "Final highlight edit",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "family-portraits",
    title: "Family Portraits",
    category: "Family",
    location: "Delhi NCR",
    year: "2026",
    summary: "Editorial yet heartfelt family portraits designed for albums, walls, and memories.",
    story:
      "This illustrative sample story frames a family session as a relaxed portrait experience where comfort creates the best expressions.",
    vision:
      "The vision is elevated and personal, making every generation feel seen without making the session feel formal or stiff.",
    approach:
      "We would mix guided portraits, candid movement, and detail frames to create a complete family narrative.",
    image: familyPortrait,
    gallery: [familyPortrait, familyHero, weddingHero, preWeddingHero, familyPortrait],
    accent: "family",
    deliverables: [
      "Edited family portraits",
      "Individual portraits",
      "Generational frames",
      "Print-ready files",
      "Album selections",
    ],
    timeline: [
      "Styling guidance",
      "Group portraits",
      "Individual frames",
      "Candid movement",
      "Final curated gallery",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "corporate-conference",
    title: "Corporate Conference",
    category: "Corporate",
    location: "Business Hotel",
    year: "2026",
    summary:
      "Professional event coverage with speakers, audience moments, branding, and highlights.",
    story:
      "This illustrative sample story covers a conference with emphasis on brand presence, speaker clarity, networking, and post-event assets.",
    vision:
      "The represented vision is polished and credible, balancing warm human moments with clean business storytelling.",
    approach:
      "Coverage would prioritize keynotes, panels, sponsor details, portraits, and quick-turnaround edited selections.",
    image: corporateHero,
    gallery: [corporateHero, editorialHero, productHero, corporateHero, brandingHero],
    accent: "editorial",
    deliverables: [
      "Edited conference photographs",
      "Speaker portraits",
      "Highlight video",
      "Brand detail shots",
      "Social media cutdowns",
    ],
    timeline: [
      "Run-sheet review",
      "Stage coverage",
      "Networking candids",
      "Brand details",
      "Highlight delivery",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "product-photography",
    title: "Product Photography",
    category: "Products",
    location: "Studio Tabletop",
    year: "2026",
    summary:
      "Premium product imagery with sculpted light, texture, detail, and campaign-ready polish.",
    story:
      "This illustrative sample story presents a product shoot shaped for online catalogs, campaign visuals, and social media assets.",
    vision:
      "The vision is sophisticated and tactile, giving products premium presence through contrast, reflections, and precise styling.",
    approach:
      "We would design light, surface, and composition around the product’s material qualities and intended platform.",
    image: productHero,
    gallery: [productHero, editorialHero, brandingHero, productHero, corporateHero],
    accent: "editorial",
    deliverables: [
      "Edited product images",
      "Retouched hero frames",
      "Catalog crops",
      "Campaign visuals",
      "Social media variants",
    ],
    timeline: [
      "Product styling plan",
      "Lighting tests",
      "Hero compositions",
      "Detail macros",
      "Retouch and export",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "fashion-editorial",
    title: "Fashion Editorial",
    category: "Fashion",
    location: "Studio Noir",
    year: "2026",
    summary:
      "High-fashion portraits with dramatic gold light, refined styling, and editorial attitude.",
    story:
      "This illustrative sample story imagines a fashion editorial focused on silhouette, styling, expression, and luxury campaign energy.",
    vision:
      "The represented vision is bold, elegant, and cinematic, with a strong visual rhythm across portrait and detail frames.",
    approach:
      "Lighting, pose direction, and color grading are planned to make every frame feel ready for a magazine spread.",
    image: editorialHero,
    gallery: commercialGallery,
    accent: "editorial",
    deliverables: [
      "Edited editorial portraits",
      "Retouched hero images",
      "Lookbook selections",
      "Behind-the-scenes clips",
      "Social media crops",
    ],
    timeline: [
      "Creative direction",
      "Lighting setup",
      "Look sequencing",
      "Editorial portraits",
      "Retouch and grading",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "personal-branding",
    title: "Personal Branding",
    category: "Personal Branding",
    location: "Creative Studio",
    year: "2026",
    summary:
      "Confident portraits and content assets for founders, creators, professionals, and artists.",
    story:
      "This illustrative sample story frames a personal branding session around presence, trust, and a cohesive content library.",
    vision:
      "The vision is premium but approachable, creating portraits that can live across websites, social media, and press profiles.",
    approach:
      "We would plan wardrobe, backgrounds, expressions, and delivery formats around the client’s brand personality.",
    image: brandingHero,
    gallery: [brandingHero, editorialHero, corporateHero, preWeddingHero, brandingHero],
    accent: "editorial",
    deliverables: [
      "Edited branding portraits",
      "Website hero images",
      "Social media crops",
      "Retouched closeups",
      "Content library selections",
    ],
    timeline: [
      "Brand moodboard",
      "Wardrobe guidance",
      "Portrait session",
      "Content variations",
      "Final export set",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "royal-palace-wedding",
    title: "Royal Palace Wedding",
    category: "Weddings",
    location: "Jodhpur, Rajasthan",
    year: "2026",
    summary:
      "A grand palace celebration with processions, heritage courtyards, and lantern-lit evenings.",
    story:
      "This illustrative sample story follows a destination palace wedding from the baraat procession to the late-night celebration.",
    vision:
      "The represented vision is regal and warm: sandstone textures, brocade details, and portraits that feel like heirlooms.",
    approach:
      "We would combine wide architectural frames with intimate candids so the scale of the venue never overshadows the emotion.",
    image: weddingHero,
    gallery: gallerySet,
    accent: "wedding",
    deliverables: [
      "Edited ceremony photographs",
      "Cinematic highlight film",
      "Palace detail frames",
      "Family formals",
      "Album-ready selections",
    ],
    timeline: [
      "Venue walkthrough",
      "Baraat and arrival",
      "Ceremony coverage",
      "Couple portraits",
      "Reception highlights",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "engagement-ceremony",
    title: "Engagement Ceremony",
    category: "Weddings",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary: "A ring-exchange evening of soft florals, shared glances, and family blessings.",
    story:
      "This illustrative sample story captures an engagement ceremony built around quiet emotion, ring details, and joyful family moments.",
    vision:
      "The vision is elegant and intimate, with pastel decor, warm light, and portraits that feel relaxed and sincere.",
    approach:
      "Coverage would focus on candid reactions, ring and decor details, and a short couple portrait session.",
    image: preWeddingHero,
    gallery: warmGallery,
    accent: "wedding",
    deliverables: [
      "Edited engagement photographs",
      "Ring and detail frames",
      "Couple portraits",
      "Short highlight reel",
      "Private gallery selection",
    ],
    timeline: [
      "Decor and detail coverage",
      "Guest arrivals",
      "Ring ceremony",
      "Couple portraits",
      "Family moments",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "beach-pre-wedding",
    title: "Beach Pre-Wedding",
    category: "Pre-Weddings",
    location: "Goa",
    year: "2026",
    summary: "Breezy coastal portraits with flowing fabrics, sea light, and effortless chemistry.",
    story:
      "This illustrative sample story follows a couple through a relaxed morning-to-sunset shoot along the coast.",
    vision:
      "The represented vision is airy and romantic, with movement, laughter, and soft golden edges.",
    approach:
      "We would plan around tides and light, using gentle direction so the couple stays natural.",
    image: preWeddingHero,
    gallery: warmGallery,
    accent: "prewedding",
    deliverables: [
      "Edited couple portraits",
      "Short romantic reel",
      "Location story frames",
      "Retouched hero images",
      "Social media crops",
    ],
    timeline: [
      "Moodboard planning",
      "Wardrobe and tide timing",
      "Golden-hour portraits",
      "Movement clips",
      "Retouch and grading",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "heritage-fort-couple-shoot",
    title: "Heritage Fort Couple Shoot",
    category: "Pre-Weddings",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary: "Timeless couple portraits against ancient stone arches and warm evening light.",
    story:
      "This illustrative sample story explores a couple session framed by heritage architecture and dramatic skies.",
    vision:
      "The vision is classic and cinematic, pairing rich textures with graceful, unforced posing.",
    approach:
      "We would use archways and corridors for layered compositions and finish with sunset silhouettes.",
    image: weddingHero,
    gallery: gallerySet,
    accent: "prewedding",
    deliverables: [
      "Edited couple portraits",
      "Cinematic teaser",
      "Architecture frames",
      "Retouched hero images",
      "Save-the-date crops",
    ],
    timeline: [
      "Location recce",
      "Styling and outfit plan",
      "Golden-hour portraits",
      "Silhouette frames",
      "Final grading",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "corporate-headshots",
    title: "Corporate Team Headshots",
    category: "Corporate",
    location: "Office Studio",
    year: "2026",
    summary: "Clean, confident team portraits for websites, LinkedIn, and company profiles.",
    story:
      "This illustrative sample story covers an on-site headshot day for a growing team, designed to be fast and consistent.",
    vision:
      "The represented vision is approachable and professional, with consistent lighting across every team member.",
    approach:
      "A compact lighting setup, quick posing guidance, and same-day selects keep the day smooth for busy teams.",
    image: corporateHero,
    gallery: [corporateHero, brandingHero, editorialHero, corporateHero, productHero],
    accent: "editorial",
    deliverables: [
      "Retouched headshots",
      "Team group photographs",
      "Website-ready crops",
      "LinkedIn-ready files",
      "Private review gallery",
    ],
    timeline: [
      "Brand colour briefing",
      "Lighting setup",
      "Individual portraits",
      "Group photographs",
      "Retouch and delivery",
    ],
    equipment: sharedEquipment,
  },
  {
    slug: "jewellery-campaign",
    title: "Jewellery Campaign",
    category: "Products",
    location: "Studio Tabletop",
    year: "2026",
    summary: "Sparkling macro detail and sculpted light for catalogue and campaign visuals.",
    story:
      "This illustrative sample story presents a jewellery shoot focused on brilliance, texture, and luxurious presentation.",
    vision:
      "The vision is rich and refined, with deep shadows, controlled reflections, and tactile detail.",
    approach:
      "We would build each frame around the piece, using macro lenses and diffused lighting to protect fine detail.",
    image: productHero,
    gallery: [productHero, editorialHero, brandingHero, productHero, corporateHero],
    accent: "editorial",
    deliverables: [
      "Edited product images",
      "Macro detail frames",
      "Catalogue crops",
      "Campaign visuals",
      "Social media variants",
    ],
    timeline: [
      "Styling plan",
      "Lighting tests",
      "Hero compositions",
      "Macro details",
      "Retouch and export",
    ],
    equipment: sharedEquipment,
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function getRelatedEvents(slug: string, category: EventCategory) {
  const same = events.filter((event) => event.slug !== slug && event.category === category);
  const others = events.filter((event) => event.slug !== slug && event.category !== category);
  return [...same, ...others].slice(0, 3);
}

export type CategoryChild = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  eventSlug?: string;
};

export type ServiceCategory = {
  slug: string;
  /** Must match the `service` value used by the contact form / footer links */
  label: string;
  /** Which event categories (above) belong to this main category */
  eventCategories: EventCategory[];
  image: string;
  /** Grand parent / services card (events index + home page) */
  kicker: string;
  cardTitle: string;
  description: string;
  cardCta: string;
  /** Parent page hero */
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  /** Child sections shown on the parent page */
  children: CategoryChild[];
  /** Optional SEO / context section (under the child cards) */
  seo?: { title: string; paragraphs: string[]; note?: string; cta: string };
  /** Optional bottom CTA */
  bottomCta?: { title: string; description: string; primary: string; secondary: string };
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "wedding-engagement",
    label: "Wedding & Engagement",
    eventCategories: ["Weddings"],
    image: weddingHero,
    kicker: "The Big Day",
    cardTitle: "Weddings & Engagements",
    description:
      "From the first celebration to the final goodbye, we capture the people, traditions and emotions that make your wedding yours.",
    cardCta: "Explore Events",
    heroEyebrow: "The Big Day",
    heroTitle: "Every celebration has its moments. We make sure they stay.",
    heroDescription:
      "From the excitement before the wedding to the emotions of the big day, RAKZS Studio captures the traditions, people and unscripted moments that turn your celebration into a story worth remembering.",
    children: [
      {
        eyebrow: "Event Type · 01",
        title: "Wedding",
        description:
          "One day filled with a lifetime of emotions. From the quiet moments before the ceremony to the rituals, laughter, tears and celebrations around you — we preserve your wedding as it truly felt.",
        cta: "Explore Wedding",
        image: weddingHero,
        eventSlug: "traditional-indian-wedding",
      },
      {
        eyebrow: "Event Type · 02",
        title: "Engagement & Reception",
        description:
          "The beginning. The celebration. Everything in between. From exchanging rings to celebrating with everyone you love, we capture the people, emotions and energy that make these occasions unforgettable.",
        cta: "Explore Events",
        image: preWeddingHero,
      },
      {
        eyebrow: "Event Type · 03",
        title: "Wedding Celebrations",
        description:
          "Different traditions. One unforgettable story. Haldi, Mehendi, Sangeet and the celebrations surrounding your wedding — captured with all their colour, laughter, movement and emotion.",
        cta: "Explore Celebrations",
        image: familyHero,
      },
    ],
    seo: {
      title: "Every celebration deserves to be remembered its own way.",
      paragraphs: [
        "No two weddings unfold the same way. Some are intimate and quiet; others bring entire families together across days of traditions and celebrations.",
        "From wedding photography and candid moments to traditional video and cinematic films, RAKZS Studio creates coverage around the way your celebration happens.",
      ],
      note: "Wedding & engagement coverage available in Hyderabad and across Telangana.",
      cta: "Explore Packages",
    },
    bottomCta: {
      title: "Your date. Your people. Your story.",
      description:
        "Tell us what you're celebrating and we'll help you find the right coverage for your day.",
      primary: "Check Your Date",
      secondary: "Explore Packages",
    },
  },
  {
    slug: "family-function",
    label: "Family Function",
    eventCategories: ["Maternity", "Newborn", "Birthdays", "Family"],
    image: familyHero,
    kicker: "Family Milestones",
    cardTitle: "Family Functions & Celebrations",
    description: "The traditions, celebrations and people that become part of your family's story.",
    cardCta: "Explore Events",
    heroEyebrow: "Family Milestones",
    heroTitle: "The moments your family will talk about for years.",
    heroDescription:
      "From meaningful traditions to joyful celebrations, we capture the people, emotions and little moments that make every family occasion worth remembering.",
    children: [
      {
        eyebrow: "Traditional Ceremonies",
        title: "Traditions change with time. The memories shouldn't.",
        description:
          "Half Saree ceremonies, Dhoti ceremonies, Housewarmings and other meaningful family traditions — documented with attention to the rituals and the people at the heart of them.",
        cta: "Explore Ceremonies",
        image: familyPortrait,
      },
      {
        eyebrow: "Birthdays & Anniversaries",
        title: "Another year. Another reason to celebrate together.",
        description:
          "From first birthdays to milestone years and anniversaries, we capture the laughter, surprises and people who make the celebration yours.",
        cta: "Explore Celebrations",
        image: birthdayHero,
      },
      {
        eyebrow: "Baby & Family Celebrations",
        title: "Little beginnings. Big memories.",
        description:
          "Baby Showers, Cradle Ceremonies, Naming Ceremonies and the beautiful family moments surrounding a new beginning.",
        cta: "Explore Celebrations",
        image: newbornHero,
      },
    ],
  },
  {
    slug: "pre-wedding-couple",
    label: "Pre-Wedding / Couple",
    eventCategories: ["Pre-Weddings"],
    image: preWeddingHero,
    kicker: "Before Forever",
    cardTitle: "Pre-Wedding & Couples",
    description: "Before the wedding day arrives, create something that's completely yours.",
    cardCta: "Explore Shoots",
    heroEyebrow: "Before Forever",
    heroTitle: "Before the vows, there's your story.",
    heroDescription:
      "Away from the wedding schedule, rituals and crowds, this is time for just the two of you — captured through photographs and films that feel personal, relaxed and true to your relationship.",
    children: [
      {
        eyebrow: "Pre-Wedding",
        title: "Your story, before the big day.",
        description:
          "A thoughtfully planned photo and film experience built around the two of you — your personalities, your connection and the way you want your story to feel.",
        cta: "Explore Pre-Wedding",
        image: preWeddingHero,
      },
      {
        eyebrow: "Couple & Save-the-Date",
        title: "One date worth remembering before the date everyone remembers.",
        description:
          "From relaxed couple portraits to creative Save-the-Date photographs and films, create something personal to share before your celebration begins.",
        cta: "Explore Couple Shoots",
        image: weddingHero,
      },
    ],
  },
  {
    slug: "corporate-business",
    label: "Corporate / Business",
    eventCategories: ["Corporate", "Events & Celebrations"],
    image: corporateHero,
    kicker: "The Professional Frame",
    cardTitle: "Corporate & Business Events",
    description:
      "Professional coverage for the moments, people and events that represent your business.",
    cardCta: "Explore Business Events",
    heroEyebrow: "The Professional Frame",
    heroTitle: "Your business has important moments too.",
    heroDescription:
      "From conferences and meetings to launches, celebrations and professional gatherings, RAKZS creates polished photo and video coverage designed around your event and your brand.",
    children: [
      {
        eyebrow: "Corporate Events",
        title: "The people behind the business. The moments that bring them together.",
        description:
          "Professional photography and video coverage for office events, award ceremonies, launches, team celebrations and other corporate occasions.",
        cta: "Explore Corporate Events",
        image: corporateHero,
      },
      {
        eyebrow: "Conferences & Business Events",
        title: "When the room matters, every moment does too.",
        description:
          "From speakers and presentations to audience interactions, networking and key moments, we document conferences, seminars and professional gatherings with clean, purposeful coverage.",
        cta: "Explore Business Events",
        image: editorialHero,
      },
    ],
  },
  {
    slug: "commercial-creative",
    label: "Commercial / Creative",
    eventCategories: ["Products", "Fashion", "Personal Branding"],
    image: brandingHero,
    kicker: "Brand in Focus",
    cardTitle: "Commercial & Creative",
    description: "Photography and films created to show people what your brand is all about.",
    cardCta: "Explore Creative Work",
    heroEyebrow: "Brand in Focus",
    heroTitle: "Make your business worth looking at.",
    heroDescription:
      "From people and products to spaces, services and campaigns, we create photographs and films that help businesses present themselves clearly, professionally and creatively.",
    children: [
      {
        eyebrow: "Brand & Business",
        title: "Show the people behind the name.",
        description:
          "Brand portraits, team photographs, workplaces, services and business-focused visual content created around how you want customers to see your brand.",
        cta: "Explore Brand Content",
        image: brandingHero,
      },
      {
        eyebrow: "Product & Promotional",
        title: "Make the product the reason they stop scrolling.",
        description:
          "Clean product photography and promotional visual content designed to present what you sell with clarity, detail and personality.",
        cta: "Explore Commercial Work",
        image: productHero,
      },
      {
        eyebrow: "Social Media Content",
        title: "Made for the screen your customers use every day.",
        description:
          "Photography, short-form videos, reels and campaign content created for businesses that need a consistent visual presence online.",
        cta: "Explore Social Content",
        image: editorialHero,
      },
    ],
  },
];

export function getServiceCategoryBySlug(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getEventsByServiceCategory(category: ServiceCategory) {
  return events.filter((event) => category.eventCategories.includes(event.category));
}
