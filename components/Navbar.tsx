"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Calculator,
  Info,
  Phone,
  Menu,
  X,
  FileText,
  DollarSign,
  Sun,
  Moon,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", Icon: Home },
  {
    name: "Services",
    href: "/services",
    Icon: FileText,
    subItems: [
      {
        name: "Request Tax Return (New Clients)",
        href: "/services/request-tax-return-new-clients",
      },
      {
        name: "Request Tax Return (Existing Clients)",
        href: "/services/request-tax-return-existing-clients",
      },
      { name: "Payments", href: "/services/payments" },
    ],
  },
  {
    name: "Finance Calculators",
    href: "/finance-calculators",
    Icon: Calculator,
    subItems: [
      {
        name: "ATO Tax Calculators",
        href: "/finance-calculators/ato-tax-calculators",
      },
      {
        name: "Simple Budget Calculator",
        href: "/finance-calculators/simple-budget-calculator",
      },
      {
        name: "Home Loan Calculators",
        href: "/finance-calculators/home-loan-calculators",
      },
      {
        name: "Life Insurance and Income Protection Calculators",
        href: "/finance-calculators/life-insurance-and-income-protection-calculators",
      },
      {
        name: "Superannuation and Retirement Calculators",
        href: "/finance-calculators/superannuation-and-retirement-calculators",
      },
      {
        name: "Budgeting and Savings Calculators",
        href: "/finance-calculators/budgeting-and-savings-calculators",
      },
      {
        name: "Personal and Car Loan Calculators",
        href: "/finance-calculators/personal-and-car-loan-calculators",
      },
    ],
  },
  { name: "About", href: "/about-us", Icon: Info },
  {
    name: "Contact",
    href: "/contact-us",
    Icon: Phone,
    subItems: [
      { name: "Book Appointments", href: "/contact-us/book-appointments" },
      { name: "Email Support", href: "/contact-us/email-support" },
      { name: "Phone Support", href: "/contact-us/phone-support" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSubmenuToggle = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              NumberzInsight
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-baseline space-x-4">
              {navItems.map(({ name, href, Icon, subItems }) => (
                <div
                  key={name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === href
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-1" />
                      {name}
                    </div>
                  </Link>
                  {subItems && hoveredItem === name && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ name, href, Icon, subItems }) => (
            <div key={name}>
              <Link
                href={href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === href
                    ? "text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleSubmenuToggle(name);
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="w-5 h-5 mr-2" />
                    {name}
                  </div>
                  {subItems && (
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openSubmenu === name ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
              </Link>
              {subItems && openSubmenu === name && (
                <div className="pl-6 mt-2 space-y-2">
                  {subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
