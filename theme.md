# The Experience Barber & Beauty Shop — Theme

High-level design overview. Styling is plain CSS: global tokens live in
[`app/globals.css`](app/globals.css), each component/page has a co-located
`*.module.css` (CSS Modules, scoped class names). No Tailwind or CSS-in-JS.
The visual language is adapted from the approved HTML mockups.

## Aesthetic

Modern, premium barbershop with a clean, editorial feel. A white / light-gray
canvas, **electric-blue** primary accents, soft layered shadows, large image
heroes with dark gradient overlays, serif display headings over a crisp sans
body, and a recurring **barber-pole** stripe motif. Confident and welcoming.

## Color tokens

Defined as CSS custom properties on `:root`; use `var(--token)`.

| Token | Value | Use |
| --- | --- | --- |
| `--primary` | `#2563EB` | Primary CTAs, links, accents |
| `--primary-hover` | `#1748F7` | Hover state for primary |
| `--primary-light` | `#3B82F6` | Accents on dark sections |
| `--dark-heading` | `#1F2937` | Headings, dark sections, footer |
| `--body-text` | `#374151` | Body copy |
| `--surface-muted` | `#F3F4F6` | Alternating section backgrounds |
| `--text-muted` | `#6B7280` | Secondary text |
| `--border-subtle` | `#E5E7EB` | Card/section borders, dividers |
| `--error` | `#DC2626` | Closed/Sunday, form errors |
| `--white` | `#FFFFFF` | Base surface |

## Typography

- **Sans (default):** `--font-sans` → **Inter** (loaded via `next/font`, exposed as `--font-inter`) with Arial/Helvetica fallback — body and UI.
- **Serif (display):** `--font-serif` → **Georgia** — page titles, section headings, card titles.
- **Scale:** hero titles `3rem → 4.5rem`; section headings `1.875rem → 2.5rem`; body `1rem–1.25rem`; small/labels `0.75–0.875rem`.
- **Weights:** 700 headings/CTAs, 600 sub-emphasis & nav, 500 labels, 400 body.

## Icons

[Font Awesome 6](https://fontawesome.com) (free) loaded via CDN `<link>` in the
root layout; used as `<i className="fa-solid fa-…" />`.

## Layout, spacing, shadows

- **Container:** `max-width 80rem`, centered, responsive horizontal padding `1.5rem → 3rem → 6rem` ([`Container`](app/components/Container.tsx)).
- **Section rhythm:** vertical padding ~`6rem`; sections alternate white / `--surface-muted`, with occasional dark (`--dark-heading`) sections.
- **Breakpoints (min-width):** sm `640` · md `768` · lg `1024` · xl `1280`px, authored as `@media` blocks per module.
- **Radius:** `--radius: 0.5rem` (buttons, inputs, most cards); `--radius-lg: 1rem` (feature/pricing cards).
- **Shadows:** soft elevation scale `--shadow-sm | md | lg | xl`.

## Shared components

- **[Header](app/components/Header.tsx):** fixed, scroll-aware — transparent over the hero, switches to white + blur + shadow once scrolled. 9-item nav with active underline, phone + blue "Book Appointment" CTA, and a full-screen mobile menu. `lightHero` prop renders dark nav text from the start on light-hero pages (Franchise, Contact, Book).
- **[Footer](app/components/Footer.tsx):** dark 4-column (brand + socials, quick links, contact, hours) with bottom legal bar.
- **[Button](@/components/ui/button.tsx):** CVA → CSS-module classes. Variants `primary` (blue), `secondary` (white/border), `outline` (for dark bg), `dark`, `ghost`, `link`; sizes `sm | default | lg`; `block` for full width; `asChild` to render as a link.
- **[PageHero](app/components/PageHero.tsx):** centered image hero with dark gradient overlay, optional badge.
- **[SectionHeading](app/components/SectionHeading.tsx)**, **[CtaSection](app/components/CtaSection.tsx)** (recurring "Ready for The Experience?" strip), **[BarberPole](app/components/BarberPole.tsx)** (diagonal stripe), **[IFrameMap](app/components/IFrameMap.tsx)** (Google Maps embed).
- **Forms:** [ContactForm](app/components/ContactForm.tsx) and [FranchiseForm](app/components/FranchiseForm.tsx) — react-hook-form + zod validation, submitted via EmailJS; shared control styling in [`forms.module.css`](app/components/forms.module.css).

## Pages

`/` Home · `/services` · `/gallery` · `/our-story` · `/visit-us` · `/reviews` ·
`/faq` · `/franchise` · `/contact` · `/book`. Booking links out to Booksy; the
contact & franchise forms send via EmailJS.

## Motion

CSS transitions only (no JS animation library): card hover lifts/shadows, image
`scale` on hover, the header's scroll transition, and the FAQ accordion toggle.
