"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";
import { BookOpen } from "lucide-react";

// Material data for Stone Flooring & Walls - Factory Direct - Own the Mine
const flooringMaterials = [
  {
    id: "marble",
    title: "Marble",
    catalog: "/catalogs/granite-marble",
    description: "Timeless elegance with natural veining. Our partner owns quarries, purchases blocks worldwide, and custom fabricates slabs to your specs. 20 acres of stock stone block inventory.",
    image: "/images/stock/stone-flooring-marble.png",
    properties: [
      "Own quarries — cut and finish blocks in-house",
      "Purchase stone blocks worldwide",
      "Custom fabricate slabs to your specs",
      "20 acres of stock stone block inventory",
    ],
    applications: [
      "Flooring",
      "Wall cladding",
      "Feature walls",
      "Fireplace surrounds",
    ],
    colors: ["White", "Gray", "Beige", "Black", "Green", "Pink"],
    finishes: ["Polished", "Honed", "Brushed", "Tumbled"],
  },
  {
    id: "granite",
    title: "Granite",
    catalog: "/catalogs/granite-marble",
    description: "Exceptional durability with natural beauty. Our partner owns quarries, purchases blocks worldwide, and custom fabricates slabs to your specs.",
    image: "https://t4.ftcdn.net/jpg/05/19/71/33/360_F_519713382_18hplddKbojywZ1mHQHG5zNcbQJORPgy.jpg",
    properties: [
      "Own quarries — cut and finish blocks in-house",
      "Purchase stone blocks worldwide",
      "Custom fabricate slabs to your specs",
      "Heat and scratch resistant",
    ],
    applications: [
      "High-traffic flooring",
      "Kitchen countertops",
      "Bathroom surfaces",
      "Outdoor applications",
    ],
    colors: ["Black", "Gray", "White", "Red", "Blue", "Green"],
    finishes: ["Polished", "Honed", "Leathered", "Flamed"],
  },
  {
    id: "quartz",
    title: "Quartz",
    catalog: "/catalogs/quartz",
    description: "Engineered stone with consistent patterns. Our partner manufactures the slabs — use our colors or yours. Custom fabrication to your specifications.",
    image: "/images/stock/stone-flooring-2.jpg",
    properties: [
      "Manufacture the slabs",
      "Use our colors or yours",
      "Custom fabricate slabs to your specs",
      "Non-porous and hygienic",
    ],
    applications: [
      "Kitchen countertops",
      "Bathroom vanities",
      "Commercial surfaces",
      "Wall cladding",
    ],
    colors: ["White", "Gray", "Beige", "Black", "Blue"],
    finishes: ["Polished", "Matte", "Suede"],
  },
];



export default function StoneFlooringPage() {
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
            <span className="text-brand-primary">Stone Flooring</span> & Walls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Quality interior and exterior stone.
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

        {/* Material Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {flooringMaterials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {material.title}
                  </h3>
                  <p className="text-foreground/80 mb-4">
                    {material.description}
                  </p>

                  {(material as any).catalog && (
                    <Link href={(material as any).catalog} title={`View ${material.title} Catalog`}>
                      <Button variant="outline" className="w-full border-white/10 hover:bg-brand-dark hover:text-brand-primary hover:border-brand-primary">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View Catalog
                      </Button>
                    </Link>
                  )}

                  <div className="mt-3 text-center">
                    <span className="text-lg font-medium text-brand-primary tracking-wide">
                      Customized to Your Design
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Transform your space with quality stone flooring
          </h2>
          <p className="text-2xl md:text-3xl font-display font-medium text-brand-primary max-w-3xl mx-auto mb-4">
            FACTORY DIRECT PRICING
          </p>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our flooring specialists can help you choose
            <br className="hidden md:block" />
            the perfect materials for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Request Free Consultation
              </Button>
            </Link>
            <Link href="/promotional-gallery#stone-flooring">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Completed Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}