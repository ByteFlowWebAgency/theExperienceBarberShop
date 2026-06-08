import React from "react";
import { clsx } from "clsx";
import styles from "./BarberPole.module.css";

/** Decorative diagonal barber-pole stripe used between sections. */
export default function BarberPole({ thin = false }: { thin?: boolean }) {
  return (
    <div className={clsx(styles.stripe, thin && styles.thin)} aria-hidden="true" />
  );
}
