import Image from "next/image";
import {
  HeartPulse,
  IdCard,
  Pill,
  Scale,
  Sprout,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import type { BlogCategory } from "@/lib/blog-data";

const categoryIcons: Record<BlogCategory, LucideIcon> = {
  "MMIC & Recreational": Scale,
  "Qualifying Conditions": HeartPulse,
  "Health Benefits": Sprout,
  "Patient Rights": IdCard,
  "Dosage & Usage": Pill,
};

const categoryGradients: Record<BlogCategory, string> = {
  "MMIC & Recreational": "from-emerald-800 via-emerald-700 to-emerald-900",
  "Qualifying Conditions": "from-teal-700 via-emerald-700 to-teal-900",
  "Health Benefits": "from-amber-600 via-emerald-700 to-emerald-900",
  "Patient Rights": "from-emerald-950 via-emerald-800 to-teal-900",
  "Dosage & Usage": "from-lime-800 via-emerald-800 to-emerald-950",
};

export function BlogCover({
  title,
  category,
  image,
  featured = false,
}: {
  title: string;
  category: BlogCategory;
  image?: string;
  featured?: boolean;
}) {
  const Icon = categoryIcons[category];

  if (image) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-emerald-950",
          featured
            ? "aspect-[16/10] min-h-[200px] sm:min-h-[320px] lg:aspect-[21/9] lg:min-h-[440px]"
            : "aspect-[16/10]"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={featured ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-emerald-950/10" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        categoryGradients[category],
        featured
          ? "aspect-[16/10] min-h-[200px] sm:min-h-[320px] lg:aspect-[21/9] lg:min-h-[440px]"
          : "aspect-[16/10]"
      )}
    >
      <Icon className="absolute -right-6 -bottom-8 size-40 text-white/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm">
          <Icon className="size-7" />
        </span>
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}
