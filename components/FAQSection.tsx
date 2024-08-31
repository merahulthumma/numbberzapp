import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

const faqs = [
  {
    question: "How can NumberzInsight help my small business?",
    answer:
      "We offer a range of services to boost your small business. This includes keeping your financial records in order, handling your taxes, giving financial advice, and managing your payroll. Our goal is to save you time and help your business grow.",
    icon: "TrendingUp",
  },
  {
    question: "What's the cost for small business accounting?",
    answer:
      "The cost varies based on what your business needs. We tailor our services to fit your specific requirements. Get in touch with us, and we'll provide a custom quote that fits your budget and business goals.",
    icon: "DollarSign",
  },
  {
    question: "What services does NumberzInsight offer for small businesses?",
    answer:
      "We offer a wide range of services including bookkeeping, financial statement preparation, payroll management, tax filing, budgeting, financial planning, and profitability analysis. Our aim is to help your business thrive financially.",
    icon: "Briefcase",
  },
  {
    question: "How can I get in touch with NumberzInsight?",
    answer:
      "You can reach us by phone at 1300 123 435 or by email at contact@numberz.com.au. We're always happy to discuss how we can help your business succeed.",
    icon: "PhoneCall",
  },
  {
    question: "Does NumberzInsight use modern accounting software?",
    answer:
      "Yes, we use cutting-edge cloud accounting software. This allows us to streamline your finances, track expenses easily, simplify tax filing, and give you clear insights into your business's financial health.",
    icon: "Cloud",
  },
  {
    question: "Can NumberzInsight handle cryptocurrency accounting?",
    answer:
      "Absolutely! We're well-versed in crypto taxation in Australia. We can help you navigate the complexities of cryptocurrency transactions and ensure you're compliant with the latest regulations.",
    icon: "Bitcoin",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedIcon
            name="HelpCircle"
            color="text-blue-500"
            size={48}
            animation="pulse"
          />
          <h2 className="text-4xl font-extrabold text-center ml-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-blue-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-6 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <AnimatedIcon
                      name={faq.icon as keyof typeof import("lucide-react")}
                      color="text-blue-500"
                      size={24}
                      animation="bounce"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-4">
                      {faq.question}
                    </h3>
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
