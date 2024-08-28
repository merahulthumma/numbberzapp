'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Service {
    title: string;
    description: string;
    icon: string;
    color: string;
}

interface ServicesClientProps {
    services: Service[];
}

const ServicesClient: React.FC<ServicesClientProps> = ({ services }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br ${service.color}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                >
                    <div className="p-8">
                        <div className="text-6xl mb-6">{service.icon}</div>
                        <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                        <p className="text-lg">{service.description}</p>
                    </div>
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button className="bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-opacity-80 transition-colors duration-300">
                            Learn More
                        </button>
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
};

export default ServicesClient;