import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BlogQualifyCta() {
  return (
    <div className="flex justify-center py-2">
      <div className="w-full rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 px-5 py-10 text-center text-white sm:px-14 sm:py-14">
        <span className="inline-flex rounded-full bg-emerald-400/15 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-emerald-200 uppercase">
          Online Evaluations
        </span>
        <h3 className="mt-5 font-heading text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
          Find Out If You Qualify for Medical Marijuana
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/85">
          <Link href="/" className="font-semibold text-white underline-offset-4 hover:underline">
            Medical Marijuana Card California
          </Link>{" "}
          connects California patients with licensed doctors for 100% online
          medical marijuana evaluations.
        </p>
        <Button
          size="xl"
          className="mt-8 rounded-full bg-white text-foreground hover:bg-emerald-100"
          asChild
        >
          <a href="/#get-approved">
            Apply Today
            <ArrowRight />
          </a>
        </Button>
      </div>
    </div>
  );
}
