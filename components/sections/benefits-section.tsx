"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Percent, Scale, ShieldCheck, Sprout } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { benefits } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
};

const barVariants: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

const cardHover = { y: -8, scale: 1.02, transition: { duration: 0.3, ease: EASE } };

export function BenefitsSection() {
  const [taxSavings, possessionLimits, cultivation, dispensaryAccess] = benefits;

  return (
    <section id="benefits" className="cv-auto bg-dot-grid bg-muted/40 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Benefits of a Medical Marijuana Card California
          </h2>
          <p className="mt-4 text-muted-foreground">
            Under California&rsquo;s Compassionate Use Act (Prop 215) and SB
            420 guidelines, a valid medical cannabis card unlocks advantages
            that recreational users don&rsquo;t have.
          </p>
        </div>

        <motion.div
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
        >
          {/* Tax Savings - wide card */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-200 to-emerald-50 p-6 shadow-md ring-1 ring-emerald-900/10 sm:col-span-2 sm:p-8"
          >
            <Percent className="absolute -right-6 -bottom-8 size-40 text-emerald-900/10" />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <span className="font-heading text-5xl font-bold text-emerald-700 sm:text-6xl">
                {taxSavings.stat}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold">
                  {taxSavings.title}
                </h3>
                <p className="mt-1 max-w-sm text-sm text-emerald-900/70">
                  {taxSavings.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Dispensary Access - tall image card */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="relative col-span-1 row-span-2 min-h-[280px] overflow-hidden rounded-3xl shadow-md ring-1 ring-emerald-900/10 sm:min-h-0"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <Image
                src="/medical-marijuana-benefits.jpg"
                alt="California medical marijuana patient benefits"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/15 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm">
              <ShieldCheck className="size-3.5" />
              {dispensaryAccess.stat}
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="font-heading text-lg font-semibold text-white">
                {dispensaryAccess.title}
              </h3>
              <p className="mt-1 text-sm text-emerald-50/90">
                {dispensaryAccess.description}
              </p>
            </div>
          </motion.div>

          {/* Higher Possession Limits */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-sky-200 to-sky-50 p-6 shadow-md ring-1 ring-sky-900/10"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-sky-500/20 text-sky-700">
              <Scale className="size-5" />
            </span>
            <div className="mt-6 flex items-end gap-1.5">
              {[40, 65, 50, 90].map((h, i) => (
                <motion.span
                  key={i}
                  variants={barVariants}
                  style={{ height: `${h * 0.4}px`, transformOrigin: "bottom" }}
                  className="w-3 rounded-full bg-sky-500/60"
                />
              ))}
              <Badge className="mb-1 ml-2 bg-sky-600">{possessionLimits.stat}</Badge>
            </div>
            <h3 className="mt-4 font-heading font-semibold">{possessionLimits.title}</h3>
            <p className="mt-1 text-sm text-sky-900/70">
              {possessionLimits.description}
            </p>
          </motion.div>

          {/* Legal Cultivation */}
          <motion.div
            variants={cardVariants}
            whileHover={cardHover}
            className="relative col-span-1 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-200 to-amber-50 p-6 shadow-md ring-1 ring-amber-900/10"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700">
              <Sprout className="size-5" />
            </span>
            <p className="mt-6 font-heading text-3xl font-bold text-amber-700">
              {cultivation.stat}
            </p>
            <h3 className="mt-4 font-heading font-semibold">{cultivation.title}</h3>
            <p className="mt-1 text-sm text-amber-900/70">
              {cultivation.description}
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-10 text-center">
          <Button size="xl" asChild>
            <Link href="/contact-us#book-appointment">Get MMJ Card Now</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
