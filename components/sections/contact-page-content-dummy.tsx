"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/layout/container";
import { contactInfo, pricingPlans } from "@/lib/site-data";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/v325ZHMiyiY7nvDm9";
const EASE = [0.22, 1, 0.36, 1] as const;

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: contactInfo.address,
    href: GOOGLE_MAPS_URL,
  },
];

const columnVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function ContactPageContentDummy() {
  return (
    <>
      <section className="cv-auto bg-mesh-trust bg-grid-faint relative py-20 sm:py-28">
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Badge
              variant="outline"
              className="h-auto rounded-full bg-card px-5 py-2 text-base font-semibold"
            >
              Contact Us
            </Badge>
            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-3 text-muted-foreground">
              Reach out to our team through any of the options below.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const isExternal = href.startsWith("http");
              return (
                <a
                  key={label}
                  href={href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 rounded-2xl bg-card p-7 text-center shadow-sm ring-1 ring-primary/10 transition-shadow hover:shadow-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <p className="font-heading font-semibold">{label}</p>
                  <p className="text-sm text-muted-foreground">{value}</p>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="book-appointment" className="bg-mesh-trust bg-grid-faint pb-20 sm:pb-28">
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold"
            >
              <Sparkles className="size-4.5 text-primary" />
              Book Your Appointment
            </Badge>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
              Let&rsquo;s Get You Approved
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Fill out the form below and our team will follow up to confirm your
              telehealth evaluation. You can also visit us at our Los Angeles
              office using the map.
            </p>
          </motion.div>

          <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <Card className="relative h-full overflow-hidden p-2 shadow-xl ring-1 ring-primary/10">
                <div
                  className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400" />
                <CardContent className="relative py-5">
                  <motion.form
                    className="grid gap-6 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={columnVariants}
                  >
                    <motion.div variants={itemVariants} className="grid gap-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" name="firstName" placeholder="Jane" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid gap-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" />
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jane@example.com"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="plan">Preferred plan</Label>
                      <Select name="plan">
                        <SelectTrigger id="plan" className="w-full">
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                        <SelectContent>
                          {pricingPlans.map((plan) => (
                            <SelectItem key={plan.name} value={plan.name.toLowerCase()}>
                              {plan.name} &mdash; {plan.price}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                    <motion.div variants={itemVariants} className="grid gap-2 sm:col-span-2">
                      <Label htmlFor="message">Tell us about your condition</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Briefly describe your medical history or condition"
                        rows={4}
                      />
                    </motion.div>
                    <motion.div variants={itemVariants} className="sm:col-span-2">
                      <Button type="submit" size="xl" className="w-full">
                        Submit Application
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            >
              <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-primary/10">
                <iframe
                  title="Our location on Google Maps"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`}
                  className="h-80 w-full border-0 lg:h-full lg:min-h-[32rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="rounded-2xl bg-card p-5 text-center shadow-sm ring-1 ring-primary/10">
                <p className="text-sm font-medium">{contactInfo.address}</p>
                <Button variant="link" asChild className="mt-1 h-auto p-0">
                  <Link href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
