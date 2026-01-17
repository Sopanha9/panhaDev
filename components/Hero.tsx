"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 pt-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Box A: Main Intro (65% width approx -> using col-span-6 or 7 out of 10 matches close to 65%) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl flex flex-col justify-center relative overflow-hidden group"
        >
          {/* Decorative hover Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              <span className="block font-khmer mb-2 text-3xl md:text-4xl text-electric-blue">
                សួស្ដី, ខ្ញុំគឺ បញ្ញា
              </span>
              Hi, I&apos;m Panha
            </h1>
            
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-electric-blue rounded-full"></span>
              Backend Developer &amp; Cybersecurity Student
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed">
              I build robust, secure, and scalable backend systems. Passionate about cloud architecture, digital security, and creating seamless APIs that power modern web applications.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-electric-blue text-[#0D1117] font-bold rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(88,166,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="https://blog.panha.dev"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-gray-600 text-white font-medium rounded-lg hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5 transition-all duration-300"
              >
                Read My Blog
                <BookOpen className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Box B: The Lanyard / 3D Placeholder (35% width approx -> using col-span-4) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 h-[400px] lg:h-auto min-h-[400px]"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full bg-gradient-to-br from-[#161b22] to-[#0D1117] backdrop-blur-sm border border-white/10 rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden"
          >
             {/* Gradient glow inside Box B */}
             <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/10 via-transparent to-purple-500/10" />
             
             {/* Lanyard Placeholder */}
             <div className="relative z-10 text-center p-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-purple-500 rounded-full blur-[20px] opacity-40 animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2 font-mono">
                  &lt;InteractiveCard /&gt;
                </h3>
                <p className="text-sm text-gray-500">
                  3D Lanyard Component Loading...
                </p>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
