"use client";

import React from "react";
import HeroSection from "./HeroSection";
import FeaturedServices from "./FeaturedServices";
import ContactSection from "./ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import TaxCalculator from "@/components/TaxCalculator";
import CustomerReviews from "@/components/CustomerReviews";

const ClientHomeWrapper: React.FC = () => {
  return (
    <>
      <HeroSection />
      <TaxCalculator />
      <FeaturedServices />
      <CustomerReviews />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ClientHomeWrapper;
