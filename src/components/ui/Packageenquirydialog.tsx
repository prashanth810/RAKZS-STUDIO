import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { studioContact } from "@/data/site";
import type { PricingTier } from "@/data/Packages";

// Emoji as unicode escapes so the file can never turn into "�" mojibake.
const EMOJI = {
  camera: "\u{1F4F8}",
  sparkle: "\u2728",
  wave: "\u{1F44B}",
  phone: "\u{1F4DE}",
  calendar: "\u{1F4C5}",
  pin: "\u{1F4CD}",
  check: "\u2705",
  money: "\u{1F4B0}",
  note: "\u{1F4DD}",
};

const DIVIDER = "----------------------------";

export function PackageEnquiryDialog({
  tier,
  onClose,
}: {
  tier: PricingTier | null;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // Clear errors whenever a different package is opened.
  useEffect(() => {
    setErrors({});
  }, [tier]);

  const buildMessage = (selected: PricingTier) => {
    const lines: string[] = [];

    lines.push(`${EMOJI.camera} *RAKZS STUDIO — Package Enquiry* ${EMOJI.sparkle}`);
    lines.push("");
    lines.push(`${EMOJI.wave} Hi, I'd like to book the *${selected.name}* package.`);
    lines.push("");
    lines.push(DIVIDER);
    lines.push("*PACKAGE DETAILS*");
    lines.push(DIVIDER);
    lines.push(`Package: *${selected.name}*`);
    lines.push(`${EMOJI.money} Price: *${selected.price}* ${selected.period}`);
    lines.push(selected.description);
    lines.push("");
    lines.push("*Includes:*");
    selected.features.forEach((feature) => lines.push(`${EMOJI.check} ${feature}`));
    lines.push("");
    lines.push(DIVIDER);
    lines.push("*CLIENT DETAILS*");
    lines.push(DIVIDER);
    lines.push(`Name: ${name.trim()}`);
    lines.push(`${EMOJI.phone} ${phone.trim()}`);
    if (eventDate) lines.push(`${EMOJI.calendar} ${eventDate}`);
    if (location.trim()) lines.push(`${EMOJI.pin} ${location.trim()}`);
    lines.push("");

    if (message.trim()) {
      lines.push(`${EMOJI.note} *Additional requirements*`);
      lines.push(message.trim());
      lines.push("");
    }

    lines.push("Could you please confirm availability and share the next steps?");
    lines.push("");
    lines.push("Thank you!");

    return lines.join("\n");
  };

  const handleSend = () => {
    if (!tier) return;

    const nextErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^\d{10}$/.test(phone.trim())) nextErrors.phone = "Enter a valid 10-digit mobile number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const number = studioContact.phone.replace(/\D/g, "");
    const url = `https://wa.me/${number}?text=${encodeURIComponent(buildMessage(tier))}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <Dialog open={tier !== null} onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent className="max-h-[90vh] overflow-y-auto">
        {tier ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-3xl">{tier.name} Package</DialogTitle>
              <DialogDescription>{tier.description}</DialogDescription>
            </DialogHeader>

            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold text-primary">{tier.price}</span>
              <span className="text-sm text-muted-foreground">{tier.period}</span>
            </div>

            <div className="grid gap-4">
              <div>
                <Label htmlFor="pkgName">Your Name</Label>
                <Input
                  id="pkgName"
                  className="mt-2"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                {errors.name ? (
                  <p className="mt-1 text-sm text-destructive">{errors.name}</p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="pkgPhone">Mobile Number</Label>
                <Input
                  id="pkgPhone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  className="mt-2"
                  placeholder="10-digit mobile number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value.replace(/\D/g, "").slice(0, 10))}
                />
                {errors.phone ? (
                  <p className="mt-1 text-sm text-destructive">{errors.phone}</p>
                ) : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="pkgDate">Event Date</Label>
                  <Input
                    id="pkgDate"
                    type="date"
                    className="mt-2"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="pkgLocation">Location</Label>
                  <Input
                    id="pkgLocation"
                    className="mt-2"
                    placeholder="Event location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="pkgMessage">Additional Requirements</Label>
                <Textarea
                  id="pkgMessage"
                  className="mt-2"
                  placeholder="Any additional requirements..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={handleSend}
              className="w-full bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="size-4" />
              Send Enquiry on WhatsApp
            </Button>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
