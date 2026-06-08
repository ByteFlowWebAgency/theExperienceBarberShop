// Shared site-wide constants (single source of truth).

export const BOOKSY_URL =
  "https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1";

export const PHONE = "330-475-2522";
export const PHONE_HREF = "tel:330-475-2522";
export const EMAIL = "expakron@gmail.com";
export const EMAIL_HREF = "mailto:expakron@gmail.com";

export const ADDRESS_LINE_1 = "88 E Mill St";
export const ADDRESS_LINE_2 = "Akron, OH 44308";

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
