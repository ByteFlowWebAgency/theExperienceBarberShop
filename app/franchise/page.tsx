"use client";

import React from "react";
import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import FranchiseSection from "../components/FranchiseSection";
import Header from "../components/Header";

const FranchisePage = () => {
  return (
    <>
      <Head>
        <title>Franchise with The Experience Barber Shop | Own Your Business</title>
        <meta name="description" content="Join The Experience Barber Shop as a franchisee. Learn about our franchise opportunities, investment costs, and training process." />
        <meta name="keywords" content="barber franchise, barber shop business, own a barbershop, franchise opportunity, barber training, business ownership" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Franchise with The Experience Barber Shop | Own Your Business" />
        <meta property="og:description" content="Join The Experience Barber Shop as a franchisee. Learn about our franchise opportunities, investment costs, and training process." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.theexpshop.com/assets/images/DeShawnJohnson.jpg" />
        <meta property="og:url" content="https://www.theexpshop.com/franchise" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script
        id="franchise-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Franchise",
            "name": "The Experience Barber Shop Franchise",
            "description": "Join The Experience Barber Shop franchise program and become a successful business owner.",
            "image": "https://www.theexpshop.com/assets/images/DeShawnJohnson.jpg",
            "url": "https://www.theexpshop.com/franchise",
            "franchiseOpportunity": {
              "@type": "FranchiseOpportunity",
              "investmentRange": {
                "@type": "MonetaryAmount",
                "minValue": 25000,
                "maxValue": 45000,
                "currency": "USD"
              },
              "trainingOffered": "Yes",
              "supportOffered": "Yes"
            }
          })
        }}
      />
      <Header />
      <FranchiseSection />
      <Footer />
    </>
  );
};

export default FranchisePage;
