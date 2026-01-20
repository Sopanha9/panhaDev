"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Database,
  Server,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import { TypewriterEffect } from "./TypewriterEffect";
import me from "./img/me.png"; // reusing the profile image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 overflow-hidden bg-[var(--background)]">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background Gradients (Subtle Aura) with Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-electric-blue)]/10 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 z-10">
        {/* Left Column (60%) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-[60%] flex flex-col items-start text-left space-y-8"
        >
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium text-gray-400 dark:text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>Based in Phnom Penh, Cambodia</span>
          </div>

          {/* Main Typography */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] leading-[1.1]">
              <div className="min-h-[32px] sm:min-h-[40px] md:min-h-[48px] mb-2 flex items-center">
                <TypewriterEffect
                  words={[
                    { text: "Hi there, I'm Panha 👋", className: "font-sans" },
                    { text: "Backend Developer.", className: "font-mono" },
                    { text: "System Architect.", className: "font-mono" },
                    { text: "Secure Infrastructure.", className: "font-mono" },
                    {
                      text: "សួស្ដី, ខ្ញុំឈ្មោះ បញ្ញា",
                      className: "font-khmer",
                    },
                  ]}
                  className="block text-xl sm:text-2xl md:text-3xl font-medium text-[var(--color-electric-blue)]"
                  cursorClassName="bg-[var(--color-electric-blue)] h-6 sm:h-8 md:h-10"
                />
              </div>
              Building Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-electric-blue)] to-emerald-400">
                Backend Systems.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
              A Year 2 University student with a deep passion for System
              Architecture and Backend Development. I thrive on building
              scalable solutions and constantly adapting to new technologies.
            </p>
          </div>

          {/* Tech Stack Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full py-4 border-y border-white/5 flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest font-semibold opacity-50 w-full sm:w-auto">
              Tech Stack
            </span>

            {/* Icons (Lucide proxies for simplicity as no brand icons available) */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 group cursor-help"
              >
                <Code className="w-5 h-5 group-hover:text-[var(--color-electric-blue)] transition-colors" />
                <span className="text-sm font-mono group-hover:text-white transition-colors">
                  JavaScript
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 group cursor-help"
              >
                <Server className="w-5 h-5 group-hover:text-green-500 transition-colors" />
                <span className="text-sm font-mono group-hover:text-white transition-colors">
                  Bun/Node.js
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 group cursor-help"
              >
                <ShieldCheck className="w-5 h-5 group-hover:text-purple-500 transition-colors" />
                <span className="text-sm font-mono group-hover:text-white transition-colors">
                  Kotlin
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="flex items-center gap-2 group cursor-help"
              >
                <Database className="w-5 h-5 group-hover:text-orange-500 transition-colors" />
                <span className="text-sm font-mono group-hover:text-white transition-colors">
                  Oracle/SQL
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 w-full"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[var(--color-electric-blue)] text-black font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,148,0.3)] transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
            >
              View Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://blog.panha.dev"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border border-white/20 text-[var(--foreground)] font-medium rounded-lg hover:border-[var(--color-electric-blue)] hover:text-[var(--color-electric-blue)] transition-all duration-300 text-sm sm:text-base"
            >
              Read My Blog
              <ExternalLink className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column (40%) - Professional Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-[40%] flex justify-center lg:justify-end relative w-full"
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* Aura Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-electric-blue)]/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-700 mixture-blend-overlay" />

            {/* Image */}
            <Image
              src={me}
              alt="Panha Professional Portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
              placeholder="blur"
            />

            {/* Overlay details */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-[var(--color-electric-blue)] font-mono text-sm mb-1">
                Status: Active
              </p>
              <p className="text-white text-xs opacity-60">
                Open for new opportunities
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -right-10 w-32 h-32 border border-[var(--color-electric-blue)]/20 rounded-full opacity-50 animate-pulse"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-5 -left-5 w-24 h-24 border border-purple-500/20 rounded-full opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
