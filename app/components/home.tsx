import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import History from "./History";
import Header from "./Header";
import Head from "next/head";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <Head>
        <title>The Experience Barber Shop | Best Haircuts & Grooming</title>
        <meta name="description" content="Visit The Experience Barber Shop for high-quality haircuts, beard trims, and grooming services." />
        <meta name="keywords" content="barber, haircut, beard trim, grooming, barbershop, men's salon, black hair," />
        <meta name="robots" content="index, follow" />
      </Head>
      <Script
        id="barbershop-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "The Experience Barber Shop",
            "image": "https://www.theexpshop.com/assets/images/DeShawnJohnson.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "88 E Mill St",
              "addressLocality": "Akron",
              "addressRegion": "OH",
              "postalCode": "44308",
              "addressCountry": "US"
            },
            "email": "theexperiencebarbershopandsalon@gmail.com",
            "telephone": "330-475-2552",
            "openingHours": "Mon: Appointments only, Tue-Sa 10:00AM-6:00PM"
          })
        }}
      />
      <Header isTransparent />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <History />
      <Footer />
    </>
  );
};

export default Home;
