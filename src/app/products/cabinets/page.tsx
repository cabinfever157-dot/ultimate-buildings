"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Cabinet types and styles
const cabinetTypes = [
  {
    id: "kitchen",
    title: "Kitchen Cabinets",
    description: "Custom kitchen cabinetry solutions for every style and budget",
    image: "/images/bento/High-end-kitchen-cabinetry.jpg",
    features: [
      "Custom sizing and configurations",
      "Soft-close hinges and drawers",
      "Premium wood species and finishes",
      "Integrated organization systems",
      "Full extension drawer slides",
    ],
    styles: ["Shaker", "Flat Panel", "Raised Panel", "Inset", "Glass Front"],
    woodOptions: ["Maple", "Cherry", "Oak", "Walnut", "Paint Grade"],
  },
  {
    id: "bathroom",
    title: "Bathroom Vanities",
    description: "Luxury bathroom storage solutions with premium materials",
    image: "/images/bento/luxury-kitchen-with-custom-wood-cabinetry.jpg",
    features: [
      "Water-resistant materials and finishes",
      "Custom countertop integration",
      "Built-in organizational accessories",
      "Wall-mounted and freestanding options",
      "Premium hardware selections",
    ],
    styles: ["Modern", "Traditional", "Transitional", "Floating", "Double Sink"],
    countertopMaterials: ["Marble", "Granite", "Quartz", "Solid Surface"],
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description: "Custom storage cabinets for any space in your home",
    image: "/images/bento/High-end-kitchen-cabinetry.jpg",
    features: [
      "Customizable interior layouts",
      "Space-maximizing designs",
      "Built-in lighting options",
      "Matching home decor styles",
      "Durable construction",
    ],
    applications: [
      "Pantries",
      "Laundry rooms",
      "Home offices",
      "Garage storage",
      "Entertainment centers",
    ],
    organization: ["Pull-out shelves", "Built-in dividers", "Adjustable shelving", "Hidden compartments"],
  },
  {
    id: "custom",
    title: "Custom Built-ins",
    description: "Bespoke cabinetry designed specifically for your space",
    image: "/images/bento/luxury-kitchen-with-custom-wood-cabinetry.jpg",
    features: [
      "Made-to-measure for perfect fit",
      "Unique design elements",
      "Premium craftsmanship",
      "Seamless integration with architecture",
      "Personalized design consultation",
    ],
    applications: [
      "Home libraries",
      "Window seats",
      "Media centers",
      "Wine cellars",
      "Mudroom lockers",
    ],
    specialFeatures: ["Hidden storage", "Built-in seating", "Display lighting", "Custom molding"],
  },
];

// Finish options
const finishOptions = [
  {
    category: "Stains",
    options: ["Natural", "Honey", "Espresso", "Walnut", "Ebony"],
  },
  {
    category: "Paints",
    options: ["White", "Cream", "Gray", "Navy", "Black"],
  },
  {
    category: "Specialty",
    options: ["Glazed", "Distressed", "Metallic", "Two-Tone", "Textured"],
  },
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
            <span className="text-brand-primary">Premium</span> Cabinets
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Luxury cabinetry solutions tailored to your space and style preferences
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
                <div className="h-56 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                      Key Features:
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {type.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      {type.styles ? "Available Styles:" : type.applications ? "Applications:" : "Options:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(type.styles || type.applications || (type as any).organization)?.map((item: string, itemIndex: number) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {type.woodOptions && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Wood Options:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {type.woodOptions.map((wood, woodIndex) => (
                          <span
                            key={woodIndex}
                            className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                          >
                            {wood}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Finish Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Finish & Customization Options
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finishOptions.map((category, catIndex) => (
              <Card key={catIndex} className="glass-panel border border-white/10 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center text-center text-xs p-2"
                      style={{ backgroundColor: getFinishColor(option) }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Hardware and Accessories */}
        <Card className="glass-panel border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-display font-medium text-white mb-6">
            Premium Hardware & Accessories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-3">Handles</h3>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>Bar Pulls</li>
                <li>Knobs</li>
                <li>Cup Pulls</li>
                <li>Edge Pulls</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-3">Finishes</h3>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>Brushed Nickel</li>
                <li>Oil-Rubbed Bronze</li>
                <li>Polished Chrome</li>
                <li>Matte Black</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-3">Organization</h3>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>Pull-out Trays</li>
                <li>Spice Racks</li>
                <li>Utensil Dividers</li>
                <li>Lazy Susans</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-3">Lighting</h3>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>Under-Cabinet</li>
                <li>In-Cabinet</li>
                <li>Puck Lights</li>
                <li>LED Strips</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center py-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-6">
            Create your dream kitchen or bathroom
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our cabinetry experts will guide you through the entire process from design to installation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Start Your Cabinet Project
              </Button>
            </Link>
            <Link href="/promotional-gallery">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Kitchen Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

// Helper function for finish colors (simplified representation)
function getFinishColor(option: string): string {
  const colors: Record<string, string> = {
    Natural: "#D2B48C",
    Honey: "#DAA520",
    Espresso: "#61210B",
    Walnut: "#654321",
    Ebony: "#2C1810",
    White: "#FFFFFF",
    Cream: "#FFFDD0",
    Gray: "#808080",
    Navy: "#000080",
    Black: "#000000",
    Glazed: "#8B4513",
    Distressed: "#CD853F",
    Metallic: "#C0C0C0",
    "Two-Tone": "linear-gradient(45deg, #FFFFFF, #808080)",
    Textured: "#D3D3D3",
  };
  return colors[option] || "#E0E0E0";
}