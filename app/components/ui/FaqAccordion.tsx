"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import styles from "./FaqAccordion.module.css";

export interface FaqItemData {
  q: string;
  a: string;
  /** Optional internal link shown after the answer. */
  link?: { href: string; label: string };
}

export interface FaqCategory {
  title: string;
  items: FaqItemData[];
}

function FaqItem({ q, a, link }: Readonly<FaqItemData>) {
  const [open, setOpen] = useState(false);
  const answerId = useId();
  return (
    <div className={styles.item}>
      <h3 className={styles.qHeading}>
        <button
          type="button"
          className={styles.q}
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{q}</span>
          <i
            className={clsx(
              "fa-solid fa-chevron-down",
              styles.qIcon,
              open && styles.qIconOpen
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      {/* Always rendered so the answer is in the server HTML search engines
          index; `hidden` collapses it until the question is opened. */}
      <div id={answerId} className={styles.a} hidden={!open}>
        {a}
        {link && (
          <>
            {" "}
            <Link href={link.href} className={styles.aLink}>
              {link.label}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default function FaqAccordion({
  categories,
}: Readonly<{
  categories: FaqCategory[];
}>) {
  return (
    <>
      {categories.map((cat) => (
        <div key={cat.title} className={styles.category}>
          <h2 className={styles.catTitle}>{cat.title}</h2>
          <div className={styles.items}>
            {cat.items.map((item) => (
              <FaqItem key={item.q} {...item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
