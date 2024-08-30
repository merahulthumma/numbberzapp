"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AnimatedIcon from "../../../components/AnimatedIcon";
import {
  Building,
  Phone,
  Mail,
  Clock,
  Calendar,
  Video,
  Send,
  Globe,
  Facebook,
  Star,
  MapPin,
} from "lucide-react";

const ContactInfo: React.FC<{
  icon: keyof typeof import("lucide-react");
  title: string;
  details: string;
  link?: string;
}> = ({ icon, title, details, link }) => (
  <div className="flex items-start space-x-4 mb-6 group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300">
    <div className="transition-transform duration-300 group-hover:scale-110">
      <AnimatedIcon
        name={icon}
        color="text-blue-400"
        size={24}
        animation="pulse"
      />
    </div>
    <div>
      <h3 className="font-semibold text-lg">{title}</h3>
      {link ? (
        <a
          href={link}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          {details}
        </a>
      ) : (
        <p className="text-gray-300">{details}</p>
      )}
    </div>
  </div>
);

const OfficeLocation: React.FC<{
  name: string;
  address: string;
  phone?: string;
  email?: string;
  hours: string;
}> = ({ name, address, phone, email, hours }) => (
  <motion.div
    className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-2xl font-bold mb-6 flex items-center">
      <AnimatedIcon
        name="Building"
        color="text-green-400"
        size={24}
        animation="pulse"
      />
      <span className="ml-2">{name}</span>
    </h3>
    <ContactInfo icon="MapPin" title="Address" details={address} />
    {phone && (
      <ContactInfo
        icon="Phone"
        title="Phone"
        details={phone}
        link={`tel:${phone}`}
      />
    )}
    {email && (
      <ContactInfo
        icon="Mail"
        title="Email"
        details={email}
        link={`mailto:${email}`}
      />
    )}
    <ContactInfo icon="Clock" title="Hours" details={hours} />
  </motion.div>
);

const EngagementMethod: React.FC<{
  icon: keyof typeof import("lucide-react");
  title: string;
  description: string;
  action?: string;
  actionLink?: string;
}> = ({ icon, title, description, action, actionLink }) => (
  <motion.div
    className="group bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-xl font-semibold mb-3 flex items-center">
      <AnimatedIcon
        name={icon}
        color="text-blue-400"
        size={24}
        animation="bounce"
      />
      <span className="ml-2">{title}</span>
    </h3>
    <p className="text-gray-300">{description}</p>
    {action && actionLink && (
      <a
        href={actionLink}
        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        {action}
      </a>
    )}
  </motion.div>
);

export default function ContactPageContent() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      y: ["0%", "10%", "0%"],
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }));
  }, [controls]);

  const iconComponents = [
    Building,
    Phone,
    Mail,
    Clock,
    Calendar,
    Video,
    Send,
    Globe,
    Facebook,
    Star,
    MapPin,
  ];

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
        {iconComponents.map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-blue-300 opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={controls}
            custom={index}
          >
            <Icon size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <header className="text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact NumberzInsight
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Get in touch with our futuristic accounting team. We&apos;re here to
            revolutionize your financial management with cutting-edge technology
            and unparalleled expertise.
          </motion.p>
        </header>

        <section>
          <motion.h2
            className="text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Offices
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <OfficeLocation
              name="Truganina Office"
              address="Unit 41/2 Fastline Rd, Truganina VIC 3029"
              phone="1300 123 435"
              email="contact@numberz.com.au"
              hours="Mon — Sat: 8 am — 5 pm, Sunday: CLOSED"
            />
            <OfficeLocation
              name="Launceston Office"
              address="Office 2, 187 Brisbane St, Launceston"
              phone="1300 123 435"
              email="contact@numberz.com.au"
              hours="Mon — Sat: 8 am — 5 pm, Sunday: CLOSED"
            />
          </div>
        </section>

        <section>
          <motion.h2
            className="text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How to Engage With Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EngagementMethod
              icon="Calendar"
              title="In-Person Appointments"
              description="Book a face-to-face consultation at one of our offices. Experience our cutting-edge facilities and meet our expert team in person."
              action="Book Appointment"
              actionLink="mailto:contact@numberz.com.au?subject=Book%20In-Person%20Appointment"
            />
            <EngagementMethod
              icon="Video"
              title="Virtual Consultations"
              description="Connect with us from anywhere using our advanced holographic conferencing technology for a truly immersive remote experience."
              action="Schedule Virtual Meeting"
              actionLink="mailto:contact@numberz.com.au?subject=Schedule%20Virtual%20Consultation"
            />
            <EngagementMethod
              icon="Send"
              title="AI-Enhanced Email Support"
              description="Reach out via email for 24/7 support. Our AI systems ensure rapid, accurate responses to your queries, with human oversight for complex issues."
              action="Send Email"
              actionLink="mailto:contact@numberz.com.au?subject=Support%20Request"
            />
          </div>
        </section>

        <motion.section
          className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <AnimatedIcon
              name="Mail"
              color="text-yellow-400"
              size={28}
              animation="pulse"
            />
            <span className="ml-2">Send Us a Message</span>
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.section>

        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center">
            <AnimatedIcon
              name="Globe"
              color="text-blue-400"
              size={28}
              animation="spin"
            />
            <span className="ml-2">Connect With Us Online</span>
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.facebook.com/Numberz.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center"
            >
              <AnimatedIcon
                name="Facebook"
                color="text-blue-400"
                size={24}
                animation="pulse"
              />
              <span className="ml-2">Facebook</span>
            </a>
            <a
              href="https://g.page/r/CbKne9dK-zlYEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center"
            >
              <AnimatedIcon
                name="Star"
                color="text-yellow-400"
                size={24}
                animation="spin"
              />
              <span className="ml-2">Google Reviews</span>
            </a>
            <a
              href="https://g.page/r/CbKne9dK-zlYEBM/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center"
            >
              <AnimatedIcon
                name="MapPin"
                color="text-red-400"
                size={24}
                animation="bounce"
              />
              <span className="ml-2">Google Business</span>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
