import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import History from "../components/History";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <History />
      <Footer />
    </>
  );
};

export default Home;
