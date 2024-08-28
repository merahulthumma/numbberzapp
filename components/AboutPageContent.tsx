'use client'

import React from 'react';
import { MapPin, Phone, Clock, Mail, Video, Calendar, Send, Zap, Brain, Shield, Cube, TreePine, PieChart } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';

const ContactInfo = ({ iconName, title, details }) => (
    <div className="flex items-start space-x-4 mb-6 group hover:bg-gray-800 p-3 rounded-lg transition-all duration-300">
        <div className="transition-transform duration-300 group-hover:scale-110">
            <AnimatedIcon name={iconName} color="text-blue-400" size={24} animation="pulse" />
        </div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-gray-300">{details}</p>
        </div>
    </div>
);

const ServiceCard = ({ iconName, title, description }) => (
    <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-600 hover:border-blue-400">
        <AnimatedIcon name={iconName} color="text-blue-400" size={32} animation="pulse" />
        <h3 className="text-xl font-bold mb-2 mt-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const SectionTitle = ({ children }) => (
    <h2 className="text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
        {children}
    </h2>
);

export default function AboutPageContent() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-8 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    About NumberzInsight
                </h1>
                <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
                    Pioneering the future of accounting in Australia with cutting-edge technology and unparalleled expertise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <AnimatedIcon name="Zap" color="text-yellow-400" size={28} animation="pulse" />
                            <span className="ml-2">Our Vision</span>
                        </h2>
                        <p className="text-lg mb-4">
                            At NumberzInsight, we're not just accountants – we're innovators, futurists, and partners in your financial journey. Our mission is to revolutionize the accounting industry by seamlessly blending advanced technology with deep financial expertise.
                        </p>
                        <p className="text-lg">
                            We envision a world where financial management is effortless, intuitive, and powered by the latest breakthroughs in AI, quantum computing, and blockchain technology. Our team of forward-thinking professionals is dedicated to making this vision a reality for businesses across Australia.
                        </p>
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                        <h2 className="text-3xl font-bold mb-6 flex items-center">
                            <AnimatedIcon name="Star" color="text-yellow-400" size={28} animation="spin" />
                            <span className="ml-2">Why Choose Us</span>
                        </h2>
                        <ul className="text-lg space-y-3">
                            {[
                                "Cutting-edge technology meets traditional accounting principles",
                                "Tailored solutions for businesses of all sizes across Australia",
                                "Deep expertise in Australian tax law and business practices",
                                "Commitment to innovation and continuous improvement",
                                "Personalized service with a futuristic touch",
                                "Proactive approach to financial management and planning"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <SectionTitle>Our Futuristic Services</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    <ServiceCard
                        iconName="Shield"
                        title="AI-Powered Compliance"
                        description="Stay ahead of ATO regulations with our AI-driven compliance systems, ensuring your business is always up-to-date and penalty-free."
                    />
                    <ServiceCard
                        iconName="Cube"
                        title="Quantum Financial Modeling"
                        description="Harness the power of quantum computing for unprecedented accuracy in financial forecasting and risk assessment."
                    />
                    <ServiceCard
                        iconName="Lock"
                        title="Blockchain Auditing"
                        description="Experience unparalleled transparency and security in your financial audits with our blockchain-based solutions."
                    />
                    <ServiceCard
                        iconName="BarChart3"
                        title="Holographic Reporting"
                        description="Visualize your financial data like never before with our immersive 3D holographic reports and interactive dashboards."
                    />
                    <ServiceCard
                        iconName="Brain"
                        title="Neuro-Enhanced Advisory"
                        description="Benefit from our unique brain-computer interface systems that allow our advisors to process complex financial scenarios at superhuman speeds."
                    />
                    <ServiceCard
                        iconName="Leaf"
                        title="Eco-Quantum Sustainability Tracking"
                        description="Optimize your business's environmental impact and capitalize on green opportunities with our advanced sustainability analytics."
                    />
                </div>

                <SectionTitle>Connect With Us</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <AnimatedIcon name="Building" color="text-green-400" size={24} animation="pulse" />
                            <span className="ml-2">Truganina Office</span>
                        </h3>
                        <ContactInfo
                            iconName="MapPin"
                            title="Address"
                            details="Unit 41/2 Fastline Rd, Truganina VIC 3029"
                        />
                        <ContactInfo
                            iconName="Phone"
                            title="Phone"
                            details="1300 123 435"
                        />
                        <ContactInfo
                            iconName="Clock"
                            title="Hours"
                            details="Mon — Sat: 8 am — 5 pm, Sunday: CLOSED"
                        />
                    </div>
                    <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <AnimatedIcon name="Building" color="text-green-400" size={24} animation="pulse" />
                            <span className="ml-2">Launceston Office</span>
                        </h3>
                        <ContactInfo
                            iconName="MapPin"
                            title="Address"
                            details="Office 2, 187 Brisbane St, Launceston"
                        />
                        <ContactInfo
                            iconName="Mail"
                            title="Email"
                            details="contact@numberz.com.au"
                        />
                        <ContactInfo
                            iconName="Clock"
                            title="Hours"
                            details="Mon — Sat: 8 am — 5 pm, Sunday: CLOSED"
                        />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-8 rounded-lg shadow-xl mb-20 border border-gray-600 hover:border-blue-400 transition-all duration-300">
                    <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                        <AnimatedIcon name="Zap" color="text-yellow-400" size={28} animation="pulse" />
                        <span className="ml-2">How to Engage With Us</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="group">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <AnimatedIcon name="Calendar" color="text-blue-400" size={24} animation="bounce" />
                                <span className="ml-2">In-Person Appointments</span>
                            </h3>
                            <p>Book a face-to-face consultation at one of our offices. Experience our cutting-edge facilities and meet our expert team in person.</p>
                        </div>
                        <div className="group">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <AnimatedIcon name="Video" color="text-green-400" size={24} animation="pulse" />
                                <span className="ml-2">Virtual Consultations</span>
                            </h3>
                            <p>Connect with us from anywhere using our advanced holographic conferencing technology for a truly immersive remote experience.</p>
                        </div>
                        <div className="group">
                            <h3 className="text-xl font-semibold mb-3 flex items-center">
                                <AnimatedIcon name="Send" color="text-purple-400" size={24} animation="spin" />
                                <span className="ml-2">AI-Enhanced Email Support</span>
                            </h3>
                            <p>Reach out via email for 24/7 support. Our AI systems ensure rapid, accurate responses to your queries, with human oversight for complex issues.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
                        <AnimatedIcon name="Globe" color="text-blue-400" size={28} animation="spin" />
                        <span className="ml-2">Connect With Us Online</span>
                    </h2>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.facebook.com/Numberz.com.au/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center">
                            <AnimatedIcon name="Facebook" color="text-blue-400" size={24} animation="pulse" />
                            <span className="ml-2">Facebook</span>
                        </a>
                        <a href="https://g.page/r/CbKne9dK-zlYEBM/review" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 flex items-center">
                            <AnimatedIcon name="Star" color="text-yellow-400" size={24} animation="spin" />
                            <span className="ml-2">Google Reviews</span>
                        </a>
                        <a href="https://g.page/r/CbKne9dK-zlYEBM/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors duration-300 flex items-center">
                            <AnimatedIcon name="MapPin" color="text-red-400" size={24} animation="bounce" />
                            <span className="ml-2">Google Business</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}