import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import ContactForm from "@/components/forms/ContactForm";
import IFrameMap from "@/components/ui/IFrameMap";
import { Button } from "@/components/ui/Button";
import {
  BOOKSY_URL,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from "@/lib/site";
import HeroImg from "@public/assets/images/theexperienceshop.webp";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | The Experience Barber & Beauty Shop",
  description:
    "Get in touch with The Experience Barber & Beauty Shop in downtown Akron. Call, email, or send us a message.",
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=88+E+Mill+St+Akron+OH+44308";

export default function ContactPage() {
  return (
    <>
      <Header lightHero />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src={HeroImg}
            alt="The Experience Barber Shop interior"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
          <div className={styles.heroFade} />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Get in Touch</span>
          <h1 className={styles.heroTitle}>We&apos;d love to hear from you.</h1>
          <p className={styles.heroText}>
            Whether you have a question about our services, want to join our
            team, or are interested in franchise opportunities, we&apos;re here
            to help.
          </p>
        </div>
      </section>

      {/* Info + form */}
      <section className={styles.main}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className={styles.infoTitle}>Call Us</h3>
                <p className={styles.infoText}>
                  Questions or walk-in availability? Give us a ring.
                </p>
                <a href={PHONE_HREF} className={styles.infoLink}>
                  {PHONE}
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-envelope" />
                </div>
                <h3 className={styles.infoTitle}>Email Us</h3>
                <p className={styles.infoText}>
                  For general inquiries, partnerships, or franchise info.
                </p>
                <a href={EMAIL_HREF} className={styles.infoLink}>
                  {EMAIL}
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h3 className={styles.infoTitle}>Visit Us</h3>
                <p className={styles.infoText}>
                  Located in the heart of downtown Akron.
                </p>
                <address className={styles.infoAddr}>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </address>
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.infoLink}
                  style={{ fontSize: "1rem" }}
                >
                  Get Directions <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>

            <div>
              <div className={styles.formCard}>
                <div className={styles.formHead}>
                  <h2 className={styles.formTitle}>Send a Message</h2>
                  <p className={styles.formSub}>
                    Fill out the form below and our team will get back to you
                    promptly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hours + map */}
      <section className={styles.hours}>
        <Container>
          <div className={styles.hoursGrid}>
            <div>
              <h2 className={styles.hoursTitle}>Operating Hours</h2>
              <div className={styles.hoursBox}>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Monday</span>
                  <span className={styles.hoursBadge}>Appointments Only</span>
                </div>
                <div className={styles.hoursRow}>
                  <span className={styles.hoursDay}>Tuesday - Saturday</span>
                  <span className={styles.hoursVal}>10:00 AM - 6:00 PM</span>
                </div>
                <div className={`${styles.hoursRow} ${styles.hoursRowLast}`}>
                  <span className={styles.hoursDay}>Sunday</span>
                  <span className={styles.hoursClosed}>Closed</span>
                </div>
                <div className={styles.hoursNote}>
                  <p className={styles.hoursNoteText}>
                    <i className="fa-solid fa-circle-info" /> Walk-ins are
                    welcome during regular hours, but we recommend calling ahead
                    or booking online to secure your spot.
                  </p>
                  <Button asChild variant="primary">
                    <a href={BOOKSY_URL}>
                      Book on Booksy{" "}
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.mapBox}>
              <IFrameMap />
            </div>
          </div>
        </Container>
      </section>

      <BarberPole />

      <Footer />
    </>
  );
}
