// SEO helpers: per-page metadata and schema.org structured data builders.
// Every page should build its metadata with `pageMetadata()` so it gets its own
// canonical URL and Open Graph / Twitter tags instead of inheriting the
// homepage's from the root layout.

import type { Metadata } from "next";
import {
  ADDRESS,
  BOOKSY_URL,
  BUSINESS_NAME,
  DIRECTIONS_URL,
  EMAIL,
  FACEBOOK_URL,
  FOUNDER_NAME,
  GBP_URL,
  PHONE_E164,
  SITE_URL,
} from "./site";
import { services, type Service } from "./services";

export const DEFAULT_OG_IMAGE = "/assets/images/theExperienceBarberShopAndSalon3.jpg";

interface PageMetadataInput {
  title: string;
  description: string;
  /** Route path with a trailing slash (next.config sets trailingSlash: true), e.g. "/faq/". */
  path: string;
  image?: string;
}

/**
 * Title, description, self-referencing canonical, and Open Graph / Twitter
 * tags for one page. A page-level `openGraph` replaces the root layout's
 * object entirely in Next.js, so this always sets every field.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: BUSINESS_NAME,
      locale: "en_US",
      title,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

const absolute = (path: string) => new URL(path, SITE_URL).toString();

const BUSINESS_ID = `${SITE_URL}/#business`;

const prices = services.map((s) => s.price);
const PRICE_RANGE = `$${Math.min(...prices)}-$${Math.max(...prices)}`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: ADDRESS.street,
  addressLocality: ADDRESS.city,
  addressRegion: ADDRESS.region,
  postalCode: ADDRESS.postalCode,
  addressCountry: ADDRESS.country,
};

/**
 * LocalBusiness structured data. schema.org has no barbershop type, so
 * HairSalon is the closest valid one. Add `geo` coordinates from the Google
 * Business Profile when available.
 */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": BUSINESS_ID,
    name: BUSINESS_NAME,
    url: absolute("/"),
    logo: absolute("/assets/images/TheExperienceBarberShopAndSalonLogo.png"),
    image: absolute("/assets/images/theexperienceshop.webp"),
    telephone: PHONE_E164,
    email: EMAIL,
    priceRange: PRICE_RANGE,
    address: postalAddress,
    hasMap: DIRECTIONS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    founder: { "@type": "Person", name: FOUNDER_NAME },
    sameAs: [GBP_URL, FACEBOOK_URL, BOOKSY_URL].filter(Boolean),
  };
}

/** Service structured data for a /services/[slug]/ page. */
export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absolute(`/services/${service.slug}/`),
    areaServed: { "@type": "City", name: "Akron, OH" },
    provider: {
      "@type": "HairSalon",
      "@id": BUSINESS_ID,
      name: BUSINESS_NAME,
      url: absolute("/"),
      telephone: PHONE_E164,
      address: postalAddress,
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "USD",
      url: BOOKSY_URL,
    },
  };
}

/** BreadcrumbList structured data from [name, path] pairs, starting at Home. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

/** FAQPage structured data from question/answer pairs. */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
