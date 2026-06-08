import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import {
  CATEGORY_ORDER,
  getServicesByCategory,
  type ServiceCategory,
} from "@/lib/services";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services & Pricing | The Experience Barber & Beauty Shop",
  description:
    "Transparent pricing for top-tier grooming in downtown Akron. Haircuts from $30, full haircut & beard $40, kids cuts $25, plus shaves, beard trims, and color.",
};

const CATEGORY_SUBTITLE: Record<ServiceCategory, string> = {
  "Popular Services": "Our signature cuts, tailored for the modern gentleman.",
  "Other Services": "The full menu of specialized services and add-ons.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="The Experience Barber Shop styling station"
        title="The Experience Menu"
        subtitle="Transparent pricing for top-tier grooming. Walk-ins are welcome, but booking ahead guarantees your spot."
      />

      <section className={styles.main}>
        <Container>
          {CATEGORY_ORDER.map((category) => {
            const items = getServicesByCategory(category);
            if (items.length === 0) return null;
            return (
              <div key={category} className={styles.block}>
                <SectionHeading
                  title={category}
                  subtitle={CATEGORY_SUBTITLE[category]}
                />
                <div className={styles.grid}>
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={styles.card}
                    >
                      <h3 className={styles.cardName}>{s.name}</h3>
                      <p className={styles.cardDesc}>{s.description}</p>
                      <div className={styles.cardFoot}>
                        <span className={styles.cardPrice}>
                          Starting at ${s.price}
                        </span>
                        <span className={styles.cardLink}>
                          View <i className="fa-solid fa-arrow-right" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
