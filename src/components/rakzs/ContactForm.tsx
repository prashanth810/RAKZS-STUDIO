import { useNavigate } from "@tanstack/react-router";
import { CheckCircle2, RotateCcw, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { events } from "@/data/events";
import { services } from "@/data/site";
import { sendEnquiry } from "@/lib/enquiry.functions";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  type: string;
  date: string;
  location: string;
  photography: boolean;
  videography: boolean;
  photoEditing: boolean;
  videoEditing: boolean;
  budget: string;
  requirements: string;
  contactMethod: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof FormState, string>>;

const budgetOptions = [
  "Request a Custom Quote",
  "Under ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹2,50,000",
  "₹2,50,000+",
];
const contactMethods = ["Phone", "Email", "WhatsApp", "Instagram"];

function initialState(prefillType: string): FormState {
  return {
    fullName: "",
    email: "",
    phone: "",
    type: prefillType,
    date: "",
    location: "",
    photography: false,
    videography: false,
    photoEditing: false,
    videoEditing: false,
    budget: "Request a Custom Quote",
    requirements: prefillType ? `I am interested in ${prefillType}.` : "",
    contactMethod: "Phone",
    consent: false,
  };
}

function validate(form: FormState) {
  const errors: Errors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^\d{10}$/.test(form.phone.trim()))
    errors.phone = "Enter a valid 10-digit phone number.";
  if (!form.type) errors.type = "Select an event or service type.";
  if (!form.date) errors.date = "Event date is required.";
  if (!form.consent) errors.consent = "Consent is required before preparing the enquiry.";
  return errors;
}

export function ContactForm({
  prefillEvent,
  prefillService,
}: {
  prefillEvent?: string | undefined;
  prefillService?: string | undefined;
}) {
  const navigate = useNavigate();
  const prefillType = prefillEvent || prefillService || "";
  const [form, setForm] = useState<FormState>(() => initialState(prefillType));
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const typeOptions = useMemo(() => {
    const eventTitles = events.map((event) => event.title);
    const serviceTitles = services.map((service) => service.title);
    return [
      ...serviceTitles,
      ...eventTitles,
      "Photography + Videography + Editing",
      "Other Celebration",
    ];
  }, []);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const reset = () => {
    setForm(initialState(prefillType));
    setErrors({});
    setSubmitted(false);
    setLoading(false);
    setSubmitError("");
    navigate({
      to: "/contact",
      search: { event: prefillEvent, service: prefillService },
      replace: true,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setLoading(true);
    setSubmitError("");
    try {
      await sendEnquiry({
        data: {
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          type: form.type,
          date: form.date,
          location: form.location,
          services: [
            form.photography ? "Photography" : "",
            form.videography ? "Videography" : "",
            form.photoEditing ? "Photo Editing" : "",
            form.videoEditing ? "Video Editing" : "",
          ].filter(Boolean),
          budget: form.budget,
          requirements: form.requirements,
          contactMethod: form.contactMethod,
          consent: true,
          website: "",
        },
      });
      setSubmitted(true);
    } catch {
      setSubmitError(
        "We couldn’t send your enquiry right now. Please try again or contact the studio directly.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="reveal rounded-lg border border-primary/40 bg-card p-8 shadow-cinematic">
        <CheckCircle2 className="size-12 text-primary" />
        <h2 className="mt-5 font-display text-4xl font-semibold text-foreground">
          Thank You for Your Enquiry!
        </h2>
        <p className="mt-4 text-base leading-8 text-muted-foreground">
          Your enquiry has been sent to RAKZS STUDIO. We’ll contact you using your preferred method
          to discuss the next steps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="gold" onClick={reset}>
            <RotateCcw className="size-4" /> Reset Form
          </Button>
          <Button variant="outlineGold" asChild>
            <a href="tel:+919876543210">Contact Studio Directly</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="reveal grid gap-6 rounded-lg border border-border bg-card p-6 shadow-cinematic md:p-8"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full Name" error={errors.fullName} required>
          <Input
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email" error={errors.email} required>
          <Input
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone" error={errors.phone} required>
          <Input
            type="tel"
            inputMode="numeric"
            maxLength={10}
            pattern="[0-9]{10}"
            value={form.phone}
            onChange={(event) =>
              update("phone", event.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="10-digit phone number"
          />
        </Field>
        <Field label="Event / Service Type" error={errors.type} required>
          <Select value={form.type} onValueChange={(value) => update("type", value)}>
            <SelectTrigger>
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
        </Field>
        <Field label="Event Date" error={errors.date} required>
          <Input
            type="date"
            value={form.date}
            onChange={(event) => update("date", event.target.value)}
          />
        </Field>
        <Field label="Event Location">
          <Input
            value={form.location}
            onChange={(event) => update("location", event.target.value)}
            placeholder="City / venue"
          />
        </Field>
      </div>

      <div>
        <p className="text-sm font-medium text-foreground">Services Needed</p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          <CheckItem
            label="Photography"
            checked={form.photography}
            onCheckedChange={(checked) => update("photography", checked)}
          />
          <CheckItem
            label="Videography"
            checked={form.videography}
            onCheckedChange={(checked) => update("videography", checked)}
          />
          <CheckItem
            label="Photo Editing"
            checked={form.photoEditing}
            onCheckedChange={(checked) => update("photoEditing", checked)}
          />
          <CheckItem
            label="Video Editing"
            checked={form.videoEditing}
            onCheckedChange={(checked) => update("videoEditing", checked)}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Expected Budget">
          <Select value={form.budget} onValueChange={(value) => update("budget", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              {budgetOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Contact Method">
          <Select
            value={form.contactMethod}
            onValueChange={(value) => update("contactMethod", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select method" />
            </SelectTrigger>
            <SelectContent>
              {contactMethods.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field label="Additional Requirements">
        <Textarea
          value={form.requirements}
          onChange={(event) => update("requirements", event.target.value)}
          placeholder="Tell us about your event, editing style, references, and deliverables."
          className="min-h-36"
        />
      </Field>

      <div>
        <label className="flex items-start gap-3 rounded-md border border-border bg-secondary p-4 text-sm text-muted-foreground">
          <Checkbox
            checked={form.consent}
            onCheckedChange={(checked) => update("consent", checked === true)}
          />
          <span>
            I consent to RAKZS STUDIO using these enquiry details to manually contact me about this
            request.
          </span>
        </label>
        {errors.consent ? <p className="mt-2 text-sm text-destructive">{errors.consent}</p> : null}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="gold" type="submit" disabled={loading}>
          <Send className="size-4" /> {loading ? "Sending..." : "Submit Enquiry"}
        </Button>
        <Button variant="outlineGold" type="button" onClick={reset}>
          Reset
        </Button>
      </div>
      {submitError ? (
        <p role="alert" className="text-sm text-destructive">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string | undefined;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground">
      <span>
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      {children}
      {error ? <span className="text-sm font-normal text-destructive">{error}</span> : null}
    </label>
  );
}

function CheckItem({
  label,
  checked,
  onCheckedChange,
}: {
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-3 rounded-md border border-border bg-secondary px-4 py-3 text-sm text-muted-foreground">
      <Checkbox checked={checked} onCheckedChange={(value) => onCheckedChange(value === true)} />
      {label}
    </label>
  );
}
