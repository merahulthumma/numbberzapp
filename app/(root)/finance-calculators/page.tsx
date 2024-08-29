"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedIcon from "@/components/AnimatedIcon";
import {
  Calculator,
  DollarSign,
  Home,
  Shield,
  TrendingUp,
  PiggyBank,
  Car,
  ChartBar,
  PieChart,
  FileText,
  CreditCard,
  Briefcase,
  Info,
} from "lucide-react";

const CalculatorCard = ({ iconName, title, description, link }) => (
  <motion.div
    className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-blue-400 group relative overflow-hidden"
    whileHover={{
      scale: 1.05,
      backgroundImage:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    <Link href={link}>
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        <AnimatedIcon
          name={iconName}
          color="text-blue-400"
          size={40}
          animation="pulse"
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </Link>
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <motion.h2
    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.h2>
);

const FeatureCard = ({ title, content }) => (
  <motion.div
    className="bg-gray-700 p-4 rounded-lg"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{content}</p>
  </motion.div>
);

export default function FinanceCalculatorsPage() {
  const [activeTab, setActiveTab] = useState("calculators");

  const calculators = [
    {
      iconName: "Calculator",
      title: "ATO Tax Calculators",
      description:
        "Calculate your taxes for the last 5 financial years with our ATO-compliant tax calculators.",
      link: "/finance-calculators/ato-tax-calculators",
    },
    {
      iconName: "DollarSign",
      title: "Simple Budget Calculator",
      description:
        "Plan your budget easily with our interactive and user-friendly budget calculator.",
      link: "/finance-calculators/simple-budget-calculator",
    },
    {
      iconName: "Home",
      title: "Home Loan Calculators",
      description:
        "Estimate your home loan repayments and explore different scenarios with our calculators.",
      link: "/finance-calculators/home-loan-calculators",
    },
    {
      iconName: "Shield",
      title: "Life Insurance and Income Protection",
      description:
        "Calculate your insurance needs and income protection requirements.",
      link: "/finance-calculators/life-insurance-income-protection-calculators",
    },
    {
      iconName: "TrendingUp",
      title: "Superannuation & Retirement",
      description:
        "Plan for your future with our superannuation and retirement calculators.",
      link: "/finance-calculators/superannuation-retirement-calculators",
    },
    {
      iconName: "PiggyBank",
      title: "Budgeting and Savings",
      description:
        "Take control of your finances with our budgeting and savings calculators.",
      link: "/finance-calculators/budgeting-savings-calculators",
    },
    {
      iconName: "Car",
      title: "Personal and Car Loans",
      description:
        "Calculate repayments for personal and car loans with our easy-to-use tools.",
      link: "/finance-calculators/personal-car-loan-calculators",
    },
  ];

  const features = [
    {
      title: "Up-to-date with Australian Regulations",
      content:
        "Our calculators are always current with the latest ATO guidelines and financial regulations.",
    },
    {
      title: "User-friendly Interface",
      content:
        "Intuitive design with stunning animations for a seamless user experience.",
    },
    {
      title: "Accurate Calculations",
      content: "Precise results to help you make informed financial decisions.",
    },
    {
      title: "Responsive Design",
      content: "Access our calculators on any device, from desktop to mobile.",
    },
  ];

  const financialTips = [
    {
      title: "Budgeting",
      content:
        "Create a realistic budget and stick to it to manage your finances effectively.",
    },
    {
      title: "Savings",
      content:
        "Aim to save at least 20% of your income for emergencies and future goals.",
    },
    {
      title: "Superannuation",
      content:
        "Regularly review and optimize your superannuation strategy for a secure retirement.",
    },
    {
      title: "Investments",
      content:
        "Diversify your investment portfolio to spread risk and maximize returns.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <motion.header
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Financial Calculators
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Make informed financial decisions with our suite of calculators.
            From taxes to loans, we've got you covered with Australian
            standards-compliant tools.
          </p>
        </motion.header>

        <nav className="flex justify-center space-x-4 mb-8">
          {["calculators", "features", "tips"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {activeTab === "calculators" && (
          <section>
            <SectionTitle>Explore Our Calculators</SectionTitle>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {calculators.map((calculator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CalculatorCard
                    iconName={calculator.iconName}
                    title={calculator.title}
                    description={calculator.description}
                    link={calculator.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {activeTab === "features" && (
          <section>
            <SectionTitle>Why Use Our Calculators?</SectionTitle>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  content={feature.content}
                />
              ))}
            </motion.div>
          </section>
        )}

        {activeTab === "tips" && (
          <section>
            <SectionTitle>Financial Tips for Australians</SectionTitle>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {financialTips.map((tip, index) => (
                <FeatureCard
                  key={index}
                  title={tip.title}
                  content={tip.content}
                />
              ))}
            </motion.div>
          </section>
        )}

        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl mb-8">
            Start using our calculators today and make informed financial
            decisions for a brighter future.
          </p>
          <Link href="/finance-calculators/ato-tax-calculators">
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started with Tax Calculators
            </motion.button>
          </Link>
        </motion.section>

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
        </section>
      </div>
    </div>
  );
}
