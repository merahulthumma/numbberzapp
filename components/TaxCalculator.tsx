import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedIcon from "./AnimatedIcon";

const taxBrackets = {
  "2019-2020": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 37000, rate: 0.19, base: 0 },
    { min: 37001, max: 90000, rate: 0.325, base: 3572 },
    { min: 90001, max: 180000, rate: 0.37, base: 20797 },
    { min: 180001, max: Infinity, rate: 0.45, base: 54097 },
  ],
  "2020-2021": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 120000, rate: 0.325, base: 5092 },
    { min: 120001, max: 180000, rate: 0.37, base: 29467 },
    { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
  ],
  "2021-2022": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 120000, rate: 0.325, base: 5092 },
    { min: 120001, max: 180000, rate: 0.37, base: 29467 },
    { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
  ],
  "2022-2023": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 120000, rate: 0.325, base: 5092 },
    { min: 120001, max: 180000, rate: 0.37, base: 29467 },
    { min: 180001, max: Infinity, rate: 0.45, base: 51667 },
  ],
  "2023-2024": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 120000, rate: 0.3, base: 5092 },
    { min: 120001, max: 180000, rate: 0.37, base: 27500 },
    { min: 180001, max: Infinity, rate: 0.45, base: 49700 },
  ],
  "2024-2025": [
    { min: 0, max: 18200, rate: 0, base: 0 },
    { min: 18201, max: 45000, rate: 0.19, base: 0 },
    { min: 45001, max: 200000, rate: 0.3, base: 5092 },
    { min: 200001, max: Infinity, rate: 0.45, base: 51592 },
  ],
};

const TaxCalculator = ({ onIncomeChange = () => {} }) => {
  const [income, setIncome] = useState("80000");
  const [taxYear, setTaxYear] = useState("2023-2024");
  const [residencyStatus, setResidencyStatus] = useState("resident");
  const [includeMedicare, setIncludeMedicare] = useState(true);
  const [taxResult, setTaxResult] = useState(null);
  const [showFAQ, setShowFAQ] = useState(false);

  const calculateTax = () => {
    const incomeNum = Number(income);
    let tax = 0;
    let effectiveRate = 0;
    let medicareLevy = 0;

    const brackets = taxBrackets[taxYear];

    // Calculate base tax
    for (const bracket of brackets) {
      if (incomeNum > bracket.min) {
        const taxableInBracket = Math.min(incomeNum, bracket.max) - bracket.min;
        tax += bracket.base + taxableInBracket * bracket.rate;
      }
      if (incomeNum <= bracket.max) break;
    }

    // Calculate Medicare Levy
    if (includeMedicare) {
      if (incomeNum <= 23365) {
        medicareLevy = 0;
      } else if (incomeNum <= 29207) {
        medicareLevy = (incomeNum - 23365) * 0.1;
      } else {
        medicareLevy = incomeNum * 0.02;
      }
    }

    const totalTax = tax + medicareLevy;
    effectiveRate = (totalTax / incomeNum) * 100;

    const result = {
      income: incomeNum,
      incomeTax: tax,
      medicareLevy,
      totalTax,
      effectiveRate,
      takeHomePay: incomeNum - totalTax,
    };

    setTaxResult(result);
    onIncomeChange(result);
  };

  useEffect(() => {
    if (income) calculateTax();
  }, [income, taxYear, residencyStatus, includeMedicare]);

  const handleIncomeChange = (e) => {
    const newIncome = e.target.value;
    setIncome(newIncome);
  };

  const FAQ = () => (
    <motion.div
      className="mt-8 p-6 bg-gray-800 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h3 className="text-xl font-semibold text-gray-300 mb-4">
        Important Information
      </h3>
      <ul className="list-disc pl-5 space-y-3 text-gray-400">
        <li>
          This calculator is designed for Australian residents and provides an
          estimate based on current tax rates.
        </li>
        <li>
          The Medicare levy (2% for most taxpayers) is calculated separately and
          can be toggled on/off in the calculator.
        </li>
        <li>
          Please note: This tool doesn't account for the Medicare Levy
          Surcharge, tax offsets, or rebates you might be eligible for.
        </li>
        <li>
          Tax rates and thresholds may change annually. Always refer to the
          selected tax year when interpreting results.
        </li>
        <li>
          Your actual tax may differ based on various factors not covered by
          this simple calculator.
        </li>
        <li>
          Typically, your employer handles tax deductions from your wages and
          remits them to the ATO on your behalf.
        </li>
      </ul>
      <div className="mt-4 text-gray-300">
        <h4 className="font-semibold mb-2">Further Information</h4>
        <p>
          For comprehensive details on factors affecting your tax, please visit
          the{" "}
          <a
            href="https://www.ato.gov.au"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Australian Taxation Office website
          </a>
          . They provide the most up-to-date and accurate information on tax
          matters.
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      className="max-w-4xl mx-auto my-16 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatedIcon
          name="Calculator"
          color="text-blue-400"
          size={36}
          animation="pulse"
        />
        <h2 className="text-3xl font-bold text-center ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Australian Tax Calculator
        </h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="space-y-6">
          <motion.div
            className="border border-gray-600 rounded-lg p-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Annual Income (AUD)
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 flex items-center">
                <AnimatedIcon
                  name="DollarSign"
                  color="currentColor"
                  size={20}
                  animation="pulse"
                />
              </div>
              <input
                type="number"
                value={income}
                onChange={handleIncomeChange}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your income"
              />
            </div>
          </motion.div>
          <motion.div
            className="border border-gray-600 rounded-lg p-6 space-y-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Tax Year
              </label>
              <select
                value={taxYear}
                onChange={(e) => setTaxYear(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="2024-2025">2024 - 2025</option>
                <option value="2023-2024">2023 - 2024</option>
                <option value="2022-2023">2022 - 2023</option>
                <option value="2021-2022">2021 - 2022</option>
                <option value="2020-2021">2020 - 2021</option>
                <option value="2019-2020">2019 - 2020</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Residency Status
              </label>
              <select
                value={residencyStatus}
                onChange={(e) => setResidencyStatus(e.target.value)}
                className="w-full bg-gray-700 text-white border border-gray-600 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="resident">Australian Resident</option>
                <option value="foreign">Foreign Resident</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeMedicare}
                onChange={(e) => setIncludeMedicare(e.target.checked)}
                className="mr-2"
              />
              <label className="text-sm text-gray-300">
                Include Medicare Levy
              </label>
            </div>
          </motion.div>
        </div>
        <AnimatePresence>
          {taxResult && (
            <motion.div
              className="border border-gray-600 rounded-lg p-6 flex flex-col justify-center space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <AnimatedIcon
                  name="PieChart"
                  color="text-green-400"
                  size={48}
                  animation="spin"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 text-center">
                Tax Breakdown
              </h3>
              <div className="space-y-2">
                <p className="text-gray-400">
                  Income Tax:{" "}
                  <span className="text-white font-semibold">
                    ${taxResult.incomeTax.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-400">
                  Medicare Levy:{" "}
                  <span className="text-white font-semibold">
                    ${taxResult.medicareLevy.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-400">
                  Total Tax:{" "}
                  <span className="text-white font-semibold">
                    ${taxResult.totalTax.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-400">
                  Effective Tax Rate:{" "}
                  <span className="text-white font-semibold">
                    {taxResult.effectiveRate.toFixed(2)}%
                  </span>
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-green-400">
                  Take Home Pay
                </h4>
                <p className="text-2xl font-bold text-green-400">
                  ${taxResult.takeHomePay.toFixed(2)}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-8 text-center">
        <button
          onClick={() => setShowFAQ(!showFAQ)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          {showFAQ ? "Hide Information" : "Show Important Information"}
        </button>
      </div>
      <AnimatePresence>{showFAQ && <FAQ />}</AnimatePresence>
    </motion.div>
  );
};

export default TaxCalculator;
