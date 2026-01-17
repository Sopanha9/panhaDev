"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { User, MapPin, QrCode, Wifi } from "lucide-react";
import Image from "next/image";
import me from "./img/me.png";

/**
 * Lanyard/ID Card Component
 * Features a physics-based swing effect using Framer Motion
 */
const Lanyard = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Motion values for interaction
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Physics springs for smooth movement
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
        stiffness: 150,
        damping: 20,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Calculate normalized mouse position (-0.5 to 0.5)
        const x = (e.clientX - rect.left) / width - 0.5;
        const y = (e.clientY - rect.top) / height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-start py-10 perspective-1000">
            {/* The String/Lanyard */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-28 bg-gradient-to-b from-gray-800 to-gray-600 dark:from-gray-700 dark:to-gray-900 z-0 origin-top animate-swing-slow" />

            {/* The Clip */}
            <div className="absolute top-24 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg shadow-lg z-20 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shadow-inner" />
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full shadow-inner" />
            </div>

            {/* The Card Container */}
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative z-10 w-72 h-[420px] mt-24 cursor-grab active:cursor-grabbing"
            >
                {/* Card Content */}
                <div className="absolute inset-0 bg-white dark:bg-[#0D1117] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl flex flex-col">
                    {/* Header Band */}
                    <div className="h-32 bg-gradient-to-br from-electric-blue to-purple-600 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                        {/* Hanging hole */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-black/20 rounded-full" />

                        <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white/90">
                            <Wifi className="w-4 h-4" />
                            <span className="text-xs font-mono tracking-widest">NFC ENABLED</span>
                        </div>
                    </div>

                    {/* Profile Section */}
                    <div className="relative px-6 pb-6 flex-1 flex flex-col items-center text-center -mt-12">
                        {/* Avatar Circle */}
                        <div className="w-24 h-24 rounded-full border-4 border-white dark:border-[#0D1117] bg-gray-100 dark:bg-gray-800 shadow-lg flex items-center justify-center overflow-hidden mb-4 relative z-10 group">
                            <Image
                                src={me}
                                alt="Panha"
                                className="w-full h-full object-cover"
                                placeholder="blur"
                            />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Panha</h2>
                        <p className="text-sm font-medium text-electric-blue mb-4">Backend Developer</p>

                        {/* Info Grid */}
                        <div className="w-full grid grid-cols-2 gap-3 mb-6">
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                                <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Level</span>
                                <span className="block text-sm font-semibold dark:text-gray-200">Admin</span>
                            </div>
                            <div className="bg-gray-50 dark:bg-white/5 p-3 rounded-xl border border-gray-100 dark:border-white/5">
                                <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">ID No.</span>
                                <span className="block text-sm font-mono dark:text-gray-200">0182</span>
                            </div>
                        </div>

                        {/* Footer / QR */}
                        <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-0.5">
                                    <MapPin className="w-3 h-3" />
                                    Phnom Penh
                                </div>
                                <div className="text-[10px] text-gray-400">Joined 2024</div>
                            </div>
                            <QrCode className="w-10 h-10 text-gray-800 dark:text-white opacity-80" />
                        </div>
                    </div>

                    {/* Glass Glare Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                </div>
            </motion.div>
        </div>
    );
};

export default Lanyard;
