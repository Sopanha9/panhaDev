"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export type TypewriterWord = {
    text: string;
    className?: string;
};

interface TypewriterEffectProps {
    words: (string | TypewriterWord)[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    className?: string; // Base class name
    cursorClassName?: string;
}

export const TypewriterEffect = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    className = "",
    cursorClassName = "",
}: TypewriterEffectProps) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Normalize words to objects
    const wordObjects = words.map((w) =>
        typeof w === "string" ? { text: w } : w
    );

    const currentWord = wordObjects[currentWordIndex];

    useEffect(() => {
        const word = currentWord.text;

        let timer: NodeJS.Timeout;

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setCurrentText((prev) => word.slice(0, prev.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && currentText === word) {
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % wordObjects.length);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, wordObjects, typingSpeed, deletingSpeed, pauseDuration, currentWord.text]);

    return (
        <span className={`${className} ${currentWord.className || ""}`}>
            {currentText}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block w-[2px] h-[1em] bg-current ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
};
