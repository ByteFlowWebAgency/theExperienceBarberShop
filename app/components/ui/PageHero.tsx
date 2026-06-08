import React from "react";
import Image, { type StaticImageData } from "next/image";
import { clsx } from "clsx";
import styles from "./PageHero.module.css";

interface PageHeroProps {
  image: StaticImageData | string;
  alt: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  size?: "md" | "lg";
}

/** Centered image hero with dark gradient overlay used by most inner pages. */
export default function PageHero({
  image,
  alt,
  title,
  subtitle,
  badge,
  size = "md",
}: PageHeroProps) {
  return (
    <section className={clsx(styles.hero, styles[size])}>
      <div className={styles.bg}>
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className={styles.img}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
