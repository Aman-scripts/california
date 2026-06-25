import Image from "next/image";
import Link from "next/link";
import { Clock, DollarSign, Scale, ShieldCheck, Star, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroBadge, heroFeatures } from "@/lib/site-data";

const featureIcons = [Clock, DollarSign, Scale];
const avatarStyles = ["bg-amber-400", "bg-emerald-400", "bg-sky-400", "bg-violet-400"];

const enter = "enter-fade-up";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 py-14 sm:rounded-b-[2.5rem] sm:py-20">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.5) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="flex flex-col gap-7">
          <div className={`flex items-center gap-3 ${enter}`}>
            <div className="flex items-center -space-x-3">
              {avatarStyles.map((style, index) => (
                <span
                  key={index}
                  className={`flex size-8 items-center justify-center rounded-full ring-2 ring-emerald-900 ${style}`}
                >
                  <User className="size-4 text-emerald-950" />
                </span>
              ))}
            </div>
            <p className="text-sm font-medium text-emerald-100/80">
              Trusted by 1,000+ Happy Patients
            </p>
          </div>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
            Apply for a <span className="text-emerald-300">California</span>
            <br />
            <span className="text-emerald-300">Medical Marijuana Card</span> Today
          </h1>

          <p className={`text-lg font-bold text-amber-400 ${enter} [animation-delay:200ms]`}>
            {heroBadge}
          </p>

          <p className={`max-w-xl text-emerald-100/70 ${enter} [animation-delay:300ms]`}>
            Connect with a licensed California medical marijuana doctor and
            get evaluated in full compliance with state guidelines.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroFeatures.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 ${enter}`}
                  style={{ animationDelay: `${400 + index * 80}ms` }}
                >
                  <span className="flex size-9 items-center justify-center rounded-full bg-amber-400 text-emerald-950">
                    <Icon className="size-4.5" />
                  </span>
                  <p className="text-sm font-semibold leading-tight text-white">
                    {feature.title}
                  </p>
                  <p className="text-xs text-emerald-100/60">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className={`flex flex-nowrap items-stretch gap-2 pt-2 sm:gap-3 ${enter} [animation-delay:650ms]`}>
            <Button
              size="xl"
              variant="outline"
              className="min-w-0 flex-1 basis-1/2 justify-center border-white/25 bg-transparent px-2 text-center text-sm whitespace-normal text-white hover:bg-white/10 hover:text-white sm:flex-initial sm:basis-auto sm:whitespace-nowrap sm:px-8 sm:text-base"
              asChild
            >
              <Link href="/#benefits">Check Benefits</Link>
            </Button>
            <Button
              size="xl"
              className="min-w-0 flex-1 basis-1/2 justify-center bg-emerald-400 px-2 text-center text-sm whitespace-normal text-emerald-950 hover:bg-emerald-300 sm:flex-initial sm:basis-auto sm:whitespace-nowrap sm:px-8 sm:text-base"
              asChild
            >
              <a href="/#get-approved">Apply Your Application</a>
            </Button>
          </div>
        </div>

        <div
          className="enter-fade-right relative mx-auto w-full max-w-sm lg:max-w-md [animation-delay:150ms]"
        >
          <div
            className="absolute -inset-4 rounded-[2.5rem] bg-emerald-400/20 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border-[6px] border-card bg-card shadow-2xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-[1.02]">
            <Image
              src="/heroSection.webp"
              alt="Licensed doctor holding a California medical marijuana ID card"
              fill
              priority
              sizes="(min-width: 1024px) 400px, 90vw"
              className="object-cover"
            />

            <div
              className="enter-fade-top absolute top-4 left-4 flex items-center gap-2 rounded-2xl bg-card px-3.5 py-2.5 shadow-lg [animation-delay:500ms]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Star className="size-4" />
              </span>
              <p className="text-xs font-semibold text-foreground">
                Trusted by 1,000+
                <br />
                Patients
              </p>
            </div>

            <div
              className="enter-fade-up absolute bottom-4 right-4 flex items-center gap-2.5 rounded-2xl bg-card px-3.5 py-2.5 shadow-lg [animation-delay:650ms]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Average Approval Time
                </p>
                <p className="text-xs text-muted-foreground">15-30 minutes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
