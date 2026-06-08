// Single source of truth for the shop's service catalog.
// Never hardcode service names, slugs, prices, or descriptions elsewhere —
// import from here so the index page, detail pages, and nav dropdown stay in sync.

export type ServiceCategory = "Popular Services" | "Other Services";

export interface Service {
  /** URL segment — /services/[slug] */
  slug: string;
  /** Display name, used as the page H1 and card title. */
  name: string;
  category: ServiceCategory;
  /** Base price in USD; rendered as "Starting at $[price]". */
  price: number;
  description: string;
}

// Order the index page and grouping follow.
export const CATEGORY_ORDER: ServiceCategory[] = [
  "Popular Services",
  "Other Services",
];

export const services: Service[] = [
  {
    slug: "haircut",
    name: "Haircut",
    category: "Popular Services",
    price: 30,
    description:
      "Ideal for those seeking a clean, classic cut. A precision haircut tailored to your style. Beard service not included.",
  },
  {
    slug: "haircut-and-beard",
    name: "Haircut & Beard",
    category: "Popular Services",
    price: 40,
    description:
      "Our most requested service and a complete grooming package — a precision haircut paired with full beard trim and shaping, a razor line up, and premium styling.",
  },
  {
    slug: "kids-haircut",
    name: "Kids Haircut",
    category: "Popular Services",
    price: 25,
    description:
      "Professional grooming for the younger generation, ages 12 and under.",
  },
  {
    slug: "shave-service",
    name: "Shave Service",
    category: "Other Services",
    price: 25,
    description:
      "A traditional hot towel straight razor shave for the closest, cleanest finish.",
  },
  {
    slug: "eyebrow-shaping",
    name: "Eyebrow Shaping",
    category: "Other Services",
    price: 20,
    description:
      "Clean, defined eyebrow shaping to frame and sharpen your overall look.",
  },
  {
    slug: "line-up",
    name: "Line Up / Head Only",
    category: "Other Services",
    price: 20,
    description:
      "A crisp edge up and basic head maintenance to keep your lines sharp between full cuts.",
  },
  {
    slug: "beard-trim",
    name: "Beard Trim",
    category: "Other Services",
    price: 25,
    description:
      "Expert shaping and detailing for your facial hair, tailored to your face shape and style.",
  },
  {
    slug: "hair-color",
    name: "Hair Color",
    category: "Other Services",
    price: 35,
    description:
      "Professional hair coloring and gray blending for a natural, refreshed finish.",
  },
  {
    slug: "college-cuts",
    name: "College Cuts",
    category: "Other Services",
    price: 25,
    description:
      "Our standard precision haircut at a special student rate — just present a valid college ID at checkout.",
  },
];

/** Find a service by its slug, or undefined if none matches. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Services in a given category, in catalog order. */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

/**
 * Up to `limit` other services from the same category, excluding the given one.
 * (The "Popular Services" category has only three entries, so a Popular service
 * surfaces two related items; Other Services surface the full three.)
 */
export function getRelatedServices(service: Service, limit = 3): Service[] {
  return services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, limit);
}
