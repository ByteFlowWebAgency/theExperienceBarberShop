"use client";

import React, { useState } from "react";
import { clsx } from "clsx";
import styles from "./FaqAccordion.module.css";

export interface FaqCategory {
  title: string;
  items: { q: string; a: string }[];
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.q}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <i
          className={clsx(
            "fa-solid fa-chevron-down",
            styles.qIcon,
            open && styles.qIconOpen
          )}
        />
      </button>
      {open && <div className={styles.a}>{a}</div>}
    </div>
  );
}

export default function FaqAccordion({
  categories,
}: {
  categories: FaqCategory[];
}) {
  return (
    <>
      {categories.map((cat) => (
        <div key={cat.title} className={styles.category}>
          <h2 className={styles.catTitle}>{cat.title}</h2>
          <div className={styles.items}>
            {cat.items.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
