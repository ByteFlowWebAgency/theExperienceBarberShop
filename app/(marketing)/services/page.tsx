import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import { BUSINESS_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import {
  CATEGORY_ORDER,
  getServicesByCategory,
  priceOf,
  services,
  type ServiceCategory,
} from "@/lib/services";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import styles from "./services.module.css";

export const metadata = pageMetadata({
  title: "Barber Services & Prices in Akron, OH | The Experience",
  description: `See barber prices in downtown Akron: haircuts $${priceOf("haircut")}, haircut & beard $${priceOf("haircut-and-beard")}, kids and college cuts $${priceOf("kids-haircut")}, plus hot towel shaves, beard trims, eyebrows, and color.`,
  path: "/services/",
});

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
        alt="The Experience Barber & Beauty Shop styling station"
        title="The Experience Menu"
        subtitle="Barber services and transparent prices in downtown Akron. Walk-ins are welcome, but booking ahead guarantees your spot."
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

      {/* Price list — answers "how much is a haircut in Akron" */}
      <section className={styles.prices}>
        <Container>
          <div className={styles.pricesInner}>
            <h2 className={styles.pricesTitle}>
              How much is a haircut in Akron?
            </h2>
            <p className={styles.pricesAnswer}>
              At {BUSINESS_NAME} in downtown Akron, a standard haircut starts at $
              {priceOf("haircut")}. Haircut &amp; Beard is $
              {priceOf("haircut-and-beard")}, Kids Haircuts (ages 12 and under)
              and College Cuts with a valid ID are ${priceOf("kids-haircut")},
              and line ups and eyebrow shaping start at ${priceOf("line-up")}.
              Every price is listed below.
            </p>
            <table className={styles.table}>
              <caption className={styles.tableCaption}>
                Barber services and starting prices
              </caption>
              <thead>
                <tr>
                  <th scope="col">Service</th>
                  <th scope="col">What it is</th>
                  <th scope="col">Starting at</th>
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s.slug}>
                    <th scope="row">
                      <Link href={`/services/${s.slug}`}>{s.name}</Link>
                    </th>
                    <td>{s.description}</td>
                    <td className={styles.tablePrice}>${s.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}
