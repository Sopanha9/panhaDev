"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ExternalLink, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark for this demo

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you'd use a context or next-themes here
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "https://blog.panha.dev", external: true },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0D1117]/70 backdrop-blur-md supports-[backdrop-filter]:bg-[#0D1117]/60"
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-xl font-bold tracking-tight text-white font-sans hover:text-electric-blue transition-colors">
          Panha.dev
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-electric-blue transition-colors"
          >
            {link.name}
            {link.external && (
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
          </Link>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Contact Me Button */}
        <Link
          href="#contact"
          className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white bg-electric-blue/10 border border-electric-blue/20 rounded-full hover:bg-electric-blue/20 hover:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all duration-300"
        >
          Contact Me
        </Link>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
