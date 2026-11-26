import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import {
  BOOKSY_URL,
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  FACEBOOK_URL,
} from "@/lib/site";
import Logo from "@public/assets/images/TheExperienceBarberShopAndSalonLogo.png";
import styles from "./Footer.module.css";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Story", href: "/our-story" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Franchise", href: "/franchise" },
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
                alt={BUSINESS_NAME}
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandText}>
              Downtown Akron&apos;s premier destination for grooming, styling,
              and community connection.
            </p>
            {FACEBOOK_URL && (
              <div className={styles.socials}>
                <a
                  href={FACEBOOK_URL}
                  className={styles.social}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h2 className={styles.colTitle}>Quick Links</h2>
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
            <h2 className={styles.colTitle}>Contact Us</h2>
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
                <a href={PHONE_HREF} className={styles.contactLink}>
                  {PHONE}
                </a>
              </li>
              <li className={styles.contactItem}>
                <i className="fa-solid fa-envelope" />
                <a href={EMAIL_HREF} className={styles.contactLink}>
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h2 className={styles.colTitle}>Hours</h2>
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
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights
            reserved. Created by{" "}
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
