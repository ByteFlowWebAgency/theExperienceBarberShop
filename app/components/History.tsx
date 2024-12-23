import React from "react";
import Link from "next/link";
import { Button } from "../components/button";

const History = () => {
  return (
    <section className="bg-white py-16 px-8 text-center">
      <h2 className="text-4xl font-bold text-black">HISTORY</h2>
      <div className="mt-2 mb-6 flex justify-center">
        <div className="h-1 w-12 bg-blue-600"></div>
      </div>

      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
        The Experience Barber & Beauty Shop provides a relaxing atmosphere,
        professional service, competitive prices and quality. Services include
        hair cutting, shampoos, trims, style, razor for men, women, and
        children. Also offering beard trims and shaving. The Experience Barber &
        Beauty Shop provides a relaxing atmosphere, professional service,
        competitive prices and quality. Services include hair cutting, shampoos,
        trims, style, razor for men, women, and children. Also offering beard
        trims and shaving.
      </p>

      <Link href="https://booksy.com/en-us/65218_lionheart-theexperience_barber-shop_31848_akron#ba_s=sgr_1">
        <Button className="mt-6 bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 text-lg font-semibold">
          BOOK YOUR EXPERIENCE NOW
        </Button>
      </Link>
    </section>
  );
};

export default History;
