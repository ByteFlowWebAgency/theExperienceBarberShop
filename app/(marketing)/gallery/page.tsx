import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL, BUSINESS_NAME, PHONE, PHONE_HREF } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon2.jpg";
import styles from "./gallery.module.css";

export const metadata = pageMetadata({
  title: "Fade & Haircut Gallery | The Experience in Downtown Akron",
  description:
    "Browse real haircuts, skin fades, line ups, beard trims, and kids' cuts from The Experience Barber & Beauty Shop in downtown Akron. See our work, then book.",
  path: "/gallery/",
  image: "/assets/images/curly-top-taper-fade-line-up.jpg",
});

// Each photo links to the service that produces the look.
const gallery = [
  {
    src: "/assets/images/curly-top-taper-fade-line-up.jpg",
    alt: "Curly top with a low taper fade and a crisp line up",
    style: "Taper fade & line up",
    service: { href: "/services/haircut", label: "Haircut" },
  },
  {
    src: "/assets/images/curly-top-mid-skin-fade.jpg",
    alt: "Curly top with a mid skin fade, seen from the side",
    style: "Mid skin fade",
    service: { href: "/services/haircut", label: "Haircut" },
  },
  {
    src: "/assets/images/buzz-cut-line-up-shaped-beard.jpg",
    alt: "Short buzz cut with a sharp line up and a shaped, lined beard",
    style: "Buzz cut & shaped beard",
    service: { href: "/services/haircut-and-beard", label: "Haircut & Beard" },
  },
  {
    src: "/assets/images/temple-taper-line-up-lined-beard.jpg",
    alt: "Short cut with a temple taper, line up, and lined full beard",
    style: "Temple taper & lined beard",
    service: { href: "/services/haircut-and-beard", label: "Haircut & Beard" },
  },
  {
    src: "/assets/images/curly-top-drop-fade.jpg",
    alt: "Curly top with a drop fade on a young client",
    style: "Drop fade",
    service: { href: "/services/haircut", label: "Haircut" },
  },
  {
    src: "/assets/images/360-waves-tapered-neckline.jpg",
    alt: "360 waves with a tapered neckline, seen from behind",
    style: "Waves & tapered neckline",
    service: { href: "/services/haircut", label: "Haircut" },
  },
  {
    src: "/assets/images/bald-head-shaped-gray-beard.jpg",
    alt: "Clean bald head with a full gray beard trimmed and shaped",
    style: "Gray beard shaping",
    service: { href: "/services/beard-trim", label: "Beard Trim" },
  },
  {
    src: "/assets/images/kids-haircut-line-up-hard-part.jpg",
    alt: "Young boy's short haircut with a line up and a hard part",
    style: "Kids cut with hard part",
    service: { href: "/services/kids-haircut", label: "Kids Haircut" },
  },
  {
    src: "/assets/images/kids-taper-hard-part.jpg",
    alt: "Smiling boy with a taper and a hard part design",
    style: "Kids taper & part",
    service: { href: "/services/kids-haircut", label: "Kids Haircut" },
  },
  {
    src: "/assets/images/kids-short-cut-line-up.jpg",
    alt: "Smiling boy with a short cut and a crisp line up",
    style: "Kids short cut & line up",
    service: { href: "/services/kids-haircut", label: "Kids Haircut" },
  },
  {
    src: "/assets/images/barber-and-client-in-shop.jpg",
    alt: `A barber and a smiling client inside ${BUSINESS_NAME}`,
    style: "Inside the shop",
    service: { href: "/visit-us", label: "Visit us" },
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt={`${BUSINESS_NAME} interior`}
        title="The Experience Gallery"
        subtitle="Browse our portfolio of precision cuts, classic shaves, and complete transformations. See the quality that defines our shop."
        size="lg"
      />

      <BarberPole />

      {/* Gallery grid */}
      <section className={styles.section}>
        <Container>
          <SectionHeading
            title="Haircuts, Fades & Beard Work from Our Akron Shop"
            subtitle={
              <>
                Real cuts from {BUSINESS_NAME}{" "}in downtown Akron: fades, tapers,
                waves, line ups, beard work, and kids&apos; cuts. Tap any style to
                see the service behind it, its price, and what&apos;s included,
                or compare{" "}
                <Link href="/services">all services and prices</Link>.
              </>
            }
          />
          <div className={styles.grid}>
            {gallery.map((item, index) => (
              <figure key={item.src} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.img}
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index < 3}
                  />
                </div>
                <figcaption className={styles.caption}>
                  <span className={styles.captionStyle}>{item.style}</span>
                  <Link href={item.service.href} className={styles.captionLink}>
                    {item.service.label}{" "}
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <BarberPole thin />

      {/* Conversion strip */}
      <section className={styles.conversion}>
        <Container>
          <div className={styles.conversionInner}>
            <div>
              <h2 className={styles.conversionTitle}>
                Ready for your transformation?
              </h2>
              <p className={styles.conversionText}>
                Book your appointment today and experience the highest standard
                of grooming in Akron.
              </p>
            </div>
            <div className={styles.conversionActions}>
              <Button asChild variant="primary" size="lg">
                <a href={BOOKSY_URL}>
                  Book Appointment <i className="fa-solid fa-calendar-check" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={PHONE_HREF}>
                  <i className="fa-solid fa-phone" /> {PHONE}
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
