import { useMemo, useState } from "react";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
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
  "Wedding",
  "Engagement / Reception",
  "Pre-Wedding / Couple Shoot",
  "Birthday / Family Celebration",
  "Traditional Ceremony",
  "Corporate / Business Event",
  "Brand / Product Photography",
  "Social Media / Promotional Video",
  "Other Enquiry",
];

// Accepts a valid Indian mobile number with or without +91 / 91 / 0 prefix.
function normalizeIndianMobile(value: string) {
  const digits = value.replace(/[\s\-()]/g, "");
  const match = digits.match(/^(?:\+91|91|0)?([6-9]\d{9})$/);
  return match ? match[1] : null;
}

type FormErrors = {
  name?: string;
  phone?: string;
  eventType?: string;
  eventDate?: string;
  eventLocation?: string;
  selection?: string;
};

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
  const [errors, setErrors] = useState<FormErrors>({});

  const clearError = (key: keyof FormErrors) =>
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));

  const increase = (id: string) => {
    clearError("selection");
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
  };

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

  const toggleAddOn = (id: string) => {
    clearError("selection");
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
  const hasSelection = selectedCrew.length > 0 || selectedAddOns.length > 0;

  // Only selected items are ever counted. If any selected item has no listed rate
  // (e.g. Photo Album), a reliable total cannot be shown, so pricing is "On Request".
  const priceOnRequest = hasSelection && selectedAddOns.some((item) => item.price === null);
  const grandTotal =
    selectedCrew.reduce((sum, item) => sum + item.total, 0) +
    selectedAddOns.reduce((sum, item) => sum + (item.price ?? 0), 0);
  const canCalculate = hasSelection && !priceOnRequest && grandTotal > 0;
  const estimateLabel = canCalculate ? formatINR(grandTotal) : "On Request";

  const sendToWhatsApp = () => {
    const nextErrors: FormErrors = {};
    const mobile = normalizeIndianMobile(customerPhone);

    if (customerName.trim() === "") nextErrors.name = "Please enter your full name.";
    if (customerPhone.trim() === "") nextErrors.phone = "Please enter your mobile number.";
    else if (!mobile) nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    if (eventType === "") nextErrors.eventType = "Please select your event or service.";
    if (eventDate === "") nextErrors.eventDate = "Please select your event date.";
    if (eventLocation.trim() === "") nextErrors.eventLocation = "Please enter your event location.";
    if (!hasSelection) {
      nextErrors.selection = "Please select at least one service or add-on.";
      toast.error("Please select your coverage first", {
        description: "Choose at least one service or add-on, then send your enquiry.",
      });
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const coverageLines = selectedCrew.map(
      (item) => `${item.name} × ${item.quantity}`,
    );
    const addOnLines = selectedAddOns.map((item) => item.name);

    const lines: string[] = [
      "Hello RAKZS Studio,",
      "",
      "I'd like a quotation for photography and video coverage.",
      "",
      `Name: ${customerName.trim()}`,
      `Mobile: ${mobile}`,
      `Event Type: ${eventType}`,
      `Event Date: ${eventDate}`,
      `Location: ${eventLocation.trim()}`,
      "",
      "Selected Team & Coverage:",
      ...(coverageLines.length ? coverageLines : ["None selected"]),
      "",
      "Selected Add-ons:",
      ...(addOnLines.length ? addOnLines : ["None selected"]),
      "",
      `Estimated Starting Amount: ${estimateLabel}`,
      "",
      "Additional Requirements:",
      additionalMessage.trim() || "None",
      "",
      "Please review my requirements and share your availability and best possible quotation.",
      "Thank you.",
    ];

    const whatsappURL = `https://api.whatsapp.com/send?phone=${toWhatsAppNumber(studioContact.whatsappPhone)}&text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="pb-10 bg-card">
      <Toaster position="top-center" richColors closeButton />
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <SectionHeader
          eyebrow="Make Your Own"
          title="Build Your Coverage."
          description="Choose your photography team and add-ons based on your event requirements."
        />

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr] lg:gap-7">
          {/* CREW + ADD-ONS */}
          <div className="reveal rounded-lg border border-border bg-background p-4 shadow-cinematic sm:p-6 lg:p-7">
            <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
              Team & Coverage
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Choose the services you need. You can select more than one photographer or
              videographer.
            </p>
            {errors.selection ? (
              <p role="alert" className="mt-3 text-sm text-destructive">
                {errors.selection}
              </p>
            ) : null}

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
                        <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                          {item.description}
                        </p>
                        <p className="mt-1 text-xs font-medium text-foreground/80 sm:text-sm">
                          Starts at {formatINR(item.price)} · {item.unit}
                        </p>
                        {"condition" in item ? (
                          <p className="mt-1 text-xs italic text-muted-foreground">
                            {item.condition}
                          </p>
                        ) : null}
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
                      {item.price !== null ? (
                        <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                          Starts at {formatINR(item.price)} · {item.unit}
                        </p>
                      ) : (
                        <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                          Pricing on request
                        </p>
                      )}
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

            <p className="mt-6 rounded-r-md border-l-2 border-primary bg-secondary/70 px-3 py-2.5 text-sm leading-6 text-muted-foreground">
              Displayed amounts are starting estimates for planning purposes. Actual pricing may
              vary based on event duration, location, team requirements and selected deliverables.
            </p>
          </div>

          {/* SUMMARY / CUSTOM REQUEST */}
          <div className="reveal h-fit rounded-lg border border-border bg-background p-4 shadow-cinematic sm:p-6 lg:sticky lg:top-28 lg:p-7">
            <span className="section-kicker">Custom Request</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              Your Coverage Request
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Choose your preferred services and share your event details. Our team will review
              your requirements and provide a personalized quotation.
            </p>

            <h4 className="mt-6 font-display text-lg font-semibold text-foreground">
              Your Selected Coverage
            </h4>
            {hasSelection ? (
              <div className="mt-3 space-y-2">
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
                    {item.price !== null ? (
                      <span className="shrink-0 whitespace-nowrap font-semibold text-foreground">
                        {formatINR(item.price)}
                      </span>
                    ) : (
                      <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-muted-foreground">
                        On request
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-3 rounded-md bg-secondary px-4 py-3 text-sm text-muted-foreground">
                No coverage selected yet. Choose your preferred services to begin.
              </p>
            )}

            {hasSelection ? (
              <div className="mt-5 border-t border-dashed border-foreground pt-4">
                {canCalculate ? (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <span className="font-display text-lg font-semibold text-foreground">
                        Estimated Starting Amount
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-display text-2xl font-bold text-primary">
                        {formatINR(grandTotal)}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      This is an estimate, not a final quotation. Pricing may change based on your
                      event details, duration, location and requirements.
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                      <span className="font-display text-lg font-semibold text-foreground">
                        Final Pricing
                      </span>
                      <span className="shrink-0 whitespace-nowrap font-display text-2xl font-bold text-primary">
                        On Request
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      We&apos;ll review your selected coverage and share a personalized quotation.
                    </p>
                  </>
                )}
              </div>
            ) : null}

            <div className="mt-7 space-y-4">
              <div>
                <Label htmlFor="customerName">Your Name*</Label>
                <Input
                  id="customerName"
                  className="mt-2"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                  value={customerName}
                  onChange={(event) => {
                    setCustomerName(event.target.value);
                    clearError("name");
                  }}
                />
                {errors.name ? <p className="mt-1 text-sm text-destructive">{errors.name}</p> : null}
              </div>

              <div>
                <Label htmlFor="customerPhone">Mobile Number*</Label>
                <Input
                  id="customerPhone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  className="mt-2"
                  placeholder="Enter your working mobile number"
                  aria-invalid={Boolean(errors.phone)}
                  value={customerPhone}
                  onChange={(event) => {
                    setCustomerPhone(event.target.value);
                    clearError("phone");
                  }}
                />
                {errors.phone ? <p className="mt-1 text-sm text-destructive">{errors.phone}</p> : null}
              </div>

              <div>
                <Label htmlFor="eventType">Event / Service Type*</Label>
                <Select
                  value={eventType}
                  onValueChange={(value) => {
                    setEventType(value);
                    clearError("eventType");
                  }}
                >
                  <SelectTrigger id="eventType" className="mt-2" aria-invalid={Boolean(errors.eventType)}>
                    <SelectValue placeholder="Select your event or service" />
                  </SelectTrigger>
                  <SelectContent>
                    {typeOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.eventType ? (
                  <p className="mt-1 text-sm text-destructive">{errors.eventType}</p>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="eventDate">Event Date*</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    className="mt-2"
                    aria-label="Select your event date"
                    aria-invalid={Boolean(errors.eventDate)}
                    value={eventDate}
                    onChange={(event) => {
                      setEventDate(event.target.value);
                      clearError("eventDate");
                    }}
                  />
                  {errors.eventDate ? (
                    <p className="mt-1 text-sm text-destructive">{errors.eventDate}</p>
                  ) : null}
                </div>
                <div>
                  <Label htmlFor="eventLocation">Event Location*</Label>
                  <Input
                    id="eventLocation"
                    className="mt-2"
                    placeholder="Enter your event location"
                    aria-invalid={Boolean(errors.eventLocation)}
                    value={eventLocation}
                    onChange={(event) => {
                      setEventLocation(event.target.value);
                      clearError("eventLocation");
                    }}
                  />
                  {errors.eventLocation ? (
                    <p className="mt-1 text-sm text-destructive">{errors.eventLocation}</p>
                  ) : null}
                </div>
              </div>

              <div>
                <Label htmlFor="additionalMessage">Additional Requirements</Label>
                <Textarea
                  id="additionalMessage"
                  className="mt-2"
                  placeholder="Mention your event timings, functions, number of days or special requests."
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
              Send Enquiry on WhatsApp →
            </Button>
            <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">
              Sending an enquiry does not confirm a booking. Our team will contact you to discuss
              availability and final pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}