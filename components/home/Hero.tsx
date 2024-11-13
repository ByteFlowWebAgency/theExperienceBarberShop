"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "SAVE TIME AND SKIP THE LINE",
    subtitle: "BOOK YOUR EXPERIENCE NOW",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    title: "PREMIUM GROOMING SERVICES",
    subtitle: "EXPERIENCE THE DIFFERENCE",
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    title: "SKILLED MASTER BARBERS",
    subtitle: "CRAFTING YOUR PERFECT STYLE",
    image: "/placeholder.svg?height=1080&width=1920",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startSlideshow();
    return () => stopSlideshow();
  }, []);

  const startSlideshow = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopSlideshow = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const nextSlide = () => {
    stopSlideshow();
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    startSlideshow();
  };

  const prevSlide = () => {
    stopSlideshow();
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    startSlideshow();
  };

  const goToSlide = (index: number) => {
    stopSlideshow();
    setCurrentSlide(index);
    startSlideshow();
  };

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-50 px-4 py-6">
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
              className="text-white transition-opacity hover:opacity-80"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white transition-opacity hover:opacity-80"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white transition-opacity hover:opacity-80"
            >
              Services
            </Link>
            <Link
              href="/team"
              className="text-white transition-opacity hover:opacity-80"
            >
              Team
            </Link>
            <Link
              href="/gallery"
              className="text-white transition-opacity hover:opacity-80"
            >
              Gallery
            </Link>
            <Link
              href="/franchise"
              className="text-white transition-opacity hover:opacity-80"
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

      {/* Hero Carousel */}
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="animate-fade-up text-4xl font-bold text-white opacity-0 md:text-6xl lg:text-7xl [animation-delay:200ms] [animation-fill-mode:forwards]">
                {slide.title}
              </h1>
              <Button
                size="lg"
                className="animate-fade-up bg-blue-600 text-lg text-white opacity-0 hover:bg-blue-700 md:text-xl [animation-delay:400ms] [animation-fill-mode:forwards]"
              >
                {slide.subtitle}
              </Button>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/75"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                currentSlide === index
                  ? "w-4 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
