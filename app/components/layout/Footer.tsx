import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import {
  BOOKSY_URL,
  PHONE,
  EMAIL,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
} from "@/lib/site";
import Logo from "@public/assets/images/TheExperienceBarberShopAndSalonLogo.png";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Our Story", href: "/our-story" },
  { label: "Gallery", href: "/gallery" },
];

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            <Link href="/" className={styles.brandLogo}>
              <Image
                src={Logo}
                alt="The Experience Barber & Beauty Shop"
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandText}>
              Downtown Akron&apos;s premier destination for grooming, styling,
              and community connection.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Facebook">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.links}>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <i className="fa-solid fa-location-dot" />
                <span>
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </span>
              </li>
              <li className={styles.contactItem}>
                <i className="fa-solid fa-phone" />
                <span>{PHONE}</span>
              </li>
              <li className={styles.contactItem}>
                <i className="fa-solid fa-envelope" />
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className={styles.colTitle}>Hours</h4>
            <ul className={styles.hoursList}>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Monday</span>
                <span className={styles.hoursVal}>Appt Only</span>
              </li>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Tue - Sat</span>
                <span className={styles.hoursVal}>10AM - 6PM</span>
              </li>
              <li className={styles.hoursRow}>
                <span className={styles.hoursDay}>Sunday</span>
                <span className={styles.hoursClosed}>Closed</span>
              </li>
            </ul>
            <Button asChild variant="primary" block className={styles.bookBtn}>
              <a href={BOOKSY_URL}>Book Now</a>
            </Button>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} The Experience Barber &amp; Beauty
            Shop. All rights reserved. Created by{" "}
            <a href="https://www.byteflow.us" target="_blank">
              BYTEFLOW
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
