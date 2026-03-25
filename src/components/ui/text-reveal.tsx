"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils"; 

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    startReveal?: boolean;
}

export const TextReveal = ({ text, className, delay = 0, startReveal }: TextRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // Use explicit startReveal if provided, otherwise fallback to scroll-based isInView
    const shouldReveal = startReveal !== undefined ? startReveal : isInView;

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            // 0.4 stagger with 1.5s child duration creates a beautiful overlapping sequential fade
            transition: { staggerChildren: 0.4, delayChildren: 0.2 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
            },
        },
        hidden: {
            opacity: 0,
        },
    } as any;

    return (
        <motion.div
            ref={ref}
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center", paddingBottom: "0.2em", paddingTop: "0.1em" }}
            variants={container}
            initial="hidden"
            animate={shouldReveal ? "visible" : "hidden"}
            className={cn("text-center flex justify-center", className)}
        >
            {words.map((word, index) => (
                <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
