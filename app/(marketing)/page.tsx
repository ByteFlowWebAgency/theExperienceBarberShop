import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import JsonLd from "@/components/ui/JsonLd";
import { Button } from "@/components/ui/Button";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  BOOKSY_URL,
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
} from "@/lib/site";
import { businessJsonLd, pageMetadata } from "@/lib/seo";
import { getServiceBySlug, type Service } from "@/lib/services";
import { getRatingSummary } from "@/lib/gbp/reviews";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon1.jpg";
import HeroImg2 from "@public/assets/images/theExperienceBarberShopAndSalon2.jpg";
import HeroImg3 from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import OwnerImg from "@public/assets/images/DeShawnJohnson.jpg";
import styles from "./home.module.css";

export const metadata = pageMetadata({
  title: "Akron Barber Shop: Haircuts & Beard Trims | The Experience",
  description:
    "Visit The Experience Barber & Beauty Shop in downtown Akron for precision haircuts, beard trims, and hot towel shaves. Walk-ins welcome, or book on Booksy.",
  path: "/",
});

// Services featured on the homepage, read from the catalog so names, prices
// and descriptions never drift from the services pages.
const FEATURED: { slug: string; icon: string }[] = [
  { slug: "haircut", icon: "fa-scissors" },
  { slug: "haircut-and-beard", icon: "fa-user-tie" },
  { slug: "college-cuts", icon: "fa-graduation-cap" },
];
const MOST_POPULAR = "haircut-and-beard";

const featured = FEATURED.map(({ slug, icon }) => {
  const service = getServiceBySlug(slug);
  if (!service) throw new Error(`Unknown featured service: ${slug}`);
  return { service, icon };
}) satisfies { service: Service; icon: string }[];

// Regenerate hourly so the Google rating stays fresh without rebuilding.
export const revalidate = 3600;

export default async function HomePage() {
  const { averageRating, totalReviewCount } = await getRatingSummary();
  const roundedRating = (Math.round(averageRating * 10) / 10).toFixed(1);

  return (
    <>
      <JsonLd data={businessJsonLd()} />

      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <HeroSlideshow
            images={[
              {
                src: HeroImg,
                alt: `${BUSINESS_NAME} interior`,
              },
              { src: HeroImg2, alt: "A fresh cut at The Experience" },
              { src: HeroImg3, alt: "Premium grooming at The Experience" },
            ]}
          />
          <div className={styles.heroOverlay} />
        </div>
        <Container className={styles.heroContainer}>
          <div className={styles.heroInner}>
            <span className={styles.badge}>Downtown Akron, OH</span>
            <h1 className={styles.heroTitle}>
              The Experience You&apos;ll Remember.
            </h1>
            <p className={styles.heroText}>
              Premium grooming and styling services tailored for the modern
              gentleman. Walk in or book ahead for an unmatched barbershop
              experience.
            </p>
            <div className={styles.heroActions}>
              <Button asChild variant="primary" size="lg">
                <a href={BOOKSY_URL}>
                  Book on Booksy <i className="fa-solid fa-arrow-right" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust / Intro */}
      <section className={styles.trust}>
        <Container>
          <div className={styles.trustGrid}>
            <div className={styles.trustImageWrap}>
              <Image
                src={OwnerImg}
                alt="Deshawn Johnson, founder and master barber"
                className={styles.trustImage}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className={styles.ratingBadge}>
                <div className={styles.ratingIcon}>
                  <i className="fa-solid fa-star" />
                </div>
                <div>
                  <div className={styles.ratingNum}>{roundedRating}/5 stars</div>
                  <div className={styles.ratingSub}>
                    {totalReviewCount}+ reviews
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.trustBody}>
              <h2 className={styles.trustTitle}>
                Downtown Akron&apos;s Community Barbershop
              </h2>
              <p className={styles.trustPara}>
                More than just a haircut. Founded by Deshawn Johnson — barber,
                mentor, and reentry advocate — {BUSINESS_NAME} is a cornerstone
                of the local community.
              </p>
              <p className={styles.trustPara}>
                We believe in top-tier service, transparent pricing, and a
                welcoming environment for everyone, from local professionals to
                college students.
              </p>

              <div className={styles.trustFeatures}>
                <div className={styles.feature}>
                  <i className="fa-solid fa-location-dot" />
                  <h3 className={styles.featureTitle}>Prime Location</h3>
                  <p className={styles.featureText}>
                    {ADDRESS_LINE_1}, {ADDRESS_LINE_2}
                  </p>
                </div>
                <div className={styles.feature}>
                  <i className="fa-solid fa-clock" />
                  <h3 className={styles.featureTitle}>Flexible Hours</h3>
                  <p className={styles.featureText}>
                    Tue–Sat 10AM–6PM (Mon Appt Only)
                  </p>
                </div>
              </div>

              <Link href="/our-story" className={styles.storyLink}>
                Read Our Full Story <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services preview */}
      <section className={styles.services}>
        <Container>
          <SectionHeading
            title="Popular Services"
            subtitle="Transparent pricing for premium grooming. Walk-ins are always welcome, but booking ahead secures your spot. Students get special pricing with valid ID."
          />

          <div className={styles.serviceGrid}>
            {featured.map(({ service, icon }) => (
              <div key={service.slug} className={styles.serviceCard}>
                {service.slug === MOST_POPULAR && (
                  <span className={styles.popularTag}>Most Popular</span>
                )}
                <div className={styles.serviceIcon}>
                  <i className={`fa-solid ${icon}`} />
                </div>
                <h3 className={styles.serviceName}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={styles.serviceNameLink}
                  >
                    {service.name}
                  </Link>
                </h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <div className={styles.serviceFoot}>
                  <span className={styles.servicePrice}>${service.price}+</span>
                  <a href={BOOKSY_URL} className={styles.serviceBook}>
                    Book <i className="fa-solid fa-chevron-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servicesFoot}>
            <Button asChild variant="secondary">
              <Link href="/services">View All Services &amp; Pricing</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Visit summary */}
      <section className={styles.visit}>
        <Container>
          <div className={styles.visitInner}>
            <h2 className={styles.visitTitle}>
              Your Barber Shop in Downtown Akron
            </h2>
            <p className={styles.visitText}>
              {BUSINESS_NAME} sits at {ADDRESS_LINE_1} in the heart of downtown
              Akron, with street parking along E Mill St and public parking
              decks a short walk away. Walk-ins are welcome Tuesday through
              Saturday from 10 AM to 6 PM, and Mondays are by appointment only.
            </p>
            <p className={styles.visitText}>
              Book ahead on Booksy to guarantee your spot, or call the shop at{" "}
              <a href={PHONE_HREF} className={styles.inlineLink}>
                {PHONE}
              </a>
              . College students get special pricing with a valid ID, kids 12
              and under have their own rate, and every visit comes with free
              Wi-Fi, sports on the TV, beverages, and a comfortable lounge.
            </p>
            <ul className={styles.visitLinks}>
              <li>
                <Link href="/visit-us" className={styles.storyLink}>
                  Hours &amp; directions <i className="fa-solid fa-arrow-right" />
                </Link>
              </li>
              <li>
                <Link href="/reviews" className={styles.storyLink}>
                  Read client reviews <i className="fa-solid fa-arrow-right" />
                </Link>
              </li>
              <li>
                <Link href="/faq" className={styles.storyLink}>
                  Common questions <i className="fa-solid fa-arrow-right" />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
