// Single source of truth for the shop's service catalog.
// Never hardcode service names, slugs, prices, or descriptions elsewhere —
// import from here so the index page, detail pages, and nav dropdown stay in sync.

export type ServiceCategory = "Popular Services" | "Other Services";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  /** URL segment — /services/[slug] */
  slug: string;
  /** Display name, used as the page H1 and card title. */
  name: string;
  category: ServiceCategory;
  /** Base price in USD; rendered as "Starting at $[price]". */
  price: number;
  description: string;
  /** <title> for the detail page. Keep it 50–60 characters. */
  seoTitle: string;
  /** Meta description: 150–160 characters, starts with a verb, mentions downtown Akron. */
  metaDescription: string;
  /** Search-style question used as an H2 on the detail page. */
  question: string;
  /** 40–60 word direct answer to `question` (featured-snippet target). */
  answer: string;
  /** What's included, shown as an at-a-glance list. */
  includes: string[];
  /** Who the service is for. */
  idealFor: string;
  /** Numbered "what to expect" steps. */
  steps: string[];
  /** Service-specific questions shown on the detail page. */
  faqs: ServiceFaq[];
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
    seoTitle: "Haircuts & Fades in Downtown Akron, OH | The Experience",
    metaDescription:
      "Get a precision haircut in downtown Akron at The Experience Barber & Beauty Shop. Classic and modern cuts tailored to your style, starting at $30. Book online.",
    question: "What's included in a haircut at The Experience?",
    answer:
      "A haircut at The Experience Barber & Beauty Shop is a precision cut tailored to your style, from a clean classic cut to a fresh taper or fade. It starts at $30 at our downtown Akron shop. Beard work isn't included, so choose Haircut & Beard if you want both done in one visit.",
    includes: [
      "A quick consult on the look you want",
      "Precision cut tailored to your style",
      "Classic cuts, tapers, and fades",
      "Beard service not included",
    ],
    idealFor:
      "Anyone who wants a clean, classic cut or a fresh fade without beard work.",
    steps: [
      "Walk in Tuesday–Saturday or book a time on Booksy.",
      "Tell your barber the look you want. A photo helps.",
      "Your barber cuts and blends your hair to your style.",
      "Check the finish in the mirror and you're set.",
    ],
    faqs: [
      {
        q: "Is a beard trim included with a haircut?",
        a: "No. The $30 haircut covers your hair only. If you want your beard shaped too, book Haircut & Beard ($40), which adds a full beard trim and shaping, a razor line up, and premium styling.",
      },
      {
        q: "Do I need an appointment for a haircut?",
        a: "No. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM, subject to barber availability. Booking ahead on Booksy guarantees your spot, and Mondays are by appointment only.",
      },
    ],
  },
  {
    slug: "haircut-and-beard",
    name: "Haircut & Beard",
    category: "Popular Services",
    price: 40,
    description:
      "Our most requested service and a complete grooming package — a precision haircut paired with full beard trim and shaping, a razor line up, and premium styling.",
    seoTitle: "Haircut & Beard Trim in Downtown Akron | The Experience",
    metaDescription:
      "Book a haircut and beard trim in downtown Akron at The Experience Barber & Beauty Shop: a precision cut, beard shaping, razor line up, and styling from $40.",
    question: "What's included in a haircut and beard service?",
    answer:
      "Haircut & Beard is our most requested service and a complete grooming package: a precision haircut paired with a full beard trim and shaping, a razor line up, and premium styling. It starts at $40 at The Experience Barber & Beauty Shop in downtown Akron.",
    includes: [
      "Precision haircut tailored to your style",
      "Full beard trim and shaping",
      "Razor line up",
      "Premium styling to finish",
    ],
    idealFor: "Anyone who wants their hair and beard cleaned up in one visit.",
    steps: [
      "Walk in or book Haircut & Beard on Booksy.",
      "Talk through your haircut and beard shape with your barber.",
      "Get your haircut, then a full beard trim and shaping.",
      "Finish with a razor line up and styling.",
    ],
    faqs: [
      {
        q: "How much is a haircut and beard trim in Akron?",
        a: "At The Experience, Haircut & Beard starts at $40. Booked separately, a haircut starts at $30 and a beard trim at $25, so the combined service is the better value when you want both.",
      },
      {
        q: "Can I get Haircut & Beard as a walk-in?",
        a: "Yes. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM, subject to barber availability. It's our most requested service, so booking ahead on Booksy is the surest way to get the time you want.",
      },
    ],
  },
  {
    slug: "kids-haircut",
    name: "Kids Haircut",
    category: "Popular Services",
    price: 25,
    description:
      "Professional grooming for the younger generation, ages 12 and under.",
    seoTitle: "Kids Haircuts in Downtown Akron, OH | The Experience",
    metaDescription:
      "Book a kids haircut in downtown Akron at The Experience Barber & Beauty Shop. Professional cuts for kids ages 12 and under, starting at $25. Walk-ins welcome.",
    question: "How much is a kids haircut in Akron?",
    answer:
      "A kids haircut at The Experience Barber & Beauty Shop starts at $25 for children ages 12 and under. Our barbers give young clients the same professional attention adults get, from clean classic cuts to tapers and fades, in a welcoming downtown Akron shop.",
    includes: [
      "Haircut for children ages 12 and under",
      "Styles from classic cuts to tapers and fades",
      "The same professional attention adults get",
    ],
    idealFor: "Children ages 12 and under.",
    steps: [
      "Walk in Tuesday–Saturday or book a Kids Haircut on Booksy.",
      "Tell the barber what style your child wants.",
      "Your child gets a professional cut in that style.",
      "Check the finished look together before you head out.",
    ],
    faqs: [
      {
        q: "What age counts for a kids haircut?",
        a: "Kids Haircut pricing ($25) applies to children ages 12 and under. Older clients book our standard Haircut, and college students can get College Cuts for $25 with a valid college ID.",
      },
      {
        q: "Can I bring my child in as a walk-in?",
        a: "Yes. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM, subject to barber availability. To skip the wait, book a time ahead on Booksy.",
      },
    ],
  },
  {
    slug: "shave-service",
    name: "Shave Service",
    category: "Other Services",
    price: 25,
    description:
      "A traditional hot towel straight razor shave for the closest, cleanest finish.",
    seoTitle: "Hot Towel Straight Razor Shave in Akron | The Experience",
    metaDescription:
      "Relax with a hot towel straight razor shave in downtown Akron at The Experience Barber & Beauty Shop for the closest, cleanest finish, starting at $25.",
    question: "What is a hot towel straight razor shave?",
    answer:
      "A hot towel straight razor shave is a traditional barbershop shave. Warm towels soften the hair and prepare the skin, then your barber shaves with a straight razor for the closest, cleanest finish. At The Experience Barber & Beauty Shop in downtown Akron, a shave starts at $25.",
    includes: [
      "Hot towel prep to soften the hair",
      "Traditional straight razor shave",
      "The closest, cleanest finish",
    ],
    idealFor:
      "Anyone who wants a closer, cleaner shave than they get at home.",
    steps: [
      "Book a Shave Service on Booksy or walk in.",
      "Hot towels warm and soften the hair.",
      "Your barber shaves with a straight razor.",
      "Leave with a clean, smooth finish.",
    ],
    faqs: [
      {
        q: "How much is a hot towel shave in Akron?",
        a: "A hot towel straight razor shave at The Experience Barber & Beauty Shop starts at $25. You can book it on its own or add it to a haircut when you book on Booksy.",
      },
      {
        q: "Can I get a shave on a Monday?",
        a: "Yes, by appointment. Mondays are appointment-only, so book your shave on Booksy ahead of time. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM.",
      },
    ],
  },
  {
    slug: "eyebrow-shaping",
    name: "Eyebrow Shaping",
    category: "Other Services",
    price: 20,
    description:
      "Clean, defined eyebrow shaping to frame and sharpen your overall look.",
    seoTitle: "Eyebrow Shaping in Downtown Akron, OH | The Experience",
    metaDescription:
      "Get clean, defined eyebrow shaping in downtown Akron at The Experience Barber & Beauty Shop. Frame your face and sharpen your overall look, starting at $20.",
    question: "What does eyebrow shaping at a barbershop include?",
    answer:
      "Eyebrow shaping at The Experience Barber & Beauty Shop cleans up stray hairs and defines your brows so they frame your face and sharpen your overall look. It starts at $20 at our downtown Akron barbershop, on its own or added to a haircut.",
    includes: [
      "Clean-up of stray brow hairs",
      "Shaping to frame your face",
      "A natural, defined finish",
    ],
    idealFor:
      "Anyone who wants cleaner, more defined brows to go with a fresh cut.",
    steps: [
      "Add Eyebrow Shaping when you book on Booksy, or ask at your visit.",
      "Your barber looks at your natural brow shape.",
      "Stray hairs are cleaned up and your brows are shaped.",
      "Check the result in the mirror.",
    ],
    faqs: [
      {
        q: "How much is eyebrow shaping?",
        a: "Eyebrow shaping starts at $20 at The Experience in downtown Akron. You can book it on its own or add it to a haircut so everything looks sharp at once.",
      },
      {
        q: "Will my eyebrows look natural?",
        a: "That's the goal. Shaping cleans up stray hairs and defines the brow you already have, so the result frames your face without looking overdone.",
      },
    ],
  },
  {
    slug: "line-up",
    name: "Line Up / Head Only",
    category: "Other Services",
    price: 20,
    description:
      "A crisp edge up and basic head maintenance to keep your lines sharp between full cuts.",
    seoTitle: "Line Up & Edge Up in Downtown Akron, OH | The Experience",
    metaDescription:
      "Keep your lines sharp with a line up in downtown Akron at The Experience Barber & Beauty Shop. A crisp edge up between full cuts, starting at just $20.",
    question: "What is a line up?",
    answer:
      "A line up, also called an edge up, sharpens the edges of your haircut along the forehead, temples, and neckline. At The Experience Barber & Beauty Shop, the Line Up / Head Only service adds basic head maintenance to keep your lines crisp between full cuts, starting at $20.",
    includes: [
      "Crisp edge up along the hairline",
      "Temples and neckline cleaned up",
      "Basic head maintenance between cuts",
    ],
    idealFor: "Anyone between full haircuts who wants their lines to stay sharp.",
    steps: [
      "Walk in or book Line Up / Head Only on Booksy.",
      "Your barber checks your current lines.",
      "Edges are sharpened along the hairline, temples, and neckline.",
      "You leave with crisp lines until your next full cut.",
    ],
    faqs: [
      {
        q: "What's the difference between a line up and a haircut?",
        a: "A line up only sharpens your edges and does basic head maintenance; it doesn't change the length or shape of your cut. A full Haircut ($30) cuts and blends your whole head to your style.",
      },
      {
        q: "How often should I get a line up?",
        a: "Hairlines soften as your hair grows, so many people get a line up between full haircuts to stay sharp. At $20, it's an easy way to keep your cut looking fresh until your next visit.",
      },
    ],
  },
  {
    slug: "beard-trim",
    name: "Beard Trim",
    category: "Other Services",
    price: 25,
    description:
      "Expert shaping and detailing for your facial hair, tailored to your face shape and style.",
    seoTitle: "Beard Trim & Shaping in Downtown Akron | The Experience",
    metaDescription:
      "Get an expert beard trim in downtown Akron at The Experience Barber & Beauty Shop. Shaping and detailing tailored to your face shape, starting at just $25.",
    question: "What's included in a beard trim?",
    answer:
      "A beard trim at The Experience Barber & Beauty Shop is expert shaping and detailing for your facial hair, tailored to your face shape and style. Your barber evens out the length, cleans up the edges, and defines the lines. It starts at $25 in downtown Akron.",
    includes: [
      "Shaping tailored to your face shape",
      "Length evened out",
      "Clean, defined edges and lines",
    ],
    idealFor:
      "Anyone growing or maintaining a beard who wants it shaped and detailed.",
    steps: [
      "Walk in or book a Beard Trim on Booksy.",
      "Talk through the beard shape and length you want.",
      "Your barber trims, shapes, and details your beard.",
      "Finish with clean edges and lines.",
    ],
    faqs: [
      {
        q: "Should I book Beard Trim or Haircut & Beard?",
        a: "Book Beard Trim ($25) if you only want your beard shaped. If you also need a haircut, Haircut & Beard ($40) covers both, plus a razor line up and styling, for less than booking them separately.",
      },
      {
        q: "Can I walk in for a beard trim?",
        a: "Yes. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM, subject to barber availability. Book on Booksy if you want a guaranteed time.",
      },
    ],
  },
  {
    slug: "hair-color",
    name: "Hair Color",
    category: "Other Services",
    price: 35,
    description:
      "Professional hair coloring and gray blending for a natural, refreshed finish.",
    seoTitle: "Hair Color & Gray Blending in Akron, OH | The Experience",
    metaDescription:
      "Refresh your look with hair color and gray blending in downtown Akron at The Experience Barber & Beauty Shop. Natural, refreshed results starting at $35.",
    question: "What does the hair color service include?",
    answer:
      "Hair Color at The Experience Barber & Beauty Shop covers professional hair coloring and gray blending. Gray blending tones down gray so it mixes in with your natural color instead of looking dyed, for a natural, refreshed finish. The service starts at $35 at our downtown Akron shop.",
    includes: [
      "Professional hair coloring",
      "Gray blending for a natural look",
      "A natural, refreshed finish",
    ],
    idealFor:
      "Anyone who wants to refresh their color or soften gray without an obvious dyed look.",
    steps: [
      "Book Hair Color on Booksy or ask at the shop.",
      "Talk with your barber about your shade and how much gray to blend.",
      "Color is applied and given time to process.",
      "Finish with a natural, refreshed look.",
    ],
    faqs: [
      {
        q: "How much does hair color cost at a barbershop in Akron?",
        a: "Hair color at The Experience Barber & Beauty Shop starts at $35, including gray blending. Pair it with a haircut for a complete refresh.",
      },
      {
        q: "Will gray blending look natural?",
        a: "That's the goal. Gray blending softens gray rather than covering it completely, so the result looks like a natural, refreshed version of your own color.",
      },
    ],
  },
  {
    slug: "college-cuts",
    name: "College Cuts",
    category: "Other Services",
    price: 25,
    description:
      "Our standard precision haircut at a special student rate — just present a valid college ID at checkout.",
    seoTitle: "College Haircut Discount in Akron, OH | The Experience",
    metaDescription:
      "Save on a precision haircut in downtown Akron with College Cuts at The Experience Barber & Beauty Shop. Just $25 with a valid college ID. Walk-ins welcome.",
    question: "Is there a student discount on haircuts in Akron?",
    answer:
      "Yes. College Cuts is our standard precision haircut at a special $25 student rate, $5 less than a regular haircut. Just present a valid college ID at checkout. It's available at The Experience Barber & Beauty Shop at 88 E Mill St in downtown Akron.",
    includes: [
      "Our standard precision haircut",
      "Special $25 student rate",
      "Valid college ID required at checkout",
    ],
    idealFor: "College students with a valid college ID.",
    steps: [
      "Walk in or book College Cuts on Booksy.",
      "Bring your valid college ID.",
      "Get the same precision haircut as our standard service.",
      "Show your ID at checkout to get the student rate.",
    ],
    faqs: [
      {
        q: "What do I need for the college discount?",
        a: "Bring a valid college ID and present it at checkout to get the $25 College Cuts rate. The cut itself is the same precision haircut as our standard service.",
      },
      {
        q: "Is a beard trim included in College Cuts?",
        a: "No. College Cuts is our standard haircut, which doesn't include beard work. Add a Beard Trim if you want your beard shaped too.",
      },
    ],
  },
];

/** Find a service by its slug, or undefined if none matches. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Price of a service by slug. Throws if the slug doesn't exist, so typos fail the build. */
export function priceOf(slug: string): number {
  const service = getServiceBySlug(slug);
  if (!service) throw new Error(`Unknown service slug: ${slug}`);
  return service.price;
}

/** Services in a given category, in catalog order. */
export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}

/**
 * Up to `limit` other services for the "Other Services" section: same-category
 * services first, then the rest of the catalog, so every page gets a full row.
 */
export function getRelatedServices(service: Service, limit = 3): Service[] {
  const others = services.filter((s) => s.slug !== service.slug);
  const sameCategory = others.filter((s) => s.category === service.category);
  const rest = others.filter((s) => s.category !== service.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
