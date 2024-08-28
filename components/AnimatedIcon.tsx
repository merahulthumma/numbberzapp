'use client'

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface AnimatedIconProps {
    name: keyof typeof LucideIcons;
    color?: string;
    size?: number;
    animation?: 'pulse' | 'spin' | 'bounce';
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
                                                       name,
                                                       color = 'text-blue-400',
                                                       size = 24,
                                                       animation = 'pulse'
                                                   }) => {
    const Icon = LucideIcons[name];

    const animationClass = {
        pulse: 'animate-pulse',
        spin: 'animate-spin',
        bounce: 'animate-bounce'
    }[animation];

    if (!Icon) {
        console.error(`Icon "${name}" not found`);
        return null;
    }

    return (
        <div className={`${animationClass}`}>
            <Icon className={`${color}`} size={size} />
        </div>
    );
};

export default AnimatedIcon;