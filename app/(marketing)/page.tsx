import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL } from "@/lib/site";
import { getRatingSummary } from "@/lib/gbp/reviews";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon1.jpg";
import HeroImg2 from "@public/assets/images/theExperienceBarberShopAndSalon2.jpg";
import HeroImg3 from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import OwnerImg from "@public/assets/images/DeShawnJohnson.jpg";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: "The Experience Barber & Beauty Shop | Best Haircuts & Grooming",
  description:
    "Premium grooming and styling for the modern gentleman in downtown Akron. Walk in or book ahead for an unmatched barbershop experience.",
};

const services = [
  {
    icon: "fa-scissors",
    name: "Standard Haircut",
    desc: "A precision cut tailored to your style. (Beard not included)",
    price: "$30+",
    popular: false,
  },
  {
    icon: "fa-user-tie",
    name: "Haircut & Beard",
    desc: "Complete grooming package including precision cut and beard detailing.",
    price: "$40",
    popular: true,
  },
  {
    icon: "fa-graduation-cap",
    name: "College Cuts",
    desc: "Special pricing for students. Must present valid college ID.",
    price: "$25",
    popular: false,
  },
];

// Regenerate hourly so the Google rating stays fresh without rebuilding.
export const revalidate = 3600;

export default async function HomePage() {
  const { averageRating, totalReviewCount } = await getRatingSummary();
  const roundedRating = (Math.round(averageRating * 10) / 10).toFixed(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            name: "The Experience Barber Shop",
            image:
              "https://www.theexpshop.com/assets/images/DeShawnJohnson.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "88 E Mill St",
              addressLocality: "Akron",
              addressRegion: "OH",
              postalCode: "44308",
              addressCountry: "US",
            },
            email: "expakron@gmail.com",
            telephone: "330-475-2522",
            openingHours: "Mo by appointment, Tu-Sa 10:00-18:00",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: roundedRating,
              reviewCount: totalReviewCount,
            },
          }),
        }}
      />

      <Header />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <HeroSlideshow
            images={[
              {
                src: HeroImg,
                alt: "The Experience Barber & Beauty Shop interior",
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
              <h2 className={styles.trustTitle}>More Than Just a Haircut.</h2>
              <p className={styles.trustPara}>
                Founded by Deshawn Johnson — barber, mentor, and reentry
                advocate — The Experience Barber &amp; Beauty Shop is a
                cornerstone of the downtown Akron community.
              </p>
              <p className={styles.trustPara}>
                We believe in top-tier service, transparent pricing, and a
                welcoming environment for everyone, from local professionals to
                college students.
              </p>

              <div className={styles.trustFeatures}>
                <div className={styles.feature}>
                  <i className="fa-solid fa-location-dot" />
                  <h4 className={styles.featureTitle}>Prime Location</h4>
                  <p className={styles.featureText}>
                    88 E Mill St, Akron, OH 44308
                  </p>
                </div>
                <div className={styles.feature}>
                  <i className="fa-solid fa-clock" />
                  <h4 className={styles.featureTitle}>Flexible Hours</h4>
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
            {services.map((s) => (
              <div key={s.name} className={styles.serviceCard}>
                {s.popular && <span className={styles.popularTag}>Most Popular</span>}
                <div className={styles.serviceIcon}>
                  <i className={`fa-solid ${s.icon}`} />
                </div>
                <h3 className={styles.serviceName}>{s.name}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <div className={styles.serviceFoot}>
                  <span className={styles.servicePrice}>{s.price}</span>
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

      <Footer />
    </>
  );
}
