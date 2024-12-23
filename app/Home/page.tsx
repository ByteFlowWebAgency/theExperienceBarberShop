import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import History from "../components/History";
import Header from "../components/Header";

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
