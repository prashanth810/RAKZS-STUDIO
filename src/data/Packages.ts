import { FaCameraRetro } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { RiCameraAiFill } from "react-icons/ri";
import { MdMovie } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoMdTv } from "react-icons/io";
import { MdOutlineScreenShare } from "react-icons/md";
import { BsJournalAlbum } from "react-icons/bs";

// Ready-made packages — shown in the "Ready-Made Packages" section of the Packages page.
// Prices are INDICATIVE. Coverage items are AVAILABLE OPTIONS, not guaranteed inclusions.
export const pricingTiers = [
  {
    category: "For Small Events",
    name: "The Essentials",
    price: "₹25,000 – ₹35,000",
    description:
      "Simple photography and video coverage for intimate celebrations and one-day events.",
    features: [
      "Traditional Photography",
      "Traditional Videography",
      "Edited photographs, as agreed",
      "Optional album",
    ],
    suitableFor: "Engagement ceremonies, birthdays and smaller family functions.",
    highlighted: false,
  },
  {
    category: "For Weddings",
    name: "The Family Favourite",
    price: "₹80,000 – ₹1,80,000",
    description:
      "A balanced combination of photography and cinematic films for wedding celebrations.",
    features: [
      "Traditional Photography & Video",
      "Cinematic Video",
      "Candid Photography",
      "LED Screen — Optional",
      "Album Options",
      "Teasers & Highlights — As Agreed",
    ],
    suitableFor:
      "Wedding functions, engagement celebrations and receptions requiring broader coverage.",
    highlighted: true,
  },
  {
    category: "For Grand Celebrations",
    name: "The Grand Celebration",
    price: "₹2,00,000 – ₹3,50,000",
    description:
      "Extensive photography and film coverage for larger celebrations and multi-function weddings.",
    features: [
      "Multiple Photographers & Videographers",
      "Cinematic Films",
      "Candid Photography",
      "Drone Coverage — Where Permitted",
      "LED Screen & Live Streaming — Optional",
      "Album & Print Options",
      "Extended Multi-Function Coverage",
    ],
    suitableFor:
      "Large weddings, multiple functions and celebrations requiring wider team coverage.",
    highlighted: false,
  },
] as const;

export type PricingTier = (typeof pricingTiers)[number];

// "Build Your Coverage" customizer — counter items (can select more than one).
// NOTE: rates are the previously approved rates and are STARTING estimates only.
// Verify every rate before publishing. `unit` tells the customer what the rate refers to.
export const crewItems = [
  {
    id: "traditional-photographer",
    name: "Traditional Photographer",
    description: "Traditional photographs and important event moments.",
    price: 6000,
    unit: "per person",
    icon: FaCameraRetro,
    emoji: "\u{1F4F7}", // 📷
  },
  {
    id: "traditional-videographer",
    name: "Traditional Videographer",
    description: "Video coverage of your event and key ceremonies.",
    price: 6000,
    unit: "per person",
    icon: IoVideocam,
    emoji: "\u{1F3A5}", // 🎥
  },
  {
    id: "candid-photographer",
    name: "Candid Photographer",
    description: "Natural expressions and unposed moments.",
    price: 10000,
    unit: "per person",
    icon: RiCameraAiFill,
    emoji: "\u{1F4F8}", // 📸
  },
  {
    id: "cinematographer",
    name: "Cinematographer",
    description: "Creative cinematic footage and storytelling.",
    price: 10000,
    unit: "per person",
    icon: MdMovie,
    emoji: "\u{1F3AC}", // 🎬
  },
  {
    id: "drone",
    name: "Drone Coverage",
    description: "Aerial footage, subject to venue permissions and feasibility.",
    price: 10000,
    unit: "per person",
    condition: "Subject to venue permissions and feasibility.",
    icon: GiDeliveryDrone,
    emoji: "\u{1F681}", // 🚁
  },
] as const;

// `price: null` means no listed rate — the estimate switches to "On Request" if selected.
export const addOnItems = [
  {
    id: "prewedding",
    name: "Pre-Wedding Shoot",
    price: 50000,
    unit: "per event",
    icon: FaCameraRetro,
    emoji: "\u{1F4F7}",
  },
  {
    id: "reels",
    name: "Reels & Short Videos",
    price: 15000,
    unit: "per event",
    icon: IoVideocam,
    emoji: "\u{1F3AC}",
  },
  {
    id: "led-screen",
    name: "LED Screen",
    price: 15000,
    unit: "per event",
    icon: IoMdTv,
    emoji: "\u{1F5A5}\u{FE0F}", // 🖥️
  },
  {
    id: "live-streaming",
    name: "Live Streaming",
    price: 8000,
    unit: "per event",
    icon: MdOutlineScreenShare,
    emoji: "\u{1F4E1}", // 📡
  },
  {
    id: "album",
    name: "Photo Album",
    price: null,
    unit: "",
    icon: BsJournalAlbum,
    emoji: "\u{1F4D6}", // 📖
  },
] as const;

export type CrewItem = (typeof crewItems)[number];
export type AddOnItem = (typeof addOnItems)[number];