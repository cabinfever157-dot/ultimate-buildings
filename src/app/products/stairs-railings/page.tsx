"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Stairs and Railings data
const stairsRailingsData = [
  {
    id: "wrought-iron",
    title: "Wrought Iron",
    description: "Classic elegance with custom design possibilities",
    image: "/images/bento/wrought-iron-wooden-door.jpg",
    properties: [
      "Custom fabrication",
      "Durable powder-coated finishes",
      "Intricate design capabilities",
      "Long-lasting with proper care",
    ],
    applications: [
      "Grand staircases",
      "Balcony railings",
      "Security gates",
      "Decorative accents",
    ],
    styles: ["Classic", "Art Deco", "Spanish", "Modern", "Custom"],
  },
  {
    id: "stainless-steel",
    title: "Stainless Steel",
    description: "Modern aesthetic with exceptional durability",
    image: "/images/bento/Modern-aluminum-window-systems.jpg",
    properties: [
      "Corrosion resistant",
      "Sleek contemporary look",
      "Low maintenance requirements",
      "High strength-to-weight ratio",
    ],
    applications: [
      "Contemporary staircases",
      "Glass railing systems",
      "Commercial buildings",
      "Industrial applications",
    ],
    finishes: ["Brushed", "Polished", "Satin", "PVD Colored"],
  },
  {
    id: "glass",
    title: "Glass Railings",
    description: "Sleek and modern with unobstructed views",
    image: "/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg",
    properties: [
      "Tempered safety glass",
      "Unobstructed views",
      "Modern minimalist aesthetic",
      "Easy to clean and maintain",
    ],
    applications: [
      "Modern homes",
      "Commercial spaces",
      "Balconies and terraces",
      "Interior staircases",
    ],
    types: ["Frameless", "Semi-frameless", "Channel", "Post Systems"],
  },
  {
    id: "wood",
    title: "Premium Wood",
    description: "Warmth and natural beauty for traditional designs",
    image: "/images/bento/High-end-kitchen-cabinetry.jpg",
    properties: [
      "Natural wood grain beauty",
      "Custom stain and finish options",
      "Warm and inviting aesthetic",
      "Can be combined with metal elements",
    ],
    applications: [
      "Traditional staircases",
      "Residential railings",
      "Handrails and balusters",
      "Custom woodworking",
    ],
    woodTypes: ["Oak", "Mahogany", "Walnut", "Maple", "Cherry"],
  },
];

// Design styles
const designStyles = [
  {
    name: "Classic",
    description: "Timeless designs with traditional elements",
    characteristics: ["Ornate details", "Symmetrical patterns", "Rich finishes"],
  },
  {
    name: "Modern",
    description: "Clean lines and minimalist aesthetics",
    characteristics: ["Sleek profiles", "Mixed materials", "Geometric shapes"],
  },
  {
    name: "Industrial",
    description: "Raw and utilitarian design approach",
    characteristics: ["Exposed hardware", "Mixed metals", "Brutalist elements"],
  },
  {
    name: "Art Deco",
    description: "Glamorous 1920s-inspired designs",
    characteristics: ["Geometric patterns", "Bold lines", "Luxurious materials"],
  },
];

export default function StairsRailingsPage() {
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
            <span className="text-brand-primary">Stairs</span> & Railings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Custom-designed staircases and railing systems that combine safety, functionality, and elegant design
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

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stairsRailingsData.map((material, index) => (
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
                      {material.styles ? "Styles Available:" : "Finishes Available:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(material.styles || material.finishes || material.types || material.woodTypes)?.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1 bg-white/10 text-foreground text-xs rounded-full border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Design Styles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Design Styles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designStyles.map((style, index) => (
              <Card key={index} className="glass-panel border border-white/10 p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {style.name}
                </h3>
                <p className="text-foreground/80 mb-4">
                  {style.description}
                </p>
                <ul className="text-sm text-foreground/80 space-y-1">
                  {style.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-center justify-center">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Safety and Code Compliance */}
        <Card className="glass-panel border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-display font-medium text-white mb-6">
            Safety & Code Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Building Code Standards
              </h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>IBC (International Building Code) compliant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>ADA (Americans with Disabilities Act) accessible designs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Local building code adherence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Load-bearing capacity certified</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Safety Features
              </h3>
              <ul className="text-foreground/80 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Proper baluster spacing (4" rule)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Slip-resistant treads and nosings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Secure anchoring systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Tempered glass for safety</span>
                </li>
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
            Create your custom staircase and railing system
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our design experts will work with you to create a stunning and safe staircase solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Schedule Design Consultation
              </Button>
            </Link>
            <Link href="/promotional-gallery">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Staircase Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}