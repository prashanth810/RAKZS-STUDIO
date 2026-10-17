/**
 * ============================================================================
 *  RAKZS STUDIO — SUB-PAGE CONTENT  (single source of truth)
 * ============================================================================
 *  Every sub-page (the single-page UI that opens from the category page) is
 *  defined here, FULLY written out. Nothing is shared between pages, so you can
 *  edit one page without touching any other.
 *
 *  HOW TO UPDATE
 *  - Find the page by its  slug  (search for  slug: "corporate-events"  etc.)
 *  - Change any text, image, FAQ, package card, service item or step in place.
 *  - To add a FAQ / step / service: copy one line and edit it.
 *  - Use  \n  inside a title to force a line break.
 *  - Wrap words in **double stars** inside a paragraph to make them bold.
 *  - Images: swap the import at the top of the file (or point to a new file in
 *    src/assets). The first gallery image is shown large, the next two stacked.
 *
 *  ORDER = the order the pages appear on their category page.
 *
 *  1. Wedding & Engagement   -> wedding · engagement-reception · wedding-celebrations
 *  2. Pre-Wedding / Couple   -> pre-wedding-shoot · couple-shoot-save-the-date
 *  3. Family Function        -> traditional-ceremonies · birthdays-anniversaries · baby-family-celebrations
 *  4. Corporate / Business   -> corporate-events · conferences-business-events
 *  5. Commercial / Creative  -> personal-branding · product-photography · commercial-promotional-videos
 * ============================================================================
 */
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

/** Icons available for the "Available when you need them" list. */
export type SubPageIcon =
  | "camera"
  | "users"
  | "video"
  | "clapperboard"
  | "drone"
  | "reels"
  | "album"
  | "live"
  | "led"
  | "heart"
  | "gift"
  | "mic"
  | "briefcase"
  | "phone"
  | "light"
  | "palette"
  | "music"
  | "package";

export type SubPage = {
  /** URL: /events/<slug> */
  slug: string;
  /** Which category page this sub-page belongs to (matches serviceCategories slug) */
  categorySlug: string;

  /** Small card shown on the category page */
  card: { eyebrow: string; title: string; description: string; cta: string; image: string };

  /** Browser tab title + search description */
  seo: { title: string; description: string };

  /** Top banner */
  hero: {
    kicker: string;
    title: string;
    description: string;
    cta: string;
    location: string;
    image: string;
    /** optional: smaller headline + paragraph for long hero text */
    compact?: boolean;
  };

  /** Left column text blocks (1st block = "The Story"). cta.to: gallery | packages | contact */
  blocks: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cta?: { label: string; to: "gallery" | "packages" | "contact" };
  }[];

  /** Right column — coverage card */
  sidebar: {
    kicker: string;
    title: string;
    paragraphs: string[];
    listTitle: string;
    services: { icon: SubPageIcon; label: string }[];
    note: string;
    primaryCta: string;
    secondaryCta?: string;
  };

  /** Right column — "From hello to delivery" steps */
  process: {
    kicker: string;
    title: string;
    steps: { title: string; text: string }[];
    /** optional line shown under the steps */
    note?: string;
  };

  /** Gallery row (separate full-width row) */
  gallery: {
    kicker: string;
    title: string;
    description: string;
    /** optional button under the gallery — leave out to hide it */
    cta?: string;
    images: string[];
  };

  /** Package starting points (separate row) */
  packages: {
    kicker: string;
    title: string;
    description: string;
    items: { title: string; tagline?: string; description: string; cta: string }[];
    /** optional quotation button (use with items: [] for a quote-only section) */
    cta?: string;
    /** optional "Need something different? Make Your Own →" line */
    footerLink?: { prefix: string; label: string };
    /** optional small note under the package cards */
    note?: string;
  };

  /** FAQ (separate row, one open at a time, first open by default) */
  faqs: {
    kicker: string;
    title: string;
    items: { question: string; answer: string }[];
  };
};

export const subPages: SubPage[] = [
  // ==========================================================================
  // 1 · WEDDING & ENGAGEMENT  →  Wedding
  // ==========================================================================
  {
    slug: "wedding",
    categorySlug: "wedding-engagement",
    card: {
      eyebrow: "Event Type · 01",
      title: "Wedding",
      description:
        "One day filled with a lifetime of emotions. From the quiet moments before the ceremony to the rituals, laughter, tears and celebrations around you — we preserve your wedding as it truly felt.",
      cta: "Explore Wedding",
      image: weddingHero,
    },
    seo: {
      title: "Wedding Photographers in Hyderabad",
      description:
        "Wedding photography and videography in Hyderabad by RAKZS Studio. Traditional rituals, candid moments, cinematic films and flexible wedding coverage.",
    },
    hero: {
      kicker: "Weddings",
      title: "Some days pass.\nYour wedding stays with you forever.",
      description:
        "Months of preparation become a few unforgettable hours. The rituals. The nervous smiles. The people you love. And the moments you never noticed while they were happening. We preserve your wedding so you can experience those memories again.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: weddingHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "While you're living your wedding, a hundred other stories are unfolding.",
        paragraphs: [
          "You're standing at the mandapam, surrounded by rituals and blessings.",
          "Somewhere nearby, your parents are watching with emotions they can't quite explain. Your friends are laughing. Your family is sharing a moment you may never see yourself.",
          "You can't witness everything on your wedding day.",
          "But one day, your photographs can show you what you missed.",
        ],
      },
      {
        kicker: "Wedding Photography",
        title: "The photographs you plan for. And the moments you never expected.",
        paragraphs: [
          "Traditional photography preserves your rituals, family portraits and important ceremonies. Candid photography captures the laughter, expressions and emotions unfolding naturally.",
          "Together, they tell the story of your wedding.",
        ],
      },
      {
        kicker: "Wedding Films",
        title: "Years later, you'll want to hear those voices again.",
        paragraphs: [
          "The sound of the wedding music. A parent's blessing. Your friends cheering.",
          "Traditional videography and cinematic wedding films bring back the movement, voices and atmosphere that photographs alone cannot preserve.",
        ],
      },
    ],
    sidebar: {
      kicker: "Your Wedding, Your Way",
      title: "Your wedding is unique. Your coverage should be too.",
      paragraphs: [
        "Some weddings need straightforward photography and video. Others need a larger team across several functions.",
        "Tell us what you're planning. We'll help you choose coverage that fits your celebration.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Traditional Videography" },
        { icon: "clapperboard", label: "Cinematography" },
        { icon: "drone", label: "Drone Coverage" },
        { icon: "reels", label: "Wedding Teasers & Reels" },
        { icon: "album", label: "Albums" },
        { icon: "live", label: "Live Streaming" },
        { icon: "led", label: "LED Screen" },
      ],
      note: "Choose individual services, select a package or create your own combination.",
      primaryCta: "Build Your Coverage",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can enjoy what's in front of you.",
      steps: [
        { title: "Enquire", text: "Share your wedding date, location and functions." },
        { title: "Understand", text: "We discuss your priorities and requirements." },
        { title: "Plan", text: "We plan your team and coverage." },
        { title: "Capture", text: "We document your wedding celebrations." },
        { title: "Refine & Deliver", text: "We prepare your agreed photographs and films." },
      ],
      note: "Delivery timelines are confirmed according to your requirements.",
    },
    gallery: {
      kicker: "Real Weddings",
      title: "Frames from real weddings.",
      description:
        "Every wedding has a story that belongs only to its family. A glimpse into the real weddings we've captured.",
      images: [weddingHero, preWeddingHero, familyPortrait],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Every wedding deserves coverage that feels right for its celebration. Choose a starting point, then customize according to your functions and requirements.",
      items: [
        {
          title: "The Essentials",
          description:
            "The important moments, captured through straightforward photography and video.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          description:
            "More photography and film coverage for the people, rituals and celebrations around your wedding.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          description:
            "Broader photography and cinematic coverage for weddings with multiple functions and larger requirements.",
          cta: "View Package",
        },
      ],
      footerLink: { label: "Make Your Own", prefix: "Need something different?" },
    },
    faqs: {
      kicker: "Wedding FAQs",
      title: "Questions couples ask us.",
      items: [
        {
          question: "How much does wedding photography cost in Hyderabad?",
          answer:
            "Wedding photography pricing depends on the number of functions, coverage duration, team size and selected photography or video services. RAKZS Studio offers wedding packages and customizable coverage based on your requirements.",
        },
        {
          question: "Should we choose candid photography, traditional photography or both?",
          answer:
            "Traditional photography preserves rituals, family portraits and important planned moments. Candid photography captures natural expressions and unexpected emotions. Choosing both provides a more complete record of your wedding.",
        },
        {
          question: "Can one team cover our entire wedding, including multiple functions?",
          answer:
            "Coverage can be planned across multiple wedding functions. The required team depends on your schedule, locations, guest count and whether events happen simultaneously.",
        },
        {
          question: "Can we customize our wedding package instead of booking every service?",
          answer:
            "Yes. You can start with a package or choose individual services such as photography, videography, cinematography, albums and other available coverage options.",
        },
        {
          question: "When will we receive our wedding photographs and films?",
          answer:
            "Delivery depends on the agreed photographs, videos, cinematic films and albums. Your expected delivery timeline and final deliverables will be confirmed before booking.",
        },
      ],
    },
  },

  // ==========================================================================
  // 1 · WEDDING & ENGAGEMENT  →  Engagement & Reception
  // ==========================================================================
  {
    slug: "engagement-reception",
    categorySlug: "wedding-engagement",
    card: {
      eyebrow: "Event Type · 02",
      title: "Engagement & Reception",
      description:
        "The beginning. The celebration. Everything in between. From exchanging rings to celebrating with everyone you love, we capture the people, emotions and energy that make these occasions unforgettable.",
      cta: "Explore Events",
      image: preWeddingHero,
    },
    seo: {
      title: "Engagement & Reception Photography in Hyderabad",
      description:
        "Engagement and reception photography and videography in Hyderabad by RAKZS Studio. Ring ceremonies, couple portraits, family photographs and cinematic films.",
    },
    hero: {
      kicker: "Engagement & Reception",
      title: "One beautiful beginning.\nA celebration everyone becomes part of.",
      description:
        "A ring exchanged. Two families coming together. A room filled with familiar faces. From the excitement of an engagement to the joy of a reception, we preserve the people and moments that make the occasion yours.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: preWeddingHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "The celebration is about the two of you. The memories belong to everyone there.",
        paragraphs: [
          "An engagement begins with anticipation — a promise, a ring and the happiness of families coming together.",
          "A reception brings a different kind of joy. Friends arrive, relatives reunite and the room fills with conversations and laughter.",
          "Years later, the photographs should remind you not only of the occasion, but of everyone who shared it with you.",
        ],
      },
      {
        kicker: "Engagement & Reception Photography",
        title: "Beautiful portraits for your home. Real moments for your memories.",
        paragraphs: [
          "From ring exchanges and couple portraits to stage photographs and family gatherings, traditional photography preserves the important moments.",
          "Candid photography captures the laughter and natural interactions happening around them.",
        ],
      },
      {
        kicker: "Engagement & Reception Films",
        title: "The evening ends. The applause and laughter can live on.",
        paragraphs: [
          "Your entrance music. The applause during the ring exchange. A heartfelt speech. Friends celebrating together.",
          "Traditional videography and cinematic films preserve the sounds, movement and atmosphere of the occasion.",
        ],
      },
    ],
    sidebar: {
      kicker: "Your Event, Your Way",
      title: "A quiet engagement and a grand reception deserve different plans.",
      paragraphs: [
        "Some celebrations are intimate. Others bring hundreds of guests together.",
        "Tell us about your venue, schedule and priorities. We'll help you choose coverage that fits the occasion.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Traditional Videography" },
        { icon: "clapperboard", label: "Cinematography" },
        { icon: "drone", label: "Drone Coverage" },
        { icon: "reels", label: "Teasers & Reels" },
        { icon: "album", label: "Albums" },
        { icon: "live", label: "Live Streaming" },
        { icon: "led", label: "LED Screen" },
      ],
      note: "Choose individual services, start with a package or create your own combination.",
      primaryCta: "Build Your Coverage",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can enjoy the evening.",
      steps: [
        { title: "Enquire", text: "Share your date, venue and event." },
        { title: "Understand", text: "We discuss your schedule and priorities." },
        { title: "Plan", text: "We plan the agreed team and coverage." },
        { title: "Capture", text: "We document your important moments and celebrations." },
        { title: "Refine & Deliver", text: "We prepare your selected photographs and films." },
      ],
      note: "Delivery timelines are confirmed according to your requirements.",
    },
    gallery: {
      kicker: "Real Engagements & Receptions",
      title: "Frames from real engagements & receptions.",
      description:
        "Every celebration looks different when the people make it their own. A glimpse into the engagements and receptions we've captured.",
      images: [preWeddingHero, weddingHero, familyPortrait],
    },
    packages: {
      kicker: "Celebration Coverage",
      title: "A starting point. Not a restriction.",
      description:
        "The right coverage for the way you're celebrating. Choose a suitable starting package and adjust the services to match your event.",
      items: [
        {
          title: "The Essentials",
          description: "Straightforward photography and video coverage for intimate celebrations.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          description: "Expanded photography and film coverage for larger family gatherings.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          description:
            "Broader photography and cinematic coverage for grand receptions and multiple functions.",
          cta: "View Package",
        },
      ],
      footerLink: { label: "Make Your Own", prefix: "Need something different?" },
      note: "Final package suitability depends on the functions and requirements.",
    },
    faqs: {
      kicker: "Engagement & Reception FAQs",
      title: "Questions families ask us.",
      items: [
        {
          question: "What photographs are usually covered during an engagement ceremony?",
          answer:
            "Engagement coverage can include the ring exchange, couple portraits, family photographs, ceremony details and candid moments. The priorities can be discussed before the event.",
        },
        {
          question: "Can you photograph our reception stage and all our important family groups?",
          answer:
            "Yes. Stage portraits and family group photographs can be planned alongside candid coverage. Sharing your important group-photo requirements helps us prepare.",
        },
        {
          question: "Do you provide cinematic videos for engagement and reception events?",
          answer:
            "Yes. Traditional videography and cinematic coverage are available. You can discuss the type of film or highlights you want when choosing your coverage.",
        },
        {
          question: "How many photographers do we need for a large reception?",
          answer:
            "It depends on the number of guests, venue layout, event schedule and coverage priorities. Larger receptions may need additional photographers, particularly when stage portraits and candid moments happen simultaneously.",
        },
        {
          question: "Can we combine engagement and reception coverage with our wedding booking?",
          answer:
            "Yes. Share your complete schedule so we can discuss coverage across the engagement, wedding and reception, including team requirements and deliverables.",
        },
      ],
    },
  },

  // ==========================================================================
  // 1 · WEDDING & ENGAGEMENT  →  Wedding Celebrations
  // ==========================================================================
  {
    slug: "wedding-celebrations",
    categorySlug: "wedding-engagement",
    card: {
      eyebrow: "Event Type · 03",
      title: "Wedding Celebrations",
      description:
        "Different traditions. One unforgettable story. Haldi, Mehendi, Sangeet and the celebrations surrounding your wedding — captured with all their colour, laughter, movement and emotion.",
      cta: "Explore Celebrations",
      image: familyPortrait,
    },
    seo: {
      title: "Haldi, Mehendi & Sangeet Photography Hyderabad",
      description:
        "Haldi, Mehendi and Sangeet photography and videography in Hyderabad by RAKZS Studio. Traditional, candid and cinematic coverage for wedding celebrations.",
    },
    hero: {
      kicker: "Wedding Celebrations",
      title: "Before the wedding comes everything that makes it unforgettable.",
      description:
        "Haldi on your face. Mehendi on your hands. Music getting louder. Family coming together. These aren't simply events before the wedding. They're part of your story too.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: familyPortrait,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "Sometimes the best memories happen before the main event.",
        paragraphs: [
          "The Haldi that became a colour fight. The Mehendi where everyone sat together. The Sangeet performance somebody secretly practised for weeks.",
          "Every family celebrates differently.",
          "We preserve the traditions, people and moments that make these celebrations unforgettable.",
        ],
      },
      {
        kicker: "Wedding Celebration Photography",
        title: "Every tradition. Every expression. Every celebration.",
        paragraphs: [
          "From Haldi rituals and Mehendi details to Sangeet performances and family portraits, traditional and candid photography capture both the important moments and the spontaneous ones.",
        ],
      },
      {
        kicker: "Wedding Celebration Films",
        title: "Some celebrations refuse to stand still.",
        paragraphs: [
          "The music, performances, laughter and energy of the room.",
          "From traditional video to cinematic highlights, films bring the movement and atmosphere of your celebrations back to life.",
        ],
      },
    ],
    sidebar: {
      kicker: "Your Functions, Your Way",
      title: "One function or five. We'll build around it.",
      paragraphs: [
        "Some families need coverage for one Haldi or Sangeet. Others want a complete team across multiple celebrations.",
        "Tell us your functions, locations and schedule. We'll help plan coverage that suits your requirements.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Traditional Videography" },
        { icon: "clapperboard", label: "Cinematography" },
        { icon: "drone", label: "Drone Coverage" },
        { icon: "reels", label: "Wedding Teasers & Reels" },
        { icon: "album", label: "Albums" },
        { icon: "live", label: "Live Streaming" },
        { icon: "led", label: "LED Screen" },
      ],
      note: "Choose individual services, combine multiple functions or create your own coverage.",
      primaryCta: "Build Your Coverage",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can enjoy every function.",
      steps: [
        { title: "Enquire", text: "Share your dates, locations and functions." },
        { title: "Understand", text: "We discuss your schedule and priorities." },
        { title: "Plan", text: "We plan the agreed team and coverage." },
        { title: "Capture", text: "We document your rituals and celebrations." },
        { title: "Refine & Deliver", text: "We prepare your selected photographs and films." },
      ],
      note: "Delivery timelines are confirmed according to the final requirements.",
    },
    gallery: {
      kicker: "Real Wedding Celebrations",
      title: "Frames from real wedding celebrations.",
      description:
        "Every celebration has its own story. A glimpse into the traditions, emotions and celebrations we've captured.",
      images: [familyPortrait, weddingHero, preWeddingHero],
    },
    packages: {
      kicker: "One Wedding. Multiple Celebrations.",
      title: "A starting point. Not a restriction.",
      description:
        "Plan the coverage together. Whether you're planning one function or several, our packages offer a starting point with room to customize.",
      items: [
        {
          title: "The Essentials",
          description: "Straightforward photography and video coverage for selected functions.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          description: "Expanded photography and film coverage across more celebrations.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          description: "Broader photo and cinematic coverage for multi-function weddings.",
          cta: "View Package",
        },
      ],
      footerLink: { label: "Make Your Own", prefix: "Need something different?" },
      note: "Final coverage depends on the selected functions, team and requirements.",
    },
    faqs: {
      kicker: "Wedding Celebration FAQs",
      title: "Questions families ask us.",
      items: [
        {
          question: "Do you provide Haldi, Mehendi and Sangeet photography in Hyderabad?",
          answer:
            "Yes. RAKZS Studio provides photography and video coverage for these celebrations in Hyderabad and across Telangana.",
        },
        {
          question: "Can we book coverage for only one wedding function?",
          answer:
            "Yes. You can book coverage for an individual Haldi, Mehendi, Sangeet or another wedding celebration.",
        },
        {
          question: "Can you cover multiple wedding functions together?",
          answer:
            "Yes. Share your dates, locations and schedule so we can plan the appropriate team and coverage.",
        },
        {
          question: "Do you provide candid photography, cinematic videos and reels?",
          answer:
            "Yes. These options are available depending on the services and deliverables selected for your celebrations.",
        },
        {
          question: "How do we check availability and confirm our booking?",
          answer:
            "Share your functions, dates, venues and requirements. Once availability and coverage are finalized, we'll provide the quotation and booking details.",
        },
      ],
    },
  },

  // ==========================================================================
  // 2 · PRE-WEDDING / COUPLE  →  Pre-Wedding Shoot
  // ==========================================================================
  {
    slug: "pre-wedding-shoot",
    categorySlug: "pre-wedding-couple",
    card: {
      eyebrow: "Pre-Wedding",
      title: "Pre-Wedding Shoot",
      description:
        "A thoughtfully planned photo and film experience built around the two of you — your personalities, your connection and the way you want your story to feel.",
      cta: "Explore Pre-Wedding",
      image: preWeddingHero,
    },
    seo: {
      title: "Pre-Wedding Shoot Photography & Films in Hyderabad",
      description:
        "Pre-wedding photo and film shoots in Hyderabad and Telangana — relaxed, personal and planned around the two of you, not a checklist of poses.",
    },
    hero: {
      kicker: "Pre-Wedding",
      title: "Before the vows,\nthere's your story.",
      description:
        "Away from the schedules, the rituals and the crowds, this is time for just the two of you. A shoot that feels relaxed, personal and true to the way you actually are together.",
      cta: "Plan Your Shoot",
      location: "Hyderabad & Telangana",
      image: preWeddingHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "You don't need to be\nmodels. You just need to be you.",
        paragraphs: [
          "Most couples feel a little awkward before a pre-wedding shoot. That's normal. Nobody walks into one knowing exactly what to do with their hands.",
          "So we don't hand you a list of poses. We give you a place, a direction and a little time — and let the real moments happen. The inside joke. The look you only give each other. The laugh that comes when something goes slightly wrong.",
          "**Those are the photographs you'll actually keep.**",
        ],
      },
      {
        kicker: "Pre-Wedding Photography",
        title: "Portraits that feel like\nyou, not like a template.",
        paragraphs: [
          "We plan locations, outfits and timing around your story — whether that's a heritage fort at sunrise, a lakeside at golden hour, a quiet city street or somewhere that matters to the two of you. Portraits are relaxed, natural and styled lightly so you still look like yourselves.",
        ],
        cta: { label: "View Pre-Wedding Photography", to: "gallery" },
      },
      {
        kicker: "Pre-Wedding Films",
        title: "A short film of the two of you,\nmade to be shared.",
        paragraphs: [
          "A pre-wedding film adds movement, music and atmosphere. It can be played at your wedding, shared with family or kept for yourselves. We shape it around your personalities — playful, romantic, cinematic or somewhere in between.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Shoot, Your Way",
      title: "Tell us your story.\nWe'll plan the day around it.",
      paragraphs: [
        "Some couples want a simple half-day shoot at one location. Others want a themed, multi-location experience with outfit changes and a film.",
        "Share how you met, what you enjoy together and what you want the shoot to feel like. We'll help you choose a location, timing and format.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Couple Portrait Photography" },
        { icon: "users", label: "Candid Moments" },
        { icon: "clapperboard", label: "Cinematic Pre-Wedding Film" },
        { icon: "video", label: "Behind-the-Scenes Video" },
        { icon: "drone", label: "Drone Coverage" },
        { icon: "reels", label: "Reels & Teasers" },
        { icon: "light", label: "Lighting & Styling Support" },
        { icon: "album", label: "Albums & Prints" },
        { icon: "heart", label: "Location & Concept Guidance" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can just enjoy each other.",
      steps: [
        {
          title: "Enquire",
          text: "Tell us your wedding date, preferred places and the kind of shoot you imagine.",
        },
        {
          title: "Understand",
          text: "We talk about your personalities, your story and what you want the final photos and film to feel like.",
        },
        { title: "Plan", text: "We help finalise the location, timing, outfits and concept." },
        {
          title: "Capture",
          text: "On the day, we guide lightly and let the natural moments lead.",
        },
        {
          title: "Refine & Deliver",
          text: "Your photographs and film are edited with care. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Couples",
      title: "Frames from real pre-wedding shoots.",
      description: "Every couple has their own story. Here's a glimpse into a few of ours.",
      cta: "View Our Shoots",
      images: [preWeddingHero, weddingHero, familyHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Every couple wants something different from their shoot. Our packages give you an easy place to start, and everything can be adjusted around your plans.",
      items: [
        {
          title: "The Essentials",
          tagline: "A simple, beautiful shoot.",
          description: "Photography at one location, with a focused set of edited photographs.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          tagline: "Photos and a film.",
          description:
            "Photography plus a short cinematic film, with time for a second look or outfit change.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          tagline: "The complete pre-wedding experience.",
          description:
            "Multiple locations, outfit changes, drone and a full cinematic film planned around your story.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Pre-Wedding FAQs",
      title: "Questions couples ask us.",
      items: [
        {
          question: "How much does a pre-wedding shoot cost in Hyderabad?",
          answer:
            "It depends on the locations, duration, whether you want a film, and any extras like drone or styling. Share your plans and we'll suggest a package that fits.",
        },
        {
          question: "We're not comfortable in front of a camera. Will that be a problem?",
          answer:
            "Not at all. Most couples feel that way at first. We give gentle direction and plenty of space, and the awkwardness usually disappears within the first twenty minutes.",
        },
        {
          question: "Can you suggest locations?",
          answer:
            "Yes. We'll suggest places around Hyderabad and Telangana based on your style and the time of year. You can also bring your own idea.",
        },
        {
          question: "Can we do both a photo shoot and a film?",
          answer:
            "Yes. You can choose photography, a film or both. Combining them on the same day usually works well and saves time.",
        },
        {
          question: "Do we need to bring our own outfits and props?",
          answer:
            "You choose the outfits. We can advise on colours that work well with the location. Props are optional and we're happy to discuss ideas.",
        },
        {
          question: "How do we book?",
          answer:
            "Send us your wedding date, preferred shoot window and a few ideas through the enquiry form. We'll check availability and plan from there.",
        },
      ],
    },
  },

  // ==========================================================================
  // 2 · PRE-WEDDING / COUPLE  →  Couple Shoot / Save-the-Date
  // ==========================================================================
  {
    slug: "couple-shoot-save-the-date",
    categorySlug: "pre-wedding-couple",
    card: {
      eyebrow: "Couple & Save-the-Date",
      title: "Couple Shoot / Save-the-Date",
      description:
        "From relaxed couple portraits to creative Save-the-Date photographs and films, create something personal to share before your celebration begins.",
      cta: "Explore Couple Shoots",
      image: weddingHero,
    },
    seo: {
      title: "Couple Shoot & Save-the-Date Photography in Hyderabad",
      description:
        "Couple portrait sessions and Save-the-Date photographs and films in Hyderabad and Telangana — short, personal and made to share.",
    },
    hero: {
      kicker: "Couple & Save-the-Date",
      title: "One date worth remembering\nbefore the date everyone remembers.",
      description:
        "A shorter, simpler session for couples. Whether it's a creative Save-the-Date, an anniversary portrait or simply a reason to spend a few quiet hours together, it's yours to make personal.",
      cta: "Plan Your Shoot",
      location: "Hyderabad & Telangana",
      image: weddingHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "Small shoot. Big first impression.",
        paragraphs: [
          "A Save-the-Date is often the first thing your guests see about your wedding. It sets the tone before a single invitation is opened — warm, playful, traditional or modern.",
          "But a couple shoot isn't only for wedding announcements. It's also for newly married couples, anniversaries, engagements and anyone who wants to be photographed together without a big occasion around it.",
          "**You bring the two of you. We bring the direction.**",
        ],
      },
      {
        kicker: "Couple Photography",
        title: "Relaxed portraits for\ntwo people who know each other well.",
        paragraphs: [
          "A short session at one or two locations, planned around light and mood. Poses are gentle and natural, with time for the in-between moments — walking, laughing, adjusting each other's clothes.",
        ],
        cta: { label: "View Couple Photography", to: "gallery" },
      },
      {
        kicker: "Save-the-Date Films",
        title: "A short video for\nthe people on your guest list.",
        paragraphs: [
          "A Save-the-Date film can be a few seconds or a minute long. It's made to be shared on messaging apps, social media or a wedding website — and designed to look good on a phone screen first.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Shoot, Your Way",
      title: "Keep it simple.\nOr make it creative.",
      paragraphs: [
        "A couple shoot can be as short as an hour at a single location. A Save-the-Date can be a still photo, a reel or a short film.",
        "Tell us what it's for and how you'll share it. We'll recommend the format and timing that works.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Couple Portrait Photography" },
        { icon: "heart", label: "Save-the-Date Photographs" },
        { icon: "clapperboard", label: "Save-the-Date Films" },
        { icon: "reels", label: "Reels for Social Media" },
        { icon: "users", label: "Candid Moments" },
        { icon: "light", label: "Lighting & Styling Support" },
        { icon: "drone", label: "Drone Shots" },
        { icon: "album", label: "Prints & Albums" },
        { icon: "phone", label: "Phone-Ready Exports" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo it stays easy for you.",
      steps: [
        { title: "Enquire", text: "Tell us what the shoot is for and when you need it by." },
        {
          title: "Understand",
          text: "We learn about the two of you and the mood you want for the photographs or film.",
        },
        { title: "Plan", text: "We pick a location, timing and format, and keep the plan simple." },
        {
          title: "Capture",
          text: "A relaxed session with light direction, built around natural moments.",
        },
        {
          title: "Refine & Deliver",
          text: "Selected photographs and films are edited and prepared. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Couples",
      title: "Frames from real couple shoots.",
      description: "Every couple has their own story. Here's a glimpse into a few of ours.",
      cta: "View Our Shoots",
      images: [weddingHero, preWeddingHero, familyHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Whether it's a quick portrait session or a full Save-the-Date film, our packages give you an easy place to start and can be adjusted to what you need.",
      items: [
        {
          title: "The Essentials",
          tagline: "A short, simple session.",
          description: "One location and a focused set of edited couple photographs.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          tagline: "Photos plus a short video.",
          description:
            "Couple photography with a Save-the-Date reel or short film made for sharing.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          tagline: "The complete announcement.",
          description:
            "Multiple looks or locations, a cinematic Save-the-Date film and extra social media cuts.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Couple Shoot FAQs",
      title: "Questions couples ask us.",
      items: [
        {
          question: "What's the difference between a couple shoot and a pre-wedding shoot?",
          answer:
            "A couple shoot is shorter and simpler, usually one or two locations. A pre-wedding shoot is a larger experience with more planning, locations, outfits and often a film. Both are personal and flexible.",
        },
        {
          question: "How long does a couple shoot take?",
          answer:
            "Most sessions take between one and three hours, depending on the number of locations and looks. We plan it with you beforehand.",
        },
        {
          question: "Can you make a Save-the-Date video for social media?",
          answer:
            "Yes. We make short videos in vertical and standard formats so they play well on phones and messaging apps.",
        },
        {
          question: "Can we use the photos on our invitation?",
          answer:
            "Yes. The edited photographs are yours to use for invitations, wedding websites and sharing with family and friends.",
        },
        {
          question: "Do we need to book far in advance?",
          answer:
            "It helps. If your Save-the-Date has a deadline, tell us when you need it and we'll plan backwards from there.",
        },
        {
          question: "How do we book?",
          answer:
            "Send us your preferred dates and a few ideas through the enquiry form. We'll confirm availability and go from there.",
        },
      ],
    },
  },

  // ==========================================================================
  // 3 · FAMILY FUNCTION  →  Traditional Ceremonies
  // ==========================================================================
  {
    slug: "traditional-ceremonies",
    categorySlug: "family-function",
    card: {
      eyebrow: "Event Type · 01",
      title: "Traditional Ceremonies",
      description:
        "Traditions that connect generations. From Half Saree and Dhoti ceremonies to Housewarmings, Naming Ceremonies and other family traditions — we preserve the rituals, people and emotions that make them meaningful.",
      cta: "Explore Ceremonies",
      image: familyPortrait,
    },
    seo: {
      title: "Traditional Ceremony Photography in Hyderabad",
      description:
        "Photography and videography for Half Saree, Dhoti, Housewarming, Naming and other traditional family ceremonies across Hyderabad and Telangana.",
    },
    hero: {
      kicker: "Traditional Ceremonies",
      title: "Some traditions only\nhappen once.",
      description:
        "A Half Saree. A Dhoti ceremony. A new home. A name given for the first time. These are moments families talk about for decades — we make sure there's something to look back on.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: familyPortrait,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "The ritual is the centre.\nThe family is the story.",
        paragraphs: [
          "At a traditional ceremony, the priest is chanting, the elders are guiding and the child or couple at the centre of it all is trying to remember what to do next. Meanwhile, grandparents are watching with pride, aunts are adjusting clothes and children are running through the crowd.",
          "Every family does these ceremonies a little differently, and every one of those differences matters.",
          "**We learn your traditions and cover them with respect.**",
          "So years from now, the rituals — and the people who made them happen — are all there.",
        ],
      },
      {
        kicker: "Ceremony Photography",
        title: "Every ritual, every blessing,\nevery face in the room.",
        paragraphs: [
          "We document the rituals in order, family portraits and group photographs, the decorations and details, and the candid moments between the formal ones. We ask about specific people and ceremonies you want covered and plan around them.",
        ],
        cta: { label: "View Ceremony Photography", to: "gallery" },
      },
      {
        kicker: "Ceremony Films",
        title: "The mantras, the music\nand the voices of the elders.",
        paragraphs: [
          "Many of these ceremonies feel as meaningful to hear as to see. Video preserves the chanting, the blessings, the conversations and the atmosphere in the room — as a full ceremony record, a highlight film or both.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Ceremony, Your Way",
      title: "Tell us your tradition.\nWe'll plan around it.",
      paragraphs: [
        "Ceremonies range from small family gatherings at home to larger functions in a hall with a full guest list.",
        "Share the ceremony, the timing and the people who matter most. We'll suggest coverage that respects the rituals and keeps the day relaxed.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Traditional Videography" },
        { icon: "clapperboard", label: "Cinematic Highlight Film" },
        { icon: "drone", label: "Drone Coverage (Where Possible)" },
        { icon: "reels", label: "Teasers & Reels" },
        { icon: "album", label: "Albums" },
        { icon: "live", label: "Live Streaming for Relatives" },
        { icon: "led", label: "LED Screen" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can be present for the ritual.",
      steps: [
        { title: "Enquire", text: "Tell us the ceremony, date, venue and who will be attending." },
        {
          title: "Understand",
          text: "We learn about your family's traditions, the order of rituals and the people you want captured.",
        },
        { title: "Plan", text: "We plan positions, timing and team size around the ceremony." },
        {
          title: "Capture",
          text: "We cover each ritual quietly, without interrupting the proceedings.",
        },
        {
          title: "Refine & Deliver",
          text: "Photographs and video are carefully edited. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Ceremonies",
      title: "Frames from real family ceremonies.",
      description:
        "Every family has its own traditions. Here's a glimpse into a few we've been trusted with.",
      cta: "View Our Ceremonies",
      images: [familyPortrait, birthdayHero, weddingHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Ceremonies differ in length and size. Our packages give you an easy place to start, and coverage can be adjusted to your family's plans.",
      items: [
        {
          title: "The Essentials",
          tagline: "Everything you need to capture the ceremony.",
          description: "Straightforward photography and video coverage of the key rituals.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          tagline: "More moments. More generations.",
          description:
            "Expanded photo and film coverage for ceremonies with larger guest lists and more family moments.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          tagline: "The complete ceremony story.",
          description:
            "Broader coverage with cinematic films and extra team for ceremonies that continue through the day.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Ceremony FAQs",
      title: "Questions families ask us.",
      items: [
        {
          question: "Which ceremonies do you cover?",
          answer:
            "Half Saree, Dhoti, Housewarming (Gruhapravesam), Naming ceremonies, Upanayanam and other traditional family functions. If your ceremony isn't listed, just ask.",
        },
        {
          question: "Will you disturb the rituals?",
          answer:
            "No. We stay unobtrusive, follow the priest's and family's lead, and ask in advance about moments that need special care or space.",
        },
        {
          question: "Do you understand the sequence of rituals?",
          answer:
            "We ask you about your family's way of doing things and plan around it. If a particular moment is important, tell us before the day.",
        },
        {
          question: "Can relatives who can't attend watch live?",
          answer:
            "Yes. We offer live streaming so family abroad or in other cities can join the ceremony online.",
        },
        {
          question: "Can you cover a ceremony at our home?",
          answer:
            "Yes. We work in homes, halls, temples (where permitted) and outdoor venues, and adjust the setup for the space.",
        },
        {
          question: "How do we check availability?",
          answer:
            "Send us the ceremony, date and venue through the enquiry form. We'll confirm availability and discuss next steps.",
        },
      ],
    },
  },

  // ==========================================================================
  // 3 · FAMILY FUNCTION  →  Birthdays & Anniversaries
  // ==========================================================================
  {
    slug: "birthdays-anniversaries",
    categorySlug: "family-function",
    card: {
      eyebrow: "Event Type · 02",
      title: "Birthdays & Anniversaries",
      description:
        "Another year. Another chapter worth keeping. From a child's first birthday to milestone celebrations and anniversaries, we capture the laughter, family and little moments happening around the occasion.",
      cta: "Explore Celebrations",
      image: birthdayHero,
    },
    seo: {
      title: "Birthday & Anniversary Photography in Hyderabad",
      description:
        "Birthday and anniversary photography and videography in Hyderabad and Telangana — first birthdays, milestone celebrations, 25th and 50th anniversaries.",
    },
    hero: {
      kicker: "Birthdays & Anniversaries",
      title: "Another year.\nAnother chapter worth keeping.",
      description:
        "From a baby's first cake to a couple's fiftieth anniversary, some celebrations mark more than a date. They mark who was in the room and how it felt to be there together.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: birthdayHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "The cake is only\npart of the picture.",
        paragraphs: [
          "At a first birthday, the baby may be more interested in the wrapping paper than the cake. At a sixtieth, the best moment might be a grandchild whispering something to the guest of honour. At an anniversary, it could be a couple catching each other's eye across a crowded room.",
          "These are the moments nobody remembers to plan for.",
          "**We watch for them.**",
          "So the celebration you remember matches the one you actually had.",
        ],
      },
      {
        kicker: "Celebration Photography",
        title: "Candles, laughter\nand everyone who showed up.",
        paragraphs: [
          "We photograph the decorations, the cake moment, the guest of honour, family groups and the candid expressions of the people around them. For children's parties, we stay low, move quickly and keep up with the games.",
        ],
        cta: { label: "View Celebration Photography", to: "gallery" },
      },
      {
        kicker: "Celebration Films",
        title: "Hear the song.\nHear the laughter. Keep both.",
        paragraphs: [
          "Video captures the birthday song, the speeches, the toasts and the energy of the party. Choose a full coverage video, a short highlight film or a social-ready reel.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Celebration, Your Way",
      title: "Big party or small gathering.\nWe'll fit the coverage.",
      paragraphs: [
        "Some birthdays are held at home with close family. Others are in banquet halls with entertainers, themes and a full guest list.",
        "Tell us the occasion, venue and number of guests. We'll recommend the right amount of coverage without overdoing it.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Event Videography" },
        { icon: "clapperboard", label: "Cinematic Highlight Film" },
        { icon: "gift", label: "Theme & Decor Detail Shots" },
        { icon: "reels", label: "Teasers & Reels" },
        { icon: "album", label: "Albums & Prints" },
        { icon: "live", label: "Live Streaming" },
        { icon: "led", label: "LED Screen" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can enjoy the party.",
      steps: [
        {
          title: "Enquire",
          text: "Tell us the occasion, date, venue and approximate guest count.",
        },
        {
          title: "Understand",
          text: "We discuss the theme, the programme and the moments you most want to keep.",
        },
        { title: "Plan", text: "We plan timings, positions and team for the celebration." },
        { title: "Capture", text: "We cover the planned moments and follow the unplanned ones." },
        {
          title: "Refine & Deliver",
          text: "Photographs and films are carefully edited. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Celebrations",
      title: "Frames from real birthdays & anniversaries.",
      description: "Every celebration has its own story. Here's a glimpse into a few of ours.",
      cta: "View Our Celebrations",
      images: [birthdayHero, familyPortrait, newbornHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "From a small family dinner to a large party, our packages give you an easy place to start, and coverage can be adjusted to your celebration.",
      items: [
        {
          title: "The Essentials",
          tagline: "Everything you need to capture the day.",
          description: "Straightforward photography and video coverage for a single celebration.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          tagline: "More guests. More memories.",
          description:
            "Expanded photo and film coverage for larger parties with more people and more moments.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          tagline: "The complete celebration story.",
          description:
            "Broader coverage with cinematic highlights for milestone birthdays and major anniversaries.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Birthday & Anniversary FAQs",
      title: "Questions families ask us.",
      items: [
        {
          question: "Do you cover small birthdays at home?",
          answer:
            "Yes. We cover everything from intimate home celebrations to large banquet-hall parties. Coverage is planned according to the occasion.",
        },
        {
          question: "How do you photograph children at parties?",
          answer:
            "We stay low, keep moving and let kids be kids. We don't ask children to pose for long. The best photographs usually happen mid-game or mid-cake.",
        },
        {
          question: "Do you cover milestone anniversaries like 25th and 50th?",
          answer:
            "Yes. We also create short films with interviews and photographs of the family together if you'd like something more personal.",
        },
        {
          question: "Can we include old family photographs in the video?",
          answer:
            "Yes. Share old photos or videos with us and we can include them in a tribute film for the occasion.",
        },
        {
          question: "Is there a minimum duration for coverage?",
          answer:
            "Coverage is planned around the length of your event. Tell us the schedule and we'll suggest what works.",
        },
        {
          question: "How do we book?",
          answer:
            "Send us the occasion, date and venue through the enquiry form. We'll confirm availability and discuss details.",
        },
      ],
    },
  },

  // ==========================================================================
  // 3 · FAMILY FUNCTION  →  Baby & Family Celebrations
  // ==========================================================================
  {
    slug: "baby-family-celebrations",
    categorySlug: "family-function",
    card: {
      eyebrow: "Event Type · 03",
      title: "Baby & Family Celebrations",
      description:
        "Little beginnings. Big memories. From Baby Showers and Cradle Ceremonies to celebrations welcoming a new member of the family — captured through the details, emotions and people surrounding them.",
      cta: "Explore Family Celebrations",
      image: newbornHero,
    },
    seo: {
      title: "Baby Shower & Cradle Ceremony Photography in Hyderabad",
      description:
        "Photography and videography for Baby Showers, Cradle Ceremonies, Seemantham and other baby and family celebrations in Hyderabad and Telangana.",
    },
    hero: {
      kicker: "Baby & Family Celebrations",
      title: "Little beginnings.\nBig memories.",
      description:
        "A baby shower. A cradle ceremony. A family gathering to welcome someone new. These celebrations are about hope, blessings and the people who will love this child the most.",
      cta: "Check Your Date",
      location: "Hyderabad & Telangana",
      image: newbornHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "The smallest family member\nbrings the biggest gathering.",
        paragraphs: [
          "At a baby shower, there's the excitement of a family waiting. At a cradle ceremony, there's a tiny person in the middle of a room full of people who have been looking forward to meeting them.",
          "Grandparents are emotional. Siblings are curious. Parents are tired, happy and trying to take it all in.",
          "**We keep the memory so you can be in the moment.**",
          "Years later, you'll want to remember exactly who held the baby first.",
        ],
      },
      {
        kicker: "Family Photography",
        title: "Soft light, gentle moments\nand a lot of love.",
        paragraphs: [
          "We photograph the ceremony details, the decorations, the expecting parents or the newborn, the blessings, family groups and the candid moments in between. For newborns, we keep things calm, quiet and comfortable.",
        ],
        cta: { label: "View Family Photography", to: "gallery" },
      },
      {
        kicker: "Family Films",
        title: "The lullaby, the blessings\nand the first welcome.",
        paragraphs: [
          "Video preserves the voices — a grandmother's blessing, a sibling's giggle, the song sung during the ceremony. Choose a highlight film, full coverage or a short reel to share with relatives who couldn't be there.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Celebration, Your Way",
      title: "Welcoming someone new.\nWe'll make it easy.",
      paragraphs: [
        "Celebrations range from intimate ceremonies at home to large family functions with a full guest list.",
        "Tell us about the occasion, who will be there and what you'd like to keep. We'll plan the coverage around comfort for you and the baby.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Traditional Photography" },
        { icon: "users", label: "Candid Photography" },
        { icon: "video", label: "Event Videography" },
        { icon: "clapperboard", label: "Cinematic Highlight Film" },
        { icon: "heart", label: "Maternity & Newborn Portraits" },
        { icon: "gift", label: "Decor & Detail Shots" },
        { icon: "album", label: "Albums & Prints" },
        { icon: "live", label: "Live Streaming for Relatives" },
        { icon: "reels", label: "Teasers & Reels" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can focus on the little one.",
      steps: [
        { title: "Enquire", text: "Tell us about the occasion, date, venue and guests." },
        {
          title: "Understand",
          text: "We learn about the family, the customs involved and any comfort considerations for the baby or mother.",
        },
        {
          title: "Plan",
          text: "We plan timing, positions and equipment around the ceremony and the baby's routine.",
        },
        { title: "Capture", text: "We stay gentle, quiet and unobtrusive throughout." },
        {
          title: "Refine & Deliver",
          text: "Photographs and films are carefully edited. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Celebrations",
      title: "Frames from real baby & family celebrations.",
      description: "Every family has its own story. Here's a glimpse into a few of ours.",
      cta: "View Our Celebrations",
      images: [newbornHero, familyHero, familyPortrait],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "From a small home ceremony to a large family function, our packages give you an easy place to start, and coverage can be adjusted around you.",
      items: [
        {
          title: "The Essentials",
          tagline: "Everything you need to capture the day.",
          description: "Straightforward photography and video coverage for a single ceremony.",
          cta: "View Package",
        },
        {
          title: "The Family Favorite",
          tagline: "More family. More memories.",
          description:
            "Expanded photo and film coverage for larger gatherings with more relatives and more moments.",
          cta: "View Package",
        },
        {
          title: "The Grand Celebration",
          tagline: "The complete welcome story.",
          description:
            "Broader coverage with cinematic highlights for celebrations across multiple functions.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Baby & Family FAQs",
      title: "Questions families ask us.",
      items: [
        {
          question: "Which baby and family functions do you cover?",
          answer:
            "Baby Showers, Seemantham, Cradle (Naming) Ceremonies, first-month celebrations, family welcome ceremonies and similar occasions.",
        },
        {
          question: "Is it safe to photograph a newborn at an event?",
          answer:
            "Yes. We use natural light where possible, avoid flash near the baby and keep a gentle, calm presence. If the baby needs a break, we pause.",
        },
        {
          question: "Do you do maternity or newborn portrait sessions too?",
          answer:
            "Yes. We offer maternity and newborn portrait sessions as separate shoots or as part of a celebration package.",
        },
        {
          question: "Can family abroad watch the ceremony?",
          answer:
            "Yes. We offer live streaming so relatives in other cities or countries can attend virtually.",
        },
        {
          question: "Can you work around feeding and nap schedules?",
          answer:
            "Yes. Tell us the baby's routine and we'll plan photography around it wherever possible.",
        },
        {
          question: "How do we book?",
          answer:
            "Send us the occasion, date and venue through the enquiry form. We'll confirm availability and discuss details.",
        },
      ],
    },
  },

  // ==========================================================================
  // 4 · CORPORATE / BUSINESS  →  Corporate Events
  // ==========================================================================
  {
    slug: "corporate-events",
    categorySlug: "corporate-business",
    card: {
      eyebrow: "Corporate Events",
      title: "Corporate Events",
      description:
        "Professional photography and video coverage for office events, award ceremonies, launches, team celebrations and other corporate occasions.",
      cta: "Explore Corporate Events",
      image: corporateHero,
    },
    seo: {
      title: "Corporate Event Photographer in Hyderabad | RAKZS Studio",
      description:
        "Corporate event photography and videography in Hyderabad by RAKZS Studio. Professional coverage for company celebrations, award ceremonies, launches and team events.",
    },
    hero: {
      kicker: "Corporate Events",
      title: "Behind every successful company event\nare people and moments worth remembering.",
      description:
        "An employee receiving an award. A team celebrating a milestone. Colleagues coming together outside their everyday work. These moments reflect more than an event schedule. They reflect the people, achievements and culture of your organisation. RAKZS Studio captures them through professional corporate event photography and videography in Hyderabad. Photography that honours the occasion and the people who made it happen.",
      cta: "Discuss Your Event",
      location: "Hyderabad & Telangana",
      image: corporateHero,
      compact: true,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "An event may be planned by a company,\nbut it's the people who make it memorable.",
        paragraphs: [
          "Every corporate event has a purpose. Sometimes it's celebrating years of hard work. Sometimes it's recognising an employee's achievement, introducing something new or bringing a team together.",
          "The official programme deserves to be documented. But so do the moments around it. The applause when someone receives an award. The pride in a team photograph. The conversations between colleagues and the energy of everyone sharing the occasion.",
          "We capture both the planned highlights and the natural moments that reveal what the event meant to the people attending.",
          "**Because the most valuable photographs don't simply show that an event happened. They show why it mattered.**",
        ],
      },
      {
        kicker: "Corporate Event Photography",
        title: "Your company's milestones deserve\nphotographs that reflect the pride behind them.",
        paragraphs: [
          "From company celebrations and award ceremonies to product launches, employee gatherings and networking events, we document the people, programme and atmosphere.",
          "Our approach combines professional portraits, important stage moments, branding, team photographs and candid interactions.",
          "The result is a collection that can support your company's event records, website, internal communication and social media.",
        ],
        cta: { label: "View Event Photography", to: "gallery" },
      },
      {
        kicker: "Corporate Event Films",
        title: "Photographs preserve the highlights.\nFilm brings back the atmosphere.",
        paragraphs: [
          "The applause after an announcement. The energy of a launch. The excitement of a team coming together.",
          "Corporate event videography captures movement, sound and the moments that give an occasion its character.",
          "Depending on your requirements, coverage can include event videos, highlights and shorter edits for business communication.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Event, Your Requirements",
      title:
        "Every company has a different reason to celebrate.\nYour coverage should reflect that purpose.",
      paragraphs: [
        "An intimate employee gathering doesn't need the same approach as a large corporate celebration or launch.",
        "Tell us about your event, the important people, key moments and how you intend to use the photographs and videos. We'll help plan coverage around your actual requirements.",
      ],
      listTitle: "Coverage can include",
      services: [
        { icon: "camera", label: "Corporate Event Photography" },
        { icon: "gift", label: "Awards & Recognition Coverage" },
        { icon: "package", label: "Launch & Company Celebration Coverage" },
        { icon: "briefcase", label: "Leadership & Team Photographs" },
        { icon: "users", label: "Candid & Networking Photography" },
        { icon: "video", label: "Corporate Event Videography" },
        { icon: "reels", label: "Event Highlights & Reels" },
        { icon: "palette", label: "Branding & Venue Details" },
      ],
      note: "Coverage and deliverables are finalized according to your event brief.",
      primaryCta: "Build Your Event Coverage",
    },
    process: {
      kicker: "From Brief to Delivery",
      title: "Thoughtful preparation helps us capture\nthe moments that cannot be repeated.",
      steps: [
        { title: "Enquire", text: "Share your event date, venue and timings." },
        {
          title: "Understand",
          text: "We discuss your programme, important people and content requirements.",
        },
        { title: "Plan", text: "We finalize the team and agreed coverage." },
        { title: "Capture", text: "We document the event, its people and important moments." },
        {
          title: "Refine & Deliver",
          text: "We prepare your agreed photographs and films. Delivery timelines are confirmed according to the finalized scope.",
        },
      ],
    },
    gallery: {
      kicker: "Real Corporate Moments",
      title: "Behind every company milestone are people who helped make it possible.",
      description: "A glimpse into genuine corporate events documented by RAKZS Studio.",
      images: [corporateHero, brandingHero, birthdayHero],
    },
    // Quotation section (no package cards for this page)
    packages: {
      kicker: "Find Your Coverage",
      title: "Let's plan your event.",
      description:
        "Tell us what your company is celebrating. We'll help you preserve the moments that matter. Share your event date, venue, programme, approximate guest count and whether you need photography, videography or both. We'll recommend coverage based on your event rather than a fixed wedding-style package.",
      items: [],
      cta: "Request Corporate Event Quote",
    },
    faqs: {
      kicker: "Corporate Event FAQs",
      title: "Questions businesses ask us.",
      items: [
        {
          question: "What types of corporate events does RAKZS Studio cover?",
          answer:
            "We offer photography and videography for company celebrations, employee gatherings, award ceremonies, launches, networking events and other corporate occasions in Hyderabad. Coverage is planned according to the event requirements.",
        },
        {
          question: "Can you capture award presentations, leadership and team photographs?",
          answer:
            "Yes. We can plan coverage for award presentations, important guests, leadership portraits and group photographs. Share any must-have photographs before the event so we can account for them in the schedule.",
        },
        {
          question: "Can we use corporate event photographs for our website and social media?",
          answer:
            "We can plan the photography around your intended content needs, including websites, company updates, internal communication and social media. Usage requirements and any applicable permissions should be discussed when finalizing the booking.",
        },
        {
          question: "How many photographers or videographers will our event need?",
          answer:
            "The team depends on the venue, event duration, number of guests, programme and whether important activities happen simultaneously. We'll recommend suitable coverage after reviewing your requirements.",
        },
        {
          question: "How much does corporate event photography cost in Hyderabad?",
          answer:
            "Pricing depends on the duration, location, team requirements, photography or video coverage and agreed deliverables. Share your event brief with us for a quotation.",
        },
      ],
    },
  },

  // ==========================================================================
  // 4 · CORPORATE / BUSINESS  →  Conferences & Business Events
  // ==========================================================================
  {
    slug: "conferences-business-events",
    categorySlug: "corporate-business",
    card: {
      eyebrow: "Conferences & Business Events",
      title: "Conferences & Business Events",
      description:
        "From speakers and presentations to audience interactions, networking and key moments, we document conferences, seminars and professional gatherings with clean, purposeful coverage.",
      cta: "Explore Business Events",
      image: brandingHero,
    },
    seo: {
      title: "Conference Photographer in Hyderabad | RAKZS Studio",
      description:
        "Conference photography and videography in Hyderabad by RAKZS Studio. Coverage for keynote speakers, seminars, panel discussions, business meetings and professional events.",
    },
    hero: {
      kicker: "Conferences & Business Events",
      title:
        "When important ideas bring people together,\nevery meaningful moment deserves to be seen.",
      description:
        "A speaker sharing a new perspective. An audience listening with attention. A conversation that begins between sessions. Conferences and professional gatherings create moments of knowledge, connection and opportunity. RAKZS Studio documents these occasions through professional conference photography and videography in Hyderabad. Preserving not only what was presented, but the people and conversations that gave the event its purpose.",
      cta: "Discuss Your Event",
      location: "Hyderabad & Telangana",
      image: corporateHero,
      compact: true,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "The stage carries the message.\nThe people in the room give it meaning.",
        paragraphs: [
          "A conference is built around ideas. People travel, gather and make time to listen, learn, speak and connect.",
          "The keynote speaker may be the centre of attention, but the complete story reaches further. An audience reacting to a presentation. A question that starts a discussion. Professionals exchanging ideas during a break. A panel bringing different perspectives into one conversation. These moments are part of what makes the event valuable.",
          "We approach conference coverage with attention to the agenda, important participants and the natural interactions that happen around the programme.",
          "**Because a meaningful event deserves a visual record of both the ideas shared and the connections made.**",
        ],
      },
      {
        kicker: "Conference Photography",
        title: "Every speaker has something to share.\nEvery audience has a story of its own.",
        paragraphs: [
          "We document keynote presentations, seminars, panel discussions, business meetings and professional gatherings with attention to clarity and context.",
          "Alongside important speakers and sessions, we capture audience engagement, networking, event branding and wider photographs that show the scale and atmosphere.",
          "The result is a visual record suitable for event documentation and future organisational communication.",
        ],
        cta: { label: "View Conference Photography", to: "gallery" },
      },
      {
        kicker: "Conference Films & Video",
        title: "Some ideas are remembered through photographs.\nOthers deserve to be heard again.",
        paragraphs: [
          "A keynote presentation. A panel discussion. An important announcement. The energy of a room responding to a speaker.",
          "Conference videography can preserve the movement, voices and atmosphere that photographs alone cannot convey.",
          "Depending on the agreed scope, coverage can include session recording, event highlights and shorter edits for professional communication.",
        ],
        cta: { label: "Watch Our Films", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Conference, Your Priorities",
      title:
        "Every conference has an agenda.\nWe plan around the moments your organisation cannot afford to miss.",
      paragraphs: [
        "Some events have a single stage and a straightforward schedule. Others include multiple speakers, parallel sessions, panel discussions and networking activities.",
        "Share your agenda, venue, important speakers and final content requirements. We'll help plan the coverage around the structure of your event.",
      ],
      listTitle: "Coverage can include",
      services: [
        { icon: "mic", label: "Keynote Speaker Photography" },
        { icon: "camera", label: "Seminars & Presentations" },
        { icon: "users", label: "Panel Discussions" },
        { icon: "heart", label: "Audience Reactions & Engagement" },
        { icon: "briefcase", label: "Delegate Networking" },
        { icon: "video", label: "Conference Videography" },
        { icon: "clapperboard", label: "Session Recording" },
        { icon: "reels", label: "Event Highlights & Reels" },
        { icon: "palette", label: "Branding, Sponsors & Venue Details" },
      ],
      note: "Simultaneous sessions and recording requirements may affect the team, equipment and final quotation.",
      primaryCta: "Plan Your Conference Coverage",
    },
    process: {
      kicker: "From Agenda to Delivery",
      title: "When the schedule matters,\npreparation makes the difference.",
      steps: [
        { title: "Enquire", text: "Share your event date, venue and timings." },
        {
          title: "Review the Agenda",
          text: "We understand the speakers, sessions and priorities.",
        },
        { title: "Plan", text: "We discuss the required team and coverage." },
        {
          title: "Document",
          text: "We capture the programme, audience and professional interactions.",
        },
        {
          title: "Refine & Deliver",
          text: "We prepare the agreed photographs, recordings or films. Delivery timelines are confirmed according to the finalized requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Conference Stories",
      title: "Every conversation begins somewhere. Every important idea deserves to be remembered.",
      description:
        "A glimpse into genuine conferences and professional events documented by RAKZS Studio.",
      images: [corporateHero, brandingHero, birthdayHero],
    },
    // Quotation section (no package cards for this page)
    packages: {
      kicker: "Find Your Coverage",
      title: "Your agenda. Our plan.",
      description:
        "You bring the programme. We'll help you capture the moments that give it meaning. Share your conference date, venue, agenda, number of sessions, expected attendance and photography or video requirements. We'll review the structure of your event and discuss suitable coverage.",
      items: [],
      cta: "Request Conference Quote",
    },
    faqs: {
      kicker: "Conference FAQs",
      title: "Questions organisers ask us.",
      items: [
        {
          question: "Do you cover keynote speakers, seminars and panel discussions?",
          answer:
            "Yes. Conference coverage can include keynote presentations, seminars, panel discussions, moderators, audience questions and professional sessions, depending on the agreed event brief.",
        },
        {
          question: "Can you cover multiple conference sessions happening at the same time?",
          answer:
            "Yes, where suitable team coverage can be arranged. Parallel sessions may require additional photographers or videographers, so please share the complete agenda before the event.",
        },
        {
          question:
            "Can you record complete conference sessions as well as create highlight videos?",
          answer:
            "Session recording and shorter event films can be discussed as separate or combined requirements. The number of cameras, audio arrangements, recording duration and final edits will be confirmed in the quotation.",
        },
        {
          question: "Can you prioritize specific speakers, VIPs and sponsor branding?",
          answer:
            "Yes. Share your speaker list, important guests, sponsor requirements and branding priorities before the event. This helps us plan the coverage around the people and details that matter most to your organisation.",
        },
        {
          question: "What details do you need to provide a conference photography quotation?",
          answer:
            "Please share the event date, venue, timings, agenda, expected attendance, number of sessions or stages, and whether you need photography, video recording or both. These details help us estimate suitable coverage and pricing.",
        },
      ],
    },
  },

  // ==========================================================================
  // 5 · COMMERCIAL / CREATIVE  →  Personal Branding
  // ==========================================================================
  {
    slug: "personal-branding",
    categorySlug: "commercial-creative",
    card: {
      eyebrow: "Personal Branding",
      title: "Personal Branding",
      description:
        "Brand portraits, team photographs, workplaces, services and business-focused visual content created around how you want customers to see you.",
      cta: "Explore Personal Branding",
      image: brandingHero,
    },
    seo: {
      title: "Personal Branding & Business Portrait Photography in Hyderabad",
      description:
        "Personal branding photography and brand portraits for founders, professionals and small businesses in Hyderabad and Telangana.",
    },
    hero: {
      kicker: "Personal Branding",
      title: "Show the people\nbehind the name.",
      description:
        "Customers trust people before they trust logos. Brand portraits and business photographs help them see who you are, what you do and why it matters.",
      cta: "Plan Your Shoot",
      location: "Hyderabad & Telangana",
      image: brandingHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "Your profile picture is\nyour first handshake.",
        paragraphs: [
          "Before a client calls, they've looked at your website, your LinkedIn and your Instagram. Those few seconds decide whether they feel they know you.",
          "A good brand photograph isn't a stiff headshot against a grey wall. It shows you at work, in your space, with your team — looking like someone people would want to do business with.",
          "**We make photographs that feel like you, only clearer.**",
        ],
      },
      {
        kicker: "Brand Portraits",
        title: "Portraits that earn trust\nbefore you say a word.",
        paragraphs: [
          "We create brand portraits for founders, consultants, doctors, designers, coaches and other professionals. A mix of formal, relaxed and in-action photographs gives you a set you can use across your website, social profiles, presentations and press.",
        ],
        cta: { label: "View Brand Portraits", to: "gallery" },
      },
      {
        kicker: "Business Content",
        title: "Your workspace, your team,\nyour work — photographed well.",
        paragraphs: [
          "Beyond portraits, we photograph your office, studio, shop or clinic, your team at work and the services you offer. Short behind-the-scenes videos and reels can be added to keep your content fresh.",
        ],
        cta: { label: "See Business Content", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Brand, Your Way",
      title: "Tell us who you serve.\nWe'll shape the shoot around it.",
      paragraphs: [
        "A branding shoot can be a one-hour portrait session or a full day across your workplace.",
        "Share your profession, your audience and where the photographs will be used. We'll recommend the setup that covers it.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Brand Portraits" },
        { icon: "briefcase", label: "Professional Headshots" },
        { icon: "users", label: "Team & Group Photographs" },
        { icon: "palette", label: "Workspace & Service Photography" },
        { icon: "video", label: "Behind-the-Scenes Video" },
        { icon: "reels", label: "Reels for Social Media" },
        { icon: "light", label: "Studio or On-Location Lighting" },
        { icon: "phone", label: "Web & Social Ready Exports" },
        { icon: "album", label: "Retouching & Colour Grading" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can look and feel like yourself.",
      steps: [
        {
          title: "Enquire",
          text: "Tell us about your work, your audience and where the photographs will be used.",
        },
        {
          title: "Understand",
          text: "We talk through your brand, preferred style and the impression you want to create.",
        },
        { title: "Plan", text: "We plan outfits, locations, lighting and a shot list." },
        {
          title: "Capture",
          text: "A relaxed, guided session with a mix of poses and natural moments.",
        },
        {
          title: "Refine & Deliver",
          text: "Selected photographs are retouched and prepared. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Brands",
      title: "Frames from real branding shoots.",
      description: "Every brand has its own story. Here's a glimpse into a few we've worked on.",
      cta: "View Our Work",
      images: [brandingHero, corporateHero, editorialHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Every brand has different needs. Our packages give you an easy place to start, and coverage can be adjusted around your goals.",
      items: [
        {
          title: "The Essentials",
          tagline: "A clean, professional set.",
          description:
            "A focused portrait session with a set of retouched photographs for web and social use.",
          cta: "View Package",
        },
        {
          title: "The Brand Standard",
          tagline: "Portraits plus your workspace.",
          description:
            "Brand portraits plus workplace and service photography, with social-ready formats.",
          cta: "View Package",
        },
        {
          title: "The Full Brand Shoot",
          tagline: "The complete visual identity.",
          description:
            "Portraits, team, workspace, services and short video content planned across a full day.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Personal Branding FAQs",
      title: "Questions professionals ask us.",
      items: [
        {
          question: "What is a personal branding shoot?",
          answer:
            "It's a photography session that creates a set of images representing you and your work, for use on your website, social profiles, presentations and marketing.",
        },
        {
          question: "How many outfits should I bring?",
          answer:
            "Two to three is usually enough. We'll advise on colours and styles that suit your brand and the settings we'll use.",
        },
        {
          question: "Can you shoot at my office or clinic?",
          answer:
            "Yes. We shoot on location at workplaces, studios, shops and clinics, as well as in our studio or at an outdoor setting.",
        },
        {
          question: "Do you retouch the photographs?",
          answer:
            "Yes. Selected images are retouched and colour-graded for a clean, natural finish. We keep it realistic.",
        },
        {
          question: "Can I get photographs for social media in different sizes?",
          answer:
            "Yes. We prepare exports sized for websites, LinkedIn, Instagram and other platforms.",
        },
        {
          question: "How do I book?",
          answer:
            "Send us your profession, goals and preferred dates through the enquiry form. We'll plan the session together.",
        },
      ],
    },
  },

  // ==========================================================================
  // 5 · COMMERCIAL / CREATIVE  →  Product Photography
  // ==========================================================================
  {
    slug: "product-photography",
    categorySlug: "commercial-creative",
    card: {
      eyebrow: "Product Photography",
      title: "Product Photography",
      description:
        "Clean product photography designed to present what you sell with clarity, detail and personality — for catalogues, websites, marketplaces and social media.",
      cta: "Explore Product Photography",
      image: productHero,
    },
    seo: {
      title: "Product Photography in Hyderabad",
      description:
        "Product photography for catalogues, e-commerce, marketplaces and social media in Hyderabad and Telangana — clean, detailed and consistent.",
    },
    hero: {
      kicker: "Product Photography",
      title: "Make the product the reason\nthey stop scrolling.",
      description:
        "Customers can't touch what they're buying online. Your photographs have to do it for them — showing the detail, the quality and the feel of what you sell.",
      cta: "Plan Your Shoot",
      location: "Hyderabad & Telangana",
      image: productHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "A good photograph sells\nbefore a description does.",
        paragraphs: [
          "People decide in seconds. A blurry or flat photograph makes a good product look ordinary. A clear, well-lit one makes it look worth the price.",
          "Good product photography is about consistency, accuracy and care — the right colours, sharp detail, clean backgrounds and angles that answer a buyer's questions.",
          "**We photograph products so customers know what they're getting.**",
        ],
      },
      {
        kicker: "Catalogue & E-Commerce",
        title: "Clean, consistent images\nacross your whole range.",
        paragraphs: [
          "White-background and clean-background photographs for marketplaces, websites and catalogues. Consistent lighting, angles and sizing across products, with accurate colours and detail shots where needed.",
        ],
        cta: { label: "View Product Photography", to: "gallery" },
      },
      {
        kicker: "Lifestyle & Creative",
        title: "Show the product\nin the life it belongs to.",
        paragraphs: [
          "Styled and lifestyle photography places your product in a setting — on a table, in a hand, in a room — to help customers imagine owning it. Ideal for social media, advertising and brand campaigns.",
        ],
        cta: { label: "See Lifestyle Work", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Products, Your Way",
      title: "Tell us what you sell.\nWe'll plan the shoot.",
      paragraphs: [
        "A product shoot can cover a handful of items for a website or hundreds for a catalogue.",
        "Share the number of products, the platforms you're selling on and the style you want. We'll recommend a setup that suits your products and budget.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "camera", label: "Catalogue Photography" },
        { icon: "package", label: "White-Background E-Commerce Shots" },
        { icon: "palette", label: "Styled & Lifestyle Photography" },
        { icon: "light", label: "Detail & Macro Shots" },
        { icon: "users", label: "Product-with-Model Photography" },
        { icon: "video", label: "Short Product Videos" },
        { icon: "reels", label: "Reels for Social Media" },
        { icon: "phone", label: "Marketplace-Ready Exports" },
        { icon: "album", label: "Retouching & Colour Correction" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo your products look their best.",
      steps: [
        {
          title: "Enquire",
          text: "Tell us what you sell, how many products and where the images will be used.",
        },
        {
          title: "Understand",
          text: "We discuss your brand, style references and platform requirements.",
        },
        { title: "Plan", text: "We plan the shot list, backgrounds, props and schedule." },
        {
          title: "Capture",
          text: "Products are shot in controlled lighting for accuracy and consistency.",
        },
        {
          title: "Refine & Deliver",
          text: "Images are retouched and exported for your platforms. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Products",
      title: "Frames from real product shoots.",
      description:
        "Every product has its own story. Here's a glimpse into a few we've photographed.",
      cta: "View Our Work",
      images: [productHero, editorialHero, brandingHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Every product range is different. Our packages give you an easy place to start, and coverage can be adjusted around your catalogue.",
      items: [
        {
          title: "The Essentials",
          tagline: "Clean, accurate product shots.",
          description:
            "Catalogue-style photography on clean backgrounds for a set number of products.",
          cta: "View Package",
        },
        {
          title: "The Brand Standard",
          tagline: "Catalogue plus lifestyle.",
          description:
            "Clean product shots plus styled and lifestyle images for social media and advertising.",
          cta: "View Package",
        },
        {
          title: "The Full Campaign",
          tagline: "Photography and video together.",
          description:
            "Catalogue, lifestyle, model shots and short videos for product launches and campaigns.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Product Photography FAQs",
      title: "Questions sellers ask us.",
      items: [
        {
          question: "How is product photography priced?",
          answer:
            "It depends on the number of products, the number of angles per product and the style of shoot. Share a list of your products and we'll send a quote.",
        },
        {
          question: "Can you shoot for Amazon, Flipkart and other marketplaces?",
          answer:
            "Yes. We follow common marketplace requirements for backgrounds, sizing and angles. Share any platform-specific guidelines you have.",
        },
        {
          question: "Do I need to send products to your studio?",
          answer:
            "Yes for studio shoots. For larger or fragile items, we can discuss shooting on location at your premises.",
        },
        {
          question: "Can you photograph jewellery, food or apparel?",
          answer:
            "Yes. Different products need different lighting and handling. Tell us what you sell and we'll plan accordingly.",
        },
        {
          question: "Do you retouch images?",
          answer:
            "Yes. Dust, marks and colour inconsistencies are cleaned up so products look accurate and polished.",
        },
        {
          question: "How do I book?",
          answer:
            "Send us your product list and requirements through the enquiry form. We'll confirm timings and share a quote.",
        },
      ],
    },
  },

  // ==========================================================================
  // 5 · COMMERCIAL / CREATIVE  →  Commercial / Promotional Videos
  // ==========================================================================
  {
    slug: "commercial-promotional-videos",
    categorySlug: "commercial-creative",
    card: {
      eyebrow: "Commercial & Promotional Videos",
      title: "Commercial / Promotional Videos",
      description:
        "Brand films, promotional videos, short-form reels and campaign content made for businesses that need a consistent visual presence online.",
      cta: "Explore Promotional Videos",
      image: editorialHero,
    },
    seo: {
      title: "Commercial & Promotional Video Production in Hyderabad",
      description:
        "Brand films, promotional videos, reels and campaign content for businesses in Hyderabad and Telangana — planned, shot and edited end to end.",
    },
    hero: {
      kicker: "Commercial & Promotional Videos",
      title: "Made for the screen your\ncustomers use every day.",
      description:
        "A short, well-made video can explain what you do faster than a page of text. We plan, shoot and edit videos that help your business show up clearly and confidently.",
      cta: "Plan Your Video",
      location: "Hyderabad & Telangana",
      image: editorialHero,
    },
    blocks: [
      {
        kicker: "The Story",
        title: "Customers watch before\nthey read.",
        paragraphs: [
          "People scroll quickly. A video that shows your product in use, your team at work or your customer's story holds attention in a way static posts can't.",
          "But a good video isn't only about equipment. It's about knowing what to say, who it's for and how long it should be.",
          "**We help you decide what to make, then we make it well.**",
        ],
      },
      {
        kicker: "Brand & Promotional Films",
        title: "Tell your story in\nthe time people will give you.",
        paragraphs: [
          "Brand films, product promos, service explainers, testimonials and campaign videos — planned with a clear idea, shot with proper lighting and sound, and edited to suit where they'll be watched.",
        ],
        cta: { label: "View Promotional Films", to: "gallery" },
      },
      {
        kicker: "Reels & Social Content",
        title: "A steady stream of content,\nmade easier.",
        paragraphs: [
          "Short vertical videos, reels and campaign cut-downs for Instagram, YouTube and other platforms. Shoot a month's worth of content in one session, and keep your brand's look consistent.",
        ],
        cta: { label: "See Social Content", to: "gallery" },
      },
    ],
    sidebar: {
      kicker: "Your Video, Your Way",
      title: "Tell us the goal.\nWe'll shape the video.",
      paragraphs: [
        "A video project can be a single product promo or an ongoing series of reels across the month.",
        "Share your business, your audience and where the video will be seen. We'll recommend the format and length that works.",
      ],
      listTitle: "Available when you need them",
      services: [
        { icon: "clapperboard", label: "Brand Films" },
        { icon: "video", label: "Promotional & Product Videos" },
        { icon: "reels", label: "Reels & Short-Form Content" },
        { icon: "mic", label: "Testimonial & Interview Videos" },
        { icon: "drone", label: "Drone Footage" },
        { icon: "light", label: "Lighting & Sound Setup" },
        { icon: "music", label: "Music, Voice-Over & Sound Design" },
        { icon: "phone", label: "Platform-Ready Exports" },
        { icon: "palette", label: "Editing & Colour Grading" },
      ],
      note: "Choose them individually, start with a package, or create your own combination.",
      primaryCta: "Build Your Coverage",
      secondaryCta: "Explore Packages",
    },
    process: {
      kicker: "From Hello to Delivery",
      title: "Simple behind the scenes.\nSo you can run your business.",
      steps: [
        {
          title: "Enquire",
          text: "Tell us about your business, your goal and where the video will be used.",
        },
        {
          title: "Understand",
          text: "We discuss your audience, message, style references and timeline.",
        },
        {
          title: "Plan",
          text: "We prepare the concept, script or outline, locations and shoot schedule.",
        },
        { title: "Capture", text: "A planned shoot with the right crew, lighting and sound." },
        {
          title: "Refine & Deliver",
          text: "Videos are edited, graded and exported for your platforms. A clear delivery timeline is confirmed according to your final requirements.",
        },
      ],
    },
    gallery: {
      kicker: "Real Projects",
      title: "Frames from real commercial projects.",
      description: "Every brand has its own story. Here's a glimpse into a few we've worked on.",
      cta: "View Our Work",
      images: [editorialHero, productHero, brandingHero],
    },
    packages: {
      kicker: "Your Coverage, Your Way",
      title: "A starting point. Not a restriction.",
      description:
        "Every video project has a different goal and size. Our packages give you an easy place to start, and coverage can be adjusted around your needs.",
      items: [
        {
          title: "The Essentials",
          tagline: "One clear, well-made video.",
          description: "A single promotional video planned, shot and edited for one platform.",
          cta: "View Package",
        },
        {
          title: "The Brand Standard",
          tagline: "A video plus social cut-downs.",
          description: "A main video along with short-form versions for reels and other platforms.",
          cta: "View Package",
        },
        {
          title: "The Full Campaign",
          tagline: "A complete content series.",
          description:
            "Multiple videos, reels and photographs planned together for a campaign or product launch.",
          cta: "View Package",
        },
      ],
    },
    faqs: {
      kicker: "Commercial Video FAQs",
      title: "Questions businesses ask us.",
      items: [
        {
          question: "What kinds of videos do you make for businesses?",
          answer:
            "Brand films, product promotional videos, service explainers, testimonials, event recaps, reels and campaign content.",
        },
        {
          question: "Do you help with the concept or script?",
          answer:
            "Yes. We can help shape the idea, outline or script. If you already have one, we'll work from it.",
        },
        {
          question: "How long should a promotional video be?",
          answer:
            "It depends on the platform. Reels are usually short, while brand films and explainers can run longer. We'll recommend a length based on where it will be watched.",
        },
        {
          question: "Can you produce a month of reels in one shoot?",
          answer:
            "Yes. Batch shooting is an efficient way to produce multiple reels while keeping a consistent look.",
        },
        {
          question: "Do you provide music, voice-over and subtitles?",
          answer:
            "Yes. We can arrange licensed music, voice-over and subtitles as part of the edit.",
        },
        {
          question: "How do we book?",
          answer:
            "Send us your business, goal and timeline through the enquiry form. We'll discuss the idea and share a proposal.",
        },
      ],
    },
  },
];

/** All sub-pages that belong to a category page, in the order written above. */
export function getSubPagesByCategory(categorySlug: string) {
  return subPages.filter((page) => page.categorySlug === categorySlug);
}

export function getSubPageBySlug(slug: string) {
  return subPages.find((page) => page.slug === slug);
}
