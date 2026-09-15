"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RadialGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

/**
 * RadialGlowButton — Vengence UI port, recolored to Ultimate Buildings'
 * Cinematic Gold theme (#d4af37) on deep black. Deep-dark radial gradient
 * interior, rotating conic shine sweep, gradient border. Pure CSS.
 */
export function RadialGlowButton({
  children = "Zoom",
  className,
  ...props
}: RadialGlowButtonProps) {
  return (
    <div className="relative inline-block">
      <style>{`
        @property --rg-pos-x { syntax: '<percentage>'; initial-value: 40%; inherits: false; }
        @property --rg-pos-y { syntax: '<percentage>'; initial-value: 140%; inherits: false; }
        @property --rg-spread-x { syntax: '<percentage>'; initial-value: 130%; inherits: false; }
        @property --rg-spread-y { syntax: '<percentage>'; initial-value: 170%; inherits: false; }
        @property --rg-color-1 { syntax: '<color>'; initial-value: #0a0c10; inherits: false; }
        @property --rg-color-2 { syntax: '<color>'; initial-value: #14161c; inherits: false; }
        @property --rg-color-3 { syntax: '<color>'; initial-value: #3a3320; inherits: false; }
        @property --rg-color-4 { syntax: '<color>'; initial-value: #d4af37; inherits: false; }
        @property --rg-color-5 { syntax: '<color>'; initial-value: hsl(45 30% 4%); inherits: false; }
        @property --rg-border-angle { syntax: '<angle>'; initial-value: 180deg; inherits: true; }
        @property --rg-border-color-1 { syntax: '<color>'; initial-value: hsla(45, 80%, 85%, 0.55); inherits: true; }
        @property --rg-border-color-2 { syntax: '<color>'; initial-value: hsla(45, 50%, 85%, 0.2); inherits: true; }
        @property --rg-stop-1 { syntax: '<percentage>'; initial-value: 37.35%; inherits: false; }
        @property --rg-stop-2 { syntax: '<percentage>'; initial-value: 61.36%; inherits: false; }
        @property --rg-stop-3 { syntax: '<percentage>'; initial-value: 78.42%; inherits: false; }
        @property --rg-stop-4 { syntax: '<percentage>'; initial-value: 93.52%; inherits: false; }
        @property --rg-stop-5 { syntax: '<percentage>'; initial-value: 100%; inherits: false; }

        .rg-button {
          --transition: 0.25s;
          --spark: 1.8s;
          --speed: 1.2s;
          --cut: 1px;
          --bg: radial-gradient(
            var(--rg-spread-x) var(--rg-spread-y) at var(--rg-pos-x) var(--rg-pos-y),
            var(--rg-color-1) var(--rg-stop-1),
            var(--rg-color-2) var(--rg-stop-2),
            var(--rg-color-3) var(--rg-stop-3),
            var(--rg-color-4) var(--rg-stop-4),
            var(--rg-color-5) var(--rg-stop-5)
          );
          position: relative;
          min-width: 150px;
          min-height: 44px;
          padding: 12px 26px;
          border: none;
          border-radius: 11px;
          font-family: var(--font-display), Outfit, sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          line-height: 19px;
          color: rgba(255, 255, 255, 0.95);
          background: var(--bg);
          cursor: pointer;
          text-shadow: 0 0 2px rgba(0, 0, 0, 0.95), 0 0 12px rgba(255, 255, 255, 0.45);
          overflow: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-tap-highlight-color: transparent;
          transition:
            --rg-pos-x .75s, --rg-pos-y .75s,
            --rg-spread-x .75s, --rg-spread-y .75s,
            --rg-color-1 .75s, --rg-color-2 .75s, --rg-color-3 .75s, --rg-color-4 .75s, --rg-color-5 .75s,
            --rg-border-angle .75s, --rg-border-color-1 .75s, --rg-border-color-2 .75s,
            --rg-stop-1 .75s, --rg-stop-2 .75s, --rg-stop-3 .75s, --rg-stop-4 .75s, --rg-stop-5 .75s;
        }

        .rg-button::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background-image: linear-gradient(var(--rg-border-angle), var(--rg-border-color-1), var(--rg-border-color-2));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .rg-button:hover {
          --rg-pos-x: 0%;
          --rg-pos-y: 120%;
          --rg-spread-x: 110.24%;
          --rg-spread-y: 110.2%;
          --rg-color-1: #050608;
          --rg-color-2: #d4af37;
          --rg-color-3: #6b5a1e;
          --rg-color-4: #14161c;
          --rg-stop-1: 0%;
          --rg-stop-2: 10%;
          --rg-stop-3: 35.44%;
          --rg-stop-4: 71.34%;
          --rg-stop-5: 150%;
          --rg-border-angle: 190deg;
          --rg-border-color-1: hsla(45, 90%, 70%, 0.15);
          --rg-border-color-2: hsla(45, 90%, 70%, 0.6);
          --button-line-opacity: 1;
        }

        .rg-label { position: relative; z-index: 1; }

        .rg-bg {
          position: absolute;
          inset: var(--cut);
          background: var(--bg);
          border-radius: inherit;
          transition: background var(--transition), opacity var(--transition);
        }

        .rg-shine {
          position: absolute;
          inset: 0;
          container-type: size;
          border-radius: inherit;
          mix-blend-mode: soft-light;
          opacity: var(--button-line-opacity, 0);
          transition: opacity 0.3s;
          overflow: visible;
        }

        .rg-shine span {
          position: absolute;
          inset: 0;
          height: 100cqh;
          aspect-ratio: 1;
          animation: rg-slide var(--speed) ease-in-out infinite alternate;
          overflow: visible;
        }

        .rg-shine span::before {
          content: "";
          position: absolute;
          inset: -100%;
          background: conic-gradient(
            from calc(270deg - (90deg * 0.5)),
            transparent 0,
            #fff 90deg,
            transparent 90deg
          );
          animation: rg-spin calc(var(--speed) * 2) infinite linear;
        }

        @keyframes rg-spin {
          0% { rotate: 0deg; }
          15%, 35% { rotate: 90deg; }
          65%, 85% { rotate: 270deg; }
          100% { rotate: 360deg; }
        }

        @keyframes rg-slide {
          to { transform: translate(calc(100cqw - 100%), 0); }
        }
      `}</style>

      <button className={cn("rg-button", className)} type="button" {...props}>
        <span className="rg-shine">
          <span></span>
        </span>
        <span className="rg-bg"></span>
        <span className="rg-label">{children}</span>
      </button>
    </div>
  );
}