import Image from "next/image";
import Link from "next/link";
import { Clock3, User } from "lucide-react";

import { BlogArrowButton } from "@/components/blog/blog-arrow-button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { formatBlogDate, type BlogPost } from "@/lib/blog-data";

export function BlogFeaturedCard({ post }: { post: BlogPost }) {
  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <p className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
          Featured Guide
        </p>

        <div className="relative mt-6 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.75fr)] lg:items-center">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-[1.75rem] shadow-lg ring-1 ring-primary/10 sm:min-h-[340px] lg:aspect-auto lg:h-[460px]">
            {post.image ? (
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" />
            <Badge className="absolute top-4 left-4 h-auto rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
              MMIC Guidelines
            </Badge>
          </div>

          <div className="relative z-10 mx-3 -mt-12 rounded-[1.75rem] bg-card p-5 shadow-[0_24px_60px_-24px_rgba(6,78,59,0.35)] ring-1 ring-primary/10 sm:mx-6 sm:-mt-14 sm:p-8 lg:mx-0 lg:-ml-16 lg:mt-0 lg:p-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock3 className="size-4 text-primary" />
                {post.readTime}
              </span>
              <span aria-hidden="true">•</span>
              <span className="inline-flex items-center gap-1.5">
                <User className="size-4 text-primary" />
                by {post.author}
              </span>
              <span className="hidden sm:inline" aria-hidden="true">
                •
              </span>
              <span className="hidden sm:inline">{formatBlogDate(post.date)}</span>
            </div>

            <h2 className="mt-4 font-heading text-xl font-bold tracking-tight sm:text-3xl">
              <Link
                href={`/blog/${post.slug}/`}
                className="transition-colors hover:text-primary"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
            <BlogArrowButton href={`/blog/${post.slug}/`} className="mt-6">
              Read Article
            </BlogArrowButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
