"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Send, Copy, Check, Mail } from "lucide-react";

/**
 * Footer component with Copy Email functionality and toast notification.
 */
const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("loznha72@gmail.com"); // Updated to user's email
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <footer className="bg-white dark:bg-[#040D06] border-t border-gray-200 dark:border-white/5 py-8 sm:py-12 relative overflow-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-2 px-4 py-2 bg-[#00FF94] text-[#040D06] rounded-full shadow-xl font-medium text-sm"
          >
            <Check className="w-4 h-4" />
            <span>Copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Left: Branding & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#040D06] dark:text-[#E0EADD] mb-2 font-sans">
              Panha
              <span className="text-[#00bfa5] dark:text-[#00FF94]">.dev</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm sm:text-base">
              Building Secure Foundations for the Digital Future.
            </p>
          </div>

          {/* Right: Socials & Action */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <SocialLink
                href="https://github.com/Sopanha9"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/so-panha-086506276/"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://t.me/S_Pnha"
                icon={<Send className="w-5 h-5" />}
                label="Telegram"
              />
            </div>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#0D1117] border border-gray-200 dark:border-white/10 hover:border-[#00bfa5] dark:hover:border-[#00FF94] transition-all"
            >
              <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-[#00bfa5] dark:group-hover:text-[#00FF94] transition-colors" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#040D06] dark:group-hover:text-white transition-colors">
                Copy Email
              </span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#00FF94]" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#00FF94] transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-xs text-gray-500 dark:text-gray-500 font-sans">
          <p>© 2026 Panha.dev — All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with Next.js & Passion</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-2 h-2 rounded-full bg-[#00FF94]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-[#00bfa5] hover:text-white dark:hover:bg-[#00FF94] dark:hover:text-[#040D06] transition-all transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export default Footer;
