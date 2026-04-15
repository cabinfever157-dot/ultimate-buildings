"use client";

import { motion } from "framer-motion";
import { Shield, Clock, DollarSign, SlidersHorizontal, Headphones, Users, Eye, ArrowRight, Phone } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Quality",
    desc: "We only work with Tier 1 well-financed established factories.",
    accent: "from-amber-400 to-yellow-600",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "Delivering as promised so we all sleep well at night.",
    accent: "from-blue-400 to-cyan-600",
  },
  {
    icon: DollarSign,
    title: "Value",
    desc: "Our factories understand every penny counts — that's factory direct pricing.",
    accent: "from-emerald-400 to-green-600",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexibility",
    desc: "Our goal is to deliver your customized needs.",
    accent: "from-purple-400 to-violet-600",
  },
  {
    icon: Headphones,
    title: "CX",
    desc: "The cornerstone of our buyer relationship with live USA Customer Support.",
    accent: "from-brand-primary to-amber-400",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "We are 1 team together and only grow together via our execution.",
    accent: "from-rose-400 to-pink-600",
  },
  {
    icon: Eye,
    title: "Our Team",
    desc: "Employee/partner oversight at every factory production step to ensure desired results.",
    accent: "from-teal-400 to-cyan-600",
    wide: true,
  },
];

const industries = [
  "Apartments",
  "Dorms & Nursing Homes",
  "Hotels",
  "Office Buildings",
  "Remodels",
  "Multi-Home",
  "Restaurants & Entertainment",
  "Schools",
  "Retail Centers & Retailers",
];

const products = [
  { label: "Stone Flooring & Walls", href: "/products/stone-flooring" },
  { label: "SPC Flooring", href: "/products/spc-flooring" },
  { label: "Countertops & Slabs", href: "/products/countertops" },
  { label: "Cabinets & Storage", href: "/products/cabinets" },
  { label: "Stairs & Railings", href: "/products/stairs-railings" },
  { label: "Windows & Doors", href: "/products/windows-doors" },
  { label: "Metal Products", href: "/products/metal-products" },
  { label: "Prefab Construction", href: "/products/prefab-construction" },
];

export function CoreValues() {
  return (
    <section className="relative z-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-brand-primary/80 mb-4 font-body">
          Our Foundation
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-light text-white tracking-tight">
          The Ultimate Buildings <span className="text-brand-primary font-medium">Difference</span>
        </h2>
        <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-primary to-transparent mt-8 mx-auto rounded-full opacity-50" />
      </motion.div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-24">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              type: "spring",
              bounce: 0.25,
            }}
            className={value.wide ? "md:col-span-2 lg:col-span-3" : ""}
          >
            <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-3xl p-8 h-full hover:border-brand-primary/20 transition-colors duration-500 overflow-hidden">
              <BorderBeam
                size={250}
                duration={10}
                delay={i * 0.5}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                colorFrom="#d4af37"
                colorTo="#d4af3780"
              />
              {/* Accent glow on hover */}
              <div
                className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${value.accent} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-brand-primary/10 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors duration-500">
                    <value.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-white tracking-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-white/60 leading-relaxed text-base font-body">
                  {value.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Industry Marquee */}
      <div className="relative mb-24 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {industries.map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl text-white/70 font-body text-sm tracking-wide hover:border-brand-primary/30 hover:text-brand-primary transition-colors duration-300 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 shrink-0" />
              {name}
            </div>
          ))}
        </Marquee>
      </div>

      {/* Appreciation CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
        className="max-w-5xl mx-auto mb-16"
      >
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-3xl p-12 md:p-16 text-center overflow-hidden">
          <BorderBeam size={400} duration={12} colorFrom="#d4af37" colorTo="#d4af3740" />
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.06)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative z-10">
            <p className="text-brand-primary/80 text-sm uppercase tracking-[0.3em] mb-4 font-body">
              Thank You
            </p>
            <h3 className="text-3xl md:text-5xl font-display font-light text-white tracking-tight mb-4">
              Experience the{" "}
              <span className="text-brand-primary font-medium">Ultimate Buildings</span>{" "}
              Difference
            </h3>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-body font-light">
              Discover why architects, designers, contractors, builders, commercial property
              owners, retailers and wholesale distributors trust us for their most ambitious
              projects.
            </p>

            {/* Product pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {products.map((p) => (
                <Link
                  key={p.label}
                  href={p.href}
                  className="px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/70 text-sm font-body hover:border-brand-primary/30 hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 backdrop-blur-sm"
                >
                  {p.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/quote-wizard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-primary to-amber-500 text-brand-dark hover:from-amber-400 hover:to-amber-300 text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.4)] flex gap-2 font-bold transition-all"
                  >
                    Get Your Bid Quote <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:5138001980">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-black/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 text-lg px-10 py-7 rounded-full backdrop-blur-xl transition-all shadow-glass-lg font-medium flex gap-2"
                  >
                    <Phone className="w-5 h-5" /> Call Lloyd: 513-800-1980
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}