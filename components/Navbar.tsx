"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink, Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        // Hide if scrolling down AND we've scrolled past a threshold
        // AND the mobile menu is NOT open
        if (currentScrollY > lastScrollY.current && currentScrollY > 50 && !isMobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "https://blog.panha.dev", external: true },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 flex flex-col gap-2"
      >
        {/* Main Navbar Bar */}
        <div className="flex items-center justify-between px-6 py-3 rounded-full border border-gray-200/50 dark:border-white/10 bg-white/70 dark:bg-[#0D1117]/80 backdrop-blur-md shadow-lg dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0D1117]/60">

          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-white font-sans hover:text-electric-blue dark:hover:text-electric-blue transition-colors ml-2"
            >
              Panha<span className="text-[var(--color-electric-blue)] font-mono">.dev</span>
            </Link>
          </div>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-electric-blue dark:hover:text-electric-blue transition-colors"
              >
                {link.name}
                {link.external && (
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                )}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 mr-2">
            {/* Contact Me Button (Desktop) */}
            <Link
              href="#contact"
              className="hidden sm:inline-flex px-5 py-2 text-sm font-medium text-electric-blue dark:text-white bg-electric-blue/10 border border-electric-blue/20 rounded-full hover:bg-electric-blue/20 hover:shadow-[0_0_15px_rgba(88,166,255,0.3)] transition-all duration-300"
            >
              Contact Me
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-electric-blue/50"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden w-full rounded-3xl border border-gray-200/50 dark:border-white/10 bg-white/70 dark:bg-[#0D1117]/80 backdrop-blur-md shadow-lg"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-electric-blue dark:hover:text-electric-blue transition-all"
                  >
                    {link.name}
                    {link.external && (
                      <ExternalLink className="w-4 h-4 opacity-70" />
                    )}
                  </Link>
                ))}

                <div className="h-px bg-gray-200 dark:bg-white/10 my-1" />

                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center px-4 py-3 rounded-xl text-base font-medium text-electric-blue dark:text-white bg-electric-blue/10 border border-electric-blue/20 hover:bg-electric-blue/20 transition-all"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
