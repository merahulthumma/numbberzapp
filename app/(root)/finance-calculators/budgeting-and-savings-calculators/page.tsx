"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Wallet,
  PiggyBank,
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

const BudgetingAndSavingsCalculators = () => {
  const [calculatorType, setCalculatorType] = useState("budget");
  const [income, setIncome] = useState(5000);
  const [expenses, setExpenses] = useState(3000);
  const [savingsGoal, setSavingsGoal] = useState(10000);
  const [savingsRate, setSavingsRate] = useState(10);
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

  const calculateBudget = () => {
    const surplus = income - expenses;
    const savingsAmount = (income * savingsRate) / 100;
    const monthsToGoal = savingsGoal / savingsAmount;

    setCalculationResult({
      surplus,
      savingsAmount,
      monthsToGoal,
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text(
      `${
        calculatorType === "budget" ? "Budget" : "Savings"
      } Calculation Summary`,
      105,
      15,
      null,
      null,
      "center"
    );
    doc.setFontSize(12);
    doc.text("Generated from NumberzInsight", 105, 25, null, null, "center");

    doc.setFontSize(14);
    doc.text("Input Details:", 20, 40);
    doc.text(`Monthly Income: $${income.toLocaleString()}`, 30, 50);
    doc.text(`Monthly Expenses: $${expenses.toLocaleString()}`, 30, 60);
    doc.text(`Savings Goal: $${savingsGoal.toLocaleString()}`, 30, 70);
    doc.text(`Savings Rate: ${savingsRate}%`, 30, 80);

    doc.text("Results:", 20, 100);
    doc.text(
      `Monthly Surplus: $${calculationResult.surplus.toFixed(2)}`,
      30,
      110
    );
    doc.text(
      `Monthly Savings: $${calculationResult.savingsAmount.toFixed(2)}`,
      30,
      120
    );
    doc.text(
      `Months to Goal: ${calculationResult.monthsToGoal.toFixed(1)}`,
      30,
      130
    );

    doc.save(`${calculatorType}_calculation_summary.pdf`);
  };

  const iconComponents = [
    Wallet,
    PiggyBank,
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
          Budgeting & Savings Calculators
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Plan your Australian budget and savings with precision. Our
          calculators help you estimate surplus, savings, and time to reach your
          goals.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            {calculatorType === "budget" ? (
              <Wallet className="mr-2 text-blue-500" />
            ) : (
              <PiggyBank className="mr-2 text-blue-500" />
            )}
            Australian {calculatorType === "budget" ? "Budget" : "Savings"}{" "}
            Calculator
          </h2>
          <div className="space-y-4">
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setCalculatorType("budget")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "budget"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Budget Calculator
              </button>
              <button
                onClick={() => setCalculatorType("savings")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  calculatorType === "savings"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                Savings Calculator
              </button>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Monthly Income
              </label>
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Monthly Expenses
              </label>
              <input
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Savings Goal
              </label>
              <input
                type="number"
                value={savingsGoal}
                onChange={(e) => setSavingsGoal(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400">
                Savings Rate (%)
              </label>
              <input
                type="number"
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md shadow-sm py-2 px-3 text-white"
              />
            </div>
            <button
              onClick={calculateBudget}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 mb-4"
            >
              Calculate
            </button>
          </div>
          {calculationResult && (
            <div className="mt-4 p-4 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Results:</h3>
              <p className="text-green-400">
                Monthly Surplus: ${calculationResult.surplus.toFixed(2)}
              </p>
              <p className="text-blue-400">
                Monthly Savings: ${calculationResult.savingsAmount.toFixed(2)}
              </p>
              <p className="text-yellow-400">
                Months to Goal: {calculationResult.monthsToGoal.toFixed(1)}
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
            input. Actual savings and budget outcomes may vary. Always consult
            with a licensed financial advisor for personalized advice.
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
            Australian Financial Insights
          </h2>
          <p className="text-gray-300 mb-4">
            Stay informed about the latest trends in Australian personal
            finance:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Average household savings rates</li>
            <li>Cost of living trends in major cities</li>
            <li>Tips for effective budgeting and saving</li>
            <li>Impact of economic factors on personal finances</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BudgetingAndSavingsCalculators;
