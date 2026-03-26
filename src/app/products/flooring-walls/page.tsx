"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Material data for Flooring & Walls
const flooringMaterials = [
  {
    id: "marble",
    title: "Marble",
    description: "Timeless elegance with natural veining patterns",
    image: "/images/bento/Luxury-granite-marble-countertop.jpg",
    properties: [
      "Natural stone with unique patterns",
      "Available in various finishes (polished, honed, brushed)",
      "Excellent for both interior and exterior applications",
      "Durable and long-lasting",
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
    description: "Exceptional durability and natural beauty",
    image: "/images/bento/elegant-granite-marble-kitchen-countertops.jpg",
    properties: [
      "Extremely hard and durable",
      "Heat and scratch resistant",
      "Wide range of colors and patterns",
      "Low maintenance requirements",
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
    description: "Engineered stone with consistent patterns and exceptional durability",
    image: "/images/bento/Luxury-granite-marble-countertop.jpg",
    properties: [
      "Non-porous and hygienic",
      "Highly scratch and stain resistant",
      "Consistent color and pattern",
      "Low maintenance requirements",
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

// Installation guides
const installationGuides = [
  {
    title: "Marble Installation",
    steps: [
      "Subfloor preparation and leveling",
      "Layout planning and dry fitting",
      "Thin-set mortar application",
      "Precision cutting and fitting",
      "Grouting and sealing",
      "Final polishing and inspection",
    ],
  },
  {
    title: "Granite Installation",
    steps: [
      "Structural support assessment",
      "Layout and template creation",
      "Precision cutting and edge profiling",
      "Epoxy or mortar installation",
      "Seam polishing and blending",
      "Sealing and final inspection",
    ],
  },
  {
    title: "Quartz Installation",
    steps: [
      "Cabinet and substrate preparation",
      "Template creation and verification",
      "Precision fabrication",
      "Adhesive application and placement",
      "Seam joining and polishing",
      "Final cleaning and inspection",
    ],
  },
];

export default function FlooringWallsPage() {
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
            <span className="text-brand-primary">Flooring</span> & Walls
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Premium materials for beautiful and durable floors and wall surfaces
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

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Properties:
                    </h4>
                    <ul className="text-sm text-foreground/80 space-y-1">
                      {material.properties.map((property, propIndex) => (
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
                      {material.applications.map((app, appIndex) => (
                        <span
                          key={appIndex}
                          className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Available Colors:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {material.colors.map((color, colorIndex) => (
                        <span
                          key={colorIndex}
                          className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Finishes:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {material.finishes.map((finish, finishIndex) => (
                        <span
                          key={finishIndex}
                          className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                        >
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Material Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Material Comparison
          </h2>

          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow-glass-lg rounded-lg">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Marble
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Granite
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-foreground/60 uppercase tracking-wider">
                        Quartz
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/5 divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Composition
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Natural stone
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Natural stone
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Engineered (93% quartz + 7% resin)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Porosity
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Porous (requires sealing)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Less porous than marble
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Non-porous
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Heat Resistance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        High
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Good (up to 300°F)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Scratch Resistance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Moderate (softer than granite)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Excellent
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Maintenance
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Regular sealing required
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Periodic sealing recommended
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Very low (no sealing needed)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-foreground">
                        Pattern Consistency
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Unique, natural variation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Unique, natural variation
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-foreground/80">
                        Consistent, uniform pattern
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Installation Guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {installationGuides.map((guide, index) => (
            <Card key={index} className="glass-panel border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {guide.title}
              </h3>
              <ol className="text-foreground/80 space-y-2 mb-6">
                {guide.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex">
                    <span className="text-brand-primary mr-2">
                      {stepIndex + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <Link href="/quote-wizard">
                <Button variant="outline" className="border-white/10 hover:bg-white/5 w-full">
                  Request Installation Quote
                </Button>
              </Link>
            </Card>
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
            Transform your space with premium flooring and wall materials
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our flooring specialists can help you choose the perfect materials for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Request Free Consultation
              </Button>
            </Link>
            <Link href="/promotional-gallery">
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