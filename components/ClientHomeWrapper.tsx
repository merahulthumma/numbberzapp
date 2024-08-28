"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturedServices from "./FeaturedServices";
import ContactSection from "./ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import TaxCalculator from "@/components/TaxCalculator";

const ClientHomeWrapper: React.FC = () => {
  return (
    <>
      <HeroSection />
        <TaxCalculator />
      <FeaturedServices />
      <ContactSection />
        <FAQSection />
        <Footer />

    </>
  );
};

export default ClientHomeWrapper;
