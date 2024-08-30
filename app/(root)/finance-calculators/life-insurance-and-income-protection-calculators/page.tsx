"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Heart,
  Umbrella,
  DollarSign,
  Calendar,
  Percent,
  Download,
  Info,
  ChartBar,
  PieChart,
  TrendingUp,
  FileText,
  CreditCard,
  Briefcase,
} from "lucide-react";
import { jsPDF } from "jspdf";

interface CalculationResult {
  monthlyPremium: number;
  annualPremium: number;
  totalCost: number;
}

const LifeInsuranceAndIncomeProtectionCalculators: React.FC = () => {
  const [calculatorType, setCalculatorType] = useState("lifeInsurance");
  const [coverageAmount, setCoverageAmount] = useState(500000);
  const [age, setAge] = useState(30);
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [coverageTerm, setCoverageTerm] = useState(20);
  const [calculationResult, setCalculationResult] =
    useState<CalculationResult | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: ["0%", "10%", "0%"],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }));
  }, [controls]);

  const calculateInsurance = () => {
    let estimatedPremium;
    if (calculatorType === "lifeInsurance") {
      // Simple life insurance premium calculation (for demonstration purposes)
      estimatedPremium = (coverageAmount / 1000) * (age / 10);
    } else {
      // Simple income protection premium calculation (for demonstration purposes)
      estimatedPremium = monthlyIncome * 0.02 * (age / 20);
    }

    const annualPremium = estimatedPremium * 12;
    const totalCost = annualPremium * coverageTerm;

    setCalculationResult((prevState) => ({
      monthlyPremium: estimatedPremium,
      annualPremium: annualPremium,
      totalCost: totalCost,
    }));
  };

  const downloadPDF = () => {
    if (!calculationResult) return;

    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(
      `${
        calculatorType === "lifeInsurance"
          ? "Life Insurance"
          : "Income Protection"
      } Calculation Summary`,
      105,
      15,
      { align: "center" }
    );
    doc.setFontSize(12);
    doc.text("Generated from NumberzInsight", 105, 25, { align: "center" });

    doc.setFontSize(14);
    doc.text("Input Details:", 20, 40);
    if (calculatorType === "lifeInsurance") {
      doc.text(`Coverage Amount: $${coverageAmount.toLocaleString()}`, 30, 50);
    } else {
      doc.text(`Monthly Income: $${monthlyIncome.toLocaleString()}`, 30, 50);
    }
    doc.text(`Age: ${age} years`, 30, 60);
    doc.text(`Coverage Term: ${coverageTerm} years`, 30, 70);

    doc.text("Results:", 20, 90);
    doc.text(
      `Monthly Premium: $${calculationResult.monthlyPremium.toFixed(2)}`,
      30,
      100
    );
    doc.text(
      `Annual Premium: $${calculationResult.annualPremium.toFixed(2)}`,
      30,
      110
    );
    doc.text(`Total Cost: $${calculationResult.totalCost.toFixed(2)}`, 30, 120);

    doc.save(`${calculatorType}_summary.pdf`);
  };

  const iconComponents = [
    Heart,
    Umbrella,
    ChartBar,
    PieChart,
    DollarSign,
    TrendingUp,
    FileText,
    CreditCard,
    Briefcase,
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 20% 30%, #1e3a8a 0%, transparent 70%)",
              "radial-gradient(circle at 80% 70%, #1e40af 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        {iconComponents.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-300 opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={controls}
            custom={index}
          >
            <Icon size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Insurance Calculators
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Estimate your Australian life insurance and income protection premiums
          with our calculators.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            {calculatorType === "lifeInsurance" ? (
              <Heart className="mr-2 text-red-500" />
            ) : (
              <Umbrella className="mr-2 text-blue-500" />
            )}
            Australian{" "}
            {calculatorType === "lifeInsurance"
              ? "Life Insurance"
              : "Income Protection"}{" "}
            Calculator
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setCalculatorType("lifeInsurance")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "lifeInsurance"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Life Insurance
              </button>
              <button
                onClick={() => setCalculatorType("incomeProtection")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "incomeProtection"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Income Protection
              </button>
            </div>
            {calculatorType === "lifeInsurance" ? (
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Coverage Amount
                </label>
                <input
                  type="number"
                  value={coverageAmount}
                  onChange={(e) => setCoverageAmount(Number(e.target.value))}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Monthly Income
                </label>
                <input
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Age
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Coverage Term (years)
              </label>
              <input
                type="number"
                value={coverageTerm}
                onChange={(e) => setCoverageTerm(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <button
              onClick={calculateInsurance}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
            >
              Calculate Premium
            </button>
          </div>
          {calculationResult && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Results:</h3>
              <p className="text-green-400">
                Monthly Premium: ${calculationResult.monthlyPremium.toFixed(2)}
              </p>
              <p className="text-blue-400">
                Annual Premium: ${calculationResult.annualPremium.toFixed(2)}
              </p>
              <p className="text-yellow-400">
                Total Cost: ${calculationResult.totalCost.toFixed(2)}
              </p>
              <button
                onClick={downloadPDF}
                className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center justify-center"
              >
                <Download className="mr-2" />
                Download PDF
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Info className="mr-2 text-yellow-500" />
            Important Information
          </h2>
          <p className="text-gray-300">
            This calculator provides estimates based on simplified calculations.
            Actual premiums may vary based on factors such as health,
            occupation, and lifestyle. Always consult with a licensed insurance
            advisor for personalized advice.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <TrendingUp className="mr-2 text-green-500" />
            Australian Insurance Market Insights
          </h2>
          <p className="text-gray-300 mb-4">
            Stay informed about the latest trends in the Australian insurance
            market:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>
              Types of life insurance and income protection policies available
            </li>
            <li>Factors affecting insurance premiums</li>
            <li>Tax implications of insurance policies</li>
            <li>Tips for choosing the right insurance coverage</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default LifeInsuranceAndIncomeProtectionCalculators;
