import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import JsonLd from "@/components/ui/JsonLd";
import FaqAccordion, { type FaqCategory } from "@/components/ui/FaqAccordion";
import { ADDRESS_LINE_1, ADDRESS_LINE_2, BUSINESS_NAME, PHONE } from "@/lib/site";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { priceOf } from "@/lib/services";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon1.jpg";
import styles from "./faq.module.css";

export const metadata = pageMetadata({
  title: "Barber Shop FAQ: Walk-ins, Prices & Parking in Akron",
  description:
    "Get answers about The Experience Barber & Beauty Shop in downtown Akron: walk-ins, booking on Booksy, student discounts, payment options, and where to park.",
  path: "/faq/",
});

const categories: FaqCategory[] = [
  {
    title: "Booking & Walk-ins",
    items: [
      {
        q: "Do you accept walk-ins?",
        a: `Yes. Walk-ins are welcome Tuesday through Saturday, 10 AM to 6 PM, subject to barber availability. To guarantee a spot without a wait, we recommend booking an appointment on Booksy or calling the shop at ${PHONE} before you come in. Mondays are by appointment only, and we're closed on Sundays.`,
      },
      {
        q: "How does booking work?",
        a: "We handle all appointments through Booksy. Click any “Book” button on our site and you'll go to our secure Booksy profile, where you choose your service, barber, and preferred time, then get instant confirmation and reminders. You can also call the shop to schedule over the phone.",
        link: { href: "/book", label: "See how booking works" },
      },
      {
        q: "What are your hours?",
        a: `${BUSINESS_NAME} is open Tuesday through Saturday from 10 AM to 6 PM. Mondays are by appointment only, and the shop is closed on Sundays. Walk-ins are welcome during regular hours, but booking ahead on Booksy guarantees your spot.`,
        link: { href: "/visit-us", label: "Hours and directions" },
      },
    ],
  },
  {
    title: "Barber Prices & Services",
    items: [
      {
        q: "How much is a haircut?",
        a: `A standard haircut at The Experience starts at $${priceOf("haircut")}, and Haircut & Beard, our most requested service, starts at $${priceOf("haircut-and-beard")}. Kids haircuts for ages 12 and under and College Cuts with a valid college ID are $${priceOf("kids-haircut")}. Line ups and eyebrow shaping start at $${priceOf("line-up")}.`,
        link: { href: "/services", label: "See all services and prices" },
      },
      {
        q: "Do you offer student discounts?",
        a: `Yes. College students get our standard precision haircut for just $${priceOf("college-cuts")} with College Cuts, $${priceOf("haircut") - priceOf("college-cuts")} less than a regular haircut. Bring a valid college ID to your appointment and present it at checkout to receive the student rate. The cut itself is the same precision haircut as our standard service.`,
        link: { href: "/services/college-cuts", label: "About College Cuts" },
      },
      {
        q: "Do you cut kids' hair?",
        a: `Yes. Kids haircuts are available for children ages 12 and under, starting at $${priceOf("kids-haircut")}. Our barbers give young clients the same professional attention as adults, and walk-ins are welcome Tuesday through Saturday. Book ahead on Booksy if you want a guaranteed time.`,
        link: { href: "/services/kids-haircut", label: "About kids haircuts" },
      },
      {
        q: "Do you do fades?",
        a: `Yes. Fades and tapers are part of our standard precision haircut, from low and mid fades to skin fades, tailored to your style. See real examples in our gallery, then book a Haircut ($${priceOf("haircut")}) or Haircut & Beard ($${priceOf("haircut-and-beard")}) on Booksy or walk in.`,
        link: { href: "/gallery", label: "View the gallery" },
      },
      {
        q: "Do you color or blend gray hair?",
        a: `Yes. Our Hair Color service covers professional hair coloring and gray blending for a natural, refreshed finish, starting at $${priceOf("hair-color")}. Gray blending softens gray so it mixes in with your natural color instead of looking dyed. Talk with your barber about the shade you want.`,
        link: { href: "/services/hair-color", label: "About hair color" },
      },
      {
        q: "What forms of payment do you accept?",
        a: "We accept cash, all major credit and debit cards, and mobile payments including Apple Pay and Google Pay. You can also pay securely through the Booksy app when you book your appointment online, which keeps checkout at the shop quick.",
      },
    ],
  },
  {
    title: "Visit Basics",
    items: [
      {
        q: "Where are you located?",
        a: `${BUSINESS_NAME} is at ${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}, in the heart of downtown Akron. Street parking is available right in front of the shop on E Mill St, and several public parking lots are within a short walk.`,
        link: { href: "/visit-us", label: "Get directions" },
      },
      {
        q: "Where should I park?",
        a: "There is convenient street parking right in front of the shop on E Mill St. Several public parking lots and decks are also within a short walk in downtown Akron, so you can still find a spot nearby when the street fills up.",
      },
      {
        q: "What amenities does the shop have?",
        a: "While you wait, enjoy free Wi-Fi, sports and entertainment on the TV, beverages, and a comfortable lounge. The Experience is designed to be a welcoming downtown Akron hangout as much as a barbershop, whether you're a local professional, a college student, or visiting Akron.",
      },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(allItems)} />

      <Header />

      <PageHero
        image={HeroImg}
        alt="Barber tools at The Experience"
        badge="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about visiting our downtown Akron barber shop."
      />

      <BarberPole />

      <section className={styles.section}>
        <Container>
          <div className={styles.inner}>
            <FaqAccordion categories={categories} />
          </div>
        </Container>
      </section>

      <CtaSection />

      <Footer />
    </>
  );
}
