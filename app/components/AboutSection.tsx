"use client";

import { Card, CardContent } from "./card";
import { motion } from "framer-motion";
import Image from "next/image";
import Deshawn from "../../public/assets/images/Deshawn.png";

export default function AboutSection() {
  return (
    <section className="container mx-auto py-8 sm:py-12 lg:py-16 px-4">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          ABOUT THE EXPERIENCE BARBER
        </h2>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2">
          AND BEAUTY SHOP
        </h2>
        <div className="h-1 w-24 sm:w-32 bg-blue-600 mx-auto" />
      </div>

      <Card className="border-none shadow-none">
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-0">
          <motion.div
            className="relative w-[95%] md:w-[80%] lg:w-[65%] h-[350px] sm:h-[450px] lg:h-[600px] mx-auto"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute -bottom-6 -right-4 w-full h-full border-4 border-blue-600 rounded-lg" />
            <Image
              src={Deshawn}
              alt="The Experience Barber"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="relative object-cover rounded-lg"
              priority
            />
          </motion.div>

          <div className="space-y-8 px-2 lg:px-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
              Meet the Barber Behind the Experience
            </h3>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The Experience Barber & Beauty Shop provides a welcoming and
              relaxing atmosphere with premium services at competitive prices.
              Whether it&apos;s a sharp haircut, a soothing shampoo, or a
              perfectly styled trim, you&apos;ll leave feeling your absolute
              best.
            </p>

            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h4 className="text-lg sm:text-xl font-bold mb-3 text-blue-600">
                Hours of Operation
              </h4>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Monday&apos;s:</span>{" "}
                Appointments only
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Tuesday to Saturday:</span> 10AM
                - 6PM
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                <span className="font-semibold">Sunday:</span> CLOSED
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
