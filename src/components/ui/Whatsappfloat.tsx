import { FaWhatsapp } from "react-icons/fa";

import { studioContact } from "@/data/site";

const DEFAULT_MESSAGE = "Hi, I want to know more information about your photography services.";

export function WhatsAppFloat() {
  const number = studioContact.phone.replace(/\D/g, "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with RAKZS STUDIO on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <FaWhatsapp className="size-8" aria-hidden="true" />
    </a>
  );
}
