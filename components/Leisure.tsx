"use client";

import { motion } from "framer-motion";
import { PenTool, Video, BookOpen, ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";

const Leisure = () => {
    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-white/5 dark:bg-[#040D06] relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#00FF94]/5 rounded-full blur-3xl opacity-20" />
                <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#00bfa5]/5 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-sans text-[#040D06] dark:text-[#E0EADD]">
                        Beyond the <span className="text-[#00bfa5] dark:text-[#00FF94]">Code</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl font-sans text-sm sm:text-base">
                        Exploring the intersection of creativity, philosophy, and technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(250px,auto)]">
                    {/* Card 1: Writing & Philosophy */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-2 bg-white/50 dark:bg-[#0D1117]/50 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-[#00bfa5]/30 dark:hover:border-[#00FF94]/30 transition-all group overflow-hidden relative">
                    
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                            <PenTool className="w-24 h-24 text-[#00bfa5] dark:text-[#00FF94]" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-[#00bfa5]/10 dark:bg-[#00FF94]/10 flex items-center justify-center mb-6 text-[#00bfa5] dark:text-[#00FF94]">
                                    <PenTool className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#040D06] dark:text-[#E0EADD]">Philosophical Writing</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-sans leading-relaxed text-sm sm:text-base">
                                    I enjoy exploring the intersection of technology and philosophy through my blog, <span className="font-semibold text-[#00bfa5] dark:text-[#00FF94]">PanhaInsight</span>.
                                    Reflecting on how digital foundations shape our human experience.
                                </p>
                            </div>

                            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-[#00bfa5] dark:text-[#00FF94] hover:gap-3 transition-all">
                                Read Articles <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Card 2: Video Editing */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-1 bg-black/90 dark:bg-black rounded-3xl overflow-hidden relative group min-h-[300px]"
                    >
                        {/* Placeholder for Video/GIF */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-700">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                            >
                                <source src="/gif/gif.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 text-white">
                                <Video className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Cinematic Editing</h3>
                            <p className="text-gray-300 text-sm">
                                Passion for Cinematic Macro Video Editing. Capturing details often overlooked.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: The Reader */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="md:col-span-3 bg-gradient-to-br from-[#F5F5F3] to-white dark:from-[#0D1117] dark:to-[#161b22] border border-gray-200 dark:border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 group"
                    >
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-[#040D06] dark:text-[#E0EADD]">Lifelong Learner</h3>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                                A testament to my love for reading and continuous self-improvement. Since starting my journey in 2022, books have been my mentors, guiding me through the complexities of life and code.
                            </p>
                        </div>

                        <div className="relative w-full md:w-1/3 h-24 md:h-full flex items-center justify-center md:justify-end opacity-50 group-hover:opacity-80 transition-opacity">
                            {/* Visual motif for reading */}
                            <div className="flex gap-1 items-end">
                                <div className="w-4 h-16 bg-[#040D06] dark:bg-[#E0EADD] rounded-sm transform rotate-[-5deg]" />
                                <div className="w-4 h-20 bg-[#00bfa5] dark:bg-[#00FF94] rounded-sm transform rotate-[0deg] -mt-2" />
                                <div className="w-4 h-14 bg-gray-400 rounded-sm transform rotate-[5deg]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Leisure;
