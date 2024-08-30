"use client";

import React, { useState } from "react";
import HeroSection from "./HeroSection";
import FeaturedServices from "./FeaturedServices";
import ContactSection from "./ContactSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import TaxCalculator from "./TaxCalculator";
import CustomerReviews from "./CustomerReviews";

interface TaxResult {
  income: number;
  incomeTax: number;
  medicareLevy: number;
  totalTax: number;
  effectiveRate: number;
  takeHomePay: number;
}

const ClientHomeWrapper: React.FC = () => {
  const [taxResult, setTaxResult] = useState<TaxResult | null>(null);

  const handleIncomeChange = (result: TaxResult) => {
    setTaxResult(result);
    // You can use the taxResult state for other components if needed
  };

  return (
    <>
      <HeroSection />
      <TaxCalculator onIncomeChange={handleIncomeChange} />
      <FeaturedServices />
      <CustomerReviews />
      <ContactSection />
      <FAQSection />
    </>
  );
};

export default ClientHomeWrapper;
