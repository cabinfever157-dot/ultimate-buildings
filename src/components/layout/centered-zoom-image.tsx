/**
 * CenteredZoomImage — gallery tile image with viewport-centered hover zoom.
 *
 * Hover: the image animates from its tile into a fixed, dead-centered
 * position on screen (scaled up), over a dimmed backdrop. Locked center —
 * no cursor tracking, so the user never "fights" the image to escape.
 * Mouse-out: reverses back into the tile exactly as it went in.
 *
 * Uses FLIP-style measurement: on hover we read the tile's bounding rect,
 * teleport a fixed-position clone to that rect (zero transform), then
 * animate scale + translate to viewport center. On leave, animate back to
 * the stored rect, then unmount the clone. The original tile dims while
 * the clone is out.
 */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";

interface CenteredZoomImageProps {
  src: string;
  alt: string;
}

export function CenteredZoomImage({ src, alt }: CenteredZoomImageProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const open = () => {
    if (!tileRef.current) return;
    setRect(tileRef.current.getBoundingClientRect());
    setZoomed(true);
  };
  const close = () => {
    // re-measure in case the page scrolled or reflowed while zoomed
    if (tileRef.current) setRect(tileRef.current.getBoundingClientRect());
    setZoomed(false);
  };

  return (
    <>
      {/* The tile (unchanged place in the grid) */}
      <div
        ref={tileRef}
        onMouseEnter={open}
        onMouseLeave={close}
        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-primary/30 transition-all duration-500 cursor-zoom-in"
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* The zoomed clone — fixed, viewport-centered */}
      <AnimatePresence>
        {zoomed && rect && (
          <motion.div
            key="zoom-clone"
            className="fixed z-[90] pointer-events-none"
            initial={{
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
              opacity: 1,
            }}
            animate={{
              left: 0,
              top: 0,
              width: "100vw",
              height: "100vh",
              opacity: 1,
            }}
            exit={{
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
              opacity: 0,
              transition: { duration: 0.25, ease: "easeIn" },
            }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Backdrop fades in */}
            <motion.div
              className="absolute inset-0 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            {/* Centered image at ~85% viewport size, object-contain */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img
                src={src}
                alt={alt}
                className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl border border-brand-primary/30 shadow-[0_0_80px_rgba(212,175,55,0.25)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}