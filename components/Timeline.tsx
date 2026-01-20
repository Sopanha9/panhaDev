"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Quote, BookOpen, Code, ShieldCheck } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const timelineData: TimelineItem[] = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Wrote my first lines of code and discovered a passion for logic and problem-solving.",
    icon: Code,
  },
  {
    year: "2023",
    title: "Building Foundations",
    description: "Enrolled in short course at Uddompang learning platform.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "University Journey",
    description:
      "Graduate from high school & Enrolled in Computer Science at ACLEDA University.",
    icon: Calendar,
  },
  {
    year: "2025",
    title: "Web Development & Leadership",
    description: "Built lots of academic projects and lead my own team.",
    icon: Quote,
  },
  {
    year: "2026 (Present)",
    title: "The Architect",
    description:
      "Focusing on Backend Security, Public APIs and sharing insights via PanhaInsight.",
    icon: ShieldCheck,
  },
];

const Timeline = () => {
  return (
    <div className="w-full relative mt-24 md:mt-32">
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sans dark:text-white text-gray-900 mb-4">
            Life Long{" "}
            <span className="text-neo-mint drop-shadow-[0_0_10px_rgba(0,255,148,0.5)]">
              Learning Journey
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            My path from entering the world of code to becoming a software
            architect.
          </p>
        </motion.div>

        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-40 md:top-32 bottom-20 md:bottom-10 w-0.5 bg-gradient-to-b from-neo-mint/0 via-neo-mint/50 to-neo-mint/0 md:-translate-x-1/2 rounded-full h-auto">
          <div className="absolute top-0 bottom-0 w-full h-full bg-neo-mint blur-[4px] opacity-40"></div>
        </div>

        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItemCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItemCard = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Date/Icon Node */}
      <div className="md:absolute left-[2px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-midnight border-2 border-neo-mint shadow-[0_0_15px_rgba(0,255,148,0.4)] z-10 shrink-0">
        <item.icon size={18} className="text-neo-mint" />
      </div>

      {/* Content Side */}
      <div
        className={`w-full md:w-1/2 ${isEven ? "md:pl-16 pl-12" : "md:pr-16 pl-12"}`}
      >
        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-4 sm:p-6 rounded-2xl hover:border-neo-mint/30 transition-colors duration-300 relative group backdrop-blur-sm">
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-neo-mint/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

          <span className="inline-block px-3 py-1 mb-2 text-xs font-mono font-medium text-neo-mint bg-neo-mint/10 rounded-full border border-neo-mint/20">
            {item.year}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 font-sans group-hover:text-neo-mint transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-khmer text-sm sm:text-base">
            {item.description}
          </p>
        </div>
      </div>

      {/* Empty Side for Desktop layout balance if needed, represented by margin in flex-row */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
};

export default Timeline;
