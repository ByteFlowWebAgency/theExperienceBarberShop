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
import { getReviewsSafe, getRatingSummary } from "@/lib/gbp/reviews";
import styles from "./reviews.module.css";

// Regenerate hourly so the Google rating stays fresh without rebuilding.
export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const { averageRating, totalReviewCount } = await getRatingSummary();
  const rating = (Math.round(averageRating * 10) / 10).toFixed(1);
  return {
    title: "Reviews | The Experience Barber & Beauty Shop",
    description: `See why downtown Akron trusts The Experience for the perfect cut. ${rating}-star rated with ${totalReviewCount}+ five-star reviews.`,
  };
}

const Stars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => {
        if (i <= Math.floor(rating)) {
          return <i key={i} className="fa-solid fa-star" />;
        } else if (i - rating < 1 && i - rating > 0) {
          return <i key={i} className="fa-solid fa-star-half-stroke" />;
        } else {
          return <i key={i} className="fa-regular fa-star" />;
        }
      })}
    </>
  );
};

function timeAgo(dateStr: string): string {
  const now = new Date();
  const then = new Date(dateStr);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
}

export default async function ReviewsPage() {
  const { reviews, averageRating, totalReviewCount } = await getReviewsSafe();
  const roundedRating = Math.round(averageRating * 10) / 10;

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
            <div>
              <div className={styles.statNum}>{roundedRating.toFixed(1)}</div>
              <div className={styles.statStars}>
                <Stars rating={roundedRating} />
              </div>
              <div className={styles.statLabel}>Google Rating</div>
            </div>
            <div>
              <div className={styles.statNum}>{totalReviewCount}+</div>
              <div className={styles.statLabel}>Google Reviews</div>
            </div>
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
            {reviews.map((r) => (
              <div key={r.reviewId} className={styles.tCard}>
                <div className={styles.tStars}>
                  <Stars rating={5} />
                </div>
                <p className={styles.tBody}>{r.comment}</p>
                <div className={styles.tAuthor}>
                  {r.reviewer.isAnonymous ? (
                    <img
                      src={r.reviewer.profilePhotoUrl}
                      alt={r.reviewer.displayName}
                      className={styles.tAvatarImg}
                      width={40}
                      height={40}
                    />
                  ) : (
                    <div className={styles.tAvatar}>
                      {r.reviewer.isAnonymous
                        ? "?"
                        : r.reviewer.displayName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className={styles.tName}>
                      {r.reviewer.isAnonymous
                        ? "Anonymous"
                        : r.reviewer.displayName}
                    </div>
                    <div className={styles.tVerified}>
                      <i className="fa-brands fa-google" /> Google review ·{" "}
                      {timeAgo(r.createTime)}
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
