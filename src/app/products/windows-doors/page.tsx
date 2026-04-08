"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Window and door types - Custom fabricated, all types available
const windowDoorTypes = [
  {
    id: "french-slim",
    title: "French Slim Steel",
    description: "Custom fabricated French slim steel windows and doors. Up to local code - residential & commercial.",
    image: "/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Slim profiles for maximum glass area",
      "Up to local code compliance",
      "Residential & commercial",
    ],
    applications: [
      "Modern architecture",
      "Commercial buildings",
      "Residential homes",
      "High-end renovations",
    ],
    features: [
      "Thermal break technology",
      "Custom color finishes",
      "Double/triple glazing options",
    ],
  },
  {
    id: "aluminum",
    title: "Aluminum Systems",
    description: "Custom fabricated aluminum windows and doors with thermal break technology.",
    image: "/images/bento/modern-aluminum-window-systems-with-slim-profiles.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Thermal break technology",
      "Slim sightlines for maximum glass area",
      "Corrosion-resistant finishes",
    ],
    applications: [
      "Residential homes",
      "Commercial buildings",
      "High-rise apartments",
      "Modern architecture",
    ],
    features: [
      "Excellent energy efficiency",
      "Low maintenance",
      "Custom color finishes",
    ],
  },
  {
    id: "wrought-iron",
    title: "Wrought Iron",
    description: "Custom fabricated wrought iron doors and windows. Custom design to fit your needs.",
    image: "/images/bento/wrought-iron-wooden-door.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Custom design to fit your needs",
      "Enhanced security features",
      "Durable powder-coated finishes",
    ],
    applications: [
      "Residential front doors",
      "Commercial entrances",
      "Security doors",
      "Decorative elements",
    ],
    features: [
      "Weather-resistant construction",
      "Custom design options",
      "Residential & commercial",
    ],
  },
  {
    id: "mixed-materials",
    title: "Mixed Materials",
    description: "Custom fabricated windows and doors using mixed materials for unique designs.",
    image: "/images/bento/Modern-aluminum-window-systems.jpg",
    properties: [
      "Custom fabricated to your measurements",
      "Wood-clad aluminum",
      "Fiberglass with wood interiors",
      "Custom configurations",
    ],
    applications: [
      "Modern architecture",
      "Traditional homes",
      "Custom projects",
      "Energy-efficient designs",
    ],
    features: [
      "Best of both materials",
      "Custom wood species",
      "Low maintenance exteriors",
    ],
  },
];

// Performance characteristics
const performanceData = [
  {
    category: "Energy Efficiency",
    metrics: [
      "U-Factor: 0.20-0.30",
      "Solar Heat Gain Coefficient: 0.25-0.40",
      "Visible Transmittance: 0.40-0.70",
      "Air Infiltration: <0.3 cfm/ft²",
    ],
  },
  {
    category: "Security",
    metrics: [
      "Multi-point locking systems",
      "Impact-resistant glass options",
      "Reinforced frames",
      "Anti-lift devices",
    ],
  },
  {
    category: "Durability",
    metrics: [
      "Corrosion-resistant coatings",
      "Weatherstripping for air/water tightness",
      "UV-resistant finishes",
      "25+ year lifespan",
    ],
  },
  {
    category: "Sound Reduction",
    metrics: [
      "STC ratings: 28-45",
      "Laminated glass options",
      "Acoustic sealing",
      "Double/triple glazing",
    ],
  },
];

export default function WindowsDoorsPage() {
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
            <span className="text-brand-primary">Windows</span> & Doors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Energy-efficient window and door systems with quality materials and craftsmanship
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {windowDoorTypes.map((type, index) => (
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

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {type.features?.map((item, itemIndex) => (
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

        {/* Performance Characteristics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Performance Characteristics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceData.map((category, index) => (
              <Card key={index} className="glass-panel border border-white/10 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                <ul className="text-sm text-foreground/80 space-y-2">
                  {category.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Technology and Innovation */}
        <Card className="glass-panel border border-white/10 p-8 mb-16">
          <h2 className="text-2xl font-display font-medium text-white mb-6">
            Advanced Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Thermal Break Technology
              </h3>
              <p className="text-foreground/80 mb-4">
                Our aluminum windows feature advanced thermal break technology that significantly reduces heat transfer, improving energy efficiency by up to 40% compared to traditional aluminum windows.
              </p>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Reduces condensation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Improves indoor comfort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Meets stringent energy codes</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Smart Glass Options
              </h3>
              <p className="text-foreground/80 mb-4">
                Innovative smart glass technologies that adapt to your needs and environment, providing optimal comfort and energy savings.
              </p>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Electrochromic glass (tint control)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Thermochromic glass (heat-responsive)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>PDLC glass (privacy control)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Automation Systems
              </h3>
              <p className="text-foreground/80 mb-4">
                State-of-the-art motorization and smart home integration for ultimate convenience and control.
              </p>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Motorized windows and doors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Smart home system integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Voice control compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Remote access and scheduling</span>
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
            Transform your space with quality windows and doors - factory direct pricing
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our window and door specialists can help you choose the perfect solutions for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get Window & Door Consultation
              </Button>
            </Link>
            <Link href="/promotional-gallery">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Installation Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}