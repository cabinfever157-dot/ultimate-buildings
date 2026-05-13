"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  children: React.ReactNode;
  className?: string;
  fill?: string;
  radius?: number;
}

export const Spotlight = ({
  children,
  className,
  fill = "rgba(212, 175, 55, 0.15)",
  radius = 350,
}: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-radius);
  const mouseY = useMotionValue(-radius);

  const springConfig = { damping: 25, stiffness: 200 };
  const sx = useSpring(mouseX, springConfig);
  const sy = useSpring(mouseY, springConfig);

  // Correctly interpolate the motion values into a CSS string
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${sx}px ${sy}px, ${fill}, transparent 80%)`;

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn("relative overflow-hidden group", className)}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: background,
          opacity: isHovering ? 1 : 0,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

