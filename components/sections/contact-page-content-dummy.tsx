"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { contactInfo } from "@/lib/site-data";

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
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold"
            >
              <MapPin className="size-4.5 text-primary" />
              Visit Us
            </Badge>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
              Find Our Office
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Stop by our Los Angeles office, or reach our team by phone or
              email above.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-4xl">
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
                  className="h-96 w-full border-0 sm:h-[34rem]"
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
