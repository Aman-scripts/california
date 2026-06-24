"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { contactInfo, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const desktopNavLinks = navLinks;
const sectionIds = desktopNavLinks
  .filter((link) => link.href.startsWith("/#"))
  .map((link) => link.href.replace("/#", ""));

function useScrolled(threshold = 8) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return isScrolled;
}

function useActiveSection(ids: string[]) {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, pathname]);

  return activeId;
}

export function SiteHeader() {
  const pathname = usePathname();
  const activeId = useActiveSection(sectionIds);
  const isScrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 transition-[border-radius,box-shadow] duration-300",
        isScrolled && "rounded-b-[2rem] shadow-lg shadow-emerald-950/40 sm:rounded-b-[2.5rem]"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 sm:h-[70px] sm:px-6 lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-full bg-white px-3.5 py-2"
        >
          <span className="relative block h-6 w-32 sm:h-7 sm:w-36">
            <Image
              src="/logo.png"
              alt="Medical Marijuana Card California"
              fill
              priority
              className="object-contain object-left"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {desktopNavLinks.map((link) => {
            const isHashLink = link.href.startsWith("/#");
            const id = link.href.replace("/#", "");
            const isActive = isHashLink ? activeId === id : pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/85 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="header-active-pill"
                    className="absolute inset-0 rounded-full bg-white/15 ring-1 ring-white/25"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
          >
            <Phone className="size-4" />
            {contactInfo.phone}
          </a>
          <Button
            size="lg"
            className="rounded-full bg-amber-400 text-amber-950 shadow-md shadow-amber-900/20 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-900/30 hover:scale-105"
            asChild
          >
            <Link href="/contact-us#book-appointment">Get My Card</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 lg:hidden"
            >
              <Menu />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>
                <span className="relative block h-10 w-48">
                  <Image
                    src="/logo.png"
                    alt="Medical Marijuana Card California"
                    fill
                    className="object-contain object-left"
                  />
                </span>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 p-4">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary"
              >
                <Phone className="size-4" />
                {contactInfo.phone}
              </a>
              <SheetClose asChild>
                <Button asChild>
                  <Link href="/contact-us#book-appointment">
                    Book Your Appointment
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
