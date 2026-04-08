"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NarrativeNav } from "@/components/layout/narrative-nav";

// Fencing and gate types
const fencingTypes = [
  {
    id: "wrought-iron",
    title: "Wrought Iron Fencing",
    description: "Classic elegance with custom design possibilities",
    image: "/images/bento/wrought-iron-wooden-door.jpg",
    properties: [
      "Hand-forged custom designs",
      "Durable powder-coated finishes",
      "Timeless aesthetic appeal",
      "High security performance",
      "Long-lasting with proper care",
    ],
    applications: [
      "Residential perimeters",
      "Estate boundaries",
      "Historic properties",
      "Commercial properties",
    ],
    styles: ["Classic", "Art Deco", "Spanish", "Modern", "Custom"],
    securityFeatures: ["Anti-climb design", "Reinforced posts", "Tamper-proof fasteners"],
  },
  {
    id: "aluminum",
    title: "Aluminum Fencing",
    description: "Low-maintenance fencing with modern aesthetics",
    image: "/images/bento/Metal-Fencing-Gates.jpg",
    properties: [
      "Lightweight yet strong",
      "Corrosion-resistant",
      "Low maintenance requirements",
      "Custom color options",
      "Easy installation",
    ],
    applications: [
      "Residential properties",
      "Pool enclosures",
      "Commercial perimeters",
      "Pet containment",
    ],
    finishes: ["Powder Coated", "Anodized", "Textured", "Wood Grain"],
    advantages: ["No rust", "No painting required", "Long lifespan", "Environmentally friendly"],
  },
  {
    id: "steel",
    title: "Steel Security Fencing",
    description: "High-security fencing for maximum protection",
    image: "/images/bento/wrought-iron-wooden-door.jpg",
    properties: [
      "Exceptional strength and durability",
      "High impact resistance",
      "Deterrent to intruders",
      "Long-term reliability",
      "Custom height options",
    ],
    applications: [
      "Commercial properties",
      "Industrial facilities",
      "Government buildings",
      "High-security areas",
    ],
    securityLevels: ["Residential", "Commercial", "Industrial", "Military Grade"],
    features: ["Anti-cut technology", "Anti-climb design", "Reinforced framework"],
  },
  {
    id: "custom-gates",
    title: "Custom Gates",
    description: "Bespoke gate solutions for security and aesthetic enhancement",
    image: "/images/bento/Metal-Fencing-Gates.jpg",
    properties: [
      "Custom design and fabrication",
      "Automation-ready",
      "Premium materials and finishes",
      "Integrated security features",
      "Weather-resistant construction",
    ],
    applications: [
      "Driveway entrances",
      "Pedestrian gates",
      "Estate entrances",
      "Commercial access points",
    ],
    types: ["Swing Gates", "Sliding Gates", "Bi-Fold Gates", "Vertical Lift Gates"],
    automation: ["Remote control", "Keypad entry", "Biometric access", "Smartphone control"],
  },
];

// Design and security features
const designFeatures = [
  {
    title: "Security Features",
    items: [
      "Anti-climb designs with smooth surfaces",
      "Reinforced posts and framework",
      "Tamper-proof fasteners and hardware",
      "Integrated alarm systems",
      "Surveillance camera mounting options",
    ],
  },
  {
    title: "Aesthetic Options",
    items: [
      "Custom scrollwork and decorative elements",
      "Laser-cut patterns and designs",
      "Mixed material combinations",
      "Architectural matching styles",
      "Color customization",
    ],
  },
  {
    title: "Functional Features",
    items: [
      "Automated gate operators",
      "Solar-powered options",
      "Emergency release mechanisms",
      "Pedestrian access gates",
      "Vehicle detection systems",
    ],
  },
  {
    title: "Durability Features",
    items: [
      "Weather-resistant coatings",
      "Galvanized steel components",
      "Stainless steel hardware",
      "Powder-coated finishes",
      "Rust-proof materials",
    ],
  },
];

export default function MetalFencingGatesPage() {
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
            <span className="text-brand-primary">Metal Fencing</span> & Gates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto font-body leading-[1.7]"
          >
            Custom metal fencing and gate solutions for security, privacy, and aesthetic enhancement
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

        {/* Fencing Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {fencingTypes.map((type, index) => (
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
                      {type.styles ? "Style Options:" : type.finishes ? "Finish Options:" : type.securityLevels ? "Security Levels:" : type.types ? "Gate Types:" : "Features:"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(type.styles || type.finishes || type.securityLevels || type.types || (type as any).features)?.map((item: string, itemIndex: number) => (
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

        {/* Design and Security Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 text-center">
            Design & Security Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designFeatures.map((feature, index) => (
              <Card key={index} className="glass-panel border border-white/10 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <ul className="text-sm text-foreground/80 space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Installation and Maintenance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-panel border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Professional Installation
            </h3>
            <p className="text-foreground/80 mb-4">
              Our certified installation teams ensure proper installation with:
            </p>
            <ul className="text-foreground/80 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Precise measurements and layout</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Proper post setting and concrete work</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Secure welding and fastening</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Automation system integration</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Safety testing and compliance</span>
              </li>
            </ul>
          </Card>

          <Card className="glass-panel border border-white/10 p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Maintenance Guide
            </h3>
            <p className="text-foreground/80 mb-4">
              Keep your fencing and gates looking their best:
            </p>
            <ul className="text-foreground/80 space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Annual inspection of hardware</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Clean with mild soap and water</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Lubricate moving parts annually</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Touch-up paint as needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Test automation systems monthly</span>
              </li>
            </ul>
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
            Enhance your property with custom metal fencing and gates
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our fencing specialists can help you design the perfect solution for your security and aesthetic needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote-wizard">
              <Button className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 shadow-glass-glow px-8 py-6 text-lg">
                Get Fencing Consultation
              </Button>
            </Link>
            <Link href="/promotional-gallery">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 hover:text-brand-primary px-8 py-6 text-lg">
                View Fencing Projects
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}