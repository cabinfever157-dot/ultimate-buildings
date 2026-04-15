"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

const spcTypes = [
  {
    id: "click-lock",
    title: "Click-Lock SPC Flooring",
    description:
      "Quick-install click-lock system — no glue required. Custom ml wear thickness and mm plank thickness to your specs.",
    image: "/images/projects/page08_img03.jpg",
    properties: [
      "No glue needed — floats over subfloor",
      "Custom wear layer thickness",
      "Custom plank thickness",
      "Waterproof core",
    ],
    applications: ["Residential", "Apartments", "Hotels", "Office buildings"],
    features: ["Easy replacement of individual planks", "DIY-friendly installation", "Works over existing floors"],
  },
  {
    id: "glue-down",
    title: "Glue-Down SPC Flooring",
    description:
      "Permanent adhesive installation for maximum stability. Best for high-traffic commercial environments.",
    image: "/images/projects/page08_img03.jpg",
    properties: [
      "Permanent bond to subfloor",
      "Maximum stability",
      "Custom wear layer thickness",
      "Commercial grade durability",
    ],
    applications: ["Commercial spaces", "Retail centers", "High-traffic areas", "Medical facilities"],
    features: ["No movement or flex", "Best for heavy rolling loads", "Ideal for large open areas"],
  },
  {
    id: "lay-flat",
    title: "Lay-Flat SPC Flooring",
    description:
      "Loose-lay installation — no click, no glue. Fastest install for temporary or quick-turn projects.",
    image: "/images/projects/page08_img03.jpg",
    properties: [
      "No click mechanism or adhesive",
      "Fastest installation time",
      "Custom wear layer thickness",
      "Easy to relocate or replace",
    ],
    applications: ["Temporary spaces", "Event venues", "Model units", "Fast-track projects"],
    features: ["No subfloor prep needed", "Reusable and repositionable", "Minimal tools required"],
  },
];

const productionInfo = [
  { step: "1", title: "Order Confirmed", desc: "Custom specs locked — wear thickness, plank size, color, packaging." },
  { step: "2", title: "Production", desc: "5-week manufacturing cycle. Progress reports with QC photos." },
  { step: "3", title: "Quality Control", desc: "Trial installation with photos/video. Your rep can inspect." },
  { step: "4", title: "Shipped to Job Site", desc: "All logistics, duty/tariffs, and delivery included. Your brand on the box." },
];

export default function SPCFlooringPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            <span className="text-brand-primary">SPC Flooring</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Custom SPC flooring — click-lock, glue-down, and lay-flat options. 5-week production. Your brand packaging available. Factory direct to your job site.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/products">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                &larr; Back to All Products
              </Button>
            </Link>
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {spcTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{type.title}</h3>
                  <p className="text-foreground/80 mb-4">{type.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Properties:</h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {type.properties.map((p, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-2">&bull;</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Best For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.applications.map((a, i) => (
                        <span key={i} className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.features.map((f, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Factory Direct — <span className="text-brand-primary">5-Week Production</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {productionInfo.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-medium text-brand-primary">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Card className="glass-panel border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-display font-medium text-white mb-6">Custom Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Wear Layer Options</h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Custom ml wear thickness</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>UV coating for scratch resistance</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Commercial warranty options available</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Plank & Packaging</h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Custom mm plank thickness</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Custom plank width and length</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">&bull;</span><span>Your brand packaging available</span></li>
              </ul>
            </div>
          </div>
        </Card>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Get SPC Flooring at factory direct pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Volume buyers welcome. Custom specs, your brand, delivered to your job site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Request SPC Flooring Quote
              </Button>
            </Link>
            <Link href="/catalogs">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View SPC Catalog
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}