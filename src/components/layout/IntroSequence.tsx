"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextReveal } from "../ui/text-reveal";

interface IntroSequenceProps {
  text: string;
  onComplete: () => void;
}

export function IntroSequence({ text, onComplete }: IntroSequenceProps) {
  const [showText, setShowText] = useState(true); 
  const [showLogo, setShowLogo] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => setShowLogo(true), 3500);
    const fadeOutTimer = setTimeout(() => setIsFadingOut(true), 5500);
    const completeTimer = setTimeout(() => onComplete(), 8500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="intro-container"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 3, ease: "easeInOut" } }}
        >
          {/* Dark overlay with vignette */}
          <div className="absolute inset-0 bg-brand-dark/80 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-brand-dark/95 pointer-events-none" />

          {/* Content Layer (Text and Logo) */}
          <div className="relative z-20 flex flex-col items-center justify-center max-w-4xl px-8 w-full h-full">
            <motion.div
               animate={{ y: showLogo ? -80 : 0 }}
               transition={{ duration: 1.5, ease: "easeInOut" }}
               className="flex justify-center w-full"
            >
              <motion.div animate={{ opacity: showText ? 1 : 0 }} transition={{ duration: 0.5 }}>
                  <TextReveal
                    text={text}
                    className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-[1.2] drop-shadow-[0_4px_24px_rgba(212,175,55,0.4)]"
                    startReveal={showText} 
                  />
              </motion.div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
              animate={
                showLogo 
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 50, filter: "blur(8px)" }
              }
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute mt-48 flex items-center justify-center" 
            >
                <img src="/logo.png" alt="Ultimate-Buildings Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_16px_rgba(212,175,55,0.6)]" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
