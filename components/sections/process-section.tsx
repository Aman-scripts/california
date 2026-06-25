"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Clock3, IdCard, Phone, User, Video } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

const timeMarkers = ["Start", "~10 min", "~20 min", "Approved"];

export function ProcessSection() {
  return (
    <section id="process" className="cv-auto py-10 sm:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-dashed border-border bg-muted/30 p-5 sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-8">
            {/* Left: copy + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="flex flex-col"
            >
              <Badge variant="outline" className="gap-1.5 rounded-full bg-card px-3 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                Our Simple Process
                <ChevronRight className="size-3.5" />
              </Badge>

              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Steps to Get a Medical Marijuana Card California
              </h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Getting your California medical marijuana card online is
                simple and secure, fully compliant with the California{" "}
                <span className="font-medium text-primary">
                  Medical Marijuana Identification Card Program
                </span>{" "}
                administered by the California Department of Public Health.
                Follow the three easy steps below to get started.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="/#get-approved">Apply Your Application</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-card" asChild>
                  <Link href="/#faq">
                    See More
                    <ChevronRight />
                  </Link>
                </Button>
              </div>

              <div className="mt-5 flex flex-1 flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-r from-emerald-50 via-card to-muted/40 p-8 text-center">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock3 className="size-5" />
                </span>
                <p className="font-heading text-2xl font-semibold">
                  Average Process Time: Typically Within 30 Minutes
                </p>
                <p className="max-w-lg text-lg text-muted-foreground">
                  Many patients complete their online consultation and
                  receive their physician&rsquo;s medical marijuana
                  recommendation the same day, though times may vary
                  depending on the doctor&rsquo;s availability and state
                  requirements
                </p>
              </div>
            </motion.div>

            {/* Right: ascending milestone staircase */}
            <div className="bg-grid-faint relative overflow-hidden rounded-2xl p-3 sm:p-4">
              <div className="flex flex-col gap-5 sm:gap-6">
                {/* Step 1 */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  className="relative w-full max-w-[420px] rounded-2xl bg-card px-6 py-4 shadow-lg"
                >
                  <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md">
                    1
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <User className="size-5" />
                  </span>
                  <p className="mt-3 font-heading text-base font-semibold text-primary">
                    Book Your Appointment
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Fill out our HIPAA-compliant online form with your basic
                    information, California ID, and medical history.
                    Schedule your consultation at a convenient time from the
                    comfort of your home
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.15 }}
                  className="relative ml-[8%] w-full max-w-[460px] rounded-2xl bg-card px-6 py-4 shadow-lg sm:ml-[18%]"
                >
                  <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md">
                    2
                  </span>
                  <p className="font-heading text-base font-semibold text-primary">
                    Attend Your MMJ Consultation
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Connect with a licensed California MMJ doctor online via
                    audio or video call. The doctor reviews your symptoms and
                    determines whether medical cannabis is appropriate for you
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-sky-50 p-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-sky-500/15 text-sky-700">
                        <Phone className="size-4" />
                      </span>
                      <p className="mt-2 text-sm font-semibold">Audio Call</p>
                    </div>
                    <div className="rounded-xl bg-emerald-50 p-3">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-700">
                        <Video className="size-4" />
                      </span>
                      <p className="mt-2 text-sm font-semibold">Video Call</p>
                    </div>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.3 }}
                  className="relative ml-[16%] w-full max-w-[420px] rounded-2xl bg-card px-6 py-4 shadow-lg sm:ml-[34%]"
                >
                  <span className="absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-md">
                    3
                  </span>
                  <span className="flex size-11 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <IdCard className="size-5" />
                  </span>
                  <p className="mt-3 font-heading text-base font-semibold text-primary">
                    Receive Your Recommendation
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    If approved, you&rsquo;ll receive a written medical
                    marijuana recommendation for legal access at licensed
                    California dispensaries, plus an optional wallet-sized ID
                    card for convenience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between border-t border-dashed border-border px-1 pt-3 text-xs font-medium text-muted-foreground">
            {timeMarkers.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
