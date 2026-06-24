"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

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
import { pricingPlans } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;

const columnVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function ContactPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-20 sm:py-28">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-400/30 opacity-30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-amber-400/20 opacity-30 blur-3xl"
          aria-hidden="true"
        />

        <Container className="relative max-w-3xl text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={columnVariants}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="outline"
                className="h-auto gap-2 rounded-full border-white/20 bg-white/10 px-4 py-2 text-base font-semibold text-white"
              >
                <Sparkles className="size-4.5 text-amber-300" />
                We&rsquo;re Here to Help
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Contact Us
            </motion.h1>

            <motion.p variants={itemVariants} className="max-w-xl text-emerald-100/80">
              Have a question before booking? Reach out, or skip straight to
              scheduling your medical marijuana card evaluation below.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Booking form */}
      <section id="book-appointment" className="bg-mesh-trust bg-grid-faint py-16 sm:py-20">
        <Container className="max-w-2xl">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Badge variant="outline" className="h-auto gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold">
              Book Your Appointment
            </Badge>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight">
              Let&rsquo;s Get You Approved
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out the form below and our team will follow up to confirm
              your telehealth evaluation. This form is a preview and does not
              submit data yet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <Card className="relative mt-10 overflow-hidden p-2 shadow-xl ring-1 ring-primary/10">
              <div className="dot-pattern pointer-events-none absolute top-0 right-0 h-24 w-24" aria-hidden="true" />
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
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
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
        </Container>
      </section>
    </>
  );
}
