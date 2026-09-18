import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArrowButton } from "@/components/blog/blog-arrow-button";
import { BlogArticleFaqs } from "@/components/blog/blog-article-faqs";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogCover } from "@/components/blog/blog-cover";
import { BlogGlanceTable } from "@/components/blog/blog-glance-table";
import { BlogHeroByline } from "@/components/blog/blog-hero-byline";
import { BlogQualifyCta } from "@/components/blog/blog-qualify-cta";
import { BlogRichText } from "@/components/blog/blog-rich-text";
import { BlogTableOfContents } from "@/components/blog/blog-table-of-contents";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { BlogGoogleTrustToast } from "@/components/blog/blog-google-trusted-toast";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import {
  absoluteUrl,
  blogPosts,
  getPostBySlug,
  getPostFaqs,
  getPostHeadings,
  headingToId,
} from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Guide Not Found" };
  }

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;
  const image = post.image ?? "/og-image.jpg";

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: [
      "Is Marijuana Legal in California 2026",
      "California medical marijuana",
      "MMIC",
      "medical marijuana card California",
    ],
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      url: `/blog/${post.slug}/`,
      images: [{ url: image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const headings = getPostHeadings(post);
  const faqs = getPostFaqs(post);
  const pageUrl = `${siteConfig.url}/blog/${post.slug}/`;
  const imageUrl = absoluteUrl(post.image ?? "/og-image.jpg");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle ?? post.title,
    name: post.title,
    description: post.seoDescription ?? post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    inLanguage: "en-US",
    keywords: "Is Marijuana Legal in California 2026",
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/mmca-logo.svg"),
      },
    },
    reviewedBy: post.reviewer
      ? {
        "@type": "Person",
        name: post.reviewer,
        jobTitle: post.reviewerRole,
      }
      : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      {/* <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog/" },
          { label: post.breadcrumbLabel ?? post.title },
        ]}
      /> */}
      <div className="flex justify-end mt-4 mr-3">
        <BlogGoogleTrustToast />
      </div>
      <article className="py-1 sm:py-6">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Badge className="rounded-full">{post.category}</Badge>
            <div className="mt-3 w-full">
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog/" },
                  { label: post.breadcrumbLabel ?? post.title },
                ]}
              />
            </div>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight leading-snug text-primary sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            {post.subtitle ? (
              <p className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {post.subtitle}
              </p>
            ) : null}
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {post.heroDescription ?? post.excerpt}
            </p>
            <div className="flex items-center gap-2 justify-center">
              <BlogArrowButton href="/#get-approved" className="mt-7">
                Get Your CA MMJ Card
              </BlogArrowButton>
            </div>
          </div>

          <BlogHeroByline post={post} />

          <div className="mt-8 overflow-hidden rounded-3xl shadow-md ring-1 ring-primary/10">
            <BlogCover
              title={post.title}
              category={post.category}
              image={post.image}
              featured
            />
          </div>
        </Container>

        <div className="mt-12 lg:grid lg:grid-cols-[minmax(16rem,18rem)_minmax(0,1fr)] lg:items-start lg:gap-x-12">

          <BlogTableOfContents items={headings} />

          <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-8 sm:px-6 lg:mx-0 lg:max-w-6xl lg:px-10 lg:py-0 xl:px-14">
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground text-[1xl">
              {post.content.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={`${block.text}-${index}`}
                      id={headingToId(block.text)}
                      className="scroll-mt-28 font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "h3") {
                  return (
                    <h3
                      key={`${block.text}-${index}`}
                      className="font-heading text-xl font-semibold tracking-tight text-foreground"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "ul") {
                  return (
                    <ul
                      key={`list-${index}`}
                      className="list-disc space-y-2 pl-5"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === "keypoints") {
                  return (
                    <aside
                      key={`keypoints-${index}`}
                      className="rounded-[1.75rem] bg-card p-5 shadow-sm ring-1 ring-primary/10 sm:p-8"
                    >
                      <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
                        Key Points
                      </h3>
                      <ul className="mt-5 space-y-3">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 size-2.5 shrink-0 bg-primary"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </aside>
                  );
                }

                if (block.type === "cta") {
                  return <BlogQualifyCta key={`cta-${index}`} />;
                }

                if (block.type === "table") {
                  return (
                    <BlogGlanceTable key={`table-${index}`} rows={block.rows} />
                  );
                }

                if (block.type === "faq") {
                  return (
                    <BlogArticleFaqs key={`faq-${index}`} items={block.items} />
                  );
                }

                return (
                  <p
                    key={`p-${index}`}
                    className={
                      block.dropCap
                        ? "first-letter:float-left first-letter:mr-2.5 first-letter:font-heading first-letter:text-5xl first-letter:leading-[0.8] first-letter:font-bold first-letter:text-primary sm:first-letter:text-6xl"
                        : undefined
                    }
                  >
                    <BlogRichText text={block.text} links={block.links} />
                  </p>
                );
              })}
            </div>
            
         <Container>
          <BlogAuthorCard post={post} />
        </Container> 
          </div>
          
        </div>

         {/* <Container>
          <BlogAuthorCard post={post} />
        </Container>  */}
      </article>

      <section className="cv-auto pt-8 pb-4 sm:pt-10 sm:pb-6">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to get your California MMIC?
            </h2>
            <p className="max-w-xl text-primary-foreground/90">
              Book an online evaluation with a licensed doctor and receive your
              recommendation the same day, with a money-back guarantee.
            </p>
            <Button
              size="xl"
              variant="secondary"
              className="rounded-full"
              asChild
            >
              <a href="/#get-approved">Get My Card</a>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
