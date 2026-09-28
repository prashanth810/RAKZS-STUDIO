import { useMemo, useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/rakzs/SectionHeader";
import { studioContact } from "@/data/site";
import { addOnItems, crewItems, type AddOnItem, type CrewItem } from "@/data/Packages";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const typeOptions = [
  "Wedding & Engagement",
  "Family Function",
  "Pre-Wedding / Couple",
  "Corporate / Business",
  "Commercial / Creative",
];

const formatINR = (value: number) => `₹${value.toLocaleString("en-IN")}`;

function toWhatsAppNumber(phone: string) {
  return phone.replace(/\D/g, "");
}

export function PackageBuilder() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [eventType, setEventType] = useState("");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

  const increase = (id: string) => setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  const decrease = (id: string) =>
    setCounts((prev) => {
      const next = (prev[id] ?? 0) - 1;
      const updated = { ...prev };
      if (next <= 0) {
        delete updated[id];
      } else {
        updated[id] = next;
      }
      return updated;
    });

  const toggleAddOn = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const selectedCrew = useMemo(
    () =>
      crewItems
        .filter((item) => (counts[item.id] ?? 0) > 0)
        .map((item) => ({
          ...item,
          quantity: counts[item.id] ?? 0,
          total: item.price * (counts[item.id] ?? 0),
        })),
    [counts],
  );

  const selectedAddOns = useMemo(() => addOnItems.filter((item) => checked[item.id]), [checked]);

  const totalMembers = selectedCrew.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal =
    selectedCrew.reduce((sum, item) => sum + item.total, 0) +
    selectedAddOns.reduce((sum, item) => sum + item.price, 0);

  const hasSelection = selectedCrew.length > 0 || selectedAddOns.length > 0;

  const sendToWhatsApp = () => {
    if (customerName.trim() === "") {
      alert("Please enter your name.");
      return;
    }
    if (customerPhone.trim() === "") {
      alert("Please enter your mobile number.");
      return;
    }

    if (customerPhone.length !== 10) {
      alert("Please Enter Valid phone number.");
    }

    if (eventType === "") {
      alert("Please select an event / service type.");
    }

    if (!hasSelection) {
      alert("Please select at least one item for your package.");
      return;
    }

    let message = "";
    message += `\u{1F4F8} *PHOTOGRAPHY PACKAGE ENQUIRY*\n\n`;
    message += `Hello RAKZS STUDIO,\n\n`;
    message += `I would like to enquire about booking a custom photography package.\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `\u{1F464} *CUSTOMER DETAILS*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;
    message += `Name: ${customerName}\n`;
    message += `Phone: ${customerPhone}\n`;
    message += `Event: ${eventType}\n`;
    if (eventDate) message += `Date: ${eventDate}\n`;
    if (eventLocation) message += `Location: ${eventLocation}\n`;
    message += `\n`;

    message += `━━━━━━━━━━━━━━━━━━\n`;
    message += `\u{1F4CB} *SELECTED COVERAGE*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    selectedCrew.forEach((item) => {
      message += `${item.emoji} *${item.name}*\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ${formatINR(item.price)} / person\n`;
      message += `   Total: ${formatINR(item.total)}\n\n`;
    });

    selectedAddOns.forEach((item) => {
      message += `${item.emoji} *${item.name}*\n`;
      message += `   Total: ${formatINR(item.price)}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━\n`;
    if (totalMembers > 0) message += `\u{1F465} *TOTAL TEAM MEMBERS:* ${totalMembers}\n`;
    message += `\u{1F4B0} *ESTIMATED TOTAL: ${formatINR(grandTotal)}*\n`;
    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    if (additionalMessage.trim()) {
      message += `\u{1F4DD} *ADDITIONAL REQUIREMENTS*\n${additionalMessage.trim()}\n\n`;
    }

    message += `Please contact me regarding availability and final quotation.\n\nThank you. \u{1F4F8}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${toWhatsAppNumber(studioContact.phone)}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="pb-10 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <SectionHeader
          eyebrow="Make Your Own"
          title="Build Your Coverage."
          description="Select the coverage you need. Multiple photographers and videographers can be added."
        />

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-7">
          {/* CREW + ADD-ONS */}
          <div className="reveal rounded-lg border border-border bg-background p-4 shadow-cinematic sm:p-6 lg:p-7">
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Team & Coverage
            </h3>

            <div className="mt-2 divide-y divide-border">
              {crewItems.map((item: CrewItem) => {
                const quantity = counts[item.id] ?? 0;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 py-4 sm:gap-4 sm:py-5"
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                      <span className="grid size-10 shrink-0 place-items-center rounded-md bg-secondary text-xl sm:size-11">
                        <item.icon />
                      </span>
                      <div className="min-w-0">
                        <p className="break-words text-[13px] font-semibold text-foreground sm:text-sm md:text-base">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                          {formatINR(item.price)} / person
                        </p>
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-1 md:gap-3">
                      <button
                        type="button"
                        onClick={() => decrease(item.id)}
                        aria-label={`Decrease ${item.name}`}
                        className="grid size-9 place-items-center rounded-md bg-foreground text-background transition-colors hover:bg-foreground/80 md:size-8"
                      >
                        <Minus className="size-4" />
                      </button>
                      <span className="w-5 shrink-0 text-center text-sm font-bold text-foreground">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increase(item.id)}
                        aria-label={`Increase ${item.name}`}
                        className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground transition-colors hover:bg-primary/88 md:size-8"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <h3 className="mt-8 font-display text-xl font-semibold text-foreground sm:text-2xl">
              Add-ons
            </h3>
            <div className="mt-2 divide-y divide-border">
              {addOnItems.map((item: AddOnItem) => (
                <label
                  key={item.id}
                  htmlFor={item.id}
                  className="flex cursor-pointer items-center justify-between gap-3 py-4 sm:gap-4 sm:py-5"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-md bg-secondary text-xl sm:size-11">
                      <item.icon />
                    </span>
                    <div className="min-w-0">
                      <p className="break-words text-[13px] font-semibold text-foreground sm:text-sm md:text-base">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                        {formatINR(item.price)}
                      </p>
                    </div>
                  </div>

                  <input
                    id={item.id}
                    type="checkbox"
                    checked={Boolean(checked[item.id])}
                    onChange={() => toggleAddOn(item.id)}
                    className="size-6 shrink-0 accent-primary sm:size-5"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* SUMMARY / CUSTOM REQUEST */}
          <div className="reveal h-fit rounded-lg border border-border bg-background p-4 shadow-cinematic sm:p-6 lg:sticky lg:top-28 lg:p-7">
            <span className="section-kicker">Custom Request</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Your Package
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Fill in your details below and send your selected coverage directly on WhatsApp.
            </p>

            {hasSelection ? (
              <div className="mt-6 space-y-2">
                {selectedCrew.map((item) => (
                  <div key={item.id} className="flex justify-between gap-3 text-sm">
                    <span className="flex min-w-0 flex-1 items-center gap-2 break-words font-semibold text-muted-foreground">
                      <item.icon /> {item.name} × {item.quantity}
                    </span>
                    <span className="shrink-0 whitespace-nowrap font-semibold text-foreground">
                      {formatINR(item.total)}
                    </span>
                  </div>
                ))}
                {selectedAddOns.map((item) => (
                  <div key={item.id} className="flex justify-between gap-3 text-sm">
                    <span className="flex min-w-0 flex-1 items-center gap-2 break-words font-semibold text-muted-foreground">
                      <item.icon /> {item.name}
                    </span>
                    <span className="shrink-0 whitespace-nowrap font-semibold text-foreground">
                      {formatINR(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-6 rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
                No coverage selected yet. Pre-wedding starts from ₹50K — candid, cinematic, drone
                and combinations can be customized. Final quotation is confirmed after event
                details.
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-dashed border-foreground pt-4">
              <span className="font-display text-xl font-semibold text-foreground">
                Estimated Total
              </span>
              <span className="shrink-0 whitespace-nowrap font-display text-2xl font-bold text-primary">
                {formatINR(grandTotal)}
              </span>
            </div>

            <div className="mt-7 space-y-4">
              <div>
                <Label htmlFor="customerName">Your Name</Label>
                <Input
                  id="customerName"
                  className="mt-2"
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(event) => setCustomerName(event.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="customerPhone">Mobile Number</Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  className="mt-2"
                  minLength={10}
                  maxLength={10}
                  placeholder="Enter mobile number"
                  value={customerPhone}
                  onChange={(event) => setCustomerPhone(event.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="eventType">Event / Service Type *</Label>
                <Select value={eventType} onValueChange={setEventType}>
                  <SelectTrigger id="eventType" className="mt-2">
                    <SelectValue placeholder="Select a type" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="eventDate">Event Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    className="mt-2"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="eventLocation">Location</Label>
                  <Input
                    id="eventLocation"
                    className="mt-2"
                    placeholder="Event location"
                    value={eventLocation}
                    onChange={(event) => setEventLocation(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="additionalMessage">Additional Requirements</Label>
                <Textarea
                  id="additionalMessage"
                  className="mt-2"
                  placeholder="Any additional requirements..."
                  value={additionalMessage}
                  onChange={(event) => setAdditionalMessage(event.target.value)}
                />
              </div>
            </div>

            <Button
              onClick={sendToWhatsApp}
              className="mt-7 min-h-12 w-full whitespace-normal border border-[#9E7232] bg-transparent px-3 py-3 text-center text-sm leading-tight text-primary transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white sm:text-base"
            >
              <MessageCircle className="size-4" />
              Send Requirements on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
