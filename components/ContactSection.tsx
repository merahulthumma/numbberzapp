import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
  Calendar,
  DollarSign,
  FileText,
} from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";

const ContactSection: React.FC = () => {
  const socialIcons = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/Numberz.com.au/",
      icon: Facebook,
      color: "text-blue-500",
    },
    { name: "Instagram", link: "#", icon: Instagram, color: "text-pink-500" },
    { name: "LinkedIn", link: "#", icon: Linkedin, color: "text-blue-700" },
    { name: "Twitter", link: "#", icon: Twitter, color: "text-blue-400" },
  ];

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
    { icon: Calendar, color: "text-purple-400" },
    { icon: DollarSign, color: "text-green-500" },
    { icon: FileText, color: "text-indigo-400" },
    { icon: MessageCircle, color: "text-pink-400" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Animated floating background icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`absolute ${icon.color} opacity-10`}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0.5 + Math.random() * 0.5,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [
              0.5 + Math.random() * 0.5,
              1 + Math.random() * 0.5,
              0.5 + Math.random() * 0.5,
            ],
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <icon.icon size={24 + Math.random() * 24} />
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
          We&lsquo;re here to help! Whether you have questions about our
          services or need expert advice, our team is ready to assist you.
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
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="mr-2" /> Email Us
                </motion.a>
                <motion.a
                  href="tel:1300123435"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2" /> Call Now: 1300 123 435
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social media links */}
        <motion.div
          className="mt-16 flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialIcons.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:text-white transition-colors duration-300`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
