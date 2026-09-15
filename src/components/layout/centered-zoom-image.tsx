/**
 * CenteredZoomImage — gallery tile image with viewport-centered hover zoom.
 *
 * Behavior (Damon spec, v3):
 * - ~1s of continuous hover on a tile arms the zoom; releasing early cancels.
 * - Zoomed size = tile x3 (old in-place footprint), centered on screen.
 * - The zoomed overlay captures the pointer (backdrop + image, pointer-events
 *   auto) so tiles beneath receive NOTHING while zoomed.
 * - REVERSAL: ONLY leaving the zoomed image's own bounds closes it. The
 *   pointer may sit anywhere else (tiles, backdrop margin) without effect.
 *   Tiles far from screen center work identically to center tiles — the
 *   zoom does not react to the pointer's location relative to the clone
 *   during/after flight.
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const HOVER_DELAY_MS = 1000;
const ZOOM_SCALE = 3;

interface CenteredZoomImageProps {
  src: string;
  alt: string;
}

export function CenteredZoomImage({ src, alt }: CenteredZoomImageProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const zoomedRef = useRef(false); // sync truth for event handlers
  const landedRef = useRef(false); // true only once the zoom-in animation completes
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
      if (tileRef.current && !zoomedRef.current) {
        zoomedRef.current = true;
        landedRef.current = false; // not yet fully zoomed — ignore mouse-outs during flight
        setRect(tileRef.current.getBoundingClientRect());
        setZoomed(true);
      }
    }, HOVER_DELAY_MS);
  }, [clearDelay]);

  const close = useCallback(() => {
    // GATE: mousing out does nothing until the zoom has fully landed.
    // During the flight the image moves away from the pointer, which fires
    // mouseleave — that must NOT reverse the animation.
    if (!landedRef.current) return;
    zoomedRef.current = false;
    landedRef.current = false;
    setZoomed(false);
  }, []);

  // re-measure the tile right before the exit animation starts
  const measureTile = useCallback(() => {
    return tileRef.current ? tileRef.current.getBoundingClientRect() : rect;
  }, [rect]);

  useEffect(() => clearDelay, []);

  return (
    <>
      {/* Tile — only arms the zoom; while zoomed its events are dead (backdrop blocks) */}
      <div
        ref={tileRef}
        onMouseEnter={armZoom}
        onMouseLeave={clearDelay}
        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

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
            {/* The zoomed image — leaving THIS (and only this) reverses, but only after landing */}
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