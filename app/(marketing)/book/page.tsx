import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL, PHONE, PHONE_HREF } from "@/lib/site";
import styles from "./book.module.css";

export const metadata: Metadata = {
  title: "Book an Appointment | The Experience Barber & Beauty Shop",
  description:
    "Book your appointment at The Experience Barber & Beauty Shop in downtown Akron through Booksy, or call the shop to schedule.",
};

const steps = [
  {
    n: 1,
    label: "Select Services:",
    text: "Choose your desired haircut, shave, or styling options.",
  },
  {
    n: 2,
    label: "Pick a Time:",
    text: "Find an available slot that fits your schedule.",
  },
  {
    n: 3,
    label: "Confirm:",
    text: "Receive instant confirmation and reminders via Booksy.",
  },
];

export default function BookPage() {
  return (
    <>
      <Header lightHero />

      <section className={styles.main}>
        <Container>
          <div className={styles.grid}>
            {/* Booksy handoff */}
            <div className={styles.card}>
              <div className={styles.cardStripe}>
                <BarberPole thin />
              </div>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-calendar-check" />
              </div>
              <h1 className={styles.cardTitle}>Book Your Experience</h1>
              <p className={styles.cardText}>
                We use Booksy for the most seamless scheduling experience. You
                will be redirected to our official booking portal to choose your
                service and time.
              </p>

              <div className={styles.steps}>
                <h3 className={styles.stepsTitle}>What to Expect:</h3>
                <div className={styles.stepsList}>
                  {steps.map((s) => (
                    <div key={s.n} className={styles.step}>
                      <span className={styles.stepNum}>{s.n}</span>
                      <p className={styles.stepText}>
                        <strong>{s.label}</strong> {s.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Button asChild variant="primary" size="lg" block>
                <a href={BOOKSY_URL} target="_blank" rel="noreferrer">
                  Continue to Booksy <i className="fa-solid fa-arrow-right" />
                </a>
              </Button>
              <p className={styles.cardNote}>
                Opens in a new tab securely on Booksy.com
              </p>
            </div>

            {/* Side panels */}
            <div className={styles.side}>
              <div className={styles.sideCard}>
                <h2 className={styles.sideTitle}>Prefer to Call?</h2>
                <p className={styles.sideText}>
                  Our team is happy to help you schedule over the phone or answer
                  any questions about our services.
                </p>
                <div className={styles.sidePhone}>
                  <div className={styles.sidePhoneIcon}>
                    <i className="fa-solid fa-phone" />
                  </div>
                  <div>
                    <p className={styles.sidePhoneLabel}>Direct Line</p>
                    <a href={PHONE_HREF} className={styles.sidePhoneNum}>
                      {PHONE}
                    </a>
                  </div>
                </div>
                <Button asChild variant="secondary" block>
                  <a href={PHONE_HREF}>Call the Shop</a>
                </Button>
              </div>

              <div className={styles.sideCard}>
                <h3 className={styles.sideHeading}>Walk-in Policy</h3>
                <p className={styles.sideText} style={{ borderBottom: "none", paddingBottom: 0 }}>
                  We gladly accept walk-ins during our regular operating hours,
                  subject to barber availability.
                </p>
                <div className={styles.walkBox}>
                  <div className={styles.walkRow}>
                    <span className={styles.walkMuted}>Tue - Sat</span>
                    <span className={styles.walkVal}>10AM - 6PM</span>
                  </div>
                  <div className={styles.walkRow}>
                    <span className={styles.walkMuted}>Mon &amp; Sun</span>
                    <span className={styles.walkClosed}>Appt Only / Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
