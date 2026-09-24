import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={item.question} className="reveal overflow-hidden rounded-lg border border-border bg-card shadow-cinematic">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left font-display text-xl text-foreground"
            onClick={() => setOpen((current) => (current === index ? -1 : index))}
            aria-expanded={open === index}
          >
            {item.question}
            <ChevronDown className={cn("size-5 shrink-0 text-primary transition-transform duration-300", open === index && "rotate-180")} />
          </button>
          <div className={cn("grid transition-all duration-300", open === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}> 
            <div className="overflow-hidden">
              <p className="px-6 pb-6 text-sm leading-7 text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
