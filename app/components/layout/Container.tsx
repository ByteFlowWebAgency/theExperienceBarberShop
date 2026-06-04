import React from "react";
import { clsx } from "clsx";
import styles from "./Container.module.css";

/** Centered, max-width content wrapper with responsive horizontal padding. */
export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
