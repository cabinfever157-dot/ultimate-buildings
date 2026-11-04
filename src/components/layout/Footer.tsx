"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

// Brand icons as inline SVG (simple-icons paths, CC0) — lucide-react 1.6.0 no
// longer ships brand/social icons (removed upstream after deprecation).
const brandSvgProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg {...brandSvgProps} className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg {...brandSvgProps} className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg {...brandSvgProps} className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.36 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg {...brandSvgProps} className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
import { motion } from "framer-motion";

export function Footer() {
  const pathname = usePathname();
  const showEmail = pathname?.replace(/\/$/, "") !== "/quote-wizard";

  return (
    <footer className="relative z-20 border-t border-white/[0.06] bg-black/40 backdrop-blur-3xl">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display font-bold text-xl tracking-tighter text-brand-primary flex gap-2 items-center mb-4">
              <img src="/logo.png" alt="Ultimate Buildings Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
              Ultimate Buildings
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md font-body">
              Factory Direct to Your Job Site. Cabinetry, doors, windows, staircases, flooring, countertops & more — with logistics, customs, and delivery handled end-to-end.
            </p>
            {/* Lloyd's Contact — Prominent */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.04] p-5 backdrop-blur-xl inline-flex flex-col gap-3"
            >
              <p className="text-brand-primary text-xs uppercase tracking-[0.2em] font-body font-medium">Contact Us</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:2832278730" className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-body text-sm">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  283-227-8730
                </a>
                {showEmail && (
                  <a href="mailto:info@Ultimate-Buildings.com" className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-body text-sm">
                    <Mail className="w-4 h-4 text-brand-primary" />
                    info@Ultimate-Buildings.com
                  </a>
                )}
              </div>
              <div className="flex items-start gap-2 text-white/80 font-body text-sm">
                <MapPin className="w-4 h-4 text-brand-primary mt-0.5 shrink-0" />
                <span>PO Box 509, Hudsonville, MI 49426</span>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3 mt-1">
                <a
                  href="https://www.facebook.com/ultimatebuildings.ub"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ultimate Buildings on Facebook"
                  className="text-white/60 hover:text-brand-primary transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/ultimate__buildings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ultimate Buildings on Instagram"
                  className="text-white/60 hover:text-brand-primary transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/ultimate-buildings/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ultimate Buildings on LinkedIn"
                  className="text-white/60 hover:text-brand-primary transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/ultimatebldgs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ultimate Buildings on X"
                  className="text-white/60 hover:text-brand-primary transition-colors"
                >
                  <XIcon className="w-5 h-5" />
                </a>
              </div>

            </motion.div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-medium text-white mb-4 tracking-tight">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Countertops & Slabs", href: "/products/countertops" },
                { label: "Stone Floors & Walls", href: "/products/stone-flooring" },
                { label: "SPC Flooring", href: "/products/spc-flooring" },
                { label: "Windows & Doors", href: "/products/windows-doors" },
                { label: "Cabinets & Storage", href: "/products/cabinets" },
                { label: "Stairs & Railings", href: "/products/stairs-railings" },
                { label: "Metal Products & Fencing", href: "/products/metal-products" },
                { label: "Prefab Construction", href: "/products/prefab-construction" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-brand-primary transition-colors text-sm font-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-medium text-white mb-4 tracking-tight">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Catalogs", href: "/catalogs" },
                { label: "Get a Bid Quote", href: "/quote-wizard" },
                { label: "Product Gallery", href: "/promotional-gallery" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-brand-primary transition-colors text-sm font-body">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Ultimate-Buildings — Powered by{" "}
            <a href="https://sygnifi.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary transition-colors">Sygnifi Networks</a>{" "}
            and{" "}
            <a href="https://advancedai-solutions.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-brand-primary transition-colors">Advanced AI Solutions, Inc.</a>
            . All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Quality &bull; Reliability &bull; Value
          </p>
        </div>
      </div>
    </footer>
  );
}
