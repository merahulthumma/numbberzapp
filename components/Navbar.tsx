'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Calculator, Info, Phone, Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '/', Icon: Home },
    { name: 'Services', href: '/services', Icon: Calculator },
    { name: 'About', href: '/about-us', Icon: Info },
    { name: 'Contact', href: '/contact-us', Icon: Phone },
];

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">NumberzInsight</span>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(({ name, href, Icon }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    className={`relative px-3 py-2 rounded-md text-sm font-medium ${
                                        pathname === href
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                                >
                                    <div className="flex items-center">
                                        <Icon className="w-5 h-5 mr-1" />
                                        {name}
                                    </div>
                                    {pathname === href && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                                            layoutId="navbar-underline"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map(({ name, href, Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${
                                pathname === href
                                    ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <div className="flex items-center">
                                <Icon className="w-5 h-5 mr-2" />
                                {name}
                            </div>
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
