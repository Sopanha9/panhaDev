"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, ShieldCheck, Server, Database, Code } from "lucide-react";
import Image from "next/image";
import me from "./img/me.png";

const Terminal = () => {
    const [text, setText] = useState("");
    const fullText = `> initiating_handshake...
> connecting_to_server... [200 OK]
> fetching_user_profile...
> user: "Panha"
> role: "Backend Developer"
> skills: ["Node.js", "Go", "Docker", "K8s"]
> security_clearance: "Level 5"
> status: "Ready to deploy"
> _`;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [fullText]);

    return (
        <div className="w-full h-full flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-[#0D1117] dark:bg-black/80 rounded-xl overflow-hidden border border-gray-800 shadow-2xl font-mono text-sm relative group"
            >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                {/* Terminal Header */}
                <div className="relative z-10 bg-gray-900 border-b border-gray-800 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <TerminalIcon className="w-3 h-3" />
                        <span>sys_admin@panha.dev</span>
                    </div>
                    <div className="w-10" /> {/* Spacer for balance */}
                </div>

                {/* Terminal Body */}
                <div className="relative z-10 p-6 min-h-[300px] text-gray-300 flex gap-4">
                    {/* Left: Typing Text */}
                    <div className="flex-1 flex flex-col gap-1 z-20">
                        {text.split("\n").map((line, i) => (
                            <div key={i} className={`break-words ${line.includes("user:") ? "text-electric-blue" : line.includes("status:") ? "text-green-400" : ""}`}>
                                {line}
                            </div>
                        ))}
                    </div>

                    {/* Right: Profile Image scan */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-2 pt-2">
                        <div className="relative w-24 h-24 rounded-full border-2 border-electric-blue/50 p-1">
                            <div className="absolute inset-0 rounded-full border border-electric-blue/20 animate-ping opacity-20"></div>
                            <div className="w-full h-full rounded-full overflow-hidden relative">
                                <Image
                                    src={me}
                                    alt="Panha"
                                    className="w-full h-full object-cover opacity-80"
                                    placeholder="blur"
                                />
                                {/* Green Scan Overlay */}
                                <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-green-400 font-bold uppercase tracking-wider bg-green-500/10 px-2 py-1 rounded-full border border-green-500/20">
                            <ShieldCheck className="w-3 h-3" />
                            Verified
                        </div>
                    </div>

                    {/* Decor icons floating in background */}
                    <div className="absolute bottom-4 right-4 flex gap-3 opacity-10 text-gray-500 z-0 pointer-events-none">
                        <Server className="w-12 h-12" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Terminal;
