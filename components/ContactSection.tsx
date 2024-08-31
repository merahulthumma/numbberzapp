import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
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
  Headphones,
} from "lucide-react";

const AnimatedIcon = ({ name, color, size = 24, animation = "pulse" }) => {
  const Icon = { MapPin, Phone, Clock, Mail, MessageCircle, Headphones }[name];

  return (
    <motion.div
      animate={{ scale: animation === "pulse" ? [1, 1.2, 1] : 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Icon size={size} className={color} />
    </motion.div>
  );
};

const ContactSection = () => {
  const [activeOffice, setActiveOffice] = useState(0);
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
      title: "Melbourne Address",
      address: "Unit 41/2 Fastline Rd, Truganina VIC 3029",
      phone: "1300 123 435",
      email: "contact@numberz.com.au",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.2655890062753!2d144.74153431531902!3d-37.83507097974806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689d320f9a2a9%3A0x7d3a82c6a4ebefe3!2s2%20Fastline%20Rd%2C%20Truganina%20VIC%203029%2C%20Australia!5e0!3m2!1sen!2sus!4v1628475823068!5m2!1sen!2sus",
    },
    {
      title: "Tasmania",
      address: "Office 2, 187 Brisbane St, Launceston",
      phone: "1300 123 435",
      email: "contact@numberz.com.au",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654246106938!2d147.13563431557164!3d-41.43555797925942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa7a1a0d43580095%3A0x7a1b0d5228e3f872!2s187%20Brisbane%20St%2C%20Launceston%20TAS%207250%2C%20Australia!5e0!3m2!1sen!2sus!4v1628475891289!5m2!1sen!2sus",
    },
  ];

  const floatingIcons = [MapPin, Phone, Clock, Mail, MessageCircle];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
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
            animate={controls}
            custom={index}
          >
            <Icon size={48 + Math.random() * 48} />
          </motion.div>
        ))}
      </div>
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
          <h2 className="text-4xl font-extrabold ml-4">Get in Touch</h2>
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
          <motion.div
            className="bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Offices</h3>
            <div className="flex mb-4">
              {officeInfo.map((office, index) => (
                <button
                  key={office.title}
                  className={`flex-1 py-2 px-4 ${
                    activeOffice === index
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300"
                  } rounded-md transition-colors duration-300`}
                  onClick={() => setActiveOffice(index)}
                >
                  {office.title}
                </button>
              ))}
            </div>
            <motion.div
              key={activeOffice}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center">
                  <AnimatedIcon
                    name="MapPin"
                    color="text-blue-400"
                    animation="pulse"
                  />
                  <span className="ml-4">
                    {officeInfo[activeOffice].address}
                  </span>
                </div>
                <div className="flex items-center">
                  <AnimatedIcon
                    name="Phone"
                    color="text-blue-400"
                    animation="pulse"
                  />
                  <a
                    href={`tel:${officeInfo[activeOffice].phone}`}
                    className="ml-4 hover:text-blue-400 transition-colors"
                  >
                    {officeInfo[activeOffice].phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <AnimatedIcon
                    name="Mail"
                    color="text-blue-400"
                    animation="pulse"
                  />
                  <a
                    href={`mailto:${officeInfo[activeOffice].email}`}
                    className="ml-4 hover:text-blue-400 transition-colors"
                  >
                    {officeInfo[activeOffice].email}
                  </a>
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
              <div className="mt-6">
                <iframe
                  src={officeInfo[activeOffice].mapUrl}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="bg-gray-800 rounded-xl p-8 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

            <div className="flex justify-center mb-4">
              <AnimatedIcon
                name="Headphones"
                color="text-blue-400"
                size={48}
                animation="pulse"
              />
            </div>

            <p className="mb-6">
              For any inquiries or assistance, please feel free to reach out to
              us using the contact information provided. We&lsquo;re here to
              help!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <AnimatedIcon
                  name="Phone"
                  color="text-blue-400"
                  animation="pulse"
                />
                <a
                  href="tel:1300123435"
                  className="ml-4 hover:text-blue-400 transition-colors"
                >
                  1300 123 435
                </a>
              </div>
              <div className="flex items-center">
                <AnimatedIcon
                  name="Mail"
                  color="text-blue-400"
                  animation="pulse"
                />
                <a
                  href="mailto:contact@numberz.com.au"
                  className="ml-4 hover:text-blue-400 transition-colors"
                >
                  contact@numberz.com.au
                </a>
              </div>
            </div>
          </motion.div>
        </div>

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
