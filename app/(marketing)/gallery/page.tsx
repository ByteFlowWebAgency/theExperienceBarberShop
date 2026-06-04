import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import BarberPole from "@/components/ui/BarberPole";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { BOOKSY_URL, PHONE, PHONE_HREF } from "@/lib/site";
import HeroImg from "@public/assets/images/theExperienceBarberShopAndSalon2.jpg";
import styles from "./gallery.module.css";

const gallery = [
  { src: "/assets/images/IMG_0165.jpg", alt: "Haircut at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0201.jpg", alt: "Beard trim at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0210.jpg", alt: "Haircut at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0278.jpg", alt: "Haircut at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0307.jpg", alt: "Hair color at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0315.jpg", alt: "Line up at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0323.jpg", alt: "Skin fade at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0379.jpg", alt: "Haircut at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0391.jpg", alt: "Line up at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_0576.jpg", alt: "Grooming at The Experience Barber & Beauty Shop" },
  { src: "/assets/images/IMG_1227.jpg", alt: "Haircut at The Experience Barber & Beauty Shop" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />

      <PageHero
        image={HeroImg}
        alt="The Experience Barber Shop interior"
        title="The Experience Gallery"
        subtitle="Browse our portfolio of precision cuts, classic shaves, and complete transformations. See the quality that defines our shop."
        size="lg"
      />

      <BarberPole />

      {/* Gallery grid */}
      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            {gallery.map((item, index) => (
              <div key={item.src} className={styles.card}>
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
              </div>
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
