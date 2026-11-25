import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import JsonLd from "@/components/ui/JsonLd";
import { Button } from "@/components/ui/Button";
import { ADDRESS_LINE_1, BOOKSY_URL } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { services, getServiceBySlug, getRelatedServices } from "@/lib/services";
import styles from "./service.module.css";

// Pre-render a static page for every service at build time.
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${slug}/`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.name, path: `/services/${slug}/` },
        ])}
      />

      <Header lightHero />
      <BarberPole />

      {/* Hero */}
      <section className={styles.hero}>
        <Container>
          <nav aria-label="Breadcrumb" className={styles.crumbs}>
            <Link href="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.name}</span>
          </nav>
          <span className={styles.badge}>{service.category}</span>
          <h1 className={styles.title}>{service.name}</h1>
          <p className={styles.heroSub}>
            Starting at ${service.price} · {ADDRESS_LINE_1}, downtown Akron
          </p>
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

      {/* Details */}
      <section className={styles.details}>
        <Container>
          <div className={styles.detailsGrid}>
            <div>
              <h2 className={styles.sectionTitle}>{service.question}</h2>
              <p className={styles.answer}>{service.answer}</p>

              <h3 className={styles.subTitle}>What&apos;s included</h3>
              <ul className={styles.checkList}>
                {service.includes.map((item) => (
                  <li key={item}>
                    <i className="fa-solid fa-check" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.idealFor}>
                <strong>Ideal for:</strong> {service.idealFor}
              </p>
            </div>

            <div className={styles.stepsCard}>
              <h3 className={styles.subTitle}>What to expect</h3>
              <ol className={styles.steps}>
                {service.steps.map((step, i) => (
                  <li key={step} className={styles.step}>
                    <span className={styles.stepNum}>{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Service FAQs */}
      <section className={styles.faq}>
        <Container>
          <div className={styles.faqInner}>
            <h2 className={styles.sectionTitle}>
              {service.name} Questions
            </h2>
            {service.faqs.map((faq) => (
              <div key={faq.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{faq.q}</h3>
                <p className={styles.faqA}>{faq.a}</p>
              </div>
            ))}
            <p className={styles.visitNote}>
              Walk-ins are welcome Tuesday–Saturday, 10 AM–6 PM, and Mondays
              are by appointment. Find parking and directions on our{" "}
              <Link href="/visit-us">Visit Us page</Link>, compare{" "}
              <Link href="/services">all services and prices</Link>, or read
              more <Link href="/faq">frequently asked questions</Link>.
            </p>
          </div>
        </Container>
      </section>

      {/* Other Services */}
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
