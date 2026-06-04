import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL, PHONE, PHONE_HREF } from "@/lib/site";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services & Pricing | The Experience Barber & Beauty Shop",
  description:
    "Transparent pricing for top-tier grooming in downtown Akron. Haircuts from $30, full haircut & beard $40, kids cuts $25, plus shaves, beard trims, and color.",
};

const cuts = [
  {
    tier: "Haircut/Beard not included",
    tierClass: "tierStandard",
    desc: "Ideal for those seeking a clean, classic cut. A precision cut tailored to your style.",
    price: "$30",
    plus: true,
    featured: false,
    features: [
      { text: "Precision Haircut", on: true },
      { text: "Hot Lather Neck Shave", on: true },
      { text: "Styling Product Application", on: true },
      { text: "Beard Detailing", on: false },
    ],
  },
  {
    tier: "Male Haircut with beard included",
    tierClass: "tierFeatured",
    desc: "Our most requested service. Complete grooming package including precision cut and beard detailing.",
    price: "$40",
    plus: false,
    featured: true,
    features: [
      { text: "Precision Haircut", on: true },
      { text: "Full Beard Trim & Shaping", on: true },
      { text: "Hot Towel Treatment", on: true },
      { text: "Razor Line Up", on: true },
      { text: "Premium Styling", on: true },
    ],
  },
  {
    tier: "Kids haircut",
    tierClass: "tierKids",
    desc: "Professional grooming for the younger generation (12 and under).",
    price: "$25",
    plus: false,
    featured: false,
    features: [
      { text: "Kid-Friendly Haircut", on: true },
      { text: "Basic Styling", on: true },
      { text: "Lollipop included", on: true },
    ],
  },
];

const addons = [
  { title: "Shave Service", text: "Traditional hot towel straight razor shave.", price: "$25+" },
  { title: "Eyebrow Shaping", text: "Clean, defined eyebrow shaping.", price: "$20" },
  { title: "Line Up / Head Only", text: "Crisp edge up and basic head maintenance.", price: "$20+" },
  { title: "Beard Trim", text: "Shaping and detailing for your facial hair.", price: "$25" },
  { title: "Hair Color", text: "Professional coloring and gray blending.", price: "$35" },
  { title: "Appointment Price", text: "Deposit to reserve your appointment time.", price: "$5" },
  { title: "College Cuts", text: "Standard cut for students with a valid college ID.", price: "$25" },
];

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
          {/* Popular cuts */}
          <div className={styles.block}>
            <SectionHeading
              title="Popular Cuts"
              subtitle="Our signature services tailored for the modern gentleman."
            />
            <div className={styles.pricingGrid}>
              {cuts.map((c) => (
                <div
                  key={c.tier}
                  className={`${styles.priceCard} ${
                    c.featured ? styles.priceCardFeatured : ""
                  }`}
                >
                  {c.featured && (
                    <span className={styles.featuredTag}>Most Popular</span>
                  )}
                  <span className={`${styles.tier} ${styles[c.tierClass]}`}>
                    {c.tier}
                  </span>
                  <p className={styles.tierDesc}>{c.desc}</p>
                  <div className={styles.priceRow}>
                    <span className={styles.price}>{c.price}</span>
                    {c.plus && <span className={styles.pricePlus}>+</span>}
                  </div>
                  <ul className={styles.features}>
                    {c.features.map((f) => (
                      <li
                        key={f.text}
                        className={`${styles.feature} ${
                          f.on ? "" : styles.featureOff
                        }`}
                      >
                        <i
                          className={`fa-solid ${
                            f.on ? "fa-check" : "fa-xmark"
                          }`}
                        />
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={c.featured ? "primary" : "secondary"}
                    block
                  >
                    <a href={BOOKSY_URL}>Book Now</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <SectionHeading
              title="Additional Services"
              subtitle="Our full menu of specialized services and add-ons."
            />
            <div className={styles.addonGrid}>
              {addons.map((a) => (
                <div key={a.title} className={styles.addon}>
                  <h4 className={styles.addonTitle}>{a.title}</h4>
                  <p className={styles.addonText}>{a.text}</p>
                  <div className={styles.addonFoot}>
                    <span className={styles.addonPrice}>{a.price}</span>
                    <a href={BOOKSY_URL} className={styles.addonAdd}>
                      Book <i className="fa-solid fa-chevron-right" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Student rate */}
      <section className={styles.student}>
        <Container>
          <div className={styles.studentCard}>
            <div className={styles.studentLeft}>
              <div className={styles.studentIcon}>
                <i className="fa-solid fa-graduation-cap" />
              </div>
              <div>
                <h3 className={styles.studentTitle}>College Student Cuts</h3>
                <p className={styles.studentText}>
                  We support our local Akron students. Present a valid college
                  ID at checkout to receive our special student rate on standard
                  haircuts.
                </p>
              </div>
            </div>
            <div className={styles.studentRight}>
              <div className={styles.studentRate}>Student Rate</div>
              <div className={styles.studentPrice}>$25</div>
              <Button asChild variant="secondary">
                <a href={BOOKSY_URL}>Book Student Cut</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Walk-in CTA */}
      <section className={styles.walkin}>
        <Container>
          <div className={styles.walkinInner}>
            <h2 className={styles.walkinTitle}>Need a cut today?</h2>
            <p className={styles.walkinText}>
              While we recommend booking ahead to secure your preferred time, we
              always welcome walk-ins. Give us a call to check our current wait
              times before heading over.
            </p>
            <div className={styles.walkinActions}>
              <Button asChild variant="dark" size="lg">
                <a href={PHONE_HREF}>
                  <i className="fa-solid fa-phone" /> Call {PHONE}
                </a>
              </Button>
              <span className={styles.walkinOr}>or</span>
              <Button asChild variant="primary" size="lg">
                <a href={BOOKSY_URL}>
                  Book Online <i className="fa-solid fa-calendar-check" />
                </a>
              </Button>
            </div>
            <p className={styles.walkinHours}>
              <i className="fa-solid fa-clock" /> Open Tue–Sat 10AM–6PM (Mondays
              by appointment only)
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
