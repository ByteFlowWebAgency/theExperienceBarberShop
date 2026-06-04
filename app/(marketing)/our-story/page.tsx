import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import HeroImg from "@public/assets/images/the_experience_shop9.jpeg";
import ProfileImg from "@public/assets/images/Deshawn.png";
import styles from "./our-story.module.css";

export const metadata: Metadata = {
  title: "Our Story | The Experience Barber & Beauty Shop",
  description:
    "Founded by Deshawn Johnson — barber, mentor, and reentry advocate — The Experience is a cornerstone of the downtown Akron community.",
};

const values = [
  {
    icon: "fa-scissors",
    title: "Precision Craftsmanship",
    text: "We hold ourselves to the highest standards of grooming. Every fade, shave, and trim is executed with meticulous attention to detail.",
  },
  {
    icon: "fa-handshake-angle",
    title: "Community Mentorship",
    text: "Beyond the chair, we guide the next generation. We actively provide mentorship and support for local youth in Akron.",
  },
  {
    icon: "fa-door-open",
    title: "Reentry Advocacy",
    text: "We believe in second chances. Our shop advocates for and supports individuals reentering society, offering pathways to success.",
  },
];

const stats = [
  { num: "5k+", label: "Happy Clients" },
  { num: "50+", label: "Youth Mentored" },
  { num: "100%", label: "Community Focus" },
];

export default function OurStoryPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="Inside The Experience Barber & Beauty Shop in downtown Akron"
        badge="Our Story"
        title="More Than Just A Haircut."
        subtitle="The Experience You'll Remember."
        size="lg"
      />

      <BarberPole />

      {/* Founder profile */}
      <section className={styles.profile}>
        <Container>
          <div className={styles.profileCard}>
            <div className={styles.profileImgWrap}>
              <Image
                src={ProfileImg}
                alt="Deshawn Johnson, master barber"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.profileImg}
              />
            </div>
            <div className={styles.profileBody}>
              <h2 className={styles.profileName}>Deshawn Johnson</h2>
              <p className={styles.profileRole}>Founder &amp; Master Barber</p>
              <div className={styles.profileText}>
                <p>
                  I started The Experience Barber &amp; Beauty Shop with a simple
                  vision: to bring a premium, welcoming grooming destination to
                  downtown Akron. But my journey here wasn&apos;t just about
                  cutting hair; it was about building a foundation for my
                  community.
                </p>
                <p>
                  As a barber, mentor, and reentry advocate, I believe the
                  barbershop is a sanctuary. It&apos;s a place where we share
                  stories, build confidence, and support one another. Every
                  person who sits in my chair is part of The Experience family.
                </p>
                <p>
                  We don&apos;t just transform your look; we aim to uplift your
                  spirit. Whether you&apos;re a local resident, a college
                  student, or visiting Akron, we provide exceptional service and
                  a space where you truly belong.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className={styles.values}>
        <Container>
          <SectionHeading
            title="Our Core Pillars"
            subtitle="Built on a foundation of respect, craftsmanship, and community empowerment."
          />
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <i className={`fa-solid ${v.icon}`} />
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className={styles.impact}>
        <Container>
          <div className={styles.impactGrid}>
            <div>
              <h2 className={styles.impactTitle}>Making an Impact in Akron</h2>
              <p className={styles.impactText}>
                The Experience is more than a business; it&apos;s a community
                hub. We measure success not just by the number of cuts, but by
                the lives we touch and the positive change we foster in downtown
                Akron.
              </p>
              <Link href="/visit-us" className={styles.impactLink}>
                Come visit us in Akron{" "}
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
            <div className={styles.statTiles}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statTile}>
                  <div className={styles.statTileNum}>{s.num}</div>
                  <div className={styles.statTileLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Be Part of The Experience"
        text="Whether you need a fresh cut or just want to connect, our doors are open."
        background="muted"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <Footer />
    </>
  );
}
