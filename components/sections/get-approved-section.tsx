"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Lock, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/site-data";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const HEALLY_UTM_SOURCE = `${siteConfig.url}/`;

const stats = [
  { value: "15-30 min", label: "Avg. Wait" },
  { value: "Same Day", label: "Approval" },
  { value: "100%", label: "Online" },
];

const itemEnter = "animate-in fade-in-0 slide-in-from-bottom-4 fill-mode-both duration-500 ease-out";
const fieldEnter = "animate-in fade-in-0 slide-in-from-bottom-3 fill-mode-both duration-500 ease-out";

function staggerDelay(index: number) {
  return { animationDelay: `${50 + index * 120}ms` };
}

function validateName(value: string) {
  const parts = value.trim().split(/\s+/).filter(Boolean);
  if (parts.length < 2 || parts.some((part) => !/^[a-zA-Z'-]+$/.test(part))) {
    return "Please enter your first and last name.";
  }
  return null;
}

function validateEmail(value: string) {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return null;
}

function validatePhone(value: string) {
  if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) {
    return "Please enter a valid phone number (e.g., 999-999-9999).";
  }
  return null;
}

function formatPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 10);
  if (digits.length > 6) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length > 3) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }
  return digits;
}

type LeadErrors = {
  name?: string;
  email?: string;
  phone?: string;
  marketingConsent?: string;
  termsAccepted?: string;
};

export function GetApprovedSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [submitting, setSubmitting] = useState(false);

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setName(value);
    setErrors((prev) => ({ ...prev, name: validateName(value) ?? undefined }));
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) ?? undefined }));
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    setErrors((prev) => ({ ...prev, phone: validatePhone(formatted) ?? undefined }));
  }

  function handleMarketingConsentChange(checked: boolean) {
    setMarketingConsent(checked);
    setErrors((prev) => ({
      ...prev,
      marketingConsent: checked ? undefined : prev.marketingConsent,
    }));
  }

  function handleTermsAcceptedChange(checked: boolean) {
    setTermsAccepted(checked);
    setErrors((prev) => ({
      ...prev,
      termsAccepted: checked ? undefined : prev.termsAccepted,
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const marketingConsentError = marketingConsent
      ? null
      : "Please accept to continue.";
    const termsAcceptedError = termsAccepted
      ? null
      : "Please accept the Terms and Conditions to continue.";

    setErrors({
      name: nameError ?? undefined,
      email: emailError ?? undefined,
      phone: phoneError ?? undefined,
      marketingConsent: marketingConsentError ?? undefined,
      termsAccepted: termsAcceptedError ?? undefined,
    });

    if (
      nameError ||
      emailError ||
      phoneError ||
      marketingConsentError ||
      termsAcceptedError
    ) {
      return;
    }

    setSubmitting(true);

    const nameParts = name.trim().split(/\s+/);
    const payload = {
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(" "),
      email: email.trim().toLowerCase(),
      phone,
      state: "CA",
      state_of_evaluation: "CA",
      timezone: "PST",
      extra_data: {
        "contact[contact_type]": "Web Form",
        "product[name]": "Eva",
        utm_source: HEALLY_UTM_SOURCE,
      },
    };

    const preset = btoa(JSON.stringify(payload))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "heallyValidatedSubmit",
      utm_source: HEALLY_UTM_SOURCE,
    });

    window.location.href = `https://mymmj.getheally.com/patient_admin/prefill?redirect=sched&preset=${preset}&utm_source=${encodeURIComponent(HEALLY_UTM_SOURCE)}`;
  }

  return (
    <section
      id="get-approved"
      className="cv-auto bg-mesh-trust relative overflow-hidden py-20 sm:py-28"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className={itemEnter} style={staggerDelay(0)}>
            <Badge
              variant="outline"
              className="h-auto gap-2.5 rounded-full bg-card px-5 py-3 text-base font-semibold"
            >
              <Sparkles className="size-5 text-primary" />
              Same-Day Telehealth
            </Badge>
          </div>

          <h2
            className={`font-heading text-3xl font-semibold tracking-tight sm:text-4xl ${itemEnter}`}
            style={staggerDelay(1)}
          >
            Fast MMJ Approval in Less Than 30 Minutes
          </h2>

          <p className={`max-w-md text-muted-foreground ${itemEnter}`} style={staggerDelay(2)}>
            Most patients complete the process easily and receive their
            doctor&rsquo;s approval within 15 to 30 minutes. It&rsquo;s a
            quick and stress-free experience designed to fit right into
            your day.
          </p>

          <p className={`max-w-md text-muted-foreground ${itemEnter}`} style={staggerDelay(3)}>
            Once approved, you&rsquo;ll instantly get access to your
            digital recommendation, so you can start visiting dispensaries
            without delay. Our friendly team and licensed doctors make
            sure every step feels smooth, secure, and completely
            confidential.
          </p>

          <div className={`mt-2 grid grid-cols-3 gap-3 ${itemEnter}`} style={staggerDelay(4)}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-card px-3 py-2.5 text-center shadow-sm ring-1 ring-primary/5"
              >
                <p className="font-heading text-base font-bold text-primary sm:text-lg">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`flex items-center gap-2 text-sm font-medium text-foreground ${itemEnter}`}
            style={staggerDelay(5)}
          >
            <Lock className="size-4.5 shrink-0 text-primary" />
            Your information is encrypted &amp; HIPAA-compliant
          </div>
        </div>

        <div className="animate-in fade-in-0 slide-in-from-bottom-4 zoom-in-95 fill-mode-both duration-500 ease-out">
          <Card className="relative overflow-hidden p-2 shadow-xl ring-1 ring-primary/10">
            <div className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400" />
            <CardContent className="relative py-5">
              <p className="font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                Get Approved Today
              </p>
              <p className="mt-1.5 text-2xl font-bold sm:text-3xl">
                Plans starting at <span className="text-primary">$55</span> only
              </p>

              <form
                className="mt-7 flex flex-col gap-5"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(0)}>
                  <Label htmlFor="leadName">Name (First &amp; Last)*</Label>
                  <Input
                    id="leadName"
                    name="leadName"
                    placeholder="Jane Doe"
                    value={name}
                    onChange={handleNameChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>
                <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(1)}>
                  <Label htmlFor="leadEmail">Email*</Label>
                  <Input
                    id="leadEmail"
                    name="leadEmail"
                    type="email"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={handleEmailChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>
                <div className={`grid gap-2 ${fieldEnter}`} style={staggerDelay(2)}>
                  <Label htmlFor="leadPhone">Phone Number*</Label>
                  <Input
                    id="leadPhone"
                    name="leadPhone"
                    type="tel"
                    placeholder="555-555-5555"
                    value={phone}
                    onChange={handlePhoneChange}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone}</p>
                  )}
                </div>
                <div className={`grid gap-1.5 ${fieldEnter}`} style={staggerDelay(3)}>
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="leadTermsAccepted"
                      name="leadTermsAccepted"
                      className="mt-0.5"
                      checked={termsAccepted}
                      onCheckedChange={(checked) =>
                        handleTermsAcceptedChange(checked === true)
                      }
                      aria-invalid={!!errors.termsAccepted}
                    />
                    <Label
                      htmlFor="leadTermsAccepted"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      I accept the Terms and Conditions
                    </Label>
                  </div>
                  {errors.termsAccepted && (
                    <p className="text-sm text-destructive">{errors.termsAccepted}</p>
                  )}
                </div>
                <div className={`grid gap-1.5 ${fieldEnter}`} style={staggerDelay(4)}>
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="leadMarketingConsent"
                      name="leadMarketingConsent"
                      className="mt-0.5"
                      checked={marketingConsent}
                      onCheckedChange={(checked) =>
                        handleMarketingConsentChange(checked === true)
                      }
                      aria-invalid={!!errors.marketingConsent}
                    />
                    <Label
                      htmlFor="leadMarketingConsent"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      I agree to receive emails with educational content, exclusive offers, partnership discounts, and marketing updates
                    </Label>
                  </div>
                  {errors.marketingConsent && (
                    <p className="text-sm text-destructive">{errors.marketingConsent}</p>
                  )}
                </div>
                <div className={fieldEnter} style={staggerDelay(5)}>
                  <Button type="submit" size="xl" className="mt-1 w-full" disabled={submitting}>
                    {submitting ? "Processing..." : "Get Your Card"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
