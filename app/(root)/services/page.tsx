"use client";

import React from "react";
import AnimatedIcon from "@/components/AnimatedIcon";
import ServicesClient from "@/app/(root)/services/ServicesClient";

const ServiceCard = ({ iconName, title, description }) => (
  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-blue-400 group">
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
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
    {children}
  </h2>
);

export default function ServicesPageContent() {
  const services = [
    {
      iconName: "Calculator",
      title: "AI-Powered Tax Optimization",
      description:
        "Leverage cutting-edge AI to maximize your tax returns and ensure ATO compliance for businesses of all sizes across Australia.",
    },
    {
      iconName: "BookOpen",
      title: "Quantum Bookkeeping",
      description:
        "Experience unparalleled accuracy in financial record-keeping with our quantum computing-enhanced bookkeeping services.",
    },
    {
      iconName: "TrendingUp",
      title: "Predictive Financial Modeling",
      description:
        "Harness the power of advanced algorithms to forecast your business's financial future with unprecedented precision.",
    },
    {
      iconName: "ShieldCheck",
      title: "Blockchain Audit & Assurance",
      description:
        "Ensure maximum transparency and security in your financial audits with our blockchain-based solutions, tailored for Australian businesses.",
    },
    {
      iconName: "Banknote",
      title: "Superannuation Optimization",
      description:
        "Maximize your retirement savings with our AI-driven superannuation strategies, fully compliant with Australian regulations.",
    },
    {
      iconName: "Briefcase",
      title: "Virtual CFO Services",
      description:
        "Get expert financial guidance with our Virtual CFO service, providing strategic insights for your business growth in the Australian market.",
    },
    {
      iconName: "FileText",
      title: "SMSF Management",
      description:
        "Navigate the complexities of Self-Managed Super Funds with our specialized services, ensuring compliance and optimal performance.",
    },
    {
      iconName: "BarChart",
      title: "Real-Time Financial Dashboards",
      description:
        "Access your business's financial health at a glance with our real-time, interactive dashboards powered by advanced data analytics.",
    },
    {
      iconName: "Leaf",
      title: "Sustainable Accounting",
      description:
        "Integrate environmental and social governance into your financial strategy with our sustainable accounting practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Our Futuristic Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the future of accounting with NumberzInsight. Our
            innovative services combine cutting-edge technology with deep
            expertise in Australian tax laws and business practices.
          </p>
        </header>

        <section>
          <SectionTitle>Accounting Services for the Digital Age</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <AnimatedIcon
              name="Star"
              color="text-yellow-400"
              size={32}
              animation="spin"
            />
            <span className="ml-2">Why Choose NumberzInsight?</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {[
              "Expertise in Australian Accounting Standards (AAS)",
              "Cutting-edge technology meets traditional accounting principles",
              "Tailored solutions for businesses of all sizes across Australia",
              "Proactive approach to financial management and planning",
              "Commitment to staying ahead of evolving ATO requirements",
              "Personalized service with a futuristic touch",
            ].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <AnimatedIcon
                  name="Check"
                  color="text-green-400"
                  size={20}
                  animation="bounce"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <AnimatedIcon
              name="PhoneCall"
              color="text-blue-400"
              size={32}
              animation="pulse"
            />
            <span className="ml-2">Ready to Transform Your Finances?</span>
          </h2>
          <p className="text-xl mb-8">
            Contact us today to explore how our futuristic accounting services
            can propel your business forward.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
          >
            Get Started
          </a>
        </section>
      </div>
    </div>
  );
}
