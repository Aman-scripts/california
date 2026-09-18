import Image from "next/image";
import { CalendarDays, Stethoscope } from "lucide-react";

import { formatBlogDate, formatBlogDateLong, type BlogPost } from "@/lib/blog-data";

export function BlogHeroByline({ post }: { post: BlogPost }) {
  const reviewerName = post.reviewer ?? "California Physician";
  const reviewerRole = post.reviewerRole ?? "M.D., Licensed California Physician";
  const updatedDate = post.updatedDate ?? post.date;

  return (
    <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-card via-emerald-50/80 to-card shadow-[0_18px_40px_-28px_rgba(6,78,59,0.4)] ring-1 ring-primary/15">
      <div className="grid gap-5 px-4 py-5 sm:px-7 sm:py-6 lg:grid-cols-3 lg:items-center lg:gap-0">
        <BylinePerson
          label="Written by"
          name={post.author}
          role={post.authorRole ?? "Health & Medical Content Writer"}
          specialist={post.specialist}
          image={post.authorImage}
          fallback="writer"
        />

        <div className="flex items-center gap-3 border-y border-emerald-200/80 py-4 lg:justify-center lg:border-x lg:border-y-0 lg:px-6 lg:py-0">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/15 sm:size-14">
            <CalendarDays className="size-6" aria-hidden="true" />
          </span>
          <div className="min-w-0 text-left">
            <p className="text-sm font-semibold text-primary">Published</p>
            <p className="font-heading text-base font-semibold tracking-tight text-foreground">
              {formatBlogDateLong(post.date)}
            </p>
            {/* <p className="text-sm text-muted-foreground">
              Last updated: {formatBlogDate(updatedDate)}
            </p> */}
          </div>
        </div>

        <div className="lg:pl-6">
          <BylinePerson
            label="Medically Reviewed by"
            name={reviewerName}
            role={reviewerRole}
            specialist={post.reviewerSpecialist} // or keep reviewerSpecialist
            image={post.reviewerImage}
            fallback="reviewer"
          />
        </div>
      </div>
    </div>
  );
}

function BylinePerson({
  label,
  name,
  role,
  image,
  fallback,
  specialist,
  reviewerSpecialist,
  reviewerImage,
}: {
  label: string;
  name: string;
  role: string;
  image?: string;
  fallback: "writer" | "reviewer";
  specialist?: string;
  reviewerSpecialist?: string;
  reviewerImage?: string;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-emerald-50 ring-2 ring-primary/20 sm:size-14">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="56px"
            className="object-cover"
          />
        ) : fallback === "writer" ? (
          <Image
            src="/mmca-logo.svg"
            alt=""
            fill
            sizes="56px"
            className="object-contain p-2.5"
          />
        ) : (
          <span className="flex size-full items-center justify-center text-primary">
            <Stethoscope className="size-6" aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="min-w-0 text-left">
        <p className="text-sm font-semibold text-primary">{label}</p>
        <p className="font-heading text-base font-semibold tracking-tight text-foreground">
          {name}
        </p>
        <p className="text-sm text-muted-foreground">{role}</p>
        {specialist && <p className="text-sm text-primary">{specialist}</p>}
        {reviewerSpecialist && <p className="text-sm text-primary">{reviewerSpecialist}</p>}
      </div>
    </div>
  );
}
