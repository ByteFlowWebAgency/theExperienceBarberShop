import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import History from "./History";
import Header from "./Header";

const Home = () => {
  return (
    <>
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
