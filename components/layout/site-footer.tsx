"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { AtSign, Camera, Play, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactInfo } from "@/lib/site-data";

const EASE = [0.22, 1, 0.36, 1] as const;
const scrollViewportTight = { once: true, margin: "0px 0px -40px 0px" as const, amount: 0.1 };

const resourceLinks = [
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipment Policy & Disclaimer", href: "/shipment-policy-and-disclaimer" },
];

const socialLinks = [
  { label: "Instagram", icon: Camera, href: "#" },
  { label: "Twitter", icon: AtSign, href: "#" },
  { label: "Facebook", icon: ThumbsUp, href: "#" },
  { label: "YouTube", icon: Play, href: "#" },
];

const columnVariants: Variants = {
  rest: { opacity: 1 },
  inView: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const linkItemVariants: Variants = {
  rest: { opacity: 1, y: 12 },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold tracking-wide text-emerald-200/70 uppercase sm:mb-4">
        {heading}
      </p>
      <motion.ul
        className="space-y-2.5 sm:space-y-3.5"
        initial="rest"
        whileInView="inView"
        viewport={scrollViewportTight}
        variants={columnVariants}
      >
        {links.map((link) => (
          <motion.li key={link.label} variants={linkItemVariants}>
            <motion.a
              href={link.href}
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/90 sm:text-[14px]"
              whileHover={{ x: 4, color: "#cfeae0" }}
              transition={{ duration: 0.25, ease: EASE }}
            >
              <span className="block size-2.5 shrink-0 rounded-bl-[3px] border-b border-l border-white/30 transition-colors group-hover:border-emerald-300" />
              {link.label}
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="cv-auto relative z-20 bg-background pt-4 sm:pt-10">
      <motion.footer
        className="relative overflow-hidden rounded-t-[2rem] border border-b-0 border-white/10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 sm:rounded-t-[3rem] md:rounded-t-[3.5rem]"
        initial={{ opacity: 1, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -20px 0px", amount: 0.05 }}
        transition={{ duration: 0.95, ease: EASE }}
      >
        <div className="relative flex items-center justify-center overflow-hidden py-10 sm:py-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(110,231,183,0.35), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="bg-noise pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
            aria-hidden="true"
          />
          <motion.span
            initial={{ opacity: 1, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative bg-gradient-to-b from-white via-emerald-50 to-emerald-200/60 bg-clip-text px-4 text-center font-heading text-[3.2rem] leading-none font-bold tracking-tight text-transparent sm:text-[5.5rem] md:text-[7rem]"
          >
            CALIFORNIA
          </motion.span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-14 md:pt-16 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <motion.div
              initial={{ opacity: 1, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={scrollViewportTight}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="text-xs font-semibold tracking-wide text-emerald-200/70 uppercase">
                Join Our Newsletter
              </p>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                Get California MMJ news, renewal reminders, and seasonal
                offers sent to your inbox.
              </p>
              <form className="mt-4 flex max-w-sm gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 border-white/15 bg-white/5 text-white placeholder:text-white/40"
                />
                <Button type="submit" variant="secondary" className="shrink-0 rounded-lg">
                  Join Now
                </Button>
              </form>

              <div className="mt-6 flex items-center gap-2.5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80"
                      whileHover={
                        prefersReducedMotion
                          ? { color: "#fff" }
                          : { y: -2, backgroundColor: "rgba(255,255,255,0.12)" }
                      }
                      transition={{ duration: 0.2, ease: EASE }}
                    >
                      <Icon className="size-4" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <FooterLinkColumn heading="Resources" links={resourceLinks} />
            <FooterLinkColumn heading="Legal" links={legalLinks} />
          </div>

          <motion.div
            className="mt-10 flex flex-col items-center gap-4 border-t border-white/20 pt-6 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8"
            initial={{ opacity: 1, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={scrollViewportTight}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            style={{ transformOrigin: "center" }}
          >
            <span className="relative block h-10 w-44 shrink-0 rounded-md bg-white px-3 py-1.5">
              <Image
                src="/logo.png"
                alt="Medical Marijuana Card California"
                fill
                className="object-contain p-0.5"
              />
            </span>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-base font-medium text-white/90">
              <a href={contactInfo.phoneHref} className="hover:text-emerald-300">
                {contactInfo.phone}
              </a>
              <span className="hidden text-white/40 sm:inline">&middot;</span>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-emerald-300">
                {contactInfo.email}
              </a>
            </div>
          </motion.div>

          <motion.p
            className="mt-5 text-center text-xs text-white/70 sm:text-[13px]"
            initial={{ opacity: 1, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={scrollViewportTight}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
          >
            This website does not sell medicine nor controlled substances. It
            is a network of doctors and nurse practitioners, not a pharmacy
            or dispensary. &copy; {year} Medical Marijuana Card California.
            All Rights Reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}
