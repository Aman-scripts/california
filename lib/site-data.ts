export const siteConfig = {
  name: "MMJ California",
  fullName: "Medical Marijuana Card California",
  tagline: "Apply for a California Medical Marijuana Card Today",
  description:
    "Get a California medical marijuana card online from licensed doctors. Same-day evaluation, plans from $55, money-back guarantee.",
  url: "https://medicalmarijuanacardcalifornia.com",
};

export const contactInfo = {
  phone: "+1 213 281 5658",
  phoneHref: "tel:+12132815658",
  email: "contact@medicalmarijuanacardcalifornia.com",
  address: "7127 W Sunset Blvd #4411, Los Angeles, CA 90046, United States",
};

export const googleReviewsUrl = "https://maps.app.goo.gl/az5SmwoW6S3SQgE66";

export type Review = {
  name: string;
  timeAgo: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Nathalie Eckert",
    timeAgo: "9 years ago",
    text: "Great parking and very fast service. Called ahead and made a same day appointment, but really didn't even need it. Saw the doctor and everything was done nice and quick! Will return!",
  },
  {
    name: "Nice Davis",
    timeAgo: "10 years ago",
    text: "The office was clean and the staff was a lot nicer than some of the other offices I have been to. I was able to be out of there in a reasonable time — twenty-five minutes and I was outta there. It's inexpensive, all my needs were met, and the doctor was very courteous. I definitely recommend this place.",
  },
  {
    name: "Christian Harvey-Washington",
    timeAgo: "8 years ago",
    text: "Made an appt today and was certified quickly. Customer service is excellent and the doctor is really nice. They have ample parking and the process was very easy and quick. I will definitely come back and recommend coming here for your med card if you need one.",
  },
  {
    name: "David Ramirez",
    timeAgo: "9 years ago",
    text: "So great! Super fast service. The staff and the doctor were very friendly and welcoming. The place was super clean. I don't think I'll go anywhere else next time. Will be back here next year.",
  },
  {
    name: "Bertrand Cardenas",
    timeAgo: "9 years ago",
    text: "Made an appointment and was welcomed with excellent customer service! Forms were clear and very neat, and parking was amazing. Didn't wait long for the doctor, which is always a plus. He evaluated me and had me on my way! I will definitely recommend this office to everyone!",
  },
  {
    name: "Ali Traen",
    timeAgo: "8 years ago",
    text: "Great experience. Doctor was available within short notice. The office staff are great and they are pet friendly. I would definitely recommend this doctor. You will not be disappointed with the quality of service.",
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Process", href: "/#process" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact-us/" },
];

export const heroBadge = "100% Certified Licensed Doctors";

export type HeroFeature = {
  title: string;
  description: string;
};

export const heroFeatures: HeroFeature[] = [
  {
    title: "Same-Day Evaluation",
    description: "Licensed Doctor Appointment in 24-48 Hours",
  },
  {
    title: "Affordable MMJ Plans",
    description: "Starting at just $55-$199",
  },
  {
    title: "100% Money-Back Guarantee",
    description: "Get your money back if not approved",
  },
];

export type TrustStat = {
  label: string;
  value: string;
  description: string;
};

export const trustStats: TrustStat[] = [
  {
    label: "Patients Served",
    value: "1,000+",
    description: "Californians approved through our licensed telehealth network.",
  },
  {
    label: "Approval Rate",
    value: "98%",
    description: "Of evaluated patients receive a same-day recommendation.",
  },
  {
    label: "Average Time",
    value: "15 min",
    description: "From booking to receiving your doctor's recommendation.",
  },
  {
    label: "Support Available",
    value: "24 hrs",
    description: "Our care team is on hand whenever you need help.",
  },
];

export const trustBadges = [
  "HIPAA Compliant",
  "CA Licensed Physicians",
  "Secure Telehealth",
  "Money-Back Guarantee",
];

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Submit a HIPAA-compliant online form with your ID and medical history so we can match you with a licensed doctor.",
  },
  {
    step: 2,
    title: "Attend Your MMJ Consultation",
    description:
      "Connect with a licensed doctor by audio or video call from anywhere in California, on your schedule.",
  },
  {
    step: 3,
    title: "Receive Your Recommendation",
    description:
      "Get your written recommendation for dispensary access, typically within 15 to 30 minutes of your visit.",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  priceBadge: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$55",
    priceBadge: "Digital Only",
    description: "Everything you need for legal protection.",
    features: [
      "Digital recommendation letter",
      "Full legal protections statewide",
      "Same-day evaluation",
    ],
  },
  {
    name: "Gold",
    price: "$99",
    priceBadge: "Physical Card",
    description: "Our most popular plan, with a physical card.",
    highlighted: true,
    features: [
      "Everything in Basic",
      "Plastic MMIC ID card",
      "MMIC delivered via email",
      "Printed recommendation copy",
    ],
  },
  {
    name: "Platinum",
    price: "$199",
    priceBadge: "+ Grow License",
    description: "For patients who want to grow their own.",
    features: [
      "Everything in Gold",
      "Grower's license included",
      "Cultivate up to 99 plants",
      "Plastic MMIC ID card",
    ],
  },
];

export type Benefit = {
  title: string;
  description: string;
  stat: string;
};

export const benefits: Benefit[] = [
  {
    title: "Tax Savings",
    description:
      "MMIC holders are exempt from California's state sales tax, which ranges from 7.25% to 11.25% on cannabis purchases.",
    stat: "Up to 11.25%",
  },
  {
    title: "Higher Possession Limits",
    description:
      "Legally possess up to 8 ounces of dried flower, compared to the 1-ounce limit for recreational users.",
    stat: "8x Limit",
  },
  {
    title: "Legal Cannabis Cultivation",
    description:
      "Grow up to 6 mature or 12 immature plants at home for personal medical use.",
    stat: "6 Plants",
  },
  {
    title: "Certified Medical Dispensary Access",
    description:
      "Shop at certified medical dispensaries that aren't open to recreational customers, often with stronger products.",
    stat: "More Stores",
  },
];

export type QualifyingCondition = {
  name: string;
};

export const qualifyingConditions: QualifyingCondition[] = [
  { name: "Arthritis" },
  { name: "Cancer" },
  { name: "Chronic Pain" },
  { name: "Glaucoma" },
  { name: "HIV/AIDS" },
  { name: "Migraine" },
  { name: "Seizures" },
  { name: "Severe Nausea" },
  { name: "Muscle Spasms" },
  { name: "Cachexia" },
  { name: "Anorexia" },
  { name: "Fibromyalgia" },
];

export const cities: string[] = [
  "San Jose", "San Diego", "Los Angeles", "Oakland", "Sacramento",
  "Escondido", "Elk Grove", "Murrieta", "Antioch", "Fairfield",
  "Oceanside", "San Mateo", "Bakersfield", "Fontana", "Ontario",
  "Santa Ana", "Fremont", "Orange", "Santa Clara", "Berkeley",
  "Oxnard", "Santa Clarita", "West Covina", "Burbank", "Fullerton",
  "Palmdale", "Santa Maria", "Camarillo", "Garden Grove", "Pasadena",
  "Santa Rosa", "Carlsbad", "Glendale", "Pittsburg", "Seaside",
  "Chico", "Hayward", "Pomona", "Simi Valley", "Chula Vista",
  "Huntington Beach", "Rancho Cucamonga", "Stockton", "Clovis", "Inglewood",
  "Rialto", "Sunnyvale", "Concord", "Irvine", "Richmond",
  "Temecula", "Corona", "Jurupa Valley", "Riverside", "Thousand Oaks",
  "Costa Mesa", "Lancaster", "Roseville", "Torrance", "Daly City",
  "Lodi", "Tracy", "Moreno Valley", "Downey", "Salinas",
  "Vallejo", "El Monte", "East Los Angeles", "San Bernardino", "Victorville",
  "Visalia", "El Cajon", "Modesto", "San Buenaventura",
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How can I get a medical marijuana card in California?",
    answer:
      "To obtain a Medical Marijuana Identification Card (MMIC) in California, you must first consult with a licensed physician authorized under state law. Book an online appointment, complete your evaluation, and receive your written recommendation.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most patients complete their doctor's evaluation and receive approval within 15 to 30 minutes. If you choose to register for an official county MMIC, the county has up to 30 days to verify your application and 5 additional days to issue the card once approved.",
  },
  {
    question: "Who qualifies for a recommendation?",
    answer:
      "Adults who are 18 or older and have a medical condition approved by a doctor can get a medical marijuana recommendation. Minors under 18 may also qualify, but they must have permission from a parent or legal guardian.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes. All patient data is securely stored, encrypted, and handled in compliance with HIPAA and California privacy laws.",
  },
  {
    question: "What are the benefits of having a card?",
    answer:
      "MMIC holders save on sales and local taxes, can legally possess higher amounts of cannabis, access stronger dispensary products, and receive additional legal protections compared to recreational users.",
  },
  {
    question: "How much cannabis can I legally possess?",
    answer:
      "Medical patients with a valid MMIC can legally possess up to 8 ounces of dried cannabis. Patients may also cultivate up to 6 mature or 12 immature plants at home.",
  },
  {
    question: "Can I renew my recommendation online?",
    answer:
      "Yes. You can renew your medical marijuana recommendation entirely online through a secure telehealth consultation, without visiting an office in person.",
  },
];
