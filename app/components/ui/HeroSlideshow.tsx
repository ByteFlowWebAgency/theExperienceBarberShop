"use client";

import React, { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { clsx } from "clsx";
import styles from "./HeroSlideshow.module.css";

interface Slide {
  src: StaticImageData | string;
  alt: string;
}

/**
 * Cross-fading background slideshow. Renders all slides stacked and fades
 * between them on an interval. Designed to fill a positioned parent.
 */
export default function HeroSlideshow({
  images,
  interval = 5000,
}: {
  images: Slide[];
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % images.length),
      interval
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={styles.slideshow}>
      {images.map((img, i) => (
        <Image
          key={typeof img.src === "string" ? img.src : img.src.src}
          src={img.src}
          alt={img.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={clsx(styles.slide, i === current && styles.active)}
          aria-hidden={i === current ? undefined : true}
        />
      ))}
    </div>
  );
}
