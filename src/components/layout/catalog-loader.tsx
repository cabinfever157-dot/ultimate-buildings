"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface CatalogLoaderProps {
  /** Catalog display label, e.g. "Cabinets, Vanities & Storage" */
  title: string;
  /** Called when the 3-second branded load screen finishes */
  onComplete: () => void;
  /** Duration in ms (default 3000) */
  duration?: number;
}

/**
 * CatalogLoader — full-screen branded load screen shown while a catalog
 * flipbook mounts. Gold-on-dark, site theme (Cinematic Gold #d4af37 /
 * brand-dark #0a0c10), logo + wordmark + animated progress bar.
 */
export function CatalogLoader({ title, onComplete, duration = 3000 }: CatalogLoaderProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFadingOut(true), duration - 500);
    const completeTimer = setTimeout(() => onComplete(), duration);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="catalog-loader"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Dark backdrop + vignette (matches IntroSequence layering) */}
          <div className="absolute inset-0 bg-brand-dark pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,12,16,0.95)_100%)] pointer-events-none" />

          {/* Ambient gold glows */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none"
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[200px] bg-brand-primary/5 blur-[100px] rounded-full pointer-events-none"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />

          {/* Content */}
          <div className="relative z-20 flex flex-col items-center justify-center px-8">
            {/* Logo reveal */}
            <motion.img
              src="/logo.png"
              alt="Ultimate-Buildings Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.55)]"
              initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            {/* Wordmark */}
            <motion.div
              className="mt-5 flex items-center gap-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-primary/60" />
              <span className="text-2xl md:text-3xl font-display font-medium tracking-wide text-white">
                Ultimate<span className="text-brand-primary">-</span>Buildings
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-primary/60" />
            </motion.div>

            {/* Catalog title */}
            <motion.p
              className="mt-3 text-sm md:text-base text-muted-foreground font-body tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.55 }}
            >
              {title}
            </motion.p>

            {/* Progress bar */}
            <div className="mt-10 w-56 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-primary/40 via-brand-primary to-brand-primary/40"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: duration / 1000 - 0.5, ease: "easeInOut", delay: 0.25 }}
              />
            </div>

            {/* Progress caption */}
            <motion.p
              className="mt-4 text-xs text-muted-foreground/70 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Preparing your catalog
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}