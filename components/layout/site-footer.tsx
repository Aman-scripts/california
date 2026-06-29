import { Leaf, Mail, Phone } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { contactInfo } from "@/lib/site-data";

const enter = "enter-fade-up";

const trustPhrases = [
  "Compassionate Care",
  "Licensed Doctors",
  "Secure Consultations",
  "Fast Appointments",
  "Personalized Guidance",
  "State-Compliant Care",
  "Private & Confidential",
  "Trusted Healthcare Network",
  "Seamless Digital Experience",
  "Care That Starts With Listening",
];

const resourceLinks = [
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "Shipment Policy & Disclaimer", href: "/shipment-policy-and-disclaimer/" },
];

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
      <ul className="space-y-2.5 sm:space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-white/90 transition-all duration-200 hover:translate-x-1 hover:text-emerald-200 sm:text-[14px]"
            >
              <span className="block size-2.5 shrink-0 rounded-bl-[3px] border-b border-l border-white/30 transition-colors group-hover:border-emerald-300" />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <div className="relative z-20 bg-background pt-4 sm:pt-10">
      <footer className="relative overflow-hidden rounded-t-[2rem] border border-b-0 border-white/10 bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 sm:rounded-t-[3rem] md:rounded-t-[3.5rem]">
        <div className="relative overflow-hidden border-b border-white/10 py-6 sm:py-8">
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
          <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="group flex w-max">
              <div className="animate-marquee flex shrink-0 items-center gap-3 group-hover:[animation-play-state:paused] sm:gap-4">
                {[...trustPhrases, ...trustPhrases].map((phrase, index) => (
                  <span
                    key={index}
                    className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm sm:px-5 sm:py-2.5 sm:text-sm"
                  >
                    <Leaf className="size-3.5 shrink-0 text-emerald-300" />
                    {phrase}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pt-10 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:pt-14 md:pt-16 lg:px-8">
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
            <Reveal as="div" className={`flex flex-col items-start gap-4 ${enter}`}>
              <span className="relative block h-10 w-44 shrink-0">
                <Image
                  src="/mmca-logo-white.svg"
                  alt="Medical Marijuana Card California footer logo"
                  fill
                  sizes="176px"
                  quality={60}
                  className="object-contain object-left"
                />
              </span>

              <div className="flex flex-col items-start gap-1.5 text-base font-medium">
                <a
                  href={contactInfo.phoneHref}
                  className="inline-flex items-center gap-2 text-white hover:text-emerald-300"
                >
                  <Phone className="size-4 shrink-0" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 text-white hover:text-emerald-300"
                >
                  <Mail className="size-4 shrink-0" />
                  {contactInfo.email}
                </a>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 gap-10 sm:gap-16">
              <FooterLinkColumn heading="Resources" links={resourceLinks} />
              <FooterLinkColumn heading="Legal" links={legalLinks} />
            </div>
          </div>

          <Reveal
            as="p"
            className={`mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/70 sm:mt-14 sm:pt-8 sm:text-[13px] ${enter}`}
          >
            This website does not sell medicine nor controlled substances. It
            is a network of doctors and nurse practitioners, not a pharmacy
            or dispensary.
            <span className="mt-1 block">
              &copy; {year} Medical Marijuana Card California. All Rights
              Reserved.
            </span>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}
