import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import IFrameMap from "@/components/ui/IFrameMap";
import { Button } from "@/components/ui/Button";
import {
  BOOKSY_URL,
  PHONE_HREF,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from "@/lib/site";
import HeroImg from "@public/assets/images/theexperienceshop.webp";
import styles from "./visit.module.css";

export const metadata: Metadata = {
  title: "Visit Us | The Experience Barber & Beauty Shop",
  description:
    "Find The Experience Barber & Beauty Shop at 88 E Mill St, Akron, OH 44308. Hours, parking, walk-in policy, and shop amenities.",
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=88+E+Mill+St+Akron+OH+44308";

const hours = [
  { day: "Monday", value: "Appointments Only", badge: true },
  { day: "Tuesday", value: "10:00 AM - 6:00 PM" },
  { day: "Wednesday", value: "10:00 AM - 6:00 PM" },
  { day: "Thursday", value: "10:00 AM - 6:00 PM" },
  { day: "Friday", value: "10:00 AM - 6:00 PM" },
  { day: "Saturday", value: "10:00 AM - 6:00 PM" },
  { day: "Sunday", value: "Closed", closed: true },
];

const guidelines = [
  {
    icon: "fa-person-walking",
    title: "Walk-ins Welcome",
    text: "We accept walk-ins during regular business hours (Tue–Sat). We recommend calling ahead or booking online to secure your spot.",
  },
  {
    icon: "fa-square-parking",
    title: "Parking Information",
    text: "Convenient street parking is available along E Mill St, plus several public parking decks within a short walk in downtown Akron.",
  },
  {
    icon: "fa-id-card",
    title: "Student Discounts",
    text: "College students receive special pricing on cuts ($25). Please bring a valid student ID to present at your appointment.",
  },
];

const amenities = [
  { icon: "fa-wifi", label: "Free Wi-Fi" },
  { icon: "fa-tv", label: "Sports & Entertainment" },
  { icon: "fa-mug-hot", label: "Beverages" },
  { icon: "fa-couch", label: "Comfortable Lounge" },
];

export default function VisitUsPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="The Experience Barber Shop storefront in downtown Akron"
        badge="Location & Hours"
        title="Plan Your Visit"
        subtitle="Downtown Akron's premier destination for grooming."
        size="lg"
      />

      <BarberPole />

      {/* Map + hours */}
      <section className={styles.core}>
        <Container>
          <div className={styles.coreGrid}>
            <div className={styles.mapCard}>
              <div className={styles.mapInner}>
                <IFrameMap />
              </div>
              <div className={styles.mapOverlay}>
                <div className={styles.mapOverlayTop}>
                  <div className={styles.mapPin}>
                    <i className="fa-solid fa-location-dot" />
                  </div>
                  <div>
                    <h3 className={styles.mapTitle}>The Experience</h3>
                    <p className={styles.mapAddr}>
                      {ADDRESS_LINE_1}
                      <br />
                      {ADDRESS_LINE_2}
                    </p>
                  </div>
                </div>
                <Button asChild variant="secondary" block>
                  <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer">
                    Get Directions{" "}
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </Button>
              </div>
            </div>

            <div className={styles.hoursCard}>
              <h2 className={styles.hoursTitle}>
                <i className="fa-regular fa-clock" /> Shop Hours
              </h2>
              <ul className={styles.hoursList}>
                {hours.map((h) => (
                  <li key={h.day} className={styles.hoursRow}>
                    <span className={styles.hoursDay}>{h.day}</span>
                    {h.badge ? (
                      <span className={styles.hoursBadge}>{h.value}</span>
                    ) : h.closed ? (
                      <span className={styles.hoursClosed}>
                        <i className="fa-solid fa-lock" /> {h.value}
                      </span>
                    ) : (
                      <span className={styles.hoursVal}>{h.value}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className={styles.hoursActions}>
                <Button asChild variant="primary">
                  <a href={BOOKSY_URL}>
                    <i className="fa-solid fa-calendar-check" /> Book on Booksy
                  </a>
                </Button>
                <Button asChild variant="secondary">
                  <a href={PHONE_HREF}>
                    <i className="fa-solid fa-phone" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Guidelines */}
      <section className={styles.guidelines}>
        <Container>
          <SectionHeading
            title="What to Expect"
            subtitle="Guidelines to ensure you have the best experience possible."
          />
          <div className={styles.guideGrid}>
            {guidelines.map((g) => (
              <div key={g.title} className={styles.guideCard}>
                <div className={styles.guideIcon}>
                  <i className={`fa-solid ${g.icon}`} />
                </div>
                <h3 className={styles.guideTitle}>{g.title}</h3>
                <p className={styles.guideText}>{g.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className={styles.amenities}>
        <Container>
          <h2 className={styles.amenitiesTitle}>The Shop Vibe</h2>
          <div className={styles.amenitiesGrid}>
            {amenities.map((a) => (
              <div key={a.label} className={styles.amenity}>
                <i className={`fa-solid ${a.icon}`} />
                <span className={styles.amenityLabel}>{a.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection background="muted" />

      <Footer />
    </>
  );
}
