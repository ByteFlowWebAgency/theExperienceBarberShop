import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { BOOKSY_URL, PHONE, PHONE_HREF } from "@/lib/site";
import styles from "./CtaSection.module.css";

interface CtaSectionProps {
  title?: string;
  text?: string;
  background?: "white" | "muted";
  /** Override the secondary button (defaults to "Call …"). */
  secondaryLabel?: string;
  secondaryHref?: string;
}

/** The recurring "Ready for The Experience?" conversion strip. */
export default function CtaSection({
  title = "Ready for The Experience?",
  text = "Secure your spot today or drop by the shop. We look forward to seeing you.",
  background = "white",
  secondaryLabel = `Call ${PHONE}`,
  secondaryHref = PHONE_HREF,
}: CtaSectionProps) {
  return (
    <section
      className={clsx(
        styles.section,
        background === "muted" ? styles.muted : styles.white
      )}
    >
      <Container className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Button asChild variant="primary" size="lg">
            <Link href={BOOKSY_URL}>
              Book Appointment <i className="fa-solid fa-calendar-check" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={secondaryHref}>{secondaryLabel}</a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
