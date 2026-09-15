/**
 * CenteredZoomImage — gallery tile image with viewport-centered hover zoom.
 *
 * Behavior (per Damon's spec):
 * - Requires ~1s of continuous hover before the zoom engages (no flyby triggers).
 * - Zoomed size ≈ the old scale-3 footprint (tile width × 3), centered on screen.
 * - The zoomed overlay CAPTURES the pointer (pointer-events: auto): moving off
 *   the zoomed image itself is the ONLY event that reverses it. Hovering tiles
 *   beneath cannot trigger anything while zoomed.
 * - Mouse-out reverses back into the tile (re-measured in case of scroll).
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const HOVER_DELAY_MS = 1000; // hold the mouse for 1s before zoom fires
const ZOOM_SCALE = 3; // matches the old in-place zoom footprint

interface CenteredZoomImageProps {
  src: string;
  alt: string;
}

export function CenteredZoomImage({ src, alt }: CenteredZoomImageProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const delayTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const clearDelay = () => {
    if (delayTimer.current) {
      clearTimeout(delayTimer.current);
      delayTimer.current = null;
    }
  };

  const open = useCallback(() => {
    if (zoomed) return;
    clearDelay();
    delayTimer.current = setTimeout(() => {
      if (tileRef.current) {
        setRect(tileRef.current.getBoundingClientRect());
        setZoomed(true);
      }
    }, HOVER_DELAY_MS);
  }, [zoomed]);

  const close = useCallback(() => {
    clearDelay();
    setZoomed(false);
  }, []);

  // unmount cleanup
  useEffect(() => clearDelay, []);

  // when the zoom closes, re-measure the tile for the fly-back
  const rectForExit = (() => {
    if (!zoomed && tileRef.current) return tileRef.current.getBoundingClientRect();
    return rect;
  })();

  return (
    <>
      {/* The tile — its own hover only ARMS the zoom; nothing visual fires until the delay elapses */}
      <div
        ref={tileRef}
        onMouseEnter={open}
        onMouseLeave={() => {
          // leaving the tile before the delay cancels the armed zoom
          if (!zoomed) clearDelay();
        }}
        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* The zoomed clone — fixed, centered, pointer-capturing */}
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
            onMouseLeave={close}
            style={{ pointerEvents: "auto" }}
          >
            {/* Backdrop captures pointer so tiles beneath never receive hover */}
            <div className="absolute inset-[-100vh] bg-black/60" style={{ pointerEvents: "auto" }} />
            {/* The zoomed image itself, object-contain within the clone box */}
            <div className="absolute inset-0 flex items-center justify-center">
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