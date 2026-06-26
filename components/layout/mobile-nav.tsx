"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { contactInfo, navLinks } from "@/lib/site-data";

export function MobileNav({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>
            <span className="relative block h-10 w-48">
              <Image
                src="/logo.png"
                alt="Medical Marijuana Card California"
                fill
                sizes="192px"
                quality={60}
                className="object-contain object-left"
              />
            </span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => {
            const isHashLink = link.href.startsWith("/#");
            const className =
              "rounded-md px-2 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted";
            return (
              <SheetClose asChild key={link.href}>
                {isHashLink ? (
                  <a href={link.href} className={className}>
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={className}>
                    {link.label}
                  </Link>
                )}
              </SheetClose>
            );
          })}
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
  );
}
