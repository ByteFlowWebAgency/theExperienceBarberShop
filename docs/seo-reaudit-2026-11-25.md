# SEO Re-Audit Report: theexpshop.com (after fixes)

**Site:** https://www.theexpshop.com (The Experience Barber & Beauty Shop, downtown Akron, OH)
**Date:** 2026-11-25
**Branch:** `feature/seo-audit-fixes` (not yet deployed)
**Auditor:** Claude, using the `seo-review` skill with the same adapted rubric as the baseline ([seo-audit-2026-11-25.md](seo-audit-2026-11-25.md))
**Overall Score:** **288/330 (87%)**, up from 184/330 (56%)
**Status:** ⚠️ Good. All site-wide technical problems are fixed. What's left is mostly content depth on the utility pages.

**How it was checked:** a production build (`npm run build` and `next start`) served locally. A script fetched all 19 sitemap URLs and extracted the title, description, canonical, Open Graph tags, headings, word counts, JSON-LD and internal links, then requested every internal link. Key pages were screenshotted at desktop (1280px) and mobile (390px) widths. The live site won't reflect any of this until the branch is deployed.

---

## Score Summary

| Page | Title /4 | Meta /4 | Keywords /5 | Structure /6 | Snippets /4 | Links /4 | Technical /3 | **Before** | **After** | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| Home `/` | 4 | 4 | 5 | 5 | 2 | 4 | 3 | 17 | **27** | ✅ Excellent |
| Services `/services/` | 4 | 4 | 5 | 5 | 4 | 4 | 3 | 20 | **29** | ✅ Excellent |
| Service template (×9) | 3 | 4 | 5 | 5 | 4 | 4 | 3 | 14 | **28** | ✅ Excellent |
| Our Story | 3 | 4 | 5 | 5 | 3 | 3 | 3 | 18 | **26** | ⚠️ Good |
| Visit Us | 4 | 4 | 5 | 4 | 4 | 3 | 3 | 17 | **27** | ✅ Excellent |
| FAQ | 4 | 4 | 5 | 4 | 3 | 3 | 3 | 12 | **26** | ⚠️ Good |
| Reviews | 3 | 4 | 5 | 4 | 2 | 3 | 3 | 19 | **24** | ⚠️ Good |
| Gallery | 3 | 4 | 5 | 3 | 2 | 4 | 3 | 13 | **24** | ⚠️ Good |
| Contact | 3 | 4 | 5 | 4 | 2 | 3 | 3 | 18 | **24** | ⚠️ Good |
| Book | 3 | 4 | 5 | 4 | 3 | 3 | 3 | 17 | **25** | ⚠️ Good |
| Franchise | 4 | 4 | 5 | 5 | 4 | 3 | 3 | 19 | **28** | ✅ Excellent |
| **Site** | | | | | | | | **184 (56%)** | **288 (87%)** | ⚠️ Good |

**Measured on all 19 URLs:**

| Check | Before | After |
|---|---|---|
| Titles 50–60 characters | 2 of 11 page types | **19 of 19 URLs** (50–58) |
| Titles mentioning Akron (Franchise exempt) | 1 of 10 | **18 of 18** |
| Descriptions 150–160 characters | 2 of 11 page types | **19 of 19** (151–159) |
| Self-referencing canonical | 0 (service canonicals pointed at a redirect) | **19 of 19**, `https://www.theexpshop.com/…/` |
| Page-specific `og:title` / `og:url` | 1 (Gallery) | **19 of 19**, plus Twitter cards |
| Sitemap URLs returning 200 | 1 of 19 | **19 of 19** |
| Exactly one H1 | 11 of 11 | 19 of 19 |
| Pages with ≥300 words of main content | 0 of 11 | **14 of 19** (service pages 309–354) |
| Broken internal links | 0 | 0 |
| Exact phrase "downtown Akron" more than 4 times on a page | — | none (home page has 4) |

---

## Site-wide technical issues: status

| # | Issue (baseline) | Status | Where |
|---|---|---|---|
| 1 | Service canonicals pointed two redirects away | ✅ Fixed: every page gets a self-referencing canonical through `pageMetadata()` | `app/lib/seo.ts`, all pages |
| 2 | 18 of 19 sitemap URLs redirected | ✅ Fixed: URLs end in `/` | `scripts/sitemap.mjs` |
| 3 | FAQ answers missing from the HTML | ✅ Fixed: answers are always rendered and collapsed with `hidden`; questions are `h3`s. Verified in the server HTML. | `app/components/ui/FaqAccordion.tsx` |
| 4 | Invalid `Barbershop` JSON-LD type | ✅ Fixed: `HairSalon` with correct name, `openingHoursSpecification`, `url`, `logo`, storefront `image`, `priceRange`, `hasMap`, `founder`, `sameAs`. Also on Visit Us. `Service` + `BreadcrumbList` on service pages, `FAQPage` on the FAQ. | `app/lib/seo.ts` |
| 5 | Every page shared the homepage's Open Graph tags | ✅ Fixed | `pageMetadata()` |
| 6 | Four different business names | ✅ Fixed in code: one `BUSINESS_NAME` constant ("The Experience Barber & Beauty Shop") is used in JSON-LD, titles, alt text, footer and the map label. "The Experience" is the short form in title suffixes. | `app/lib/site.ts` |
| 7 | `/franchise/` and `/book/` were orphan pages | ✅ Fixed: Franchise is linked from the footer, Contact and Our Story; Book is linked from the FAQ | |
| 8 | Footer problems | ✅ Fixed: the Facebook icon is hidden until `FACEBOOK_URL` is set, Quick Links cover all 9 pages, and the phone and email are clickable. The footer column titles were invisible (dark text on the dark footer) and are now white. | `Footer.tsx` |
| 9a | Heading order | ✅ Fixed: Home `h4` → `h3`, footer `h4` → `h2`, Book `h3` → `h2` | |
| 9b | Font Awesome CSS (~100 KB) loaded from a CDN on every page | ✅ Fixed: self-hosted subset of the 34 icons used, 2.8 KB of CSS plus 5.3 KB of fonts, regenerated automatically before dev and build | `scripts/icons.mjs` |
| 9c | Empty web manifest name | ✅ Fixed | `public/site.webmanifest` |
| 9d | Gallery files named `IMG_xxxx.jpg` | ✅ Renamed to descriptive names; alt text rewritten to describe each photo | `public/assets/images/` |
| 9e | Self-serving `aggregateRating` | ✅ Removed from the JSON-LD (the on-page rating badge is unchanged) | |

---

## What changed per page

- **Home:** new title and description. The hero H2 is now "Downtown Akron's Community Barbershop". Service cards read from `services.ts` and link to their service pages. A new "Your Barber Shop in Downtown Akron" section covers address, parking, hours, booking and amenities, with links to Visit Us, Reviews and FAQ. 306 words.
- **Services:** a new "How much is a haircut in Akron?" section with a 50-word answer and a full price table linked to each service. Prices are generated from `services.ts`. 460 words.
- **Service pages (×9):** each service gets its own title and description; a question H2 with a 40–60-word answer; an included-items list; who it's for; numbered "What to expect" steps; two service FAQs; a contextual links box; a visible breadcrumb; 3 related services that now cross categories; and `Service` + `BreadcrumbList` JSON-LD. 309–354 words each. All content lives in `app/lib/services.ts`.
- **Our Story:** new title and description, client count from `CLIENTS_SERVED` (5k+), and links to Reviews, Services and Franchise.
- **Visit Us:** new title and description, a "Where is The Experience Barber & Beauty Shop?" answer, LocalBusiness JSON-LD, and links to Services, Reviews and FAQ.
- **FAQ:** 12 questions (up from 5), with answers of 40–50 words and links to the matching pages, plus `FAQPage` JSON-LD.
- **Reviews:** new title, and a corrected description ("53+ Google reviews" instead of "53+ five-star reviews"). Fixed the reversed avatar logic, and added links to Services, Gallery and Visit Us.
- **Gallery:** metadata moved into `page.tsx`, so the "Barbering Franchise" title and the `keywords` tag are gone. Added an intro, and each photo has a caption linking to its service.
- **Contact:** new title and description, an H2 "Barber Shop Hours in Downtown Akron", and links to Services, Franchise and Visit Us.
- **Book:** new title and description, the steps heading is now "How do I book a barber appointment?", and links to Services, Visit Us and FAQ.
- **Franchise:** new title and description, client count corrected to 5k+, an H2 "A Proven Barbershop Franchise Model", and a "How do you open a barbershop franchise with The Experience?" section with a 5-step list.

---

## Remaining gaps (why pages aren't 30/30)

| Check | Pages still failing | Recommendation |
|---|---|---|
| Key terms bolded on first mention | All | Low value for a local business site; skipped on purpose. |
| ≥300 words of main content | Visit Us (222), Book (155), Contact (148), Gallery (146), Reviews (81 locally) | Reviews shows 81 words only because the Google reviews API can't be reached without credentials locally; live, 8 reviews add roughly 150–200 words. For the others, add copy only with real details from the client (directions from landmarks, parking specifics), not filler. |
| Title "hook" | Our Story, Reviews, Gallery, Contact, Book, and 3 service titles (Kids Haircut, Eyebrow Shaping, Line Up) | Optional. Add a benefit where one fits, e.g. "Walk-ins Welcome". |
| Search-style question H2 with a 40–60-word answer | Home, Our Story, Reviews, Gallery, Contact | Low priority. The question-heavy pages (Services, service pages, FAQ, Visit Us, Franchise) already cover the main queries. |
| Related-cards section | Our Story, Visit Us, FAQ, Reviews, Contact, Book, Franchise | These pages use contextual links instead. A small "Popular services" card strip would close the gap. |

---

## Needs input from the client

1. **Google Business Profile URL** → `GBP_URL` in `app/lib/site.ts` (added to JSON-LD `sameAs`).
2. **Facebook page URL** → `FACEBOOK_URL` (shows the footer icon and adds the page to `sameAs`).
3. **Latitude and longitude** from the GBP listing → add `geo` to `businessJsonLd()` in `app/lib/seo.ts`.
4. **Copy review:** the new service, FAQ and franchise text uses only facts already on the site (prices, ages, hours, walk-in policy, payment, parking, amenities). The client should still confirm the phrasing, especially the per-service "What to expect" steps.
5. **Booksy listing name** ("Lionheart theexperience barber shop") differs from the business name; it can only be changed in Booksy.

---

## Implementation Checklist

- [x] Every title is 50–60 characters with the topic keyword and Akron (Franchise exempt)
- [x] Every description is 150–160 characters, starts with an action verb, and mentions Akron
- [x] The service canonical renders as `https://www.theexpshop.com/services/<slug>/`
- [x] Every page has a self-referencing canonical and its own `og:title` / `og:url`
- [x] Sitemap URLs end in `/` and return 200
- [x] FAQ answers are in the server HTML
- [x] JSON-LD uses valid schema.org types with consistent NAP
- [x] Service pages have 300+ words, a 40–60-word answer under a question H2, and 3 related cards
- [x] Home service cards link to `/services/<slug>/`
- [x] `/franchise/` and `/book/` are linked from other pages
- [x] The footer Facebook link no longer points to `#`
- [ ] Run the Rich Results Test (https://search.google.com/test/rich-results) on `/`, `/services/haircut/` and `/faq/` after deploy
- [ ] Resubmit `sitemap.xml` in Search Console after deploy
- [ ] Fill in `GBP_URL`, `FACEBOOK_URL` and `geo` when available

---

## Final Recommendation

**Ready to Publish:** ✅ Yes, after the client reviews the new copy. Lint, type-check and a production build all pass. Visual checks at desktop and mobile widths showed no layout regressions.

**Next Review Date:** 2027-02-25, or sooner once 4–6 weeks of Search Console data show how the new service pages index.
