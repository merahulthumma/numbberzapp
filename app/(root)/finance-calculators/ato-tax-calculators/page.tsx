"use client";

import React, { useState, useEffect } from "react";
import TaxCalculator from "@/components/TaxCalculator";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import {
  Calculator,
  ChartBar,
  PieChart as PieChartIcon,
  DollarSign,
  TrendingUp,
  FileText,
  CreditCard,
  Briefcase,
} from "lucide-react";

const ATOTaxCalculatorsPage = () => {
  const [taxData, setTaxData] = useState({
    income: 80000,
    incomeTax: 19792,
    medicareLevy: 1600,
    takeHomePay: 58608,
  });

  const [historicalRates, setHistoricalRates] = useState([
    { year: "2021-2022", rate: 32.5 },
    { year: "2022-2023", rate: 32.5 },
    { year: "2023-2024", rate: 30.0 },
    { year: "2024-2025", rate: 30.0 },
  ]);

  const COLORS = ["#1E3A8A", "#065F46", "#92400E"];

  const handleTaxCalculation = (result) => {
    setTaxData({
      income: result.income,
      incomeTax: result.incomeTax,
      medicareLevy: result.medicareLevy,
      takeHomePay: result.takeHomePay,
    });
  };

  const pieChartData = [
    { name: "Income Tax", value: taxData.incomeTax },
    { name: "Medicare Levy", value: taxData.medicareLevy },
    { name: "Take Home Pay", value: taxData.takeHomePay },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg border border-blue-400">
          <p className="text-blue-400 font-bold">{`${payload[0].name}: ${
            payload[0].name === "rate"
              ? `${payload[0].value}%`
              : `$${payload[0].value.toFixed(2)}`
          }`}</p>
        </div>
      );
    }
    return null;
  };

  const iconComponents = [
    Calculator,
    ChartBar,
    PieChartIcon,
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
            animate={{
              y: ["0%", "10%", "0%"],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            <Icon size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <header className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ATO Tax Calculators
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Simplify your tax planning with our advanced ATO-compliant
            calculators. Get accurate estimates and insights into your tax
            obligations.
          </motion.p>
        </header>

        <section>
          <TaxCalculator onIncomeChange={handleTaxCalculation} />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(59, 130, 246)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AnimatedIcon
                name="PieChart"
                color="text-blue-400"
                size={24}
                animation="pulse"
              />
              <span className="ml-2">Tax Breakdown</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#color${index})`} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <defs>
                  <linearGradient id="color0" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E3A8A" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#065F46" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#92400E" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(59, 130, 246)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AnimatedIcon
                name="TrendingUp"
                color="text-green-400"
                size={24}
                animation="pulse"
              />
              <span className="ml-2">Historical Tax Rates</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={historicalRates}>
                <XAxis dataKey="year" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <AnimatedIcon
              name="Info"
              color="text-yellow-400"
              size={32}
              animation="bounce"
            />
            <span className="ml-2">ATO Tax Tips and Tricks</span>
          </h2>
          <div className="space-y-4">
            <p>
              Navigating the Australian tax system can be complex, but with the
              right knowledge, you can optimize your tax return. Here are some
              valuable tips:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Keep detailed records of all income and expenses throughout the
                year.
              </li>
              <li>
                Understand which deductions you're eligible for based on your
                occupation and circumstances.
              </li>
              <li>
                Consider salary sacrificing into your superannuation to reduce
                taxable income.
              </li>
              <li>
                If you work from home, claim expenses related to your home
                office setup.
              </li>
            </ul>
            <p>
              Remember, tax laws change frequently. Stay informed about the
              latest updates from the ATO to ensure you're maximizing your
              benefits while remaining compliant.
            </p>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <AnimatedIcon
              name="HelpCircle"
              color="text-purple-400"
              size={32}
              animation="pulse"
            />
            <span className="ml-2">Need Professional Assistance?</span>
          </h2>
          <p className="text-xl mb-8">
            Our team of expert accountants is here to help you navigate the
            complexities of Australian taxation.
          </p>
          <a
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
          >
            Get Expert Advice
          </a>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <AnimatedIcon
              name="BookOpen"
              color="text-blue-400"
              size={32}
              animation="bounce"
            />
            <span className="ml-2">Tax Education Center</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Latest Tax Updates
              </h3>
              <ul className="space-y-2">
                <li>New tax brackets for 2024-2025 financial year</li>
                <li>Changes to work-from-home deduction rules</li>
                <li>Superannuation contribution cap increases</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Tax Saving Strategies
              </h3>
              <ul className="space-y-2">
                <li>Maximizing your charitable donations</li>
                <li>Investing in tax-effective financial products</li>
                <li>Timing your income and expenses strategically</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">
              Understanding Tax Deductions
            </h3>
            <p>
              Tax deductions can significantly reduce your taxable income.
              Common deductions include work-related expenses, self-education
              costs, and investment property expenses. It's crucial to keep
              accurate records and consult with a tax professional to ensure
              you're claiming all eligible deductions.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">
              Planning for Retirement
            </h3>
            <p>
              Effective tax planning can help you build a more secure
              retirement. Consider strategies such as maximizing your
              superannuation contributions, understanding the tax implications
              of different retirement income streams, and exploring transition
              to retirement options. Remember, the earlier you start planning,
              the more options you'll have in retirement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ATOTaxCalculatorsPage;
