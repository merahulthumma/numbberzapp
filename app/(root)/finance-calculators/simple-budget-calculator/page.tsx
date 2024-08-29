"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import {
  Calculator,
  ChartBar,
  PieChart as PieChartIcon,
  DollarSign,
  TrendingUp,
  FileText,
  CreditCard,
  Briefcase,
  Plus,
  Minus,
  Download,
} from "lucide-react";
import { jsPDF } from "jspdf";

const SimpleBudgetCalculatorPage = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState({
    Housing: 0,
    Transportation: 0,
    Food: 0,
    Utilities: 0,
    Healthcare: 0,
    Personal: 0,
    Entertainment: 0,
    Debt: 0,
  });

  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
    setSavings(income - totalExpenses);
  }, [income, expenses]);

  const handleIncomeChange = (value) => {
    setIncome(parseFloat(value) || 0);
  };

  const handleExpenseChange = (category, value) => {
    setExpenses({ ...expenses, [category]: parseFloat(value) || 0 });
  };

  const handleIncrement = (setter, value, step = 100) => {
    setter((prevValue) => parseFloat((prevValue + step).toFixed(2)));
  };

  const handleDecrement = (setter, value, step = 100) => {
    setter((prevValue) => parseFloat(Math.max(0, prevValue - step).toFixed(2)));
  };

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884D8",
    "#82CA9D",
    "#FFC658",
    "#8DD1E1",
  ];

  const pieChartData = Object.entries(expenses).map(([name, value]) => ({
    name,
    value,
  }));

  const lineChartData = [
    { name: "Income", value: income },
    {
      name: "Expenses",
      value: Object.values(expenses).reduce((a, b) => a + b, 0),
    },
    { name: "Savings", value: savings },
  ];

  const floatingIcons = [
    Calculator,
    ChartBar,
    PieChartIcon,
    DollarSign,
    TrendingUp,
    FileText,
    CreditCard,
    Briefcase,
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Budget Summary", 105, 15, null, null, "center");
    doc.setFontSize(12);
    doc.text(
      "Generated and downloaded from Numberz Insight",
      105,
      25,
      null,
      null,
      "center"
    );

    doc.setFontSize(16);
    doc.text("Income:", 20, 40);
    doc.text(`$${income.toFixed(2)}`, 150, 40);

    doc.text("Expenses:", 20, 50);
    let yPos = 60;
    Object.entries(expenses).forEach(([category, amount]) => {
      doc.text(category, 30, yPos);
      doc.text(`$${amount.toFixed(2)}`, 150, yPos);
      yPos += 10;
    });

    doc.text("Total Expenses:", 20, yPos + 10);
    doc.text(
      `$${Object.values(expenses)
        .reduce((a, b) => a + b, 0)
        .toFixed(2)}`,
      150,
      yPos + 10
    );

    doc.text("Savings:", 20, yPos + 20);
    doc.text(`$${savings.toFixed(2)}`, 150, yPos + 20);

    doc.save("budget_summary.pdf");
  };

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
        {floatingIcons.map((Icon, index) => (
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
            Simple Budget Calculator
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Take control of your finances with our easy-to-use budget
            calculator. Input your income and expenses to get a clear picture of
            your financial health.
          </motion.p>
        </header>

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
              <DollarSign className="text-green-400 mr-2" />
              <span>Income</span>
            </h2>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement(setIncome, income)}
                className="px-3 py-2 bg-red-500 text-white rounded-l hover:bg-red-600 transition-colors"
              >
                <Minus size={20} />
              </button>
              <input
                type="number"
                value={income}
                onChange={(e) => handleIncomeChange(e.target.value)}
                className="w-full bg-gray-700 text-white p-2 text-center"
                placeholder="$Enter your monthly income"
              />
              <button
                onClick={() => handleIncrement(setIncome, income)}
                className="px-3 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 transition-colors"
              >
                <Plus size={20} />
              </button>
            </div>

            <motion.div
              className="mt-4 text-center text-lg font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Your income: ${income.toFixed(2)}
            </motion.div>
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
              <CreditCard className="text-red-400 mr-2" />
              <span>Expenses</span>
            </h2>
            {Object.entries(expenses).map(([category, value]) => (
              <div key={category} className="mb-2">
                <label className="block text-sm font-medium text-gray-400">
                  {category}
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      handleDecrement(
                        (val) => handleExpenseChange(category, val),
                        expenses[category]
                      )
                    }
                    className="px-3 py-2 bg-red-500 text-white rounded-l hover:bg-red-600 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) =>
                      handleExpenseChange(category, e.target.value)
                    }
                    className="w-full bg-gray-700 text-white p-2 text-center"
                    placeholder={`$Enter ${category} expenses`}
                  />
                  <button
                    onClick={() =>
                      handleIncrement(
                        (val) => handleExpenseChange(category, val),
                        expenses[category]
                      )
                    }
                    className="px-3 py-2 bg-green-500 text-white rounded-r hover:bg-green-600 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
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
              <PieChartIcon className="text-blue-400 mr-2" />
              <span>Expense Breakdown</span>
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
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
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
              <TrendingUp className="text-green-400 mr-2" />
              <span>Income vs Expenses</span>
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#82ca9d"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </section>

        <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <ChartBar className="text-yellow-400 mr-2" />
            <span>Budget Summary</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Total Income</h3>
              <p className="text-2xl text-green-400">${income.toFixed(2)}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Total Expenses</h3>
              <p className="text-2xl text-red-400">
                $
                {Object.values(expenses)
                  .reduce((a, b) => a + b, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Savings</h3>
              <p className="text-2xl text-blue-400">${savings.toFixed(2)}</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <button
            onClick={downloadPDF}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition-colors"
          >
            <Download className="mr-2" />
            Download PDF
          </button>
          <p className="mt-2 text-sm text-gray-400">
            Get your full report from our website{" "}
            <a
              href="https://numberz.com.au/finance-calculators/simple-budget-calculator"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              numberz.com.au/finance-calculators/simple-budget-calculator
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SimpleBudgetCalculatorPage;
