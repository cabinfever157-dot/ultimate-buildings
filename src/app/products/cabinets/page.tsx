"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

const cabinetTypes = [
  {
    id: "kitchens",
    title: "Kitchens & Islands",
    description: "Custom kitchen cabinetry and islands — your layout, your colors, your finishes. Factory direct to your job site.",
    image: "/images/stock/cabinets-1.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Custom wood species and finishes",
      "Island and peninsula configurations",
      "Soft-close hardware standard",
    ],
    applications: ["Residential kitchens", "Restaurant kitchens", "Office break rooms", "Custom layouts"],
  },
  {
    id: "vanities",
    title: "Vanities",
    description: "Custom bathroom vanities — single and double bowl, wall-mount and freestanding. Your size, your style.",
    image: "/images/stock/vanity-1.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Single and double bowl configurations",
      "Wall-mount and freestanding options",
      "Custom finishes and hardware",
    ],
    applications: ["Residential bathrooms", "Hotel bathrooms", "Commercial restrooms", "Custom sizes"],
  },
  {
    id: "closets",
    title: "Closets & Wardrobes",
    description: "Custom closet and wardrobe systems — walk-in, reach-in, and built-in. Fully custom to maximize your space.",
    image: "/images/stock/closets.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Walk-in, reach-in, and built-in configurations",
      "Custom shelving and hanging systems",
      "Integrated lighting and accessories",
    ],
    applications: ["Master bedrooms", "Guest rooms", "Entry areas", "Mudrooms"],
  },
  {
    id: "storage",
    title: "Organizational Storage",
    description: "Custom organizational storage — garages, utility rooms, offices, and meeting rooms. Custom designed to fit your needs.",
    image: "/images/stock/cabinets-6.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Garage and utility room systems",
      "Office and meeting room cabinetry",
      "Custom configurations for any space",
    ],
    applications: ["Garages", "Utility rooms", "Office spaces", "Meeting rooms", "Restaurants"],
  },
];

const productionSteps = [
  { step: "1", title: "Order Confirmed", desc: "Custom specs — your measurements, colors, materials, and finishes." },
  { step: "2", title: "Production", desc: "Manufacturing cycle with progress reports and QC photos." },
  { step: "3", title: "Quality Control", desc: "Our team is at the factory." },
  { step: "4", title: "Shipped to Job Site", desc: "All logistics, duty/tariffs, and delivery included." },
];

export default function CabinetsPage() {
  return (
    <div className="relative min-h-screen bg-transparent pt-32 pb-24">
      <NarrativeNav />

      {/* Background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-medium text-white mb-6"
          >
            <span className="text-brand-primary">Cabinets</span>, Vanities & Storage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Custom kitchens, vanities, closets, wardrobes, and organizational storage.
            <br />Everything is custom-made to your exact specifications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-display font-medium text-brand-primary max-w-3xl mx-auto mb-4"
          >
            Factory Direct Pricing
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/products">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                ← Back to All Products
              </Button>
            </Link>
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Cabinet Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cabinetTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-72 overflow-hidden bg-brand-dark/60 flex items-center justify-center">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {type.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Properties:
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {type.properties.map((property, propIndex) => (
                        <li key={propIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{property}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Applications:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {type.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/10 text-center">
                    <span className="text-lg font-medium text-brand-primary tracking-wide">
                      Customized to Your Design
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Factory Direct Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Factory Direct — <span className="text-brand-primary">Custom Production</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {productionSteps.map((step, index) => (
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts will guide you through the entire process,
            <br className="hidden md:block" />
            from design to delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Start Your Custom Project
              </Button>
            </Link>
            <Link href="/promotional-gallery#cabinets">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Project Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}