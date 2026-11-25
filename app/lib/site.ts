// Shared site-wide constants (single source of truth).

export const SITE_URL = "https://www.theexpshop.com";

/**
 * The business name exactly as it appears on the Google Business Profile.
 * Use this everywhere the business is named (structured data, titles, map
 * label) so the name stays consistent for local search. "The Experience" is
 * the accepted short form for body copy and title suffixes.
 */
export const BUSINESS_NAME = "The Experience Barber & Beauty Shop";
export const BUSINESS_SHORT_NAME = "The Experience";
export const FOUNDER_NAME = "Deshawn Johnson";

export const BOOKSY_URL =
  "https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1";

export const PHONE = "330-475-2522";
export const PHONE_HREF = "tel:330-475-2522";
export const PHONE_E164 = "+1-330-475-2522";
export const EMAIL = "expakron@gmail.com";
export const EMAIL_HREF = "mailto:expakron@gmail.com";

export const ADDRESS_LINE_1 = "88 E Mill St";
export const ADDRESS_LINE_2 = "Akron, OH 44308";
export const ADDRESS = {
  street: "88 E Mill St",
  city: "Akron",
  region: "OH",
  postalCode: "44308",
  country: "US",
} as const;

export const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=88+E+Mill+St+Akron+OH+44308";

/** Facebook page URL. Leave empty to hide the footer icon and omit it from structured data. */
export const FACEBOOK_URL = "";

/** Google Business Profile (Google Maps) URL for structured data `sameAs`. Leave empty to omit. */
export const GBP_URL = "";

/** Client count shown on the Our Story and Franchise pages. */
export const CLIENTS_SERVED = "5k+";

// Primary navigation shared by the header, footer, and mobile menu.
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
