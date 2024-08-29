"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedIcon from "@/components/AnimatedIcon";

interface CalculatorCardProps {
  iconName: string;
  title: string;
  description: string;
  link: string;
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({
  iconName,
  title,
  description,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-blue-400 group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
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
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 bg-blue-500 bg-opacity-90 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-lg">Try Now</span>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
};

export default CalculatorCard;
