"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Palette,
  Terminal,
  Cpu,
  Globe,
  Github,
  Send,
  Mail,
  MapPin,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-midnight text-gray-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements with Parallax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 dark:bg-electric-blue/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neo-mint/5 dark:bg-neo-mint/5 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tight mb-4">
            About{" "}
            <span className="text-electric-blue dark:text-electric-blue">
              Me
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
            More than just code—I build digital products that solve real
            problems. Here's a glimpse into my world.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* 1. Main Profile Card (2x2 on desktop) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className="md:col-span-2 md:row-span-2 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group transition-colors duration-300"
          >
            <div className="z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-electric-blue to-purple-500 border-2 border-gray-300 dark:border-white/20 overflow-hidden relative">
                  <Image
                    src="/img/about.jpg"
                    alt="Panha"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Panha
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <MapPin
                      size={14}
                      className="text-electric-blue dark:text-electric-blue"
                    />
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate developer with a knack for creating beautiful,
                performant web applications. I treat every line of code as an
                art form, ensuring the final product is not just functional but
                delightful to use.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  Full Stack Dev
                </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  UI/UX Enthusiast
                </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  Problem Solver
                </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  Quick Learner
                </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  Team Player
                </span>
                <span className="px-3 py-1 bg-gray-200 dark:bg-white/10 rounded-full text-sm text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-white/20 transition-colors cursor-default">
                  Self-Taught
                </span>
              </div>
            </div>

            {/* Abstract Decorative Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-electric-blue/10 dark:bg-electric-blue/20 rounded-full blur-3xl group-hover:bg-electric-blue/20 dark:group-hover:bg-electric-blue/30 transition-colors duration-500" />
          </motion.div>

          {/* 2. Education Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
            className="md:col-span-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 relative overflow-hidden group hover:border-electric-blue/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-gray-900 dark:text-white">
              <GraduationCap size={80} />
            </div>
            <div className="h-full flex flex-col justify-between z-10 relative">
              <div className="bg-electric-blue/10 dark:bg-electric-blue/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-electric-blue dark:text-electric-blue">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                  Education
                </h3>
                <h4 className="text-gray-800 dark:text-white/90 font-medium">
                  CS Degree
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ACLEDA University of Business (AUB){" "}
                </p>
                <p className="text-electric-blue text-xs mt-2 font-mono">
                  2024 - Present
                </p>
              </div>
            </div>
          </motion.div>

          {/* 3. Tech Stack / Skills */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
            className="md:col-span-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 transition-colors duration-300"
          >
            <div className="bg-neo-mint/10 dark:bg-neo-mint/10 w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-neo-mint dark:text-neo-mint">
              <Code2 size={20} />
            </div>
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
              Stack
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                React
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                Next.js
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                JavaScript
              </span>
              <span className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Bun/Node.js
              </span>
            </div>
          </motion.div>

          {/* 4. Experience / Current Status */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.3 } }}
            animate={floatAnimation}
            className="md:col-span-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center gap-2 group cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 dark:bg-green-500/20 flex items-center justify-center text-green-400 dark:text-green-400 mb-2 relative">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 dark:bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 dark:bg-green-500"></span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Status</p>
            <p className="text-gray-900 dark:text-white font-medium">
              Open to work
            </p>
          </motion.div>

          {/* 5. Connect / Socials */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-1 bg-[#0088cc]/10 dark:bg-[#0088cc]/10 border border-[#0088cc]/20 dark:border-[#0088cc]/20 hover:bg-[#0088cc]/20 dark:hover:bg-[#0088cc]/20 rounded-3xl p-6 flex flex-col justify-center items-center gap-3 transition-colors cursor-pointer group"
            onClick={() => window.open("https://t.me/S_Pnha", "_blank")}
          >
            <Send className="w-8 h-8 text-[#0088cc] dark:text-[#0088cc] group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Let's Connect
            </span>
          </motion.div>

          {/* 6. GitHub */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-1 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 rounded-3xl p-6 flex flex-col justify-center items-center gap-3 transition-colors cursor-pointer group"
            onClick={() => window.open("https://github.com/Sopanha9", "_blank")}
          >
            <Github className="w-8 h-8 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Check Code
            </span>
          </motion.div>

          {/* 7. Hobbies / Personal */}
          <motion.div
            variants={itemVariants}
            whileHover={{
              y: -5,
              scale: 1.03,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
            className="md:col-span-1 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 dark:from-yellow-500/10 dark:to-orange-500/10 border border-yellow-500/20 dark:border-yellow-500/20 rounded-3xl p-6 flex flex-col justify-between transition-colors duration-300"
          >
            <div className="flex justify-between items-start">
              <Sparkles className="text-yellow-400 dark:text-yellow-400" />
              <Lightbulb className="text-yellow-400/80 dark:text-yellow-400/80" />
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                Obsession
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                Curiosity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
