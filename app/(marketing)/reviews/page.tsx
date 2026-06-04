import React from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaSection from "@/components/ui/CtaSection";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon3.jpg";
import styles from "./reviews.module.css";

export const metadata: Metadata = {
  title: "Reviews | The Experience Barber & Beauty Shop",
  description:
    "See why downtown Akron trusts The Experience for the perfect cut. 4.8-star rated with 50+ five-star reviews.",
};

const stats = [
  { num: "4.8", label: "Google Rating", stars: true },
  { num: "50+", label: "Google Reviews" },
  { num: "4.9", label: "Booksy Rating", stars: true },
  { num: "100+", label: "Booksy Reviews" },
];

const testimonials = [
  {
    name: "Ashleigh Bender",
    text: "I brought my 2 year old in for his first real haircut, Deshawn was patient kind and worked well with my son. Despite the fact he did not sit still, we left with a perfect haircut. We will absolutely be back!",
  },
  {
    name: "Yesu Tor",
    text: "Deshawn is so much talented and gifted. When he touches your head he brings the good look out of you. He is so kind and full of grace. I will highly recommend this place for anyone looking for a place to have their haircut.",
  },
  {
    name: "Riley Nemoseck",
    text: "Great place and great haircut 👌",
  },
  {
    name: "James Hildwine",
    text: "Went in today to get cleaned up and Deshawn did a wonderful job, highly recommend and will be back!",
  },
  {
    name: "Emanuel Scott",
    text: "This is hands down one of the best barbershops I've been to in my life. The location is in a safe place to where you don't have to worry about any violence. The atmosphere is relaxing, I often fall asleep sleep during my haircuts and I wake up feeling renewed and motivated. Overall if I could give it more than 5 stars I would.",
  },
  {
    name: "Tyrone Johnson",
    text: "Few weeks ago, I needed to get a haircut for a date, the owner DeShawn hooked me up! Highly suggest visiting The Experience Barber & Beauty Shop for a haircut, you will not be disappointed!",
  },
];

const Stars = ({ half = false }: { half?: boolean }) => (
  <>
    <i className="fa-solid fa-star" />
    <i className="fa-solid fa-star" />
    <i className="fa-solid fa-star" />
    <i className="fa-solid fa-star" />
    <i className={half ? "fa-solid fa-star-half-stroke" : "fa-solid fa-star"} />
  </>
);

export default function ReviewsPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="A happy client after a fresh cut at The Experience"
        badge="Reviews"
        title="Real Talk. Real Results."
        subtitle="See why Akron trusts us for the perfect cut."
        size="lg"
      />

      <BarberPole />

      {/* Stats */}
      <section className={styles.stats}>
        <Container>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statNum}>{s.num}</div>
                {s.stars && (
                  <div className={styles.statStars}>
                    <Stars half />
                  </div>
                )}
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <Container>
          <SectionHeading
            title="What Akron is Saying"
            subtitle="Don't just take our word for it."
          />
          <div className={styles.masonry}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.tCard}>
                <div className={styles.tStars}>
                  <Stars />
                </div>
                <p className={styles.tBody}>{t.text}</p>
                <div className={styles.tAuthor}>
                  <div className={styles.tAvatar}>{t.name.charAt(0)}</div>
                  <div>
                    <div className={styles.tName}>{t.name}</div>
                    <div className={styles.tVerified}>
                      <i className="fa-brands fa-google" /> Google review
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.moreLink}>
            <a
              href="https://www.google.com/search?sca_esv=a82350b6429375af&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOex2jlW8i0dvJYmykvhSNasV_XiDMaH9YoE-Wc4CCA1xAif7Hz4UJV9Ioqg0qe32XQCWEHrJemA4sG9KQ3GaDW8nT9BgJ9qPWZBQ_CGsWUUobWFKeH5bdLE0JamLS5Vte553Yfw%3D&q=The+Experience+Barber+and+Beauty+shop+Reviews&sa=X&ved=2ahUKEwjGr-KtneyUAxV3OFkFHZpgIxYQ0bkNegQILhAH&biw=1536&bih=730&dpr=1.25"
              target="_blank"
              rel="noreferrer"
            >
              Read more on Google <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </Container>
      </section>

      <CtaSection />

      <Footer />
    </>
  );
}
