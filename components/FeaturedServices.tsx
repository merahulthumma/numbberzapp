"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  Calculator,
  FileText,
  Users,
  Bitcoin,
  DollarSign,
  User,
  Brain,
  BookOpen,
  PieChart,
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Expert guidance to drive your business forward",
  },
  {
    icon: Calculator,
    title: "BAS Lodgement",
    description: "Timely and accurate BAS preparation and lodgement",
  },
  {
    icon: FileText,
    title: "Financial Statements",
    description: "Comprehensive financial reporting for your business",
  },
  {
    icon: Users,
    title: "Partnership Tax Return",
    description: "Specialized tax solutions for partnerships",
  },
  {
    icon: Bitcoin,
    title: "Crypto Taxation",
    description: "Navigate the complexities of cryptocurrency taxes",
  },
  {
    icon: DollarSign,
    title: "Company Tax Return",
    description: "Efficient company tax return preparation",
  },
  {
    icon: User,
    title: "Sole Trader Tax Returns",
    description: "Tailored tax solutions for sole traders",
  },
  {
    icon: Brain,
    title: "Accounting Advisory",
    description: "Strategic accounting advice for your business",
  },
  {
    icon: BookOpen,
    title: "Business Set Up",
    description: "Comprehensive assistance in establishing your business",
  },
  {
    icon: PieChart,
    title: "GST Registration",
    description: "Streamlined GST registration process",
  },
];

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Futuristic Services
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We offer a complete range of accounting services spanning everything
          from bookkeeping and taxation services, to budgeting advice and
          financial statements.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
              }}
            >
              <service.icon className="w-12 h-12 mb-4 text-blue-600 hover:text-blue-400 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
