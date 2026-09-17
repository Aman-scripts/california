import { siteConfig } from "@/lib/site-data";

export const blogCategories = [
  "MMIC & Recreational",
  "Qualifying Conditions",
  "Health Benefits",
  "Patient Rights",
  "Dosage & Usage",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export type BlogTextLink = {
  label: string;
  href: string;
};

export type BlogFaq = {
  question: string;
  answer: string;
  links?: BlogTextLink[];
};

export type GlanceRow = {
  activity: string;
  status: string;
};

export type BlogBlock =
  | { type: "p"; text: string; dropCap?: boolean; links?: BlogTextLink[] }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "keypoints"; items: string[] }
  | { type: "cta" }
  | { type: "table"; rows: GlanceRow[] }
  | { type: "faq"; items: BlogFaq[] };

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  heroDescription?: string;
  seoTitle?: string;
  seoDescription?: string;
  breadcrumbLabel?: string;
  category: BlogCategory;
  date: string;
  updatedDate?: string;
  readTime: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  authorImage?: string;
  authorBioHref?: string;
  authorLinkedIn?: string;
  reviewer?: string;
  reviewerRole?: string;
  reviewerImage?: string;
  authorFeatureImage?: string;
  image?: string;
  featured?: boolean;
  content: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "is-marijuana-legal-in-california",
    title: "Is Marijuana Legal in California in 2026?",
    subtitle: "All You Need to Know",
    excerpt:
      "Is marijuana legal in California in 2026? See medical and recreational cannabis rules, MMIC benefits, possession limits, and restrictions.",
    heroDescription:
      "Cannabis is legal in California in 2026 for both medical and recreational use. Learn key rules, MMIC benefits, possession limits, and restrictions you must know.",
    seoTitle: "Is Marijuana Legal in California in 2026? Laws Explained",
    seoDescription:
      "Is marijuana legal in California in 2026? See medical and recreational cannabis rules, MMIC benefits, possession limits, and restrictions.",
    breadcrumbLabel: "Marijuana Legality",
    category: "MMIC & Recreational",
    date: "2026-09-12",
    updatedDate: "2026-09-17",
    readTime: "12 min read",
    author: "MMJ California Team",
    authorRole: "Health & Medical Content Writer",
    authorBio:
      "The MMJ California Team translates California medical and adult-use cannabis rules into clear, patient-centered guides. We work with licensed doctors to keep MMIC details, possession limits, and 2026 law updates accurate and easy to follow.",
    authorBioHref: "/contact-us/",
    reviewer: "California Physician",
    reviewerRole: "M.D., Licensed California Physician",
    authorFeatureImage: "/heroSection.webp",
    image: "/is-marijuana-legal-california.png",
    featured: true,
    content: [
      {
        type: "p",
        dropCap: true,
        text: "California was the first state in the U.S. to legalize medical marijuana, but California medical marijuana laws have changed significantly since then. This blog explains whether medical marijuana is legal in California in 2026, what the current law says, the potential benefits of having a medical marijuana card, and the restrictions that still apply.",
        links: [
          { label: "medical marijuana card", href: "/#get-approved" },
        ],
      },
      {
        type: "keypoints",
        items: [
          "Cannabis is legal in California for both medical and recreational use under state law.",
          "A physician’s recommendation may be enough to purchase medical cannabis legally.",
          "An MMIC can provide additional benefits, including qualifying medical cannabis tax exemptions.",
          "Medical patients may have higher possession and purchase limits than adult-use consumers.",
          "California allows home cultivation, but local rules may impose additional restrictions.",
          "Minors can qualify for medical cannabis with parent or legal guardian involvement.",
          "Public use, impaired driving, federal property, and interstate transport remain restricted.",
        ],
      },
      {
        type: "h2",
        text: "Introduction",
      },
      {
        type: "p",
        text: "If you're unsure whether marijuana is legal in California, the answer is yes. Cannabis is legal under California state law for both medical and recreational use. However, having both systems in place can make it confusing to understand which rules apply to you.",
      },
      {
        type: "p",
        text: "You may also wonder: If recreational cannabis is already legal, is there still a reason to get a medical marijuana card? What benefits does medical status offer, and what cannabis-related activities remain illegal? This guide will help you understand all you need to know.",
        links: [
          { label: "medical marijuana card", href: "/#get-approved" },
        ],
      },
      {
        type: "h2",
        text: "Is Medical Marijuana Legal in California?",
      },
      {
        type: "p",
        text: "Yes. Medical marijuana has been legal in California since 1996, when voters approved Proposition 215, the Compassionate Use Act. The law protected qualified patients who used cannabis for medical purposes with a physician’s recommendation.",
      },
      {
        type: "h2",
        text: "Is Recreational Marijuana Also Legal in California?",
      },
      {
        type: "p",
        text: "Yes. In 2016, voters approved Proposition 64, legalizing adult-use cannabis for people 21 and older. This created a system where both medical and recreational cannabis are legal but subject to different rules.",
      },
      {
        type: "p",
        text: "Today, California maintains this dual system: adults 21+ can purchase cannabis for recreational use, while patients 18+ can use cannabis medically with a physician’s recommendation.",
      },
      {
        type: "h2",
        text: "Do you Need a Medical Marijuana Card in California?",
      },
      {
        type: "p",
        text: "No, a medical marijuana recommendation is enough. A physician's recommendation confirms that a doctor has approved cannabis for your medical use. A Medical Marijuana Identification Card (MMIC) is an optional state-issued card provided through your county.",
        links: [
          {
            label: "Medical Marijuana Identification Card (MMIC)",
            href: "/#get-approved",
          },
        ],
      },
      {
        type: "p",
        text: "You do not need both to use medical cannabis in California. Patients can generally purchase medical cannabis with a valid physician's recommendation.",
      },
      {
        type: "p",
        text: "However, an MMIC may provide additional benefits, such as helping verify your medical status and potentially reducing taxes on eligible purchases. The card can also be useful when traveling within California or showing proof of medical patient status.",
      },
      {
        type: "cta",
      },
      {
        type: "h2",
        text: "Who Can Use Medical Marijuana in California?",
      },
      {
        type: "p",
        text: "California allows medical cannabis for patients who have a medical condition or symptoms that may benefit from cannabis.",
      },
      {
        type: "p",
        text: "Medical cannabis is not limited to a particular age group. Adults use it when they meet the state's medical requirements. Minors also qualify, but they generally need additional involvement from a parent or legal guardian.",
      },
      {
        type: "h2",
        text: "What Are the Benefits of a Medical Marijuana Card?",
      },
      {
        type: "p",
        text: "Although recreational cannabis is legal in California, medical cannabis patients may have some additional benefits.",
      },
      {
        type: "ul",
        items: [
          "Higher possession limits: Medical patients may be allowed to possess more cannabis for their medical needs.",
          "More cultivation flexibility: Medical patients may have more flexibility when growing cannabis at home, depending on local rules.",
          "Doctor's guidance: A physician can evaluate a patient's health condition and symptoms and determine whether cannabis consumption is appropriate for you.",
          "Tax savings: Eligible medical cannabis patients with a valid Medical Marijuana Identification Card (MMIC) may qualify for an exemption from California sales and use tax on qualifying medicinal cannabis purchases. This exemption does not apply to the cannabis excise tax.",
        ],
      },
      {
        type: "h2",
        text: "What Are the Medical Cannabis Limits in California?",
      },
      {
        type: "p",
        text: "California cannabis law has different limits for medical and adult-use consumers. Medical patients generally have higher limits when their physician recommends a greater amount for their medical needs.",
      },
      {
        type: "ul",
        items: [
          "Possession: Medical patients may possess up to 8 ounces of dried cannabis, while adult-use consumers are generally limited to 28.5 grams (1 ounce).",
          "Purchases: A medicinal patient can purchase up to 8 ounces of cannabis per day. A physician’s recommendation may allow a higher amount when medically necessary.",
          "Cultivation: Adults 21+ can grow up to 6 cannabis plants for personal use. Medical patients may be allowed to grow more if their physician recommends it, subject to local rules",
        ],
      },
      {
        type: "h2",
        text: "What Can Medical Marijuana Patients Not Do in California?",
      },
      {
        type: "p",
        text: "Although medical marijuana is legal in California, patients still need to follow certain rules about where and how they use it.",
      },
      {
        type: "ul",
        items: [
          "Public consumption: You generally cannot smoke or consume cannabis in public places. Some private businesses and properties may have their own rules.",
          "Driving while impaired: Driving under the influence of cannabis is illegal. Patients should never drive if cannabis affects their ability to drive safely.",
          "Federal property: Cannabis remains illegal on federal property, even if medical marijuana is legal under California law.",
          "Interstate transportation: Do not take cannabis across state lines. California's medical cannabis laws do not protect you once you transport cannabis into another state.",
          "Local restrictions: Cities and counties can have additional rules, especially",
        ],
      },
      {
        type: "h2",
        text: "Conclusion",
      },
      {
        type: "p",
        text: "Medical cannabis is legal in California in 2026, and eligible patients can access it with a physician’s recommendation. While a state-issued medical marijuana card is not required for every patient, it can provide additional benefits and official proof of medical status. To get a physician recommendation or to apply for a medical marijuana card, you can visit our website: Medical Marijuana Card California",
        links: [
          { label: "apply for a medical marijuana card", href: "/#get-approved" },
          { label: "Medical Marijuana Card California", href: "/" },
        ],
      },
      {
        type: "p",
        text: "California Cannabis laws can change. Before purchasing, using, or growing cannabis, check the latest California requirements and local regulations to make sure you remain compliant regarding cannabis cultivation, businesses, and where cannabis can be consumed.",
      },
      {
        type: "h2",
        text: "FAQs",
      },
      {
        type: "faq",
        items: [
          {
            question: "Is cannabis legal in California in 2026?",
            answer:
              "Yes. both medical and recreational cannabis is legal in California. Patients can use medical cannabis with a physician’s recommendation, while adults 21 and older can also purchase cannabis for recreational use.",
          },
          {
            question: "Do I need a medical marijuana card?",
            answer:
              "No. A state-issued Medical Marijuana Identification Card (MMIC) is optional. A physician’s recommendation may be enough to purchase medical cannabis from a licensed retailer. However, an MMIC can provide official proof of medical status and may offer certain tax benefits.",
            links: [
              {
                label: "Medical Marijuana Identification Card (MMIC)",
                href: "/#get-approved",
              },
            ],
          },
          {
            question: "Can tourists buy medical marijuana?",
            answer:
              "Yes, tourists can legally buy cannabis in California as long as they are 21 or older and show a valid government-issued ID, such as an out-of-state driver's license or a passport",
          },
          {
            question: "How old do you have to be?",
            answer:
              "There is no general 21-year minimum for medical cannabis. Eligible patients under 21 may use medical cannabis with the required physician recommendation, and, for minors, additional requirements may apply. Adult-use cannabis is restricted to people 21 and older.",
          },
          {
            question: "Can you grow medical marijuana at home?",
            answer:
              "Yes. California generally allows adults to grow up to six cannabis plants for personal use. Medical patients may have additional cultivation rights in certain circumstances, but local laws can impose further restrictions.",
          },
        ],
      },
    ],
  },
];

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const LONG_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function formatBlogDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatBlogDateLong(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${LONG_MONTHS[Number(month) - 1]} ${Number(day)}, ${year}`;
}

export function headingToId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getPostHeadings(post: BlogPost) {
  return post.content
    .filter(
      (block): block is Extract<BlogBlock, { type: "h2" }> =>
        block.type === "h2" && block.text !== "Key Points"
    )
    .map((block) => ({
      text: block.text,
      id: headingToId(block.text),
    }));
}

export function getFeaturedPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0];
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostFaqs(post: BlogPost) {
  return post.content
    .filter(
      (block): block is Extract<BlogBlock, { type: "faq" }> =>
        block.type === "faq"
    )
    .flatMap((block) => block.items);
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
