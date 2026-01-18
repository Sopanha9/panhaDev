"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Hash,
  Globe,
  ExternalLink,
  Github,
  ArrowRight,
  Loader2,
  Calendar,
  Mail,
  Send,
  Code2,
  Layers,
  Eye,
} from "lucide-react";

const FeaturedProjects = () => {
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

  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-[#040D06] text-[#040D06] dark:text-[#E0EADD] overflow-hidden transition-colors duration-500"
    >
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-[#00FF94]/5 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 dark:bg-emerald-500/5 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-inter tracking-tight mb-4 text-[#040D06] dark:text-[#E0EADD]">
            Technical Implementation{" "}
            <span className="text-[#059669] dark:text-[#00FF94]">Projects</span>
          </h2>
          <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-lg max-w-2xl font-inter">
            A curated selection of real-world solutions and technical
            experiments showcasing full-stack development and system
            architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Project 1: UtilityBilling - PRIMARY FEATURED */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-[#F8FAF9] dark:bg-[#0A1A0F]/80 backdrop-blur-md border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative hover:border-[#059669]/50 dark:hover:border-[#00FF94]/50 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-[0_0_20px_rgba(0,255,148,0.1)]"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#059669]/10 dark:bg-[#00FF94]/10 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-full text-xs font-medium text-[#059669] dark:text-[#00FF94] flex items-center gap-1 font-inter">
              <Briefcase size={12} />
              Featured
            </div>

            {/* Icon */}
            <div className="mb-6 mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-emerald-600 dark:from-[#00FF94] dark:to-emerald-400 flex items-center justify-center text-white">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <h3 className="text-2xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD] group-hover:text-[#059669] dark:group-hover:text-[#00FF94] transition-colors font-inter">
                UtilityBilling
              </h3>
              <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-sm leading-relaxed mb-4 font-inter">
                A comprehensive utility billing system built for real-world
                business operations. Features automated invoice generation,
                payment tracking, and detailed analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#059669]/10 dark:bg-[#00FF94]/10 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-full text-xs text-[#059669] dark:text-[#00FF94] font-medium font-inter">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Business Solution
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/Sopanha9/UtilityBilling",
                    "_blank",
                  )
                }
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#059669]/10 dark:bg-[#00FF94]/10 hover:bg-[#059669]/20 dark:hover:bg-[#00FF94]/20 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-xl text-sm font-medium text-[#059669] dark:text-[#00FF94] transition-all group/btn font-inter"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/Sopanha9/UtilityBilling",
                    "_blank",
                  )
                }
                className="w-10 h-10 flex items-center justify-center bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-[#040D06] dark:text-[#E0EADD] transition-all"
              >
                <Github size={18} />
              </button>
            </div>
          </motion.div>

          {/* Project 2: Student Management System - PRIMARY FEATURED */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-[#F8FAF9] dark:bg-[#0A1A0F]/80 backdrop-blur-md border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative hover:border-[#059669]/50 dark:hover:border-[#00FF94]/50 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-[0_0_20px_rgba(0,255,148,0.1)]"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#059669]/10 dark:bg-[#00FF94]/10 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-full text-xs font-medium text-[#059669] dark:text-[#00FF94] flex items-center gap-1 font-inter">
              <Hash size={12} />
              Featured
            </div>

            {/* Icon */}
            <div className="mb-6 mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669] to-emerald-600 dark:from-[#00FF94] dark:to-emerald-400 flex items-center justify-center text-white">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <h3 className="text-2xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD] group-hover:text-[#059669] dark:group-hover:text-[#00FF94] transition-colors font-inter">
                Student Management System
              </h3>
              <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-sm leading-relaxed mb-4 font-inter">
                Advanced student information system featuring a custom hash
                table implementation for optimized data retrieval. Deep dive
                into data structures and algorithms.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#059669]/10 dark:bg-[#00FF94]/10 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-full text-xs text-[#059669] dark:text-[#00FF94] font-medium font-inter">
                  C#
                </span>
                <span className="px-3 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Custom Hash Table
                </span>
                <span className="px-3 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Algorithms
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  window.open("https://github.com/Sopanha9/hashing", "_blank")
                }
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#059669]/10 dark:bg-[#00FF94]/10 hover:bg-[#059669]/20 dark:hover:bg-[#00FF94]/20 backdrop-blur-sm border border-[#059669]/20 dark:border-[#00FF94]/20 rounded-xl text-sm font-medium text-[#059669] dark:text-[#00FF94] transition-all group/btn font-inter"
              >
                <span>View Project</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/Sopanha9/hashing", "_blank")
                }
                className="w-10 h-10 flex items-center justify-center bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-[#040D06] dark:text-[#E0EADD] transition-all"
              >
                <Github size={18} />
              </button>
            </div>
          </motion.div>

          {/* Project 3: Blog CMS */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-gray-50 dark:bg-[#0A1A0F]/80 backdrop-blur-md border border-gray-200 dark:border-[#E0EADD]/10 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative hover:border-[#059669]/30 dark:hover:border-[#00FF94]/30 transition-all duration-300 shadow-sm hover:shadow"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs font-medium text-[#040D06]/70 dark:text-[#E0EADD]/70 flex items-center gap-1 font-inter">
              <Code2 size={12} />
              CMS
            </div>

            {/* Icon */}
            <div className="mb-6 mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669]/80 to-emerald-500/80 dark:from-[#00FF94]/20 dark:to-emerald-500/20 border border-[#059669]/20 dark:border-[#00FF94]/20 flex items-center justify-center text-[#059669] dark:text-[#00FF94]">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <h3 className="text-xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD] group-hover:text-[#059669] dark:group-hover:text-[#00FF94] transition-colors font-inter">
                Blog CMS
              </h3>
              <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-sm leading-relaxed mb-4 font-inter">
                Full-featured content management system with Django admin panel,
                content creation, and publishing workflow.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Python
                </span>
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Django
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  window.open("https://github.com/Sopanha9/blog-django-v3", "_blank")
                }
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-sm font-medium text-[#040D06]/70 dark:text-[#E0EADD]/70 transition-all group/btn font-inter"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/Sopanha9/blog_cms", "_blank")
                }
                className="w-10 h-10 flex items-center justify-center bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-[#040D06] dark:text-[#E0EADD] transition-all"
              >
                <Github size={16} />
              </button>
            </div>
          </motion.div>

          {/* Project 4: Travel Cambodia (CamTour) */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-gray-50 dark:bg-[#0A1A0F]/80 backdrop-blur-md border border-gray-200 dark:border-[#E0EADD]/10 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative hover:border-[#059669]/30 dark:hover:border-[#00FF94]/30 transition-all duration-300 shadow-sm hover:shadow"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs font-medium text-[#040D06]/70 dark:text-[#E0EADD]/70 flex items-center gap-1 font-kantumruy">
              <Globe size={12} />
              ភាសាខ្មែរ
            </div>

            {/* Icon */}
            <div className="mb-6 mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#059669]/80 to-emerald-500/80 dark:from-[#00FF94]/20 dark:to-emerald-500/20 border border-[#059669]/20 dark:border-[#00FF94]/20 flex items-center justify-center text-[#059669] dark:text-[#00FF94]">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <h3 className="text-xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD] group-hover:text-[#059669] dark:group-hover:text-[#00FF94] transition-colors font-kantumruy">
                Travel Cambodia (CamTour)
              </h3>
              <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-sm leading-relaxed mb-4 font-inter">
                Tourism website with full Khmer language support, featuring tour
                booking via email and Telegram.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Khmer
                </span>
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/70 dark:text-[#E0EADD]/70 font-medium font-inter">
                  Tourism
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  window.open("https://camtour.netlify.app/", "_blank")
                }
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-sm font-medium text-[#040D06]/70 dark:text-[#E0EADD]/70 transition-all group/btn font-inter"
              >
                <span>View</span>
                <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() =>
                    window.open(
                      "mailto:?subject=Booking Inquiry - Travel Cambodia",
                      "_blank",
                    )
                  }
                  className="w-10 h-10 flex items-center justify-center bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-[#040D06] dark:text-[#E0EADD] transition-all"
                >
                  <Mail size={14} />
                </button>
                <button
                  onClick={() => window.open("https://t.me/", "_blank")}
                  className="w-10 h-10 flex items-center justify-center bg-[#040D06]/5 dark:bg-[#E0EADD]/5 hover:bg-[#040D06]/10 dark:hover:bg-[#E0EADD]/10 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-[#040D06] dark:text-[#E0EADD] transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Project 5: Khmer Holiday API - COMING SOON */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group bg-blue-50/50 dark:bg-[#0A1A0F]/60 backdrop-blur-md border-2 border-dashed border-blue-200 dark:border-[#E0EADD]/20 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative transition-all duration-300"
          >
            {/* WIP Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/10 dark:bg-blue-400/10 backdrop-blur-sm border border-blue-500/20 dark:border-blue-400/20 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center gap-2 animate-pulse font-inter">
              <Loader2 size={12} className="animate-spin" />
              Coming Soon
            </div>

            {/* Icon */}
            <div className="mb-6 mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-400/10 dark:to-cyan-400/10 border border-blue-500/20 dark:border-blue-400/20 flex items-center justify-center text-blue-600 dark:text-blue-400 relative">
                <Calendar className="w-7 h-7" />
                <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-400/5 rounded-2xl animate-pulse" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 mb-6">
              <h3 className="text-xl font-bold mb-3 text-[#040D06]/70 dark:text-[#E0EADD]/70 transition-colors font-kantumruy">
                Khmer Holiday API
              </h3>
              <p className="text-[#040D06]/50 dark:text-[#E0EADD]/50 text-sm leading-relaxed mb-4 font-inter">
                RESTful API providing Cambodian public holiday data for calendar
                and scheduling applications.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/50 dark:text-[#E0EADD]/50 font-medium font-inter">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-xs text-[#040D06]/50 dark:text-[#E0EADD]/50 font-medium font-inter">
                  REST API
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-xl text-sm font-medium text-[#040D06]/30 dark:text-[#E0EADD]/30 cursor-not-allowed font-inter"
              >
                <span>In Development</span>
                <Loader2 className="w-3 h-3 animate-spin" />
              </button>
            </div>
          </motion.div>

          {/* View More Projects Card - Links to GitHub */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://github.com/Sopanha9", "_blank")}
            className="group bg-gradient-to-br from-emerald-50 to-green-50 dark:from-[#00FF94]/10 dark:to-emerald-400/10 backdrop-blur-md border border-emerald-200 dark:border-[#00FF94]/30 rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden relative hover:border-emerald-300 dark:hover:border-[#00FF94]/50 transition-all duration-300 cursor-pointer min-h-[320px] shadow-sm hover:shadow-md"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10">
              <div className="absolute top-4 left-4">
                <Code2
                  size={40}
                  className="text-[#059669] dark:text-[#00FF94]"
                />
              </div>
              <div className="absolute bottom-4 right-4">
                <Layers
                  size={40}
                  className="text-[#059669] dark:text-[#00FF94]"
                />
              </div>
            </div>

            {/* Icon */}
            <div className="mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#059669]/20 dark:bg-[#00FF94]/20 flex items-center justify-center text-[#059669] dark:text-[#00FF94] group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD] group-hover:text-[#059669] dark:group-hover:text-[#00FF94] transition-colors font-inter">
                View More Projects
              </h3>
              <p className="text-[#040D06]/70 dark:text-[#E0EADD]/70 text-sm leading-relaxed mb-6 font-inter">
                Explore additional school projects, experiments, and technical
                implementations on GitHub.
              </p>

              {/* GitHub Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#040D06]/5 dark:bg-[#E0EADD]/5 backdrop-blur-sm border border-[#040D06]/10 dark:border-[#E0EADD]/10 rounded-full text-sm font-medium text-[#040D06] dark:text-[#E0EADD] group-hover:border-[#059669]/30 dark:group-hover:border-[#00FF94]/30 transition-all font-inter">
                <Github size={16} />
                <span>@Sopanha9</span>
                <ExternalLink
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
