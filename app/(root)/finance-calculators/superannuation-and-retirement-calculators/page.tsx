"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Briefcase,
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
  User,
} from "lucide-react";
import { jsPDF } from "jspdf";

interface CalculationResult {
  finalBalance: number;
  totalContributions: number;
  totalEarnings: number;
}

const SuperannuationAndRetirementCalculators: React.FC = () => {
  const [calculatorType, setCalculatorType] = useState<
    "superannuation" | "retirement"
  >("superannuation");
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentBalance, setCurrentBalance] = useState(50000);
  const [annualContribution, setAnnualContribution] = useState(5000);
  const [returnRate, setReturnRate] = useState(7);
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

  const calculateRetirement = () => {
    const years = retirementAge - currentAge;
    let balance = currentBalance;
    for (let i = 0; i < years; i++) {
      balance = balance * (1 + returnRate / 100) + annualContribution;
    }
    const finalBalance = Math.round(balance);
    const totalContributions = annualContribution * years;
    const totalEarnings = finalBalance - currentBalance - totalContributions;

    setCalculationResult({
      finalBalance,
      totalContributions,
      totalEarnings,
    });
  };

  const downloadPDF = () => {
    if (!calculationResult) return;

    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(
      `${
        calculatorType === "superannuation"
          ? "Superannuation"
          : "Retirement Savings"
      } Calculation Summary`,
      105,
      15,
      { align: "center" }
    );
    doc.setFontSize(12);
    doc.text("Generated from NumberzInsight", 105, 25, { align: "center" });

    doc.setFontSize(14);
    doc.text("Input Details:", 20, 40);
    doc.text(`Current Age: ${currentAge} years`, 30, 50);
    doc.text(`Retirement Age: ${retirementAge} years`, 30, 60);
    doc.text(`Current Balance: $${currentBalance.toLocaleString()}`, 30, 70);
    doc.text(
      `Annual Contribution: $${annualContribution.toLocaleString()}`,
      30,
      80
    );
    doc.text(`Expected Return Rate: ${returnRate}%`, 30, 90);

    doc.text("Results:", 20, 110);
    doc.text(
      `Final Balance: $${calculationResult.finalBalance.toLocaleString()}`,
      30,
      120
    );
    doc.text(
      `Total Contributions: $${calculationResult.totalContributions.toLocaleString()}`,
      30,
      130
    );
    doc.text(
      `Total Earnings: $${calculationResult.totalEarnings.toLocaleString()}`,
      30,
      140
    );

    doc.save(`${calculatorType}_summary.pdf`);
  };

  const iconComponents = [
    Briefcase,
    User,
    ChartBar,
    PieChart,
    DollarSign,
    TrendingUp,
    FileText,
    CreditCard,
    Calendar,
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
          Retirement Calculators
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Plan your Australian superannuation and retirement savings with our
          advanced calculators.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            {calculatorType === "superannuation" ? (
              <Briefcase className="mr-2 text-blue-500" />
            ) : (
              <User className="mr-2 text-green-500" />
            )}
            Australian{" "}
            {calculatorType === "superannuation"
              ? "Superannuation"
              : "Retirement Savings"}{" "}
            Calculator
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setCalculatorType("superannuation")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "superannuation"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Superannuation
              </button>
              <button
                onClick={() => setCalculatorType("retirement")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "retirement"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Retirement Savings
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Current Age
              </label>
              <input
                type="number"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Retirement Age
              </label>
              <input
                type="number"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Current Balance
              </label>
              <input
                type="number"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Annual Contribution
              </label>
              <input
                type="number"
                value={annualContribution}
                onChange={(e) => setAnnualContribution(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Expected Return Rate (%)
              </label>
              <input
                type="number"
                value={returnRate}
                onChange={(e) => setReturnRate(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <button
              onClick={calculateRetirement}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
            >
              Calculate Retirement Savings
            </button>
          </div>
          {calculationResult && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Results:</h3>
              <p className="text-green-400">
                Final Balance: $
                {calculationResult.finalBalance.toLocaleString()}
              </p>
              <p className="text-blue-400">
                Total Contributions: $
                {calculationResult.totalContributions.toLocaleString()}
              </p>
              <p className="text-yellow-400">
                Total Earnings: $
                {calculationResult.totalEarnings.toLocaleString()}
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
            This calculator provides estimates based on the information you
            input. Actual retirement savings may vary due to market
            fluctuations, changes in contribution rates, and other factors.
            Always consult with a licensed financial advisor for personalized
            retirement planning advice.
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
            Australian Superannuation Insights
          </h2>
          <p className="text-gray-300 mb-4">
            Stay informed about the latest trends in Australian superannuation:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Understanding the Superannuation Guarantee (SG)</li>
            <li>Strategies for maximizing your superannuation savings</li>
            <li>Tax benefits of superannuation contributions</li>
            <li>Comparing different superannuation fund types</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SuperannuationAndRetirementCalculators;
