"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Product categories data
const productCategories = [
  {
    id: "flooring-walls",
    title: "Flooring & Walls",
    description: "Premium flooring and wall solutions for residential and commercial spaces",
    image: "/images/bento/elegant-granite-marble-kitchen-countertops.jpg",
    materials: ["Marble", "Granite", "Quartz"],
    features: [
      "Interior & Exterior applications",
      "Custom patterns and finishes",
      "Durable and low-maintenance",
      "Wide range of colors and textures",
    ],
  },
  {
    id: "stairs-railings",
    title: "Stairs & Railings",
    description: "Custom-designed staircases and railing systems for luxury properties",
    image: "/images/bento/Modern-aluminum-window-systems.jpg",
    materials: ["Wrought Iron", "Stainless Steel", "Glass", "Wood"],
    features: [
      "Custom fabrication",
      "Safety compliant designs",
      "Modern and classic styles",
      "Durable finishes",
    ],
  },
  {
    id: "cabinets",
    title: "Cabinets",
    description: "Luxury cabinetry solutions for kitchens, bathrooms, and storage spaces",
    image: "/images/bento/High-end-kitchen-cabinetry.jpg",
    materials: ["Premium Wood", "Laminates", "Metal", "Glass"],
    features: [
      "Custom design and sizing",
      "Soft-close mechanisms",
      "Premium hardware",
      "Variety of finishes",
    ],
  },
  {
    id: "countertops",
    title: "Countertops",
    description: "Durable and elegant countertop solutions for kitchens and bathrooms",
    image: "/images/bento/Luxury-granite-marble-countertop.jpg",
    materials: ["Granite", "Quartz", "Marble", "Solid Surface"],
    features: [
      "Heat and scratch resistant",
      "Custom edge profiles",
      "Seamless installation",
      "Easy maintenance",
    ],
  },
  {
    id: "windows-doors",
    title: "Windows & Doors",
    description: "Energy-efficient window and door systems with premium materials",
    image: "/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg",
    materials: ["Aluminum", "Wood", "Vinyl", "Fiberglass"],
    features: [
      "Thermal break technology",
      "Sound insulation",
      "Custom sizes and shapes",
      "Weather-resistant finishes",
    ],
  },
  {
    id: "metal-fencing-gates",
    title: "Metal Fencing & Gates",
    description: "Custom metal fencing and gate solutions for security and curb appeal",
    image: "/images/bento/Metal-Fencing-Gates.jpg",
    materials: ["Wrought Iron", "Steel", "Aluminum", "Brass"],
    features: [
      "Custom design and fabrication",
      "Powder-coated finishes",
      "Security-enhanced options",
      "Automated gate systems",
    ],
  },
];

// Material comparison data
const materialComparison = [
  {
    name: "Marble",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Medium",
    bestFor: "Luxury surfaces, high-end projects",
    priceRange: "$$$",
  },
  {
    name: "Granite",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Low",
    bestFor: "Countertops, high-traffic areas",
    priceRange: "$$$",
  },
  {
    name: "Quartz",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Very Low",
    bestFor: "Kitchen countertops, commercial spaces",
    priceRange: "$$-$$$",
  },
  {
    name: "SPC Flooring",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Very Low",
    bestFor: "High-traffic areas, waterproof applications",
    priceRange: "$$",
  },
  {
    name: "Aluminum Systems",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Low",
    bestFor: "Windows, doors, curtain walls",
    priceRange: "$$-$$$",
  },
  {
    name: "Wrought Iron",
    durability: "⭐⭐⭐⭐⭐",
    maintenance: "Medium",
    bestFor: "Security gates, decorative railings",
    priceRange: "$$$",
  },
];

export default function ProductsPage() {
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
            Our <span className="text-brand-primary">Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Discover our comprehensive range of premium building materials and solutions
          </motion.p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-panel border border-white/10 shadow-glass-md overflow-hidden hover:shadow-glass-lg transition-all duration-300 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 flex-1">
                    {category.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Key Materials:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.materials.map((material, matIndex) => (
                        <span
                          key={matIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-foreground mb-2">
                      Key Features:
                    </p>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {category.features.map((feature, featIndex) => (
                        <li key={featIndex} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/products/${category.id}`}
                    className="mt-auto pt-4"
                  >
                    <Button className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow">
                      Explore {category.title}
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Materials Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Material Comparison Guide
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-glass-lg rounded-lg">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Material
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Durability
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Maintenance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Best For
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Price Range
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/5 divide-y divide-white/10">
                    {materialComparison.map((material, index) => (
                      <tr key={index} className="hover:bg-white/10 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-foreground">
                            {material.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-brand-primary">
                            {material.durability}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground/80">
                            {material.maintenance}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-foreground/80">
                            {material.bestFor}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-foreground">
                            {material.priceRange}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Installation and Care Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-panel border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Professional Installation
            </h3>
            <p className="text-foreground/80 mb-4">
              Our certified installation teams ensure perfect results with:
            </p>
            <ul className="text-foreground/80 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Precision measurements and cuts</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Expert material handling</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Comprehensive site preparation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Quality assurance inspections</span>
              </li>
            </ul>
            <Link href="/quote-wizard">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Schedule Installation Consultation
              </Button>
            </Link>
          </Card>

          <Card className="glass-panel border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Material Care Guide
            </h3>
            <p className="text-foreground/80 mb-4">
              Maintain the beauty of your materials with our care recommendations:
            </p>
            <ul className="text-foreground/80 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Daily cleaning routines for each material type</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Recommended cleaning products</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Preventative maintenance tips</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Long-term care and restoration</span>
              </li>
            </ul>
            <Link href="/materials">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Download Care Guides
              </Button>
            </Link>
          </Card>
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
            Find the perfect materials for your project
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts can help you select the ideal materials based on your design, budget, and performance requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get Expert Consultation
              </Button>
            </Link>
            <Link href="/catalogs">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                Browse Catalogs
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}