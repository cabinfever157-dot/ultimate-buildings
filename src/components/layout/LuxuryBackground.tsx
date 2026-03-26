"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export function LuxuryBackground() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Spring animations for ultra-smooth movement
  const springX = useSpring(0, { stiffness: 40, damping: 30 });
  const springY = useSpring(0, { stiffness: 40, damping: 30 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position from -1 to 1 based on screen center
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Move background slightly in the opposite direction of the mouse
      const moveAmount = 40; // max pixels to move
      springX.set(normalizedX * -moveAmount);
      springY.set(normalizedY * -moveAmount);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, springX, springY]);

  // Don't render on the homepage since it has its own video background
  if (!mounted || pathname === "/") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        {/* The Luxury Image Background (Kitchen Cabinetry) */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ 
            backgroundImage: "url('/images/bento/High-end-kitchen-cabinetry.jpg')",
            filter: "blur(20px) saturate(1.2) brightness(1.0)"
          }}
        />
        
        {/* Lighter layered gradients to let the image truly shine through while maintaining text readability */}
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/10 to-brand-dark/80" />
      </motion.div>
    </div>
  );
}