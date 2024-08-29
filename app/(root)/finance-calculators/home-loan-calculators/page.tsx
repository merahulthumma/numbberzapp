"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Home,
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

const HomeLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [calculationResult, setCalculationResult] = useState(null);
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

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    setCalculationResult({
      monthlyPayment,
      totalPayment,
      totalInterest,
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Home Loan Calculation Summary", 105, 15, null, null, "center");
    doc.setFontSize(12);
    doc.text("Generated from NumberzInsight", 105, 25, null, null, "center");

    doc.setFontSize(14);
    doc.text("Input Details:", 20, 40);
    doc.text(`Loan Amount: $${loanAmount.toLocaleString()}`, 30, 50);
    doc.text(`Interest Rate: ${interestRate}%`, 30, 60);
    doc.text(`Loan Term: ${loanTerm} years`, 30, 70);

    doc.text("Results:", 20, 90);
    doc.text(
      `Monthly Payment: $${calculationResult.monthlyPayment.toFixed(2)}`,
      30,
      100
    );
    doc.text(
      `Total Payment: $${calculationResult.totalPayment.toFixed(2)}`,
      30,
      110
    );
    doc.text(
      `Total Interest: $${calculationResult.totalInterest.toFixed(2)}`,
      30,
      120
    );

    doc.save("home_loan_summary.pdf");
  };

  const iconComponents = [
    Home,
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
          Home Loan Calculator
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Plan your Australian home loan with precision. Our calculator helps
          you estimate monthly payments, total interest, and more.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Home className="mr-2 text-blue-500" />
            Australian Home Loan Calculator
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Loan Amount
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Interest Rate (%)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Loan Term (years)
              </label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <button
              onClick={calculateLoan}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
            >
              Calculate Loan
            </button>
          </div>
          {calculationResult && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Results:</h3>
              <p className="text-green-400">
                Monthly Payment: ${calculationResult.monthlyPayment.toFixed(2)}
              </p>
              <p className="text-blue-400">
                Total Payment: ${calculationResult.totalPayment.toFixed(2)}
              </p>
              <p className="text-yellow-400">
                Total Interest: ${calculationResult.totalInterest.toFixed(2)}
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
            input. Actual loan terms may vary. Always consult with a licensed
            financial advisor or mortgage broker for personalized advice.
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
            Australian Housing Market Insights
          </h2>
          <p className="text-gray-300 mb-4">
            Stay informed about the latest trends in the Australian housing
            market:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Current average interest rates for home loans</li>
            <li>Property price trends in major cities</li>
            <li>First-time homebuyer incentives and grants</li>
            <li>Impact of economic factors on the housing market</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeLoanCalculator;
