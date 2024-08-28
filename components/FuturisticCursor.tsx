'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface FuturisticCursorProps {
    mousePosition: { x: number; y: number };
}

const FuturisticCursor: React.FC<FuturisticCursorProps> = ({ mousePosition }) => {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-blue-500 rounded-full mix-blend-screen pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-blue-300 rounded-full mix-blend-screen pointer-events-none z-50"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
        </>
    );
};

export default FuturisticCursor;