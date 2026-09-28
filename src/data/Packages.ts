// Fixed pricing tiers — shown in the "Pricing" section of the Packages page.
export const pricingTiers = [
  {
    name: "PER DAY",
    price: "₹25K–₹35K",
    period: "per event",
    description: "A focused single-photographer coverage for intimate occasions.",
    note: "Designed as straightforward per-day coverage.",
    features: [
      "Traditional Photographer",
      "Traditional Videographer",
      "Video editing included",
      "15-sheet album optional",
    ],
    highlighted: false,
  },
  {
    name: "WEDDING COVERAGE",
    price: "₹80K–₹1.80L",
    period: "per event",
    description:
      "Our most-booked package — full photo + film coverage for weddings and celebrations.",
    note: "For a smaller/normal wedding. Can cover Haldi, wedding formalities and engagement depending on the final event plan.",
    features: [
      "Traditional Photography & Video",
      "Cinematic Video",
      "Candid Photographer",
      "LED Wall option",
      "30-sheet Canvera album",
      "Teaser",
    ],
    highlighted: true,
  },
  {
    name: "LUXURY",
    price: "₹2L–₹3.50L",
    period: "per event",
    description: "Complete multi-day production for large weddings and destination events.",
    note: "Designed for Haldi, formalities, wedding, pre-wedding and reception based on final schedule.",
    features: [
      "Everything in Family Favourite",
      "Drone coverage",
      "Live streaming",
      "Traditional Photo + Video",
      "Expanded multi-function coverage",
    ],
    highlighted: false,
  },
] as const;

export type PricingTier = (typeof pricingTiers)[number];
import { FaCameraRetro } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";
import { RiCameraAiFill } from "react-icons/ri";
import { MdMovie } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { IoMdTv } from "react-icons/io";
import { MdOutlineScreenShare } from "react-icons/md";
import { BsJournalAlbum } from "react-icons/bs";

// "Build Your Coverage" customizer — counter items (can select more than one).
export const crewItems = [
  {
    id: "traditional-photographer",
    name: "Traditional Photographer",
    price: 6000,
    icon: FaCameraRetro,
    emoji: "\u{1F4F7}",
  }, // 📷
  {
    id: "traditional-videographer",
    name: "Traditional Videographer",
    price: 6000,
    icon: IoVideocam,
    emoji: "\u{1F3A5}",
  }, // 🎥
  {
    id: "candid-photographer",
    name: "Candid Photographer",
    price: 10000,
    icon: RiCameraAiFill,
    emoji: "\u{1F4F8}",
  }, // 📸
  {
    id: "cinematographer",
    name: "Cinematographer",
    price: 10000,
    icon: MdMovie,
    emoji: "\u{1F3AC}",
  }, // 🎬
  { id: "drone", name: "Drone", price: 10000, icon: GiDeliveryDrone, emoji: "\u{1F681}" }, // 🚁
] as const;

export const addOnItems = [
  { id: "led-screen", name: "LED Screen", price: 15000, icon: IoMdTv, emoji: "\u{1F5A5}\u{FE0F}" }, // 🖥️
  {
    id: "live-streaming",
    name: "Live Streaming",
    price: 8000,
    icon: MdOutlineScreenShare,
    emoji: "\u{1F4E1}",
  }, // 📡
  { id: "album", name: "Album", price: 12000, icon: BsJournalAlbum, emoji: "\u{1F4D6}" }, // 📖
  { id: "album", name: "Album", price: 12000, icon: BsJournalAlbum, emoji: "📖" },
] as const;

export type CrewItem = (typeof crewItems)[number];
export type AddOnItem = (typeof addOnItems)[number];
