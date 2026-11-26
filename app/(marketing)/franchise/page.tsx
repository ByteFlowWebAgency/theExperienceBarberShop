import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import SectionHeading from "@/components/ui/SectionHeading";
import FranchiseForm from "@/components/forms/FranchiseForm";
import { Button } from "@/components/ui/Button";
import { BUSINESS_NAME, CLIENTS_SERVED } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import OwnerImg from "@public/assets/images/DeShawnJohnson.jpg";
import ShopImg from "@public/assets/images/theexperienceshop.webp";
import styles from "./franchise.module.css";

export const metadata = pageMetadata({
  title: "Barber Shop Franchise Opportunity | The Experience",
  description:
    "Learn how to open a franchise with The Experience Barber & Beauty Shop: a proven barbershop model, hands-on training, and marketing support. Request info.",
  path: "/franchise/",
  image: "/assets/images/theexperienceshop.webp",
});

const stats = [
  { num: CLIENTS_SERVED, label: "Happy Clients" },
  { num: "3", label: "Revenue Streams" },
  { num: "100%", label: "Support" },
];

const features = [
  {
    icon: "fa-store",
    title: "Turnkey Operations",
    text: "From site selection and build-out to grand opening, we provide a step-by-step playbook to get your shop running smoothly.",
  },
  {
    icon: "fa-users-gear",
    title: "Talent & Training",
    text: "We help you recruit top-tier barbers and provide ongoing training in technical skills and our signature service approach.",
  },
  {
    icon: "fa-chart-line",
    title: "Marketing Engine",
    text: "Leverage our established brand, digital marketing strategies, and local outreach to drive foot traffic from day one.",
  },
];

const steps = [
  "Request our franchise information packet using the form below.",
  "Talk with our team about your goals and your market.",
  "Choose your site and complete the build-out with our step-by-step playbook.",
  "Recruit your barbers and train them in our signature service approach.",
  "Open with our brand, digital marketing, and local outreach behind you.",
];

export default function FranchisePage() {
  return (
    <>
      <Header lightHero />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroBadge}>Franchise Opportunity</span>
              <h1 className={styles.heroTitle}>
                Build a legacy in your community.
              </h1>
              <p className={styles.heroText}>
                Join The Experience Barber &amp; Beauty Shop family. We offer a
                proven business model, comprehensive training, and a brand built
                on quality grooming and community connection.
              </p>
              <div className={styles.heroActions}>
                <Button asChild variant="primary" size="lg">
                  <a href="#inquiry">
                    Get Started <i className="fa-solid fa-arrow-right" />
                  </a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#model">Explore the Model</a>
                </Button>
              </div>
            </div>
            <Image
              src={OwnerImg}
              alt="Deshawn Johnson, founder of The Experience"
              className={styles.heroImage}
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className={styles.stats}>
        <Container>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Business model */}
      <section id="model" className={styles.model}>
        <Container>
          <SectionHeading
            title="A Proven Barbershop Franchise Model"
            subtitle="We've refined the modern barbershop experience. Our model maximizes efficiency, client retention, and profitability without sacrificing the authentic community feel."
          />
          <div className={styles.modelGrid}>
            <div className={styles.featureList}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    <i className={`fa-solid ${f.icon}`} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{f.title}</h3>
                    <p className={styles.featureText}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Image
              src={ShopImg}
              alt={`${BUSINESS_NAME} storefront in downtown Akron`}
              className={styles.modelImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      {/* How to open a franchise */}
      <section className={styles.howTo}>
        <Container>
          <div className={styles.howToInner}>
            <h2 className={styles.howToTitle}>
              How do you open a barbershop franchise with The Experience?
            </h2>
            <p className={styles.howToText}>
              Opening a franchise with {BUSINESS_NAME} starts with an inquiry.
              Request
              our franchise information packet, talk with our team about your
              market, then work through our playbook covering site selection,
              build-out, barber recruiting, training, and marketing, all the way
              to your grand opening.
            </p>
            <ol className={styles.howToSteps}>
              {steps.map((step, i) => (
                <li key={step} className={styles.howToStep}>
                  <span className={styles.howToNum}>{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <p className={styles.howToText}>
              Want to know more about the brand first? Read{" "}
              <Link href="/our-story">our founder&apos;s story</Link> and see
              what clients say in our{" "}
              <Link href="/reviews">Google reviews</Link>, or browse our{" "}
              <Link href="/services">services and prices</Link>.
            </p>
          </div>
        </Container>
      </section>

      <BarberPole />

      {/* Inquiry form */}
      <section id="inquiry" className={styles.inquiry}>
        <Container>
          <div className={styles.inquiryHead}>
            <h2 className={styles.inquiryTitle}>Ready to take the next step?</h2>
            <p className={styles.inquirySub}>
              Fill out the form below to request our franchise information
              packet. Our team will be in touch shortly.
            </p>
          </div>
          <div className={styles.formCard}>
            <FranchiseForm />
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
