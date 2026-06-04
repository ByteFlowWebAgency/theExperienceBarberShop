import React from "react";
import { clsx } from "clsx";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Use light text on dark backgrounds. */
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(styles.wrap, className)}>
      <h2 className={clsx(styles.title, light && styles.titleLight)}>{title}</h2>
      {subtitle && (
        <p className={clsx(styles.subtitle, light && styles.subtitleLight)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
