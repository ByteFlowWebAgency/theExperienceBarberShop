import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL } from "@/lib/site";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import styles from "./service.module.css";

// Pre-render a static page for every service at build time.
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/** Truncate to at most `max` characters, breaking on a word where possible. */
function truncate(text: string, max = 155): string {
  if (text.length <= max) return text;
  const clipped = text.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(" ");
  return (lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped).trimEnd() + "…";
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} in Akron, OH | The Experience Barber & Beauty Shop`,
    description: truncate(service.description, 155),
    alternates: {
      canonical: `https://theexpshop.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service, 3);

  return (
    <>
      <Header lightHero />
      <BarberPole />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <span className={styles.badge}>{service.category}</span>
          <h1 className={styles.title}>{service.name}</h1>
        </Container>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <Container>
          <div className={styles.card}>
            <p className={styles.desc}>{service.description}</p>
            <div className={styles.priceRow}>
              <span className={styles.priceLabel}>Starting at</span>
              <span className={styles.price}>${service.price}</span>
            </div>
            <Button asChild variant="primary" size="lg">
              <a href={BOOKSY_URL}>
                Book Now <i className="fa-solid fa-calendar-check" />
              </a>
            </Button>
          </div>
        </Container>
      </section>

      {/* Other Services — related, same category */}
      {related.length > 0 && (
        <section className={styles.related}>
          <Container>
            <h2 className={styles.relatedTitle}>Other Services</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedBadge}>{r.category}</span>
                  <h3 className={styles.relatedName}>{r.name}</h3>
                  <p className={styles.relatedDesc}>{r.description}</p>
                  <div className={styles.relatedFoot}>
                    <span className={styles.relatedPrice}>
                      Starting at ${r.price}
                    </span>
                    <span className={styles.relatedLink}>
                      View <i className="fa-solid fa-arrow-right" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Footer />
    </>
  );
}
