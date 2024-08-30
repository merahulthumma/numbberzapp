"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

const ContactSection: React.FC = () => {
  const socialIcons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Numberz.com.au/",
      color: "text-blue-500",
    },
    { name: "Instagram", link: "#", color: "text-pink-500" },
    { name: "Linkedin", link: "#", color: "text-blue-700" },
    { name: "Twitter", link: "#", color: "text-blue-400" },
  ];

  const borderVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const officeInfo = [
    {
      title: "Truganina Office",
      address: "Unit 41/2 Fastline Rd, Truganina VIC 3029",
    },
    {
      title: "Launceston Office",
      address: "Office 2, 187 Brisbane St, Launceston",
    },
  ];

  const floatingIcons = [
    { icon: MapPin, color: "text-red-400" },
    { icon: Phone, color: "text-green-400" },
    { icon: Mail, color: "text-blue-400" },
    { icon: Clock, color: "text-yellow-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Floating background icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.color} opacity-10`}
          initial={{ x: Math.random() * 100, y: Math.random() * 100 }}
          animate={{
            x: [null, Math.random() * 100],
            y: [null, Math.random() * 100],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <icon.icon size={48 + Math.random() * 24} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedIcon
            name="MessageCircle"
            color="text-blue-400"
            size={48}
            animation="pulse"
          />
          <h2 className="text-4xl font-extrabold ml-4">Contact Us</h2>
        </motion.div>

        <motion.div
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We&apos;re here to help! Whether you have questions about our services
          or need expert advice, our team is ready to assist you.
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {officeInfo.map((office, index) => (
            <motion.div
              key={office.title}
              className="bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.rect
                  width="100%"
                  height="100%"
                  rx="12"
                  ry="12"
                  fill="none"
                  stroke="#4F46E5"
                  strokeWidth="2"
                  variants={borderVariants}
                  initial="initial"
                  animate="animate"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-6">{office.title}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <AnimatedIcon
                    name="MapPin"
                    color="text-blue-400"
                    animation="pulse"
                  />
                  <span className="ml-4">{office.address}</span>
                </div>
                <div className="flex items-center">
                  <AnimatedIcon
                    name="Clock"
                    color="text-blue-400"
                    animation="pulse"
                  />
                  <span className="ml-4">
                    Mon — Sat: 8 am — 5 pm, Sunday: CLOSED
                  </span>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-4">
                <motion.a
                  href="mailto:contact@numberz.com.au"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2" /> Email Us
                </motion.a>
                <motion.a
                  href="tel:1300123435"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2" /> Call Now: 1300 123 435
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest of the component remains the same */}
      </div>
    </section>
  );
};

export default ContactSection;
