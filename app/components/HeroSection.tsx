"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";
import Image1 from "../../public/assets/images/theExperienceBarberShopAndSalon1.jpg";
import Image2 from "../../public/assets/images/theExperienceBarberShopAndSalon2.jpg";
import Image3 from "../../public/assets/images/theExperienceBarberShopAndSalon3.jpg";

const slides = [
  {
    title: "SAVE TIME AND SKIP THE LINE",
    subtitle: "BOOK YOUR EXPERIENCE NOW",
    image: Image1,
  },
  {
    title: "PREMIUM GROOMING SERVICES",
    subtitle: "EXPERIENCE THE DIFFERENCE",
    image: Image2,
  },
  {
    title: "SKILLED MASTER BARBERS",
    subtitle: "CRAFTING YOUR PERFECT STYLE",
    image: Image3,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  return (
    <main className="relative min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-black/50">
          <h1 className="mb-8 text-center text-4xl font-bold text-white md:text-6xl lg:text-10xl">
            THE EXPERIENCE YOU&apos;LL REMEMBER
          </h1>
          <Link href="https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1">
            <Button
              size="lg"
              className="bg-blue-600 px-8 py-6 text-lg font-semibold text-white hover:bg-blue-700 md:text-xl"
            >
              BOOK YOUR EXPERIENCE NOW
            </Button>
          </Link>
        </div>

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
          </div>
        ))}
      </div>
    </main>
  );
}
