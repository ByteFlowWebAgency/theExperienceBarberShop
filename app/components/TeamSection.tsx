"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { Menu, X } from "lucide-react";
import { Button } from "../components/button";
import DeShawn from "../../public/assets/images/dsc_8034.webp";

const barbers = [
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
  {
    name: "DeShawn",
    button: Button,
    image: DeShawn,
  },
];

const TeamSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <main>
        <nav className="left-0 right-0 top-0 z-50 px-4 py-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-white transition-opacity hover:opacity-80"
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
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <Link
                href="/"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                Services
              </Link>
              <Link
                href="/team"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                Team
              </Link>
              <Link
                href="/gallery"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                Gallery
              </Link>
              <Link
                href="/franchise"
                className="text-[#1748F7] transition-opacity hover:opacity-80"
              >
                Franchise
              </Link>
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Book
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`fixed inset-0 bg-black/95 transition-transform duration-300 ease-in-out md:hidden ${
                isMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex h-full flex-col items-center justify-center gap-8">
                <Link
                  href="/"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/team"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <Link
                  href="/gallery"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/franchise"
                  className="text-2xl text-white transition-opacity hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Franchise
                </Link>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
        </nav>

        <div>
          <div className="flex justify-center mt-10">
            <h1 className="text-[#1748F7] text-3xl font-bold">OUR TEAM</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 pb-24 pt-16 px-10">
            {barbers.map((barber, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-md rounded-md pt-6 pb-8 bg-white"
              >
                {/* Barber Name */}
                <h2 className="text-2xl font-bold text-black">{barber.name}</h2>

                {/* Barber Image */}
                <div className="w-64 h-80">
                  <Image
                    src={barber.image} // Replace with the correct image source
                    alt={barber.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Book Now Button */}
                <button className="mt-4 bg-blue-600 text-white text-lg font-semibold px-6 py-3 w-60 rounded hover:bg-blue-700">
                  BOOK NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TeamSection;
