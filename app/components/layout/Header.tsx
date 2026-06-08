"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import { NAV_ITEMS, BOOKSY_URL, PHONE, PHONE_HREF } from "@/lib/site";
import { services } from "@/lib/services";
import Logo from "@public/assets/images/TheExperienceBarberShopAndSalonLogo.png";
import styles from "./Header.module.css";

interface HeaderProps {
  /** Pages with a light hero render dark nav text from the start. */
  lightHero?: boolean;
}

const normalize = (p: string) =>
  p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p;

const Header: React.FC<HeaderProps> = ({ lightHero = false }) => {
  const pathname = usePathname() || "/";
  const current = normalize(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Dark text is used once scrolled, or on pages with a light hero image.
  const darkText = scrolled || lightHero;

  return (
    <>
      <header className={clsx(styles.header, scrolled && styles.scrolled)}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="The Experience — Home">
            <Image
              src={Logo}
              alt="The Experience Barber & Beauty Shop"
              className={clsx(styles.logoImg, !darkText && styles.logoImgLight)}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            {NAV_ITEMS.map((item) => {
              const isActive = current === item.href;
              const linkClass = clsx(
                styles.navLink,
                darkText ? styles.navLinkDark : styles.navLinkLight,
                isActive && styles.active,
                isActive && darkText && styles.activeColor
              );

              // Services keeps its link to /services but gains a hover/focus
              // dropdown of all services. Opens on hover or keyboard focus,
              // closes on mouse-leave or when focus leaves the whole group.
              if (item.href === "/services") {
                return (
                  <div
                    key={item.href}
                    className={styles.navItem}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    onFocus={() => setServicesOpen(true)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                        setServicesOpen(false);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setServicesOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className={linkClass}
                      aria-current={isActive ? "page" : undefined}
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                    </Link>
                    <div
                      className={clsx(
                        styles.dropdown,
                        servicesOpen && styles.dropdownOpen
                      )}
                      role="menu"
                      aria-label="Services"
                    >
                      <div className={styles.dropdownPanel}>
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className={styles.dropdownItem}
                            role="menuitem"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <Button asChild variant="primary">
              <a href={BOOKSY_URL}>
                Book <i className="fa-solid fa-calendar-check" />
              </a>
            </Button>

            <button
              type="button"
              className={clsx(
                styles.menuToggle,
                darkText ? styles.menuToggleDark : styles.menuToggleLight
              )}
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <i className="fa-solid fa-bars" />
            </button>
          </div>
        </div>
      </header>

      {/* Rendered as a sibling of <header> so it can't be trapped by the
          header's backdrop-filter, which makes the header a containing block
          for position: fixed children once the page is scrolled. */}
      {menuOpen && (
        <div className={styles.mobileOverlay} role="dialog" aria-modal="true">
          <div className={styles.mobileTop}>
            <Link
              href="/"
              className={styles.logo}
              onClick={() => setMenuOpen(false)}
            >
              <Image
                src={Logo}
                alt="The Experience Barber & Beauty Shop"
                className={styles.logoImg}
              />
            </Link>
            <button
              type="button"
              className={styles.mobileClose}
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>

          <nav className={styles.mobileLinks}>
            {NAV_ITEMS.map((item) => {
              const isActive = current === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    styles.mobileLink,
                    isActive && styles.mobileActive
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button
            asChild
            variant="primary"
            size="lg"
            block
            className={styles.mobileCta}
          >
            <a href={BOOKSY_URL} onClick={() => setMenuOpen(false)}>
              Book Appointment <i className="fa-solid fa-calendar-check" />
            </a>
          </Button>

          <a href={PHONE_HREF} className={styles.mobilePhone}>
            <i className="fa-solid fa-phone" /> {PHONE}
          </a>
        </div>
      )}
    </>
  );
};

export default Header;
