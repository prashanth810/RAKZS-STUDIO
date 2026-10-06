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
  deliverables?: string[];
  timeline?: string[];
  equipment?: { title: string; note: string }[];
  sections?: {
    title: string;
    content?: string;
    items?: { title: string; description: string }[];
  }[];
  faqs?: { question: string; answer: string }[];
};

const gallerySet = [weddingHero, preWeddingHero, familyHero, editorialHero, weddingHero];
const warmGallery = [preWeddingHero, weddingHero, familyHero, editorialHero, preWeddingHero];
const intimateGallery = [familyHero, weddingHero, preWeddingHero, editorialHero, familyHero];
const commercialGallery = [editorialHero, preWeddingHero, weddingHero, familyHero, editorialHero];

const sharedEquipment = [
  {
    title: "Full-frame camera bodies",
    note: "High-resolution camera sensors for dependable detail, dynamic range, and low-light confidence.",
  },
  {
    title: "Prime portrait lenses",
    note: "Fast aperture optics ensuring natural skin tone rendering, sharp focus, and gentle background separation.",
  },
  {
    title: "Cinematic lighting kit",
    note: "Professional continuous and wireless flash lighting for controlled ambient highlights and atmospheric depth.",
  },
];

export const events: EventItem[] = [
  {
    slug: "traditional-indian-wedding",
    title: "Traditional Indian Wedding",
    category: "Weddings",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "Some days pass. This one stays with you. We make sure you can return to the rituals, the nervous smiles, and the quiet moments nobody else noticed.",
    story:
      "You won't remember everything. That's why we do.\n\nOn your wedding day, hundreds of moments are happening around you. While you're in the middle of a ritual, your parents may be sharing a look across the room. Your friends may be laughing somewhere behind you. Someone may be wiping away a tear before anyone notices.\n\nYou can't be everywhere. Our cameras can. At RAKZS Studio, wedding photography isn't only about making beautiful photographs. It's about preserving the people, traditions and emotions that made the day yours.\n\nSo years later, you don't only remember how your wedding looked. You remember how it felt.",
    vision:
      "Beautiful when it needs to be. Honest when it matters more. Traditional photography makes sure the important rituals, family portraits and must-have moments are properly documented. Candid wedding photography preserves the expressions, relationships and unexpected moments happening naturally around you. We bring the two together so your final wedding collection doesn't become hundreds of poses — and it doesn't miss the photographs your family expects to have.",
    approach:
      "Start with what matters to you. We'll build around it. Some weddings need straightforward photography and video coverage. Others unfold across several functions, hundreds of guests and countless moments — and need a larger team. Tell us about your wedding, your functions and what matters most to you. We'll help you choose coverage that makes sense for your celebration and your requirements.",
    image: weddingHero,
    gallery: gallerySet,
    accent: "wedding",
    deliverables: [
      "Traditional & Candid Photography",
      "Cinematic Wedding Films & Teasers",
      "Traditional Full-Length Videography",
      "Drone Coverage (Venue Permitted)",
      "Handcrafted Fine-Art Wedding Albums",
    ],
    timeline: [
      "01 — Enquire: Tell us your date, location, functions and what you're planning",
      "02 — Understand: We discuss your priorities, schedule and coverage required",
      "03 — Plan: Custom team, equipment and timeline built around your wedding",
      "04 — Capture: We cover key rituals and stay alert for unscripted moments",
      "05 — Refine & Deliver: Your photographs, films and deliverables carefully prepared",
    ],
    equipment: [
      {
        title: "Full-frame camera bodies",
        note: "High-resolution, low-light cameras for dependable detail and clarity during both bright outdoor and intimate indoor rituals.",
      },
      {
        title: "Prime portrait lenses",
        note: "Fast aperture lenses ensuring natural skin tones, soft background separation, and intimate emotional framing.",
      },
      {
        title: "Cinematic lighting kit",
        note: "Balanced ambient and wireless lighting setups for controlled highlights, warm separation, and graceful depth.",
      },
    ],
    sections: [
      {
        title: "Beyond the Obvious",
        content: "The photograph isn't always where everyone is looking.",
        items: [
          {
            title: "The Two of You",
            description:
              "The anticipation before you see each other. The smiles between rituals. The few quiet seconds you find in the middle of everything. We create portraits worth framing without losing the moments happening naturally around them.",
          },
          {
            title: "The People Who Made the Day",
            description:
              "Parents watching from a distance. Grandparents giving their blessings. Siblings creating chaos. Friends who came just to stand beside you. Years from now, some of these photographs may mean even more than they do today.",
          },
          {
            title: "The Traditions",
            description:
              "Every family celebrates differently. We document the rituals, details and traditions that make your wedding personal while staying alert to everything happening around them.",
          },
          {
            title: "The Unplanned",
            description:
              "The laugh that wasn't posed. The tear someone tried to hide. The child running through the ceremony. The friends who forgot the camera was there. Some of the best photographs are the ones nobody planned.",
          },
        ],
      },
      {
        title: "Wedding Films",
        content:
          "Some memories need movement. Some need a voice. A photograph can hold an expression forever. But some memories live in the sound of a parent's voice, the music surrounding a ritual, your friends laughing, and the way the room changes when you walk in. That's where film takes over. From traditional wedding videography to cinematic wedding films, we preserve the movement, voices and atmosphere that photographs alone cannot.",
      },
      {
        title: "Available Coverage When You Need Them",
        content: "Choose them individually, start with a package, or create your own combination.",
        items: [
          {
            title: "Traditional & Candid Photography",
            description: "Coverage for planned rituals, family formals, and spontaneous expressions.",
          },
          {
            title: "Traditional Videography & Cinematography",
            description: "Full-length ceremony documentation and music-driven cinematic films.",
          },
          {
            title: "Drone Coverage & Live Streaming",
            description: "Aerial perspective and live broadcast for family attending remotely.",
          },
          {
            title: "Albums, Teasers & Reels",
            description: "Handcrafted physical keepsake albums and short-form video edits.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How much does wedding photography cost in Hyderabad?",
        answer:
          "Wedding photography pricing depends on the number of functions, duration, team size and the type of photography and film coverage you choose. RAKZS Studio offers different starting packages as well as customizable coverage, so you can choose what suits your celebration instead of paying for services you don't need.",
      },
      {
        question: "What is the difference between candid and traditional wedding photography?",
        answer:
          "Traditional photography focuses on important rituals, family groups and planned photographs. Candid photography focuses more on natural expressions and moments as they happen. For many weddings, combining both creates a more complete story — the important photographs your family expects, along with the moments nobody planned.",
      },
      {
        question: "Do you provide both wedding photography and videography?",
        answer:
          "Yes. RAKZS Studio provides both photography and film coverage, including traditional photography, candid photography, traditional videography and cinematography. Your final team depends on the coverage you choose.",
      },
      {
        question: "Can we customize our wedding photography package?",
        answer:
          "Yes. You can begin with one of our wedding packages and adjust your coverage, or build a combination around your wedding requirements.",
      },
      {
        question: "Can we book photography and videography for only one function?",
        answer:
          "Yes. Coverage can be planned according to the functions you need photographed or filmed. Tell us which event you're planning and we'll help you work out the suitable coverage.",
      },
      {
        question: "How many photographers and videographers will cover our wedding?",
        answer:
          "The team depends on your wedding schedule, number of functions, venue setup, guest scale and selected coverage. Once we understand your celebration, we'll recommend a team appropriate for the moments that need to be covered.",
      },
      {
        question: "Do you provide RAW wedding photos and videos?",
        answer:
          "RAW files can be provided based on your selected coverage and final requirements. We'll confirm exactly what will be delivered before the booking is finalized.",
      },
      {
        question: "How long does it take to receive our wedding photos and videos?",
        answer:
          "Delivery depends on the type and amount of work involved — for example photographs, cinematic films, full videos, reels or albums. Once your final deliverables are confirmed, we'll provide a clear delivery timeline for your booking.",
      },
      {
        question: "Do you provide drone coverage for weddings?",
        answer:
          "Yes, drone coverage is available as an additional option where the venue, location and applicable permissions or restrictions allow it.",
      },
      {
        question: "Do you provide wedding albums?",
        answer:
          "Yes. Albums can be included depending on your selected package or added according to your requirements.",
      },
      {
        question: "Do you cover weddings outside Hyderabad?",
        answer:
          "Hyderabad is our primary service area, and we also cover weddings across Telangana. Share your wedding location while enquiring and we'll discuss the coverage requirements with you.",
      },
      {
        question: "How do we book RAKZS Studio for our wedding?",
        answer:
          "Start by sharing your wedding date, location, functions and coverage requirements. Once the requirements, availability and booking details are finalized, we'll share the advance amount required to confirm your date.",
      },
    ],
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
      "A romantic pre-wedding session planned around soft evening light, heritage architecture, and natural chemistry.",
    vision:
      "The vision is graceful and cinematic, with space for candid laughter, quiet closeness, and dramatic wide frames.",
    approach:
      "We plan around blue hour, golden edges, and gentle direction so the couple feels present rather than staged.",
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
      "A quiet maternity session built around warmth, comfort, and natural family affection.",
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
      "A peaceful newborn session designed around baby safety, patience, and emotionally honest details.",
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
      "A milestone birthday documented through candid arrivals, decor details, stage moments, and joyful family portraits.",
    vision:
      "The vision keeps the event bright and refined while preserving spontaneous laughter and family energy.",
    approach:
      "Coverage combines fast documentary timing with polished portraits and edited reels for sharing.",
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
      "A relaxed family portrait session where comfort and connection create the best expressions.",
    vision:
      "The vision is elevated and personal, making every generation feel seen without making the session feel formal or stiff.",
    approach:
      "We mix guided portraits, candid movement, and detail frames to create a complete family narrative.",
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
      "Polished corporate event coverage with emphasis on brand presence, speaker clarity, networking, and post-event media assets.",
    vision:
      "The vision is polished and credible, balancing warm human moments with clean business storytelling.",
    approach:
      "Coverage prioritizes keynotes, panels, sponsor details, portraits, and quick-turnaround edited selections.",
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
      "High-impact product photography shaped for e-commerce catalogs, campaign visuals, and digital brand presence.",
    vision:
      "The vision is sophisticated and tactile, giving products premium presence through contrast, reflections, and precise styling.",
    approach:
      "We design light, surface, and composition around the product’s material qualities and intended platform.",
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
      "A fashion editorial shoot focused on silhouette, styling, expression, and luxury campaign aesthetics.",
    vision:
      "The vision is bold, elegant, and cinematic, with a strong visual rhythm across portrait and detail frames.",
    approach:
      "Lighting, pose direction, and color grading are planned to make every frame feel ready for publication.",
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
      "A personal branding session framed around presence, authority, and a cohesive executive content library.",
    vision:
      "The vision is premium but approachable, creating portraits that live across websites, social media, and press profiles.",
    approach:
      "We plan wardrobe, backgrounds, expressions, and delivery formats around the client’s brand personality.",
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
      "A grand destination palace wedding captured from the baraat procession to the late-night celebration.",
    vision:
      "The vision is regal and warm: sandstone textures, brocade details, and portraits that feel like heirlooms.",
    approach:
      "We combine wide architectural frames with intimate candids so the scale of the venue never overshadows the emotion.",
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
    title: "Engagement & Reception",
    category: "Weddings",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "It starts with a yes. Then everyone celebrates it. From ring exchange to portraits, candid moments and cinematic films.",
    story:
      "Two occasions. Two completely different feelings.\n\nAn engagement carries the excitement of everything that's about to begin. A reception feels different: the formalities are behind you, everyone you love is finally in one place, with introductions, conversations, laughter, and celebrations everywhere around you.\n\nWe don't want your photographs to show only who attended — we want them to remind you what it felt like having everyone there.",
    vision:
      "Portraits for the frame. Moments for everything else. Formal couple portraits and family groups captured alongside candid interactions, speeches, dancing, and stage celebrations without making the entire evening feel like a photoshoot.",
    approach:
      "Start with the moments you want remembered. A smaller engagement doesn't need the same setup as a large reception. Tell us about your venue, guest scale, schedule and what matters to you. We'll help you choose coverage around your event, rather than adding services simply because they're available.",
    image: preWeddingHero,
    gallery: warmGallery,
    accent: "wedding",
    deliverables: [
      "Traditional & Candid Photography",
      "Cinematic Highlight Films & Teasers",
      "Stage Formals & Family Group Portraits",
      "Vertical Reels for Social Sharing",
      "Premium Keepsake Album",
    ],
    timeline: [
      "01 — Enquire: Share your date, venue and event details",
      "02 — Understand: We discuss the schedule, guest scale and coverage you're looking for",
      "03 — Plan: We recommend a suitable team and coverage",
      "04 — Capture: We document the planned moments while watching for everything happening around them",
      "05 — Refine & Deliver: Your selected photographs, films and deliverables prepared with care",
    ],
    equipment: sharedEquipment,
    sections: [
      {
        title: "What We Capture",
        content: "More than the stage. The important photograph might be happening beside you.",
        items: [
          {
            title: "The Two of You",
            description:
              "From exchanging rings to the portraits you'll keep for years, we create photographs of you together without making the entire celebration feel like a photoshoot.",
          },
          {
            title: "Your Families",
            description:
              "Parents, grandparents, siblings and relatives coming together are a huge part of these occasions. We make sure the people closest to you become part of the story.",
          },
          {
            title: "Your Guests",
            description:
              "Some will pose. Some will laugh the second before we photograph them. Some haven't seen each other in years. We capture both the photographs everyone expects and the interactions nobody planned.",
          },
          {
            title: "The Celebration",
            description:
              "Entrances. Ring exchange. Stage moments. Speeches. Performances. Dancing. Laughter. The evening doesn't happen only on the stage — neither should the coverage.",
          },
        ],
      },
      {
        title: "Engagement & Reception Films",
        content:
          "Photographs freeze the moment. Film brings the room back. The music during your entrance. The applause when you exchange rings. A speech you didn't expect. Your friends taking over the dance floor. Film lets you return to the sound, movement and atmosphere surrounding the celebration.",
      },
    ],
    faqs: [
      {
        question: "How much does engagement photography cost in Hyderabad?",
        answer:
          "Pricing depends on the event duration, team size, photography and video requirements, venue and final deliverables. You can start with a RAKZS package or customize the coverage according to your event.",
      },
      {
        question: "Can we book photography only for our engagement?",
        answer:
          "Yes. Coverage can be built according to what your event needs. Photography, video and additional services don't all have to be selected together.",
      },
      {
        question: "Do you provide both candid and traditional photography?",
        answer:
          "Yes. Traditional photography covers the important formal photographs and key moments, while candid photography focuses on natural expressions and interactions throughout the event.",
      },
      {
        question: "Do you provide engagement and reception videography?",
        answer:
          "Yes. Traditional videography and cinematic coverage are available depending on your requirements.",
      },
      {
        question: "Can engagement and reception be covered as part of our wedding package?",
        answer:
          "Yes. If you're planning multiple functions, tell us your complete schedule when enquiring. We can discuss suitable coverage across the celebrations instead of treating every event separately.",
      },
      {
        question: "How many photographers do we need for a reception?",
        answer:
          "It depends on the venue, guest scale, schedule and the type of coverage you want. Once we understand the event, we'll recommend an appropriate team.",
      },
      {
        question: "Do you provide stage and family photographs?",
        answer:
          "Yes. Formal couple photographs, family groups and important guest photographs can be included alongside candid coverage.",
      },
      {
        question: "Can we customize our engagement or reception package?",
        answer:
          "Yes. You can start with an existing package or build coverage around the services your celebration actually requires.",
      },
      {
        question: "Do you cover engagement and reception events outside Hyderabad?",
        answer:
          "Hyderabad is our primary service area, and we also cover events across Telangana. Share the location while enquiring so we can discuss the requirements.",
      },
      {
        question: "How do we confirm our date?",
        answer:
          "Share your event date, venue and requirements. Once availability and coverage are finalized, we'll provide the booking details and advance required to confirm the date.",
      },
    ],
  },
  {
    slug: "wedding-celebrations",
    title: "Wedding Celebrations (Haldi, Mehendi & Sangeet)",
    category: "Weddings",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "Before the wedding comes everything that makes it unforgettable. Colour, laughter, music, and energy captured in motion.",
    story:
      "Sometimes the best memories happen before the main event.\n\nThe wedding may be the date printed on the invitation. But ask a family what they remember and you'll hear about everything around it: the Haldi that became a colour fight, the Mehendi where everyone finally had time to sit together, the Sangeet performance somebody secretly practised for weeks, the relatives arriving, the late-night laughter, and the house suddenly feeling full.\n\nThese are not side events to us. They're the moments that make the wedding feel like a wedding.",
    vision:
      "Colour, movement, sound. Some celebrations refuse to stand still. Photography preserves the expressions, details, colours and interactions happening throughout them. Film brings back the music, voices, performances and energy surrounding those moments. Depending on your celebration, RAKZS can provide traditional photography, candid photography, traditional videography and cinematic coverage as one coordinated team.",
    approach:
      "One function or five. Start with what you're actually planning. You may want complete coverage across every wedding celebration or only for selected functions. Tell us which celebrations you're planning, where they're happening and what matters most to you. We'll help you build coverage around the actual schedule.",
    image: familyHero,
    gallery: gallerySet,
    accent: "wedding",
    deliverables: [
      "Haldi, Mehendi & Sangeet Photography",
      "Cinematic Sangeet & Celebration Highlights",
      "High-Energy Vertical Reels",
      "Candid Family & Ritual Coverage",
      "Curated Celebration Gallery",
    ],
    timeline: [
      "Tell Us Your Functions: Haldi, Mehendi, Sangeet or any other celebrations you're planning",
      "Share the Schedule: Dates, locations, approximate timings and important moments",
      "Build the Coverage: We plan the team according to the functions and coverage selected",
      "Celebrate: We cover the rituals, people, details and everything happening around them",
      "Receive Your Story: Selected photographs, films and deliverables prepared with care",
    ],
    equipment: sharedEquipment,
    sections: [
      {
        title: "The Celebrations We Cover",
        content: "Every family celebrates differently. Your traditions don't need to fit fixed labels.",
        items: [
          {
            title: "Haldi",
            description:
              "It starts as a ritual. It rarely stays one. We capture the ritual, the family traditions and portraits — but also the laughter, colour and chaos once everyone stops worrying about staying clean.",
          },
          {
            title: "Mehendi",
            description:
              "In the middle of everything, time to sit together. Friends gathering around the bride, parents checking preparations, and conversations happening away from the hustle.",
          },
          {
            title: "Sangeet",
            description:
              "Weeks of practice. A few minutes on stage. Stories you'll hear forever. Performances, reactions, backstage nervousness, and everyone joining the dance floor.",
          },
          {
            title: "Other Family Traditions",
            description:
              "Pre-wedding poojas, welcoming ceremonies, and family-specific traditions across Hyderabad and Telangana captured with equal care and cultural reverence.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide Haldi photography in Hyderabad?",
        answer:
          "Yes. RAKZS Studio provides photography and video coverage for Haldi ceremonies in Hyderabad, with coverage also available across Telangana.",
      },
      {
        question: "Do you cover Mehendi and Sangeet functions?",
        answer:
          "Yes. Mehendi, Sangeet and other wedding celebrations can be covered individually or together as part of your wider wedding coverage.",
      },
      {
        question: "Can we book only Haldi or Sangeet photography?",
        answer:
          "Yes. You don't have to book every wedding function. Tell us which celebration you need covered and we'll plan accordingly.",
      },
      {
        question: "Can you cover Haldi, Mehendi, Sangeet and the wedding together?",
        answer:
          "Yes. Multiple wedding functions can be planned together. Share your complete schedule with us so the team and coverage can be organized around the overall celebration.",
      },
      {
        question: "Do we need candid photography for Haldi and Mehendi?",
        answer:
          "Traditional photography ensures rituals and important family photographs are documented, while candid photography focuses on natural expressions, interactions and spontaneous moments.",
      },
      {
        question: "Do you provide cinematic videos for Haldi and Sangeet?",
        answer:
          "Yes. Cinematic coverage is available and can be included according to your selected requirements.",
      },
      {
        question: "Do you create reels or short videos from wedding functions?",
        answer:
          "Wedding teasers and reels are available as coverage options. The exact deliverables can be finalized according to your selected package or customized requirements.",
      },
      {
        question: "How many photographers are needed for multiple wedding functions?",
        answer:
          "That depends on whether functions happen on the same or different days, their locations, guest scale, schedules and selected coverage. We will recommend the appropriate team.",
      },
      {
        question: "Can different functions happen at different locations?",
        answer:
          "Yes. Share all locations and timings when enquiring so we can plan the coverage and team requirements properly.",
      },
      {
        question: "Can we customize coverage for each wedding function?",
        answer:
          "Yes. One function may need simple coverage while another may need a larger photo and film team. Your requirements can be planned accordingly.",
      },
      {
        question: "Do you cover traditional Telugu wedding functions?",
        answer:
          "We cover wedding ceremonies and celebrations in Hyderabad and across Telangana. Tell us about the rituals and important moments in advance so we can plan coverage around your celebration.",
      },
      {
        question: "How do we book coverage for our wedding celebrations?",
        answer:
          "Send us your dates, locations and list of functions. Once availability and requirements are finalized, we'll share the booking details and advance required to confirm the dates.",
      },
    ],
  },
  {
    slug: "traditional-ceremonies",
    title: "Traditional Ceremonies",
    category: "Family",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "Some traditions last a day. Their meaning travels generations. The rituals. The blessings. The people who came together. The moments your family has waited to celebrate. Some photographs don't simply remind you of an occasion. They become part of your family's story.",
    story:
      "It's more than a function when it means something to your family.\n\nA traditional ceremony rarely begins when the photographer arrives. Someone has been planning it for weeks. Parents are making sure every detail is right. Grandparents know exactly how the rituals should happen. Relatives are arriving. Children are running around. Everyone is getting ready for a moment the family may have been waiting years to celebrate.\n\nThen suddenly, it begins.\nAnd while everyone is watching the ceremony, there are moments happening everywhere around it — a parent's pride, a grandparent's blessing, a sibling trying to make you laugh, and three generations standing together.\n\nWe preserve the tradition — and the family living it.",
    vision:
      "The photographs everyone expects. And the ones nobody expected.\n\nTraditional ceremonies need proper documentation. The rituals have to be captured. Family groups matter. Details matter. Portraits matter.\n\nBut photographing only those moments can leave half the story behind. Candid photography allows us to preserve the expressions, relationships and little interactions happening naturally throughout the function.\n\nRAKZS Studio combines both approaches so your final photographs preserve the ceremony and the people experiencing it.",
    approach:
      "Keep it simple. Add only what matters to you.\n\nA small ceremony at home doesn't need the same coverage as a larger family celebration at a venue. That's why we don't expect every family to choose the same setup.\n\nTell us about the function, approximate guest count, location and what you want to remember. We'll help you choose suitable coverage.",
    image: familyPortrait,
    gallery: intimateGallery,
    accent: "family",
    deliverables: [
      "Ritual & Ceremony Documentation",
      "Multi-Generational Family Portraits",
      "Candid Emotion & Blessing Moments",
      "Cinematic Highlights & Event Video",
      "Handcrafted Family Keepsake Album",
    ],
    timeline: [
      "01 — Tell Us the Ceremony: Share what you're celebrating, your date and location",
      "02 — Help Us Understand It: Tell us about the rituals, schedule, family priorities and key moments",
      "03 — Plan the Coverage: We recommend coverage according to the size and requirements of your function",
      "04 — Celebrate: You stay with your family while we stay ready for rituals, portraits, and candid moments",
      "05 — Receive Your Memories: Selected photos, films and deliverables prepared with a clear delivery timeline",
    ],
    equipment: [
      {
        title: "Full-frame camera bodies",
        note: "High-resolution sensors for rich color rendition, capturing intricate ritual details and traditional silk textures in low light.",
      },
      {
        title: "Prime portrait lenses",
        note: "Fast aperture optics ensuring natural skin tones, soft background separation, and emotional framing during intimate pujas.",
      },
      {
        title: "Cinematic lighting kit",
        note: "Balanced wireless lighting for controlled ambient highlights and natural depth in home and venue ceremonies.",
      },
    ],
    sections: [
      {
        title: "The Ceremonies We Cover",
        content: "Different ceremonies. The same reason to remember them.",
        items: [
          {
            title: "Half Saree Ceremony",
            description:
              "A new chapter, surrounded by family. A Half Saree Ceremony marks a meaningful transition — celebrated through traditions, blessings, family and photographs that stay with her for years. We capture rituals and portraits alongside the pride in parents' faces and grandparents' blessings.",
          },
          {
            title: "Dhoti Ceremony",
            description:
              "A tradition passed from one generation to another. The ceremony may centre around one person, but the story belongs to the whole family. From rituals and blessings to family portraits and natural moments between generations.",
          },
          {
            title: "Housewarming (Gruhapravesam)",
            description:
              "A new home begins with the people who fill it. Prayers in rooms that will soon become familiar, relatives arriving early, traditions being followed, and the first family photographs inside a place where many memories will be made.",
          },
          {
            title: "Naming & Family Ceremonies",
            description:
              "A small name. A very big place in the family. Naming ceremonies and intimate family traditions bring generations together around a new beginning, capturing baby's smallest expressions and surrounding family.",
          },
        ],
      },
      {
        title: "What We Look For Beyond the Ritual",
        content: "The ceremony is important. So is everything happening around it.",
        items: [
          {
            title: "The Tradition",
            description:
              "The rituals, details and important moments your family expects to have documented properly.",
          },
          {
            title: "The Blessings",
            description:
              "Parents and grandparents often create some of the most meaningful photographs of a traditional ceremony. We stay ready for those moments.",
          },
          {
            title: "The Generations",
            description:
              "A traditional function may be one of the few occasions when several generations of the family are together at once.",
          },
          {
            title: "The Unscripted",
            description:
              "Children getting distracted, cousins laughing, someone fixing an outfit, and parents quietly watching.",
          },
        ],
      },
      {
        title: "Traditional Ceremony Films",
        content:
          "Some traditions deserve more than a photograph.\n\nA photograph preserves a blessing. Film lets you hear it again.\n\nThe prayers. The voices of family members. The laughter between rituals. The movement and atmosphere surrounding the celebration. Photography and videography can work together to preserve your traditional ceremony in two different ways — one you can frame, and one you can relive. Depending on your requirements, coverage can include traditional video as well as shorter cinematic highlights and reels.",
      },
      {
        title: "Available Coverage Options",
        content: "Choose only what your celebration needs.",
        items: [
          {
            title: "Photography",
            description: "Rituals, portraits, family groups and important moments.",
          },
          {
            title: "Candid Photography",
            description: "Natural expressions and interactions happening around the ceremony.",
          },
          {
            title: "Videography",
            description: "Important rituals and family moments documented in motion.",
          },
          {
            title: "Cinematic Highlights & Reels",
            description: "Shorter visual stories made for remembering and sharing.",
          },
          {
            title: "Albums",
            description: "Selected photographs brought together into a physical family keepsake.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide traditional function photography in Hyderabad?",
        answer:
          "Yes. RAKZS Studio provides photography and videography for traditional and family ceremonies in Hyderabad, with coverage also available across Telangana depending on the event requirements.",
      },
      {
        question: "What traditional ceremonies do you cover?",
        answer:
          "Coverage can include Half Saree ceremonies, Dhoti ceremonies, Housewarmings, Naming Ceremonies and other family traditions. If your particular ceremony isn't listed, tell us about the occasion and the rituals involved so we can plan the appropriate coverage.",
      },
      {
        question: "Do you provide Half Saree function photography in Hyderabad?",
        answer:
          "Yes. Photography and videography can be arranged for Half Saree ceremonies, including the important rituals, portraits, family photographs and candid moments throughout the celebration.",
      },
      {
        question: "Do you provide Dhoti Ceremony photography and videography?",
        answer:
          "Yes. Dhoti Ceremony coverage can include photography, candid moments, family portraits and video according to your requirements.",
      },
      {
        question: "Do you cover Housewarming ceremonies?",
        answer:
          "Yes. Housewarming coverage can include the traditional rituals, details of the new home, family photographs, guests and candid moments surrounding the ceremony.",
      },
      {
        question: "Do you provide Naming Ceremony photography?",
        answer:
          "Yes. Naming Ceremonies and similar baby/family traditions can be covered through photography and video depending on your requirements.",
      },
      {
        question: "Can we book only a photographer for our function?",
        answer:
          "Yes. You don't have to select photography and video together. Coverage can be kept simple and built around what your particular ceremony needs.",
      },
      {
        question: "Do we need both traditional and candid photography?",
        answer:
          "Not necessarily. Traditional photography is important for rituals, family groups and planned photographs. Candid photography adds the natural expressions and interactions happening between those moments. Tell us about your function and we'll help you decide whether you need one or both.",
      },
      {
        question: "How many photographers do we need for a traditional function?",
        answer:
          "That depends on the number of guests, venue, schedule, rituals and the type of coverage you want. A small home ceremony may need a different setup from a larger function at a venue. Once we understand your celebration, we'll recommend an appropriate team.",
      },
      {
        question: "Do you provide video and reels for traditional functions?",
        answer:
          "Yes. Videography, cinematic highlights and short-form reels can be included depending on your selected coverage and final deliverables.",
      },
      {
        question: "Can we get an album?",
        answer: "Yes. Albums can be added according to your requirements.",
      },
      {
        question: "How much does traditional ceremony photography cost in Hyderabad?",
        answer:
          "The cost depends on the duration of the function, team required, photography or video coverage and final deliverables. Instead of adding services you don't need, tell us about your ceremony and we'll help you choose suitable coverage.",
      },
      {
        question: "How long will it take to receive our photos and videos?",
        answer:
          "Delivery depends on the amount of coverage and the final deliverables you select. Once your requirements are finalized, we'll provide a clear delivery timeline for your booking.",
      },
      {
        question: "Do you cover traditional ceremonies outside Hyderabad?",
        answer:
          "Hyderabad is our primary service area, and we also cover functions across Telangana. Share your location while enquiring so we can discuss the requirements.",
      },
      {
        question: "How do we book RAKZS Studio?",
        answer:
          "Share your ceremony, date, location and requirements. Once availability and coverage are finalized, we'll share the booking details and advance required to confirm your date.",
      },
    ],
  },
  {
    slug: "birthdays-anniversaries",
    title: "Birthdays & Anniversaries",
    category: "Birthdays",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "Another year passes. This one doesn't have to. The candles. The people. The laughter. The little expressions you didn't even notice while the celebration was happening. Birthdays and anniversaries aren't only about counting another year. They're about remembering who was there for it.",
    story:
      "Today they're this little. They won't be for long.\n\nA first birthday feels like it's about the child. And of course, it is. But look around the room.\nParents are remembering the year that changed everything. Grandparents can't stop holding them. Family members are trying to make them smile. Someone is fixing the outfit. Someone else is protecting the cake.\n\nAnd the birthday child?\nThey're usually doing whatever they want.\nThat's what makes it real.\n\nWe preserve the celebration — but more importantly, the people experiencing it together.",
    vision:
      "Get the family photograph. Don't miss the family being itself.\n\nThere are photographs every birthday needs: the birthday child, parents, grandparents, family groups, cake cutting, décor, guests. We make sure those photographs are properly covered.\n\nBut between them are the moments that make the final collection personal. That's where candid photography comes in. RAKZS Studio combines the important photographs with natural moments so your birthday gallery doesn't become 100 photographs of people standing beside a stage. It becomes a record of what the celebration actually felt like.",
    approach:
      "You don't need a huge setup to keep a beautiful memory.\n\nA small first birthday at home and a large celebration at a venue don't need the same team. So we don't treat them like they do.\n\nTell us your event size, location, approximate schedule and what you want from the celebration. We'll help you choose coverage accordingly.",
    image: birthdayHero,
    gallery: [birthdayHero, weddingHero, familyPortrait, preWeddingHero, birthdayHero],
    accent: "wedding",
    deliverables: [
      "Birthday & Milestone Portraits",
      "Family Groups & Cake-Cutting Coverage",
      "Candid Moments & Guest Interactions",
      "Celebration Highlights & Social Reels",
      "Custom Keepsake Album",
    ],
    timeline: [
      "01 — Tell Us About the Event: Birthday or anniversary, date, location and approximate guest count",
      "02 — Tell Us What Matters: Family photographs, candid moments, video, reels, album or specific preferences",
      "03 — Plan the Coverage: We recommend a suitable setup based on your event and requirements",
      "04 — Celebrate: You stay present with your family and guests while we document everything",
      "05 — Receive Your Memories: Your selected photos, films and deliverables prepared with a clear delivery timeline",
    ],
    equipment: [
      {
        title: "Full-frame camera bodies",
        note: "Fast burst-rate sensors to capture fast-moving toddlers, joyful laughter, and fast candle-blowing action.",
      },
      {
        title: "Prime portrait lenses",
        note: "Ultra-sharp primes capturing vivid party colors, sparkling decorations, and expressive family eye contact.",
      },
      {
        title: "Cinematic lighting kit",
        note: "Soft flash bounce and video lighting for balanced indoor party venue lighting and cake-cutting highlights.",
      },
    ],
    sections: [
      {
        title: "The Celebrations We Cover",
        content: "Different years. Different stories worth keeping.",
        items: [
          {
            title: "First Birthdays",
            description:
              "One year old. A year nobody in the family will forget. The first smile, first steps, first words. We capture portraits and cake cutting alongside tiny expressions, parents' reactions, grandparents, and unpredictable candid moments. Because your child may not remember their first birthday — you will.",
          },
          {
            title: "Kids' Birthdays",
            description:
              "Let them be children. We'll take care of the photographs. Children rarely follow a photography plan. We photograph the important birthday moments while giving children room to actually enjoy their celebration, creating photos that feel natural.",
          },
          {
            title: "Milestone Birthdays",
            description:
              "Some birthdays deserve more than another candle. 50th, 60th, 75th or any milestone. Bringing together family, friends, children and generations to celebrate a lifetime of relationships.",
          },
          {
            title: "Anniversaries",
            description:
              "Another year together. Another reason to bring everyone back. An anniversary is about everything that happened inside those years — the couple at the centre, the family that grew around them, speeches, laughter, and candid moments.",
          },
        ],
      },
      {
        title: "Beyond the Cake",
        content: "The cake gets cut once. The moments happen everywhere.",
        items: [
          {
            title: "The Birthday Star",
            description: "Expressions, excitement, portraits and personality at the centre of the celebration.",
          },
          {
            title: "The Parents",
            description: "Especially on a first birthday, some of the strongest photographs are the parents watching their child.",
          },
          {
            title: "The Grandparents",
            description: "Generational photographs that grow more valuable with every passing year.",
          },
          {
            title: "The Family & Friends",
            description: "The people who came because the celebration matters to them too.",
          },
          {
            title: "The Unplanned",
            description: "A child reaching for cake early, a parent fixing an outfit, and friends laughing away from the stage.",
          },
        ],
      },
      {
        title: "Films & Highlights",
        content:
          "Because someday, you'll want to hear that laugh again.\n\nPhotographs preserve expressions. Film gives the celebration its sound back.\n\nThe birthday song. Parents talking to their child. Grandparents laughing. Friends shouting. The reaction when the cake arrives.\n\nDepending on your requirements, RAKZS can combine event videography with shorter cinematic highlights and reels. Something to keep. Something to share. Something to return to.",
      },
      {
        title: "Available Coverage Options",
        content: "Start simple. Add only what matters to you.",
        items: [
          {
            title: "Photography",
            description: "Birthday portraits, family photographs, cake cutting, guests and important moments.",
          },
          {
            title: "Candid Photography",
            description: "Natural expressions, interactions and everything happening away from the posed photographs.",
          },
          {
            title: "Videography",
            description: "The celebration documented in motion.",
          },
          {
            title: "Cinematic Highlights & Reels",
            description: "Shorter visual stories for remembering and sharing the occasion.",
          },
          {
            title: "Albums",
            description: "Selected birthday or anniversary photographs brought together as a physical keepsake.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide birthday photography in Hyderabad?",
        answer:
          "Yes. RAKZS Studio provides birthday photography and videography in Hyderabad, including first birthdays, children's birthdays, milestone birthdays and family celebrations. Coverage is also available across Telangana depending on the event requirements.",
      },
      {
        question: "Do you provide first birthday photography in Hyderabad?",
        answer:
          "Yes. First-birthday coverage can include the child, parents, grandparents, family portraits, décor, cake cutting, guests and candid moments throughout the celebration. Photography and video can be planned according to the size and requirements of your event.",
      },
      {
        question: "What do you cover during a first birthday?",
        answer:
          "We can cover the birthday child's portraits and expressions, parents and grandparents, family photographs, venue and décor details, cake cutting, guests and candid interactions throughout the event. The exact coverage is finalized according to your celebration.",
      },
      {
        question: "Do you provide both candid and traditional birthday photography?",
        answer:
          "Yes. Traditional event photography makes sure important family groups, stage photographs and cake cutting are properly documented. Candid photography focuses on natural expressions and interactions throughout the celebration. You can choose coverage according to what you need.",
      },
      {
        question: "Can we book only a photographer for a birthday?",
        answer:
          "Yes. You don't have to book video or additional services if you only need photography.",
      },
      {
        question: "Do you provide birthday videography?",
        answer:
          "Yes. Videography is available and can be combined with photography according to your requirements.",
      },
      {
        question: "Do you make birthday reels or cinematic highlight videos?",
        answer:
          "Yes. Short-form reels and cinematic highlights can be included depending on your selected coverage and final deliverables.",
      },
      {
        question: "Do you provide anniversary photography in Hyderabad?",
        answer:
          "Yes. RAKZS Studio covers anniversary celebrations, including couple portraits, family photographs, guests and candid moments throughout the event.",
      },
      {
        question: "Can you photograph a small birthday at home?",
        answer:
          "Yes. Coverage doesn't have to be designed only for large venues. Tell us about the celebration and we'll discuss a suitable setup for your requirements.",
      },
      {
        question: "How many photographers do we need for a birthday party?",
        answer:
          "It depends on the event size, venue, number of guests, schedule and the type of coverage you want. Once we understand your celebration, we'll recommend a suitable team instead of automatically adding unnecessary coverage.",
      },
      {
        question: "How much does birthday photography cost in Hyderabad?",
        answer:
          "Birthday photography pricing depends on the event duration, team required, photography or video coverage and the final deliverables you select. You can keep the coverage simple or add candid photography, video, reels or an album according to your requirements.",
      },
      {
        question: "Do you provide birthday albums?",
        answer: "Yes. Albums can be added according to your selected requirements.",
      },
      {
        question: "How long does it take to receive the photos and video?",
        answer:
          "Delivery depends on the amount of coverage and your selected deliverables. Once the requirements are finalized, we'll provide a clear delivery timeline.",
      },
      {
        question: "Do you cover birthdays outside Hyderabad?",
        answer:
          "Hyderabad is our primary service area, and we also cover celebrations across Telangana. Share your location while enquiring so we can discuss the event requirements.",
      },
      {
        question: "How do we book RAKZS Studio for a birthday or anniversary?",
        answer:
          "Share your event type, date, location and requirements. Once availability and coverage are finalized, we'll share the booking details and advance required to confirm the date.",
      },
    ],
  },
  {
    slug: "baby-family-celebrations",
    title: "Baby & Family Celebrations",
    category: "Family",
    location: "Hyderabad, Telangana",
    year: "2026",
    summary:
      "The smallest moments become the biggest memories. A new beginning changes the whole family. The excitement before the baby arrives. The first celebrations. Grandparents holding them. Parents discovering a hundred little expressions they'll never want to forget. Some chapters deserve to be remembered from the very beginning.",
    story:
      "Before they remember you, you'll remember everything.\n\nThe tiny hands. The way everyone wants to hold them.\nGrandparents smiling differently when the baby is in their arms.\nParents noticing expressions nobody else understands yet.\nA house suddenly filled with new routines, new sounds and more photographs than anyone planned.\n\nThese moments feel ordinary while you're living them.\nThen the child grows.\nAnd suddenly they aren't ordinary at all.\n\nWe preserve the beginning — and the family beginning it together.",
    vision:
      "Give us the smiles. Give us the chaos too.\n\nOf course we'll make the family portraits: parents with the baby, grandparents, siblings, relatives. The important groups everyone wants to have.\n\nBut a family celebration shouldn't become an endless line of people looking into a camera. Between those photographs are the moments that make the gallery personal: a parent calming the baby, grandparents playing with them, a sibling getting curious, everyone laughing because the perfect photograph didn't happen.\n\nRAKZS combines the photographs your family expects with candid moments that show what being together actually felt like.",
    approach:
      "Keep the setup comfortable. Keep the memories complete.\n\nBaby and family celebrations don't always need large production teams. Sometimes one simple photography setup is exactly right. Other celebrations may benefit from candid photography, video or a short film as well.\n\nTell us about your occasion, venue, family and what you'd like to remember. We'll help you choose coverage without adding things you don't need.",
    image: newbornHero,
    gallery: intimateGallery,
    accent: "family",
    deliverables: [
      "Baby Shower / Cradle / Naming Ceremony Coverage",
      "Parent, Grandparent & Multi-Gen Portraits",
      "Candid Family Interactions & Ritual Details",
      "Cinematic Family Highlight Film & Reels",
      "Handcrafted Family Keepsake Album",
    ],
    timeline: [
      "Tell Us the Occasion: Baby Shower, Cradle Ceremony, Naming Celebration or another family occasion",
      "Share the Details: Date, location, schedule, approximate guest count and important rituals",
      "Plan the Coverage: We recommend a suitable setup according to your celebration and requirements",
      "Be With Your Family: Enjoy the occasion. We'll take care of documenting the important moments and everything happening around them",
      "Receive Your Memories: Selected photos, films and deliverables prepared with a clear delivery timeline",
    ],
    equipment: [
      {
        title: "Full-frame camera bodies",
        note: "Silent shutter-enabled camera bodies to capture delicate baby reactions without startling or disturbing the infant.",
      },
      {
        title: "Prime portrait lenses",
        note: "Gentle, high-luminosity lenses producing soft dreamlike bokeh and warm natural light rendering.",
      },
      {
        title: "Cinematic lighting kit",
        note: "Diffused softbox lights and indirect bounce illumination safe for sensitive baby eyes.",
      },
    ],
    sections: [
      {
        title: "The Celebrations We Cover",
        content: "Different beginnings. One family growing around them.",
        items: [
          {
            title: "Baby Shower (Seemantham / Godh Bharai)",
            description:
              "Before you meet them, everyone is already celebrating them. A Baby Shower is filled with anticipation — parents waiting for what's next, grandparents preparing for another generation, family and friends gathering around a story that hasn't fully begun yet. We capture portraits and traditions alongside candid conversations and blessings.",
          },
          {
            title: "Cradle Ceremony (Uyyala / Barasala)",
            description:
              "Tiny moments. An entire family watching. The baby may be at the centre of the ceremony, but there are stories happening all around them — parents keeping everything calm, grandparents waiting for their turn, and dozens of little expressions.",
          },
          {
            title: "Naming Celebrations",
            description:
              "A name they'll carry forever. A day your family will remember. Naming celebrations bring generations together around one of the earliest chapters in a child's life. We document rituals, blessings and family photographs while staying ready for natural moments.",
          },
          {
            title: "Family Celebrations & Get-Togethers",
            description:
              "Not every memory needs a big occasion. Sometimes the reason is simply that everyone is together — a growing child, visiting grandparents, and generations finally in one place.",
          },
        ],
      },
      {
        title: "What We Look For Beyond the Ceremony",
        content: "The baby may be the reason. The family becomes the story.",
        items: [
          {
            title: "The Little Expressions",
            description: "The sleepy look, the unexpected smile, the curiosity that changes faster than anyone expects.",
          },
          {
            title: "The Parents",
            description: "Some of the strongest photographs aren't of parents looking at the camera. They're of parents looking at their child.",
          },
          {
            title: "The Grandparents",
            description: "A photograph of a baby in a grandparent's arms may become far more important to the family with time.",
          },
          {
            title: "The Generations",
            description: "One frame can hold a new beginning and decades of family history together.",
          },
          {
            title: "The Unplanned",
            description: "A baby doesn't care about the photography schedule. Some moments are better because nobody could plan them.",
          },
        ],
      },
      {
        title: "Family Films",
        content:
          "Photographs show you how little they were. Film reminds you how they moved.\n\nThe tiny sounds. The way parents talk to their baby. Grandparents calling them by a nickname. Family members laughing around them. A ceremony happening while the baby is completely unaware of how much attention they're receiving.\n\nFilm preserves something photographs can't — movement, voices and sound. Depending on your requirements, coverage can include event videography, cinematic highlights and shorter reels.",
      },
      {
        title: "Available Coverage Options",
        content: "Keep the setup comfortable. Keep the memories complete.",
        items: [
          {
            title: "Photography",
            description: "Baby, parents, family groups, rituals and important photographs.",
          },
          {
            title: "Candid Photography",
            description: "Natural expressions and family interactions throughout the celebration.",
          },
          {
            title: "Videography",
            description: "The ceremony and important family moments documented in motion.",
          },
          {
            title: "Cinematic Highlights & Reels",
            description: "Shorter emotional stories made for keeping and sharing.",
          },
          {
            title: "Albums",
            description: "Selected photographs brought together as a physical family keepsake.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do you provide Baby Shower photography in Hyderabad?",
        answer:
          "Yes. RAKZS Studio provides photography and videography for Baby Showers in Hyderabad, with coverage also available across Telangana depending on the event requirements. Coverage can include the parents-to-be, family portraits, traditions, décor, guests and candid moments throughout the celebration.",
      },
      {
        question: "What do you photograph during a Baby Shower?",
        answer:
          "Coverage can include portraits of the parents-to-be, family photographs, rituals and traditions, décor and details, guests and natural interactions throughout the celebration. The exact coverage is planned according to your event.",
      },
      {
        question: "Do you provide Baby Shower videography?",
        answer:
          "Yes. Videography can be added according to your requirements, including event coverage and shorter cinematic highlights or reels.",
      },
      {
        question: "Do you cover Cradle Ceremonies in Hyderabad?",
        answer:
          "Yes. Photography and video coverage can be arranged for Cradle Ceremonies, including rituals, baby photographs, parents, grandparents, family groups and candid moments.",
      },
      {
        question: "Do you provide Naming Ceremony photography?",
        answer:
          "Yes. Naming celebrations and related family ceremonies can be covered through photography and videography according to your requirements.",
      },
      {
        question: "Do you provide family photography along with the ceremony?",
        answer:
          "Yes. Family photographs are an important part of these celebrations and can include parents, grandparents, siblings, relatives and different generations together.",
      },
      {
        question: "Can we book only photography?",
        answer:
          "Yes. You don't need to select video, reels or albums if you only want photography. Coverage can be kept as simple as your celebration requires.",
      },
      {
        question: "Do we need candid photography for a small family function?",
        answer:
          "Not necessarily. For a small celebration, simple photography may be enough. Candid photography becomes useful when you also want natural expressions and interactions happening away from the planned photographs. Tell us about your event and we'll help you decide.",
      },
      {
        question: "Can you cover a small ceremony at home?",
        answer:
          "Yes. Coverage can be planned for intimate celebrations at home as well as larger functions at venues. The team is recommended according to the event rather than assuming every celebration needs the same setup.",
      },
      {
        question: "Do you create reels or highlight videos for baby functions?",
        answer:
          "Yes. Short-form reels and cinematic highlights can be included depending on your selected coverage and deliverables.",
      },
      {
        question: "How many photographers do we need?",
        answer:
          "That depends on the celebration size, venue, number of guests, schedule and type of coverage required. Once we understand your event, we'll recommend an appropriate setup.",
      },
      {
        question: "How much does Baby Shower photography cost in Hyderabad?",
        answer:
          "Pricing depends on the event duration, team required, photography or video coverage and your final deliverables. You can keep the coverage simple or add candid photography, video, reels or an album according to your requirements.",
      },
      {
        question: "Do you provide albums?",
        answer: "Yes. Albums can be included according to your selected requirements.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery depends on the amount of coverage and final deliverables you select. Once the requirements are finalized, we'll provide a clear delivery timeline.",
      },
      {
        question: "Do you cover baby and family celebrations outside Hyderabad?",
        answer:
          "Hyderabad is our primary service area, and we also cover celebrations across Telangana. Share your location while enquiring so we can discuss the requirements.",
      },
      {
        question: "How do we book RAKZS Studio?",
        answer:
          "Share the occasion, date, location and requirements with us. Once availability and coverage are finalized, we'll provide the booking details and advance required to confirm the date.",
      },
    ],
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
        eventSlug: "engagement-ceremony",
      },
      {
        eyebrow: "Event Type · 03",
        title: "Wedding Celebrations",
        description:
          "Different traditions. One unforgettable story. Haldi, Mehendi, Sangeet and the celebrations surrounding your wedding — captured with all their colour, laughter, movement and emotion.",
        cta: "Explore Celebrations",
        image: familyHero,
        eventSlug: "wedding-celebrations",
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
        eventSlug: "sunset-pre-wedding",
      },
      {
        eyebrow: "Couple & Save-the-Date",
        title: "One date worth remembering before the date everyone remembers.",
        description:
          "From relaxed couple portraits to creative Save-the-Date photographs and films, create something personal to share before your celebration begins.",
        cta: "Explore Couple Shoots",
        image: weddingHero,
        eventSlug: "heritage-fort-couple-shoot",
      },
    ],
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
    heroTitle: "Every family celebrates differently. Every memory deserves its own story.",
    heroDescription:
      "From meaningful traditions to joyful celebrations, we capture the people, emotions and little moments that make every family occasion worth remembering across Hyderabad and Telangana.",
    children: [
      {
        eyebrow: "Event Type · 01",
        title: "Traditional Ceremonies",
        description:
          "Traditions that connect generations. From Half Saree and Dhoti ceremonies to Housewarmings, Naming Ceremonies and other family traditions — we preserve the rituals, people and emotions that make them meaningful.",
        cta: "Explore Ceremonies",
        image: familyPortrait,
        eventSlug: "traditional-ceremonies",
      },
      {
        eyebrow: "Event Type · 02",
        title: "Birthdays & Anniversaries",
        description:
          "Another year. Another chapter worth keeping. From a child's first birthday to milestone celebrations and anniversaries, we capture the laughter, family and little moments happening around the occasion.",
        cta: "Explore Celebrations",
        image: birthdayHero,
        eventSlug: "birthdays-anniversaries",
      },
      {
        eyebrow: "Event Type · 03",
        title: "Baby & Family Celebrations",
        description:
          "Little beginnings. Big memories. From Baby Showers and Cradle Ceremonies to celebrations welcoming a new member of the family — captured through the details, emotions and people surrounding them.",
        cta: "Explore Family Celebrations",
        image: newbornHero,
        eventSlug: "baby-family-celebrations",
      },
    ],
    seo: {
      title: "Every family celebrates differently. Every memory deserves its own story.",
      paragraphs: [
        "Some celebrations are built around traditions. Others are simply about bringing everyone you love into one place.",
        "Whatever the occasion, the photographs that matter later are often more than the planned ones — a grandparent's expression, a child being themselves, parents watching from across the room, or generations together in one frame.",
        "From family function photography in Hyderabad and candid moments to professional videography and cinematic highlights, RAKZS Studio creates coverage around the way your celebration happens.",
      ],
      note: "We photograph traditional ceremonies, birthdays, anniversaries, baby celebrations and family events across Hyderabad and Telangana, with coverage planned around the occasion and the moments that matter to your family.",
      cta: "Explore Packages",
    },
    bottomCta: {
      title: "Your family. Your moments. Your story.",
      description:
        "Tell us what you're celebrating and we'll help you find the right coverage for your occasion.",
      primary: "Check Your Date",
      secondary: "Explore Packages",
    },
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
        eventSlug: "corporate-conference",
      },
      {
        eyebrow: "Conferences & Business Events",
        title: "When the room matters, every moment does too.",
        description:
          "From speakers and presentations to audience interactions, networking and key moments, we document conferences, seminars and professional gatherings with clean, purposeful coverage.",
        cta: "Explore Business Events",
        image: editorialHero,
        eventSlug: "corporate-headshots",
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
        eventSlug: "personal-branding",
      },
      {
        eyebrow: "Product & Promotional",
        title: "Make the product the reason they stop scrolling.",
        description:
          "Clean product photography and promotional visual content designed to present what you sell with clarity, detail and personality.",
        cta: "Explore Commercial Work",
        image: productHero,
        eventSlug: "product-photography",
      },
      {
        eyebrow: "Social Media Content",
        title: "Made for the screen your customers use every day.",
        description:
          "Photography, short-form videos, reels and campaign content created for businesses that need a consistent visual presence online.",
        cta: "Explore Social Content",
        image: editorialHero,
        eventSlug: "fashion-editorial",
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
