import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import FaqAccordion, { type FaqCategory } from "@/components/ui/FaqAccordion";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon1.jpg";
import styles from "./faq.module.css";

export const metadata: Metadata = {
  title: "FAQ | The Experience Barber & Beauty Shop",
  description:
    "Answers to common questions about booking, walk-ins, pricing, student discounts, payment, and parking at The Experience in downtown Akron.",
};

const categories: FaqCategory[] = [
  {
    title: "Booking & Walk-ins",
    items: [
      {
        q: "Do you accept walk-ins?",
        a: "Yes, walk-ins are always welcome! However, to guarantee a spot without a wait, we highly recommend calling ahead or booking an appointment through our Booksy page.",
      },
      {
        q: "How does booking work?",
        a: "We handle all appointments through Booksy. Click any “Book Appointment” button on our site and you'll be directed to our secure Booksy profile where you can select your service, barber, and preferred time.",
      },
    ],
  },
  {
    title: "Pricing & Services",
    items: [
      {
        q: "Do you offer student discounts?",
        a: "Absolutely. We offer special College Cuts for just $25. Just bring a valid student ID to your appointment to receive the discount.",
      },
      {
        q: "What forms of payment do you accept?",
        a: "We accept cash, all major credit/debit cards, and mobile payments (Apple Pay, Google Pay). You can also pay securely through the Booksy app when booking.",
      },
    ],
  },
  {
    title: "Visit Basics",
    items: [
      {
        q: "Where should I park?",
        a: "There is convenient street parking right in front of the shop on E Mill St. Several public parking lots are also within a short walking distance in downtown Akron.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="Barber tools at The Experience"
        badge="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about visiting The Experience."
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
