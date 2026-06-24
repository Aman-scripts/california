"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Bandage,
  BicepsFlexed,
  Bone,
  Brain,
  Dna,
  Eye,
  Frown,
  Hand,
  Info,
  ShieldAlert,
  Sparkles,
  UtensilsCrossed,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { qualifyingConditions } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const conditionIcons = [
  Bone,
  Dna,
  Zap,
  Eye,
  ShieldAlert,
  Brain,
  Activity,
  Frown,
  BicepsFlexed,
  Hand,
  UtensilsCrossed,
  Bandage,
];

const colorStyles = [
  { bg: "bg-amber-100", text: "text-amber-600", ring: "hover:ring-amber-300/60" },
  { bg: "bg-emerald-100", text: "text-emerald-600", ring: "hover:ring-emerald-300/60" },
  { bg: "bg-sky-100", text: "text-sky-600", ring: "hover:ring-sky-300/60" },
  { bg: "bg-violet-100", text: "text-violet-600", ring: "hover:ring-violet-300/60" },
];

const columnVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const gridVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

export function ConditionsSection() {
  return (
    <section className="cv-auto py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left: copy + CTA */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={columnVariants}
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold"
              >
                <Sparkles className="size-4.5 text-primary" />
                {qualifyingConditions.length}+ Qualifying Conditions
              </Badge>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Qualifying Medical Conditions for MMJ in California
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 max-w-md text-muted-foreground">
              Under California law, a patient may qualify for medical
              cannabis if a licensed MMJ doctor determines its use is
              appropriate for a diagnosed condition.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="relative mt-8 flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 via-accent to-amber-50 p-6 text-center shadow-sm sm:p-8"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                <Info className="size-5" />
              </span>
              <p className="text-sm text-accent-foreground">
                If your condition isn&rsquo;t listed among the official
                qualifying ones, our licensed 420 doctors will carefully
                review your medical history to determine if medical
                cannabis is suitable for you.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact-us#book-appointment">Check If You Qualify</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: conditions grid */}
          <motion.div
            className="bg-grid-faint grid grid-cols-2 gap-4 rounded-3xl bg-muted/40 p-4 sm:grid-cols-3 sm:p-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridVariants}
          >
            {qualifyingConditions.map((condition, index) => {
              const Icon = conditionIcons[index % conditionIcons.length];
              const style = colorStyles[index % colorStyles.length];
              return (
                <motion.div
                  key={condition.name}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.04 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className={`group flex flex-col items-center gap-3 rounded-2xl bg-card p-5 text-center shadow-sm ring-1 ring-foreground/5 transition-shadow hover:shadow-lg ${style.ring}`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${style.bg} ${style.text}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-medium">{condition.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
