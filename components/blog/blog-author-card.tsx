import Image from "next/image";
import { CheckCheck, Clock3, Leaf, Stethoscope } from "lucide-react";

import { formatBlogDate, type BlogPost } from "@/lib/blog-data";

export function BlogAuthorCard({ post }: { post: BlogPost }) {
  const reviewerName = post.reviewer ?? "California Physician";
  const reviewerRole = post.reviewerRole ?? "Medical Doctor";
  const featureImage = post.authorFeatureImage ?? "/heroSection.webp";
  const lastUpdated = post.updatedDate ?? post.date;

  return (
    <aside className="mt-12 overflow-x-clip">
      <h2 className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        About the Author
      </h2>

      <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-emerald-50 px-4 py-6 sm:px-8 sm:py-8">
        <div
          className="pointer-events-none absolute -top-16 -right-10 size-56 rounded-full bg-emerald-200/40 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)]">
          <div className="relative z-10 lg:-mr-12 lg:py-4">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 lg:absolute lg:top-3 lg:right-3 lg:z-20 lg:mb-0">
              <CheckCheck className="size-4" aria-hidden="true" />
              Fact Checked
            </span>

            <div className="rounded-[1.75rem] bg-card px-5 py-6 shadow-[0_18px_50px_-28px_rgba(6,78,59,0.45)] ring-1 ring-primary/10 sm:px-8 sm:py-7 lg:pt-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-0">
                <AuthorPerson
                  label="Written by"
                  name={post.author}
                  role={post.authorRole}
                  image={post.authorImage}
                  fallback="writer"
                />
                <div
                  aria-hidden="true"
                  className="hidden h-14 w-px shrink-0 bg-border sm:mx-7 sm:block"
                />
                <div aria-hidden="true" className="h-px bg-border sm:hidden" />
                <AuthorPerson
                  label="Factually reviewed"
                  name={reviewerName}
                  role={reviewerRole}
                  image={post.reviewerImage}
                  fallback="reviewer"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="mb-3 flex flex-wrap items-center justify-start gap-x-4 gap-y-1 text-sm text-muted-foreground lg:justify-end">
              <span className="inline-flex items-center gap-1.5">
                <Leaf className="size-4 text-primary" aria-hidden="true" />
                Last Updated: {formatBlogDate(lastUpdated)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-4 text-primary" aria-hidden="true" />
                {post.readTime}
              </span>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] bg-emerald-900 shadow-[0_24px_50px_-28px_rgba(6,78,59,0.55)] ring-4 ring-white">
              <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src={featureImage}
                  alt="Licensed California doctor providing a medical marijuana consultation"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function AuthorPerson({
  label,
  name,
  role,
  image,
  fallback,
}: {
  label: string;
  name: string;
  role?: string;
  image?: string;
  fallback: "writer" | "reviewer";
}) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3">
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
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-heading text-base font-semibold tracking-tight text-foreground">
          {name}
        </p>
        {role ? <p className="text-sm text-muted-foreground">{role}</p> : null}
      </div>
    </div>
  );
}
