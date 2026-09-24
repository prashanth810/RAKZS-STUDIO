import weddingHero from "@/assets/rakzs-hero-wedding.jpg";
import preWeddingHero from "@/assets/rakzs-prewedding.jpg";
import familyHero from "@/assets/rakzs-family-maternity.jpg";
import editorialHero from "@/assets/rakzs-commercial-fashion.jpg";

export const studioContact = {
  phone: "+91 98765 43210",
  email: "hello@rakzsstudio.com",
  location: "Cyber Towers, HITEC City, Hyderabad, Telangana",
  instagram: "@rakzsstudio",
  maps: "https://www.google.com/maps?q=Cyber+Towers+HITEC+City+Hyderabad&output=embed",
};

export const testimonials = [
  { name: "Aarav & Meera", role: "Wedding celebration", quote: "The sample gallery felt cinematic, emotional, and beautifully personal from the first frame." },
  { name: "Nisha Verma", role: "Maternity session", quote: "A warm, patient, premium experience designed around comfort and natural emotion." },
  { name: "Studio Client", role: "Brand campaign", quote: "Polished visuals, thoughtful direction, and final edits ready for web and social media." },
];

export const services = [
  {
    title: "Photography",
    slug: "photography",
    image: weddingHero,
    description: "Luxury still photography for weddings, pre-weddings, maternity, newborns, birthdays, families, corporate events, products, fashion, and personal branding.",
    deliverables: ["Edited high-resolution photographs", "Retouched portraits", "Album-ready selections", "Social media crops", "Private review gallery"],
  },
  {
    title: "Videography",
    slug: "videography",
    image: preWeddingHero,
    description: "Cinematic films for wedding stories, event coverage, corporate videos, promotional videos, highlights, and social media reels.",
    deliverables: ["Cinematic highlight film", "Event coverage edit", "Vertical reels", "Music-led story cut", "Platform-ready exports"],
  },
  {
    title: "Photo Editing",
    slug: "photo-editing",
    image: familyHero,
    description: "Premium retouching, color correction, portrait finishing, album design, and curated delivery for polished still-image collections.",
    deliverables: ["Skin and portrait retouching", "Color correction", "Album layout support", "Print-ready exports", "Web-ready files"],
  },
  {
    title: "Video Editing",
    slug: "video-editing",
    image: editorialHero,
    description: "Story-first editing for wedding films, brand films, social reels, cinematic grading, pacing, sound, and final delivery formats.",
    deliverables: ["Cinematic color grading", "Highlight edits", "Long-form event edits", "Reels and teasers", "Audio polish"],
  },
];

export const faqs = [
  { question: "How do we book RAKZS STUDIO?", answer: "Share your enquiry through the contact form with your date, location, and required services. The studio will review your request and contact you personally to continue." },
  { question: "Do you cover both photography and videography?", answer: "Yes. The sample services include photography, videography, photo editing, and video editing, with combined coverage available by custom quote." },
  { question: "Can we request only editing work?", answer: "Yes. Photo retouching, color correction, video editing, cinematic grading, album design, and social-media edits can be requested separately." },
  { question: "Do you offer fixed packages?", answer: "No prices are shown in this static website. Clients can request a custom quote based on date, location, team size, deliverables, and editing needs." },
  { question: "How long does delivery take?", answer: "Turnaround depends on the size of the project and final deliverables. A realistic delivery schedule should be confirmed manually after the enquiry." },
  { question: "Which locations do you cover?", answer: "The location details are editable placeholders. Use the enquiry form to share your event city and travel expectations." },
  { question: "How are final files delivered?", answer: "The website presents sample deliverables such as edited photos, cinematic films, retouched portraits, albums, and social media exports. Final delivery methods can be customized." },
  { question: "Can we customize the creative style?", answer: "Yes. The planning step can include a moodboard, sample references, outfit guidance, location ideas, and preferred editing style." },
];
