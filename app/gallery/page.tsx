"use client";
import Header from "app/components/Header";
import Footer from "app/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/assets/images/IMG_0165.jpg",
  "/assets/images/IMG_0201.jpg",
  "/assets/images/IMG_0210.jpg",
  "/assets/images/IMG_0278.jpg",
  "/assets/images/IMG_0307.jpg",
  "/assets/images/IMG_0315.jpg",
  "/assets/images/IMG_0323.jpg",
  "/assets/images/IMG_0379.jpg",
  "/assets/images/IMG_0391.jpg",
  "/assets/images/IMG_0576.jpg",
  "/assets/images/IMG_1227.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">
        Our Experience Gallery
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          Discover the artistry of our barbering franchise. View images of our expert stylists, 
          satisfied clients, and modern grooming techniques.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square relative overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={image}
                alt={`Professional baber service - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={index < 4 ? "eager" : "lazy"}
                priority={index < 4}
              />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
