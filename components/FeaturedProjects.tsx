"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Globe,
  Loader2,
  Play,
  Mail,
  Send,
} from "lucide-react";

// --- Types ---
type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string; // Markdown-style breakdown
  techStack: string[];
  links: {
    demo?: string;
    github?: string;
    email?: string;
    telegram?: string;
  };
  videoSrc: string;
  isWip?: boolean;
  featured?: boolean;
};

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: "utility-billing",
    title: "UtilityBilling",
    tagline: "Automated Enterprise Invoicing",
    description:
      "A comprehensive utility billing system built for real-world business operations.",
    longDescription: `
### Technical Architecture
Built as a robust solution for managing complex utility billing cycles. The system handles automated meter reading imports, invoice generation based on tiered pricing models, and payment reconciliation.

- **Frontend**: Responsive dashboard for admin management (React).
- **Backend logic**: Complex calculation engines for tiered usage rates (Node.js).
- **Data Persistence**: Secure transactions and audit logs (MongoDB).

### Key Features
- Automated Invoice Generation
- Payment Tracking & History
- Customer Management Portal
- Advanced Reporting & Analytics
    `,
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      github: "https://github.com/Sopanha9/UtilityBilling",
      demo: "https://eneang-billing-frontend.vercel.app/",
    },
    videoSrc: "/gif/Utility_frontend.mp4",
    featured: true,
  },
  {
    id: "hashing",
    title: "Student Management System",
    tagline: "High-Performance Data Structures",
    description:
      "Advanced system featuring custom hash table algorithms for O(1) retrieval.",
    longDescription: `
### Algorithmic Core
This project focuses on the implementation of a custom **Hash Table** from scratch to manage large datasets of student records with constant-time complexity for lookups.

- **Collision Resolution**: Implemented chaining/open addressing to handle data density.
- **Memory Management**: Optimized for low footprint while maintaining speed.
- **Algorithms**: Custom sorting and search implementations.

### System Capabilities
- Instant Student Lookup
- Grade Management & averaging
- Course Registration conflicts detection
    `,
    techStack: ["C#", "Algorithms", "Data Structures"],
    links: {
      github: "https://github.com/Sopanha9/hashing",
      demo: "https://github.com/Sopanha9/hashing",
    },
    videoSrc: "/gif/gif.mp4",
    featured: true,
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    tagline: "Full-Scale Content Publishing",
    description:
      "Complete content management system with powerful admin controls.",
    longDescription: `
### Backend Architecture
A production-ready CMS built with Django. It features a permission-based system for authors, editors, and administrators.

- **Authentication**: Secure user sessions and role-based access control (RBAC).
- **Media Handling**: Image optimization and file storage management.
- **Database Design**: Normalized schema for posts, categories, and tags.

### Workflow
1. Draft Creation (Markdown support)
2. Editorial Review
3. Scheduled Publishing
    `,
    techStack: ["Python", "Django", "SQL"],
    links: {
      github: "https://github.com/Sopanha9/blog_cms",
      demo: "https://github.com/Sopanha9/blog-django-v3",
    },
    videoSrc: "/gif/gif.mp4",
  },
  {
    id: "camtour",
    title: "CamTour",
    tagline: "Tourism Platform for Cambodia",
    description: "Multilingual booking platform connecting tourists with local experiences.",
    longDescription: `
### Localization & UX
Designed with a focus on accessibility for both local Khmer speakers and international tourists. The platform facilitates direct connections between guides and travelers.

- **i18n Support**: Full seamless switching between English and Khmer.
- **Communication Bridge**: Integration with Telegram API for instant booking confirmations.
- **Responsive Design**: Mobile-first approach for travelers on the go.
    `,
    techStack: ["Khmer Language", "Tourism", "Web Integration"],
    links: {
      demo: "https://camtour.netlify.app/",
      email: "mailto:?subject=Booking Inquiry - Travel Cambodia",
      telegram: "https://t.me/",
    },
    videoSrc: "/gif/gif.mp4",
  },
  {
    id: "holiday-api",
    title: "Khmer Holiday API",
    tagline: "Public Holiday Data Service",
    description: "RESTful API serving accurate Cambodian holiday schedules.",
    longDescription: `
### API Design
A clean, documented RESTful API designed for developers building calendar or scheduling apps in Cambodia.

- **Endpoints**: Fetch holidays by year, month, or specific date.
- **Data Accuracy**: Verified against official government decrees.
- **Performance**: Caching layer for high-frequency requests.

*Currently in active development with plans for GraphQL support.*
    `,
    techStack: ["Node.js", "REST API", "Backend"],
    links: {},
    videoSrc: "/gif/gif.mp4",
    isWip: true,
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#040D06] text-[#E0EADD] overflow-hidden">
      {/* --- Ambient Background --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00FF94]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-inter tracking-tight mb-4 text-[#E0EADD]">
            Featured <span className="text-[#00FF94]">Projects</span>
          </h2>
          <p className="text-[#E0EADD]/60 text-lg max-w-2xl font-inter">
            A selection of technical implementations ranging from enterprise solutions to algorithmic experiments.
          </p>
        </motion.div>

        {/* --- Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}

          {/* View More Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: PROJECTS.length * 0.1 }}
            onClick={() => window.open("https://github.com/Sopanha9", "_blank")}
            className="group relative rounded-3xl border border-[#00FF94]/10 bg-[#0A1A0F]/50 backdrop-blur-sm p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#00FF94]/30 hover:bg-[#00FF94]/5 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-[#00FF94]/10 flex items-center justify-center text-[#00FF94] mb-6 group-hover:scale-110 transition-transform">
              <Github className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#E0EADD] mb-2">View More</h3>
            <p className="text-center text-[#E0EADD]/50 text-sm">
              Explore more experiments on GitHub
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// --- Sub-Components ---

const ProjectCard = ({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#00FF94]/30 transition-colors duration-500 ${project.featured ? "md:col-span-2" : "md:col-span-1"
        }`}
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.isWip ? "blur-sm opacity-50" : "opacity-100"
            }`}
        >
          <source src={project.videoSrc} type="video/mp4" />
        </video>
        {/* Dark Overlay - Adjusted to be lighter so video shows through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040D06] via-[#040D06]/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60" />
      </div>

      {/* Content Positioned Bottom-Left */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col items-start gap-2">
        {project.isWip && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-md mb-2">
            <Loader2 className="w-3 h-3 animate-spin" /> In Development
          </span>
        )}

        <motion.h3
          layoutId={`title-${project.id}`}
          className="text-2xl md:text-3xl font-bold text-white font-inter"
        >
          {project.title}
        </motion.h3>

        <motion.p
          layoutId={`tagline-${project.id}`}
          className="text-[#00FF94] font-medium text-sm md:text-base"
        >
          {project.tagline}
        </motion.p>
      </div>

      {/* Play Icon Hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none">
        <Play className="w-6 h-6 text-white fill-current" />
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#040D06]/80 backdrop-blur-sm"
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`card-${project.id}`}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A1A0F] border border-[#00FF94]/20 rounded-[2rem] shadow-[0_0_50px_rgba(0,255,148,0.1)] flex flex-col custom-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/70 hover:text-white hover:bg-black/60 transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Video Header */}
        <div className="relative w-full h-[300px] md:h-[400px] flex-shrink-0 bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src={project.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A0F] to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <motion.h2
              layoutId={`title-${project.id}`}
              className="text-3xl md:text-5xl font-bold text-white mb-2 font-inter"
            >
              {project.title}
            </motion.h2>
            <motion.p
              layoutId={`tagline-${project.id}`}
              className="text-[#00FF94] text-lg font-medium"
            >
              {project.tagline}
            </motion.p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-8">
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full bg-[#00FF94]/10 border border-[#00FF94]/20 text-[#00FF94] text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-invert prose-emerald max-w-none">
            <p className="text-xl text-[#E0EADD]/90 leading-relaxed font-light">
              {project.description}
            </p>
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#00FF94]/20 to-transparent" />

            {/* Markdown-style Render */}
            <div className="text-[#E0EADD]/70 space-y-6 whitespace-pre-line leading-relaxed">
              {project.longDescription}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {project.links.demo && (
              <button
                onClick={() => window.open(project.links.demo, "_blank")}
                className="flex items-center gap-2 px-6 py-3 bg-[#00FF94] text-[#040D06] rounded-xl font-bold hover:bg-[#00cc76] transition-colors shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
            {project.links.github && (
              <button
                onClick={() => window.open(project.links.github, "_blank")}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
              </button>
            )}
            {project.links.email && (
              <button
                onClick={() => window.open(project.links.email, "_blank")}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email Booking</span>
              </button>
            )}
            {project.links.telegram && (
              <button
                onClick={() => window.open(project.links.telegram, "_blank")}
                className="flex items-center gap-2 px-6 py-3 bg-[#0088cc]/10 border border-[#0088cc]/30 text-[#0088cc] rounded-xl font-medium hover:bg-[#0088cc]/20 transition-colors"
              >
                <Send className="w-5 h-5" />
                <span>Telegram</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Add custom scrollbar styles to global css if needed, or inline here
// For now relying on standard overflow-auto

export default FeaturedProjects;
