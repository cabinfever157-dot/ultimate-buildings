/**
 * CenteredZoomImage — gallery tile image with click-to-zoom, v5.
 *
 * Flow (Damon spec):
 * 1. Hover an image for 0.5s → the tile zooms in ~15% AND a theme-styled
 *    "ZOOM" button fades in over the image (dark/black glass, white glowing
 *    text, gold border on hover).
 * 2. Clicking the button triggers the full centered zoom (tile x3 on screen,
 *    over a dimmed backdrop).
 * 3. Nothing else changes: only mousing out of the fully-landed zoomed image
 *    reverses it (flight mouse-outs ignored via landedRef gate). Moving off
 *    the tile before clicking just reverses the 15% preview and hides the
 *    button.
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const HOVER_DELAY_MS = 500; // hover-hold before the preview zoom + button appear
const ZOOM_SCALE = 3; // full zoom footprint (tile x3, same as old scale-3 zoom)
const PREVIEW_SCALE = 1.15; // tile zooms in ~15% while primed

interface CenteredZoomImageProps {
  src: string;
  alt: string;
}

export function CenteredZoomImage({ src, alt }: CenteredZoomImageProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const primedRef = useRef(false); // 0.5s hover elapsed → preview + button
  const zoomedRef = useRef(false); // full zoom active
  const landedRef = useRef(false); // full zoom animation completed
  const [primed, setPrimed] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const clearDelay = useCallback(() => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
      delayTimer.current = null;
    }
  }, []);

  const armZoom = useCallback(() => {
    clearDelay();
    delayTimer.current = setTimeout(() => {
      primedRef.current = true;
      setPrimed(true);
    }, HOVER_DELAY_MS);
  }, [clearDelay]);

  const unprime = useCallback(() => {
    clearDelay();
    if (primedRef.current && !zoomedRef.current) {
      primedRef.current = false;
      setPrimed(false); // reverses the 15% preview on mouse-out
    }
  }, []);

  const openFullZoom = useCallback(() => {
    if (zoomedRef.current || !tileRef.current) return;
    zoomedRef.current = true;
    landedRef.current = false; // ignore mouse-outs during flight
    setRect(tileRef.current.getBoundingClientRect());
    setZoomed(true);
  }, []);

  const close = useCallback(() => {
    // GATE: mousing out of the zoomed image does nothing until fully landed.
    if (!landedRef.current) return;
    zoomedRef.current = false;
    landedRef.current = false;
    setZoomed(false);
  }, []);

  useEffect(() => clearDelay, []);

  return (
    <>
      {/* Tile — hover 0.5s primes it; click (on the button) zooms */}
      <div
        ref={tileRef}
        onMouseEnter={armZoom}
        onMouseLeave={unprime}
        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 cursor-pointer"
      >
        {/* Image: 15% zoom while primed */}
        <motion.img
          src={src}
          alt={alt}
          animate={{ scale: primed ? 1.15 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ZOOM button — appears when primed */}
        <AnimatePresence>
          {primed && !zoomed && (
            <motion.button
              key="zoom-btn"
              type="button"
              aria-label={`Zoom ${alt}`}
              onClick={openFullZoom}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute inset-0 m-auto w-fit h-fit px-6 py-3 rounded-lg
                         bg-black/70 backdrop-blur-md border border-white/20
                         text-white font-display font-medium tracking-[0.25em] uppercase text-sm
                         shadow-[0_0_24px_rgba(255,255,255,0.25)]
                         hover:bg-black/85 hover:border-brand-primary/60
                         hover:shadow-[0_0_32px_rgba(212,175,55,0.45)]
                         transition-colors duration-200 cursor-pointer"
            >
              Zoom
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Full zoom clone — fixed, centered, gated mouse-out (unchanged from v4) */}
      <AnimatePresence>
        {zoomed && rect && (
          <motion.div
            key="zoom-clone"
            className="fixed z-[90]"
            initial={{
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
            }}
            animate={{
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
              width: rect.width * ZOOM_SCALE,
              height: rect.height * ZOOM_SCALE,
            }}
            exit={{
              left: rect.left,
              top: rect.top,
              x: 0,
              y: 0,
              width: rect.width,
              height: rect.height,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => { landedRef.current = true; }}
            style={{ pointerEvents: "none" }}
          >
            {/* Backdrop: blocks tile hover beneath, never closes the zoom */}
            <div className="absolute inset-[-100vh] bg-black/60" />
            {/* The zoomed image — leaving THIS (and only this) reverses, after landing */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: "auto" }}
              onMouseLeave={close}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover rounded-xl border border-brand-primary/40 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}