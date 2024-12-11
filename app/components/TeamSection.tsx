"use client";
import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DeShawn from "../../public/assets/images/dsc_8034.webp";

const barbers = [
  { name: "DeShawn", image: DeShawn },
  { name: "DeShawn", image: DeShawn },
  { name: "DeShawn", image: DeShawn },
  { name: "DeShawn", image: DeShawn },
  { name: "DeShawn", image: DeShawn },
  { name: "DeShawn", image: DeShawn },
];

const TeamSection = () => {
  return (
    <>
      <main>
        <Header />
        {/* Team Section */}
        <div>
          {/* OUR TEAM Header */}
          <div className="flex justify-center mt-10">
            <h1 className="text-4xl font-bold text-[#1748F7] uppercase tracking-wide">
              Our Team
            </h1>
          </div>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8 pb-24 pt-8 px-6">
            {barbers.map((barber, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg rounded-lg bg-gradient-to-b from-blue-50 to-white p-3 w-[90%] max-w-[300px] mx-auto"
              >
                {/* Barber Image */}
                <div className="w-48 h-64">
                  <Image
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Barber Name */}
                <h2 className="mt-4 text-lg font-bold text-gray-800">
                  {barber.name}
                </h2>

                {/* Book Now Button */}
                <button className="mt-4 bg-blue-600 text-white text-sm font-medium px-4 py-2 w-full rounded hover:bg-blue-700 transition-colors">
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
