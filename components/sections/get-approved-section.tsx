"use client";

import { motion, type Variants } from "framer-motion";
import { Lock, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Container } from "@/components/layout/container";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "15-30 min", label: "Avg. Wait" },
  { value: "Same Day", label: "Approval" },
  { value: "100%", label: "Online" },
];

const columnVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

export function GetApprovedSection() {
  return (
    <section className="cv-auto bg-mesh-trust relative overflow-hidden py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          className="flex flex-col gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={columnVariants}
        >
          <motion.div variants={itemVariants}>
            <Badge
              variant="outline"
              className="h-auto gap-2.5 rounded-full bg-card px-5 py-3 text-base font-semibold"
            >
              <Sparkles className="size-5 text-primary" />
              Same-Day Telehealth
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Fast MMJ Approval in Less Than 30 Minutes
          </motion.h2>

          <motion.p variants={itemVariants} className="max-w-md text-muted-foreground">
            Most patients complete the process easily and receive their
            doctor&rsquo;s approval within 15 to 30 minutes. It&rsquo;s a
            quick and stress-free experience designed to fit right into
            your day.
          </motion.p>

          <motion.p variants={itemVariants} className="max-w-md text-muted-foreground">
            Once approved, you&rsquo;ll instantly get access to your
            digital recommendation, so you can start visiting dispensaries
            without delay. Our friendly team and licensed doctors make
            sure every step feels smooth, secure, and completely
            confidential.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-2 grid grid-cols-3 gap-3">
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
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 text-xs font-medium text-muted-foreground"
          >
            <Lock className="size-3.5 text-primary" />
            Your information is encrypted &amp; HIPAA-compliant
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <Card className="relative overflow-hidden p-2 shadow-xl ring-1 ring-primary/10">
            <div className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24" aria-hidden="true" />
            <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400" />
            <CardContent className="relative py-5">
              <p className="font-heading text-sm font-semibold tracking-wide text-primary uppercase">
                Get Approved Today
              </p>
              <p className="mt-1.5 text-2xl font-bold sm:text-3xl">
                Plans starting at $55 only
              </p>

              <motion.form
                className="mt-7 flex flex-col gap-5"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={columnVariants}
              >
                <motion.div variants={fieldVariants} className="grid gap-2">
                  <Label htmlFor="leadName">Name (First &amp; Last)*</Label>
                  <Input id="leadName" name="leadName" placeholder="Jane Doe" />
                </motion.div>
                <motion.div variants={fieldVariants} className="grid gap-2">
                  <Label htmlFor="leadEmail">Email*</Label>
                  <Input id="leadEmail" name="leadEmail" type="email" placeholder="jane@example.com" />
                </motion.div>
                <motion.div variants={fieldVariants} className="grid gap-2">
                  <Label htmlFor="leadPhone">Phone Number*</Label>
                  <Input id="leadPhone" name="leadPhone" type="tel" placeholder="(555) 555-5555" />
                </motion.div>
                <motion.div variants={fieldVariants} className="flex items-start gap-2.5">
                  <Checkbox id="leadTerms" name="leadTerms" className="mt-0.5" />
                  <Label htmlFor="leadTerms" className="text-sm font-normal text-muted-foreground">
                  I agree to receive emails with educational content, exclusive offers, partnership discounts, and marketing updates
                  </Label>
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <Button type="submit" size="xl" className="mt-1 w-full">
                    Get Your Card
                  </Button>
                </motion.div>
              </motion.form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
