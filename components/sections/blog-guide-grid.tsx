"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import { BlogArrowButton } from "@/components/blog/blog-arrow-button";
import { BlogCover } from "@/components/blog/blog-cover";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  blogCategories,
  blogPosts,
  formatBlogDate,
  type BlogCategory,
} from "@/lib/blog-data";

export function BlogGuideGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<BlogCategory | "All">("All");

  const filteredPosts = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        post.title.toLowerCase().includes(normalized) ||
        post.excerpt.toLowerCase().includes(normalized) ||
        post.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Education Library
          </p>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight sm:text-4xl">
            Latest Cannabis Guides & Medical Insights
          </h2>
        </div>
        <div className="relative w-full lg:max-w-xs">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guides"
            aria-label="Search guides"
            className="rounded-full bg-card pl-9"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterPill
          label="All"
          active={category === "All"}
          onClick={() => setCategory("All")}
        />
        {blogCategories.map((item) => (
          <FilterPill
            key={item}
            label={item}
            active={category === item}
            onClick={() => setCategory(item)}
          />
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">
          No guides match that search. Try another keyword or category.
        </p>
      ) : (
        <Reveal className="mt-10 grid max-w-xl gap-6">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group enter-fade-up overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-primary/10 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <BlogCover
                title={post.title}
                category={post.category}
                image={post.image}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                  <Badge variant="secondary" className="rounded-full">
                    {post.category}
                  </Badge>
                  <span>{formatBlogDate(post.date)}</span>
                </div>
                <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <BlogArrowButton href={`/blog/${post.slug}/`} className="mt-5">
                  Read Article
                </BlogArrowButton>
              </div>
            </article>
          ))}
        </Reveal>
      )}
    </>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-primary/10 bg-card text-foreground hover:bg-muted"
      )}
    >
      {label}
    </button>
  );
}
