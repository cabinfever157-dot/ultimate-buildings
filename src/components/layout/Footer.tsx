"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
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
              Factory Direct to Your Job Site. Premium cabinetry, doors, windows, staircases, flooring & more — with logistics, customs, and delivery handled end-to-end.
            </p>
            {/* Lloyd's Contact — Prominent */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-2xl border border-brand-primary/20 bg-brand-primary/[0.04] p-5 backdrop-blur-xl inline-flex flex-col gap-3"
            >
              <p className="text-brand-primary text-xs uppercase tracking-[0.2em] font-body font-medium">Contact Lloyd Perlman, CEO</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:5138001980" className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-body text-sm">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  513-800-1980
                </a>
                <a href="mailto:LloydPerlman@gbtsus.com" className="flex items-center gap-2 text-white hover:text-brand-primary transition-colors font-body text-sm">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  LloydPerlman@gbtsus.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/50 font-body text-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-primary/60" />
                Cincinnati, Ohio 45243 USA
              </div>
            </motion.div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-medium text-white mb-4 tracking-tight">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Windows & Doors", href: "/products/windows-doors" },
                { label: "Cabinets & Storage", href: "/products/cabinets" },
                { label: "Countertops", href: "/products/countertops" },
                { label: "Stairs & Railings", href: "/products/stairs-railings" },
                { label: "Flooring & Walls", href: "/products/stone-flooring" },
                { label: "Metal Gates & Fencing", href: "/products/metal-products" },
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
                { label: "Promotional Gallery", href: "/promotional-gallery" },
                { label: "Materials", href: "/materials" },
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
            &copy; {new Date().getFullYear()} Ultimate-Buildings — Global Building Trading Solutions. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Quality &bull; Reliability &bull; Value
          </p>
        </div>
      </div>
    </footer>
  );
}