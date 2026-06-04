import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import SectionHeading from "@/components/ui/SectionHeading";
import FranchiseForm from "@/components/forms/FranchiseForm";
import { Button } from "@/components/ui/Button";
import OwnerImg from "@public/assets/images/DeShawnJohnson.jpg";
import ShopImg from "@public/assets/images/theexperienceshop.webp";
import styles from "./franchise.module.css";

export const metadata: Metadata = {
  title: "Franchise with The Experience Barber Shop | Own Your Business",
  description:
    "Join The Experience Barber Shop as a franchisee. Learn about our proven model, comprehensive training, and franchise opportunities.",
};

const stats = [
  { num: "50k+", label: "Happy Clients" },
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
            title="A blueprint for success."
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
              alt="The Experience shop"
              className={styles.modelImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
