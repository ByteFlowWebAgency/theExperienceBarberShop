"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../components/button";
import Image from "next/image";
import Logo from "../../public/assets/images/TheExperienceBarberShopAndSalonLogo.png";
import classNames from "classnames";

interface HeaderProps {
  isTransparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isTransparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={classNames(
        "left-0 right-0 top-0 z-50 px-4 py-6",
        isTransparent ? "absolute bg-transparent" : "shadow-md bg-white"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image
            src={Logo}
            alt="The Experience Barber Shop and Salon Logo"
            width={150}
            height={25}
            className={classNames(
              "transition-opacity hover:opacity-80",
              isTransparent ? "brightness-150" : ""
            )}
            priority
          />
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="z-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              className={classNames(
                "h-6 w-6",
                isTransparent ? "text-white" : "text-[#1748F7]"
              )}
            />
          ) : (
            <Menu
              className={classNames(
                "h-6 w-6",
                isTransparent ? "text-white" : "text-[#1748F7]"
              )}
            />
          )}
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Franchise"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={classNames(
                "font-medium transition-opacity hover:opacity-80",
                isTransparent ? "text-white" : "text-[#1748F7]"
              )}
            >
              {item}
            </Link>
          ))}
          <Link href="https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1">
            <Button
              size="lg"
              className={classNames(
                "hover:bg-blue-700",
                isTransparent
                  ? "bg-blue-600 text-white"
                  : "bg-blue-600 text-white"
              )}
            >
              Book
            </Button>
          </Link>
        </nav>

        {isMenuOpen && (
          <nav className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-6 z-40">
            {["Home", "Franchise"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-white font-medium transition-opacity hover:opacity-80"
              >
                {item}
              </Link>
            ))}
            <Link href="https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1">
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Book
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
