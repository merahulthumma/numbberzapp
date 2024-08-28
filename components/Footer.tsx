'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import AnimatedIcon from './AnimatedIcon';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH3 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h3), { ssr: false });
const MotionH4 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h4), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });
const MotionA = dynamic(() => import('framer-motion').then((mod) => mod.motion.a), { ssr: false });
const MotionLi = dynamic(() => import('framer-motion').then((mod) => mod.motion.li), { ssr: false });

const Footer = () => {
    const iconVariants = {
        hover: { scale: 1.2, rotate: 10 },
        tap: { scale: 0.8, rotate: -10 }
    };

    const linkVariants = {
        hover: { color: '#ffffff', transition: { duration: 0.3 } }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <MotionDiv
                        className="border border-gray-600 rounded-lg p-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <MotionH3
                            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            NumberzInsight
                        </MotionH3>
                        <MotionP
                            className="text-gray-300 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            Revolutionizing financial management with cutting-edge technology and unparalleled expertise.
                        </MotionP>
                        <div className="flex space-x-4">
                            {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map((icon, index) => (
                                <MotionA
                                    key={icon}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={iconVariants}
                                >
                                    <AnimatedIcon name={icon} color="currentColor" size={24} animation="pulse" />
                                </MotionA>
                            ))}
                        </div>
                    </MotionDiv>
                    <MotionDiv
                        className="border border-gray-600 rounded-lg p-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <MotionH4
                            className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Our Services
                        </MotionH4>
                        <ul className="space-y-3">
                            {['Bookkeeping', 'Tax Preparation', 'Financial Planning', 'Payroll Management'].map((service, index) => (
                                <MotionLi
                                    key={service}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                >
                                    <MotionA
                                        href="#"
                                        className="text-gray-300 hover:text-white transition-colors flex items-center"
                                        whileHover="hover"
                                        variants={linkVariants}
                                    >
                                        <AnimatedIcon name="ChevronRight" color="currentColor" size={16} className="mr-2" />
                                        {service}
                                    </MotionA>
                                </MotionLi>
                            ))}
                        </ul>
                    </MotionDiv>
                    <MotionDiv
                        className="border border-gray-600 rounded-lg p-6"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <MotionH4
                            className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            Contact Us
                        </MotionH4>
                        <ul className="space-y-3">
                            <MotionLi
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <AnimatedIcon name="MapPin" color="currentColor" size={20} className="mr-3" animation="bounce" />
                                <span className="text-gray-300">Unit 41/2 Fastline Rd, Truganina VIC 3029</span>
                            </MotionLi>
                            <MotionLi
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <AnimatedIcon name="Phone" color="currentColor" size={20} className="mr-3" animation="pulse" />
                                <a href="tel:1300123435" className="text-gray-300 hover:text-white transition-colors">1300 123 435</a>
                            </MotionLi>
                            <MotionLi
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <AnimatedIcon name="Mail" color="currentColor" size={20} className="mr-3" animation="pulse" />
                                <a href="mailto:contact@numberz.com.au" className="text-gray-300 hover:text-white transition-colors">contact@numberz.com.au</a>
                            </MotionLi>
                            <MotionLi
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                            >
                                <AnimatedIcon name="Clock" color="currentColor" size={20} className="mr-3" animation="spin" />
                                <span className="text-gray-300">Mon — Sat: 8 am — 5 pm, Sunday: CLOSED</span>
                            </MotionLi>
                        </ul>
                    </MotionDiv>
                </div>
                <MotionDiv
                    className="mt-12 pt-8 border-t border-gray-700 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className="text-gray-400">&copy; {new Date().getFullYear()} NumberzInsight. All rights reserved.</p>
                </MotionDiv>
            </div>
        </footer>
    );
};

export default Footer;