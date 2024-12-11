"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "../components/button";
import classNames from "classnames"; // For conditional styling

interface HeaderProps {
  isTransparent?: boolean; // Prop to toggle transparency
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
        {/* Logo */}
        <Link
          href="/"
          className={classNames(
            "text-2xl font-bold transition-opacity hover:opacity-80",
            isTransparent ? "text-white" : "text-[#1748F7]"
          )}
        >
          LOGO
        </Link>

        {/* Mobile Menu Button */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Team", "Gallery", "Franchise"].map((item) => (
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
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center space-y-6 z-40">
            {["Home", "Team", "Gallery", "Franchise"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-white font-medium transition-opacity hover:opacity-80"
              >
                {item}
              </Link>
            ))}
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Book
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
